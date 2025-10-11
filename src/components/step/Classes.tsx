import { StepsContext } from '@/structure/Context'
import { classesData } from '@/data/classes'
import type { Class } from '@/types'
import { useEffect, useMemo, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { isClassHasFeatureAtLevel, isCompAvailable } from '@/utils'

export default function Classes() {
  const [ edition, classes, setClasses, setSubclasses ] = useContextSelector(StepsContext, s => [s.edition[0], ...s.classes, s.subclasses[1] ])
  const [ newClass, setNewClass ] = useState<boolean>(false)

  const classesDataFiltered = useMemo(() => classesData.filter(c => isCompAvailable(c, edition)), [edition])

  useEffect(() => {
    if (classes.value.classes.some(c => isClassHasFeatureAtLevel(classesDataFiltered.find(v => v.id === c.id)!, c.level, 'subclass'))) {
      setSubclasses(s => {
        s.status = 'not opened'
      })
    } else {
      setSubclasses(s => {
        s.status = undefined
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classes])

  function ClassChoice({ cb }: { cb: (id: string) => void }) {
    return <>
      <div>→ 选择职业：</div>
      <ul>
        {
          classesDataFiltered.map(v => (
            <li key={v.id} onClick={() => cb(v.id)}>
              {v.name}&nbsp;
            </li>
          ))
        }
      </ul>
    </>
  }

  function ClassComp({ id }: Class) {
    const [ choiceClass, setChoiceClass ] = useState<boolean>(false)
    const clazz = classesDataFiltered.find(c => c.id === id)
    let levelLocal = classes.value.classes.find(c => c.id === id)?.level || 'N/A'
    
    if (!clazz) return <div style={{ color: 'red' }}>未知的职业id</div>

    return <div>
      <div>
         { levelLocal } 级 { clazz.name }
      </div>
      <div>
        { classes.value.classes.length && [...Array(20).keys()].map(v => <span key={v + 1} onClick={() => 
          setClasses(s => {
            s.value.classes.find(c => c.id === id)!.level = v + 1
            levelLocal = v + 1
          })
        }>{v + 1}&nbsp;</span>)}
      </div>
      { choiceClass ? <ClassChoice cb={(nid) =>
        setClasses(s => {
          const cls = s.value.classes.find(c => c.id === id)
          if (cls) cls.id = nid
          setChoiceClass(false)
        })
      } /> : classesDataFiltered.length > classes.value.classes.length && <div onClick={() => setChoiceClass(true)}>↻ 更换职业</div> }
      <div onClick={() => setClasses(s => {
        s.value.classes = s.value.classes.filter(c => c.id !== id)
      })}>X 删除职业</div>
    </div>
  }


  return <>
    <div>
      { (() => {
        const level = classes.value.classes.reduce((acc, v) => acc + v.level, 0)
        if (level === 0) return <>
          <span>总等级：N/A</span>
          <span>熟练加值：N/A</span>
        </>
        const bonus = Math.min(Math.floor((level - 1) / 4) + 2, 6)
        return <>
          <span>总等级：{level}</span>
          <span>熟练加值：{bonus}</span>
        </>
      })() }
    </div>
    <div className="classes-list">
      { classes.value.classes.map(v => <ClassComp key={v.id} {...v} />) }
      { (!classes.value.classes.length || newClass) && <ClassChoice cb={id => {
        setClasses(state => {
          state.value.classes.push({ id, level: 1 })
        })
        setNewClass(false)
      }} /> }
      { (classesDataFiltered.length > classes.value.classes.length && classes.value.classes.length !== 0) && <div onClick={() => setNewClass(true)}>+ 添加职业</div> }
    </div>
  </>
}