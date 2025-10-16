import { StepsContext } from '@/structure/Context'
import { useContextSelector } from 'use-context-selector'
import { skillsData } from '@/data/skills'
import { abilityData, flatAbilities, flatArray, flatSet } from '@/utils'
import type { From, NTuple6, Skill } from '@/types'
import { classesData } from '@/data/classes'
import { featsMap } from '@/data/feats'
import { backgroundsData } from '@/data/background'

type AvailableProficiency = {
  count: number,
  limit?: Skill[]
  from: From
  class?: string
  feat?: string
  background?: string
}

const proExpFeat = ['keen mind', 'observant']

class AvailableProficiencies extends Array<AvailableProficiency> {
  bestSolution(current: Set<Skill>): Map<Skill, AvailableProficiency> | undefined {
    const source: Map<Skill, AvailableProficiency> = new Map()
    const limited = this.filter(v => v.limit)
    const unlimited = this.filter(v => !v.limit).map(v => ({...v}))

    const freq: Map<Skill, number> = new Map()
    limited.forEach(v => {
      v.limit!.forEach(s => {
        freq.set(s, (freq.get(s) || 0) + 1)
      })
    })
  
    const reduce = skillsData.map(s => [s.id, (freq.get(s.id) || 0) + 1] as [Skill, number]).sort((a, b) => a[1] - b[1]).filter(v => current.has(v[0]))

    const single = reduce.filter(v => v[1] === 1)

    if (single.length > unlimited.reduce((a, b) => a + b.count, 0)) {
      return
    }

    reduce.splice(0, Math.min(single.length, unlimited.reduce((a, b) => a + b.count, 0)))

    for (const s of unlimited) {
      if (single.length === 0) {
        break
      }
      const count = s.count
      s.count = Math.max(0, s.count - single.length)
      const drop = single.splice(0, count)
      
      for (const [d] of drop) {
        source.set(d, s)
      }
    }

    const sourceOverlap = limited.map(v => {
      const overlap = v.limit!.filter(s => reduce.find(r => r[0] === s)).length
      return {
        source: {...v},
        overlap,
      }
    }).sort((a, b) => {
      if (a.source.from === 'background' && b.source.from !== 'background' && b.source.limit) return -1
      if (a.source.from !== 'background' && b.source.from === 'background' && b.source.limit) return 1
      if (proExpFeat.includes(a.source.feat!) && !proExpFeat.includes(b.source.feat!)) return 1
      if (!proExpFeat.includes(a.source.feat!) && proExpFeat.includes(b.source.feat!)) return -1

      return a.overlap - b.overlap
    })

    const sourceSortByMinimumOverlap = sourceOverlap.map(v => v.source)

    { 
      const index= sourceSortByMinimumOverlap.findIndex(v => proExpFeat.includes(v.feat!))
      sourceSortByMinimumOverlap.splice(index < 0 ? sourceSortByMinimumOverlap.length : index, 0, ...unlimited)
    }

    for (const s of Array.from(reduce)) {
      for (const v of sourceSortByMinimumOverlap) {
        if (v.limit?.includes(s[0]) && v.count > 0) {
          reduce.splice(reduce.indexOf(s), 1)
          v.count -= 1
          if (!source.has(s[0])) {
            source.set(s[0], v)
          }
          break
        } else if (!v.limit && v.count > 0) {
          reduce.splice(reduce.indexOf(s), 1)
          v.count -= 1
          if (!source.has(s[0])) {
            source.set(s[0], v)
          }
          break
        }
      }
    }

    if (reduce.length <= 0) {
      return source
    }
  }

  bestSource(id: Skill, current: Set<Skill>): AvailableProficiency | undefined {
    current = new Set(current)
    current.add(id)
    const solution = this.bestSolution(current)
    return solution?.get(id)
  }

  bestSourceName(id: Skill, current: Set<Skill>): string {
    const bestSource = this.bestSource(id, current)
    if (bestSource) {
      if (bestSource.class) {
        return `来自职业 ${classesData.find(c => c.id === bestSource.class)?.name || bestSource.class}`
      }
      if (bestSource.feat) {
        return `来自专长 ${featsMap.get(bestSource.feat)?.name || bestSource.feat}`
      }
      if (bestSource.from === 'background') {
        return `来自背景 ${backgroundsData.find(b => b.id === bestSource.background)?.name || '解绑'}`
      }
      return '来自未知来源'
    }
    return '无可用来源'
  }

  available(id: Skill, current: Set<Skill>): boolean {
    const bestSource = this.bestSource(id, current)
    return !!bestSource
  }

  sourceUsedBy(source: Pick<AvailableProficiency, 'from' | 'class' | 'feat' | 'background'>, current: Set<Skill>): Set<Skill> {
    const bestSource = this.bestSolution(current)
    const result = new Set<Skill>()
    for (const [sId, s] of bestSource || []) {
      if (s.from === source.from && s.class === source.class && s.feat === source.feat && s.background === source.background) {
        result.add(sId)
      }
    }
    return result
  }
}


export default function Skills() {
  const [edition, classes, featStep, abilityStep, bgStep, skills, setSkills] = useContextSelector(StepsContext, s => [
    s.edition[0],
    s.classes[0],
    s.feat[0],
    s.ability[0],
    s.background[0],
    ...s.skills,
  ])

  console.log(skills.value.skillProficiencies)

  const availableProficiencies = new AvailableProficiencies()
  const availableExpertises = new AvailableProficiencies()
  const ability = flatAbilities(abilityStep.value.value)
  const bonus = Math.min(Math.floor((classes.value.classes.reduce((a, b) => a + b.level, 0) - 1) / 4) + 2, 6)
  const modifier = ability.map(v => Math.floor((v - 10) / 2)) as NTuple6
  const feats = flatArray(featStep.value.feats)

  if (skills.value.skillProficiencies.get('background')?.unbound) {
    availableProficiencies.push({
      count: 2,
      from: 'background',
    })
  } else if (bgStep.value.background) {
    availableProficiencies.push({
      count: 2,
      from: 'background',
      background: bgStep.value.background,
      limit: backgroundsData.find(b => b.id === bgStep.value.background)?.skillsProficiency,
    })
  }

  classes.value.classes.forEach((cls, index) => {
    let pCount = index === 0 ? 2 : 0
    let eCount = 0
    
    switch (cls.id) {
      case 'barbarian':
        if (cls.level >= 3) {
          pCount += 1
        }
        break
      case 'bard': 
        pCount += 1
        if (edition.value.edition === '5e2024') {
          if (cls.level >= 2) {
            eCount += 1
          }
          if (cls.level >= 9) {
            eCount += 1
          }
        } else {
          if (cls.level >= 3) {
            eCount += 1
          }
          if (cls.level >= 10) {
            eCount += 1
          }
        }
        break
      case 'rogue':
        eCount += 2
        if (cls.level >= 6) {
          eCount += 2
        }
        break
      case 'ranger':
        if (edition.value.edition === '5e2024') {
          if (cls.level >= 2) {
            eCount += 1
          }
          if (cls.level >= 9) {
            eCount += 2
          }
        }
        break
      case 'wizard':
        if (cls.level >= 2) {
          const data: AvailableProficiency = {
            count: 1,
            from: 'class',
            class: 'wizard',
            limit: ['arcana', 'history', 'nature', 'religion'],
          }
          availableProficiencies.push(data)
          availableExpertises.push(data)
        }
    }

    if (pCount > 0) {
      availableProficiencies.push({
        count: pCount,
        from: 'class',
        class: cls.id,
        limit: classesData.find(c => c.id === cls.id)?.skills.options,
      })
    }
    if (eCount > 0) {
      availableExpertises.push({
        count: eCount,
        from: 'class',
        class: cls.id,
      })
    }
  })


  feats.forEach((feat) => {
    switch (feat.id) {
      case 'skilled':
        availableProficiencies.push({
          count: 3,
          from: 'feat',
          feat: 'skilled',
        })
        break
      case 'keen mind': {
        availableProficiencies.push({
          count: 1,
          from: 'feat',
          feat: 'keen mind',
          limit: ['arcana', 'history', 'investigation', 'nature', 'religion'],
        })
        break
      }
      case 'observant': {
        availableProficiencies.push({
          count: 1,
          from: 'feat',
          feat: 'observant',
          limit: ['insight', 'investigation', 'perception'],
        })
        break
      }
      case 'skill expert': {
        const data: AvailableProficiency = {
          count: 1,
          from: 'feat',
          feat: 'skill expert',
        }
        availableProficiencies.push(data)
        availableExpertises.push(data)
        break
      }
      case 'boon of skill': {
        availableProficiencies.push({
          count: 1,
          from: 'feat',
          feat: 'boon of skill',
        })
        break
      }
    }
  })

  feats.forEach((feat) => {
    switch (feat.id) {
      case 'keen mind':
        availableExpertises.push({
          count: 1,
          from: 'feat',
          feat: 'keen mind',
          limit: ['arcana', 'history', 'investigation', 'nature', 'religion'],
        })
        break
      case 'observant':
        availableExpertises.push({
          count: 1,
          from: 'feat',
          feat: 'observant',
          limit: ['insight', 'investigation', 'perception'],
        })
        break
    }
  })

  proExpFeat.forEach(v => {
    // Temporary solution, didn't work for multiple same source
    if (availableExpertises.sourceUsedBy({ from: 'feat', feat: v }, flatSet(skills.value.skillExpertises)).size) {
      availableProficiencies.splice(availableProficiencies.findIndex(p => p.from === 'feat' && p.feat === v), 1)
    } else if (availableProficiencies.sourceUsedBy({ from: 'feat', feat: v }, flatSet(skills.value.skillProficiencies)).size) {
      availableExpertises.splice(availableExpertises.findIndex(p => p.from === 'feat' && p.feat === v), 1)
    }
  })

  return (
    <div>
      <h2>技能熟练</h2>
      <label>
        <input 
          type="checkbox"
          checked={skills.value.skillProficiencies.get('background')?.unbound || false}
          onChange={e => {
            setSkills(s => {
              const draft = s.value.skillProficiencies.get('background')

              if (e.target.checked) {
                if (draft) {
                  draft.unbound = true
                } else {
                  s.value.skillProficiencies.set('background', {
                    from: 'background',
                    unbound: true,
                    value: new Set(),
                  })
                }
              } else {
                const bgData = backgroundsData.find(b => b.id === bgStep.value.background)
                if (draft) {
                  draft.unbound = false
                  if (bgData) {
                    draft.value = new Set(bgData.skillsProficiency)
                  } else {
                    s.value.skillProficiencies.delete('background')
                  }
                } else {
                  if (bgData) {
                    s.value.skillProficiencies.set('background', {
                      from: 'background',
                      unbound: false,
                      value: new Set(bgData.skillsProficiency || []),
                    })
                  } else {
                    s.value.skillProficiencies.delete('background')
                  }
                }
              }
            })
          }}
        />允许自由分配来自背景的技能熟练项
      </label>
      <table>
        <thead>
          <tr>
            <th>技能</th>
            <th>属性</th>
            <th>熟练</th>
            <th>专精</th>
            <th>加值</th>
          </tr>
        </thead>
        <tbody>
          {skillsData.map((skill) => {
            const pro = flatSet(skills.value.skillProficiencies)
            const exp = flatSet(skills.value.skillExpertises)
            
            return <tr key={skill.id}>
              <td>{skill.name} {skill.id}</td>
              <td>{skill.attribute}</td>
              <td>
                <input 
                  type="checkbox"
                  checked={pro.has(skill.id)}
                  disabled={!(pro.has(skill.id) || availableProficiencies.available(skill.id, pro)) || (skills.value.skillProficiencies.get('background')?.value.has(skill.id) && !skills.value.skillProficiencies.get('background')?.unbound)}
                  title={availableProficiencies.bestSourceName(skill.id, pro)}
                  onChange={e => {
                    setSkills(s => {
                      if (e.target.checked) {
                        const current = new Set(pro)
                        current.add(skill.id)
                        const bestSolution = availableProficiencies.bestSolution(current)
                        if (!bestSolution) {
                          return
                        }

                        for (const v of s.value.skillProficiencies.values()) {
                          v.value.clear()
                        }
                        for (const [sId, source] of bestSolution) {
                          const draft = s.value.skillProficiencies.get(source.from)
                          if (draft) {
                            draft.value.add(sId)
                          } else {
                            s.value.skillProficiencies.set(source.from, {
                              from: source.from,
                              value: new Set([sId]),
                            })
                          }
                        }
                      } else {
                        s.value.skillProficiencies.forEach((v, k) => {
                          if (v.value.has(skill.id)) {
                            v.value.delete(skill.id)
                            if (v.value.size === 0 && !v.unbound) {
                              s.value.skillProficiencies.delete(k)
                            }
                          }
                        })
                      }
                    })
                    if (!e.target.checked) {
                      setSkills(s => {
                        s.value.skillExpertises.forEach((v, k) => {
                          if (v.value.has(skill.id)) {
                            v.value.delete(skill.id)
                            if (v.value.size === 0 && !v.unbound) {
                              s.value.skillExpertises.delete(k)
                            }
                          }
                        })
                      })
                    }
                  }} /> {availableProficiencies.bestSourceName(skill.id, pro)}
              </td>
              <td>
                {
                  pro.has(skill.id) ? 
                    <input 
                      type="checkbox"
                      checked={exp.has(skill.id)}
                      disabled={!(exp.has(skill.id) || availableExpertises.available(skill.id, exp)) || (skills.value.skillExpertises.get('background')?.value.has(skill.id) && !skills.value.skillExpertises.get('background')?.unbound)}
                      title={availableExpertises.bestSourceName(skill.id, exp)}
                      onChange={e => {
                        setSkills(s => {
                          if (e.target.checked) {
                            const current = new Set(exp)
                            current.add(skill.id)
                            const bestSolution = availableExpertises.bestSolution(current)
                            if (!bestSolution) {
                              return
                            }
                            
                            for (const v of s.value.skillExpertises.values()) {
                              v.value.clear()
                            }
                            for (const [sId, source] of bestSolution) {
                              const draft = s.value.skillExpertises.get(source.from)
                              if (draft) {
                                draft.value.add(sId)
                              } else {
                                s.value.skillExpertises.set(source.from, {
                                  from: source.from,
                                  value: new Set([sId]),
                                })
                              }
                            }
                          } else {
                            s.value.skillExpertises.forEach((v, k) => {
                              if (v.value.has(skill.id)) {
                                v.value.delete(skill.id)
                                if (v.value.size === 0 && !v.unbound) {
                                  s.value.skillExpertises.delete(k)
                                }
                              }
                            })
                          }
                        })
                      }} 
                    /> :
                    <input type="checkbox" disabled title="需要先选择熟练" />
                } {availableExpertises.bestSourceName(skill.id, exp)}
              </td>
              <td>{
                modifier[abilityData.findIndex(a => a.id === skill.attribute)] +
                (pro.has(skill.id) ? bonus : 0) +
                (exp.has(skill.id) ? bonus : 0)
              }</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}