import { backgroundsData } from '@/data/background'
import { StepsContext } from "@/structure/Context";
import type { Ability, NTuple6 } from '@/types'
import { countItem, rollDice } from '@/utils'
import { useState } from 'react'
import { useContextSelector } from "use-context-selector";

const standardArray: NTuple6 = [15, 14, 13, 12, 10, 8]

const abilityData: { id: Ability, name: string }[] = [
  { id: 'str', name: '力量' },
  { id: 'dex', name: '敏捷' },
  { id: 'con', name: '体质' },
  { id: 'int', name: '智力' },
  { id: 'wis', name: '感知' },
  { id: 'cha', name: '魅力' },
]

const pointCosts: Record<string, number> = {
  '8': 0,
  '9': 1,
  '10': 2,
  '11': 3,
  '12': 4,
  '13': 5,
  '14': 7,
  '15': 9,
}

const rPointCosts: Record<string, number> = {
  '0': 8,
  '1': 9,
  '2': 10,
  '3': 11,
  '4': 12,
  '5': 13,
  '7': 14,
  '9': 15,
}

function ArrayChoice({ index, array }: { index: number, array: NTuple6 }) {
  const [ ability, setAbility ] = useContextSelector(StepsContext, s => [...s.ability])
  const [ alertVisible, setAlertVisible ] = useState(false)

  const option = Array.from(new Set(array))

  return <>
    <select value={ability.value.base?.[index] ?? ''} onChange={e => {
      const value = Number(e.target.value)
      
      const arrCounts = countItem(array)
      const attrCount = (ability.value.base?.filter(v => v === value).length ?? 0) + 1
      
      if (arrCounts.get(value)! < attrCount) {
        setAlertVisible(true)
        setTimeout(() => setAlertVisible(false), 2000)
        return
      }

      setAbility(s => {
        if (!s.value.base) s.value.base = Array(6).fill(undefined) as NTuple6

        s.value.base[index] = value
      })}
    }>
      <option value="" hidden>请选择</option>
      {option.map((v, i) => <option key={i} value={v}>{v}</option>)}
    </select>
    {alertVisible && <span style={{ color: 'red' }}>选择的值超过限制！</span>}
  </>
}

function PointBuy({ index }: { index: number }) {
  const [ ability, setAbility ] = useContextSelector(StepsContext, s => [...s.ability])
  const current = ability.value.base?.[index] ?? 8
  const pointRemain = 27 - (ability.value.base?.reduce((acc, v) => (acc ?? 0) + (v ? pointCosts[v] : 0), 0) ?? 0)

  console.log(pointRemain, rPointCosts[pointRemain])
  return <>
    <input type="number" min={8} max={Math.min(15, rPointCosts[pointRemain + pointCosts[current]])} value={current} onChange={e => setAbility(s => {
      if (!s.value.base) s.value.base = Array(6).fill(undefined) as NTuple6
      s.value.base[index] = e.target.value ? Math.min(15, Math.max(8, Number(e.target.value))) : undefined
    })} />
  </>
}

function PointRolling() {
  const [ ability, setAbility ] = useContextSelector(StepsContext, s => [...s.ability])
  const [ rollCount, setRollCount ] = useState(5)

  if (ability.value.rolls?.results) return <>
    <div>
      掷骰结果：
      <div>{ability.value.rolls?.results.map((roll, i) => 
        <div key={i} className={ability.value.rolls?.selected === i ? 'active' : ''} onClick={() => setAbility(s => {
          s.value.rolls!.selected = i
        })}>
          {roll.reduce((a, b) => a + b, 0)} = [{roll.join(", ")}]
        </div>)}
      </div>
    </div>
    <div>
      {abilityData.map((a, i) => <div key={a.id}>
        <label>{a.name}：</label>
        <ArrayChoice index={i} array={ability.value.rolls!.results[ability.value.rolls!.selected]} />
      </div>)}
    </div>
  </>
  
  return <div>
    掷骰次数：
    <input type="number" min={1} value={rollCount} onChange={e => setRollCount(Number(e.target.value))} />
    <button onClick={() => {
      const results: NTuple6[] = []

      for (let i = 0; i < rollCount; i++) {
        results.push([0, 0, 0, 0, 0, 0])
        for (let j = 0; j < 6; j++) {
          const roll = rollDice({ side: 6, count: 4, modifier: { policy: 'dl', value: 1 } })
          results[i][j] = roll
        }
        results[i] = results[i].sort((a, b) => b - a)
      }
      results.sort((a, b) => (b.reduce((x, y) => x + y, 0)) - (a.reduce((x, y) => x + y, 0)))
      setAbility(s => {
        s.value.rolls = {
          results,
          selected: 0,
        }
      })
    }}>掷骰！</button>
  </div>
}

function BackgroundBonus() {
  const [bgStep, ability, setAbility] = useContextSelector(StepsContext, s => [s.background[0], ...s.ability])
  const bg = backgroundsData.find(b => b.id === bgStep.value.background)
  const bgAbility = ability.value.background

  const unboundCheckBox = <label>
    <input type="checkbox" checked={bgAbility?.unbound || false} onChange={e => setAbility(s => {
      if (!s.value.background) s.value.background = { unbound: false, value: Array(6).fill(0) as NTuple6 }
      s.value.background.unbound = e.target.checked
      if (!e.target.checked) {
        s.value.background.value = Array(6).fill(0) as NTuple6
      }
    })} />
    允许自由分配加值
  </label>

  function bgInput(i: number) {
    const remain = 3 - (bgAbility?.value.reduce((a, b) => a + b, 0) ?? 0) + (bgAbility?.value[i] ?? 0)
    
    return <input type="number" min={0} max={Math.min(2, remain)} value={bgAbility?.value[i] ?? 0} onChange={ e => setAbility(s => {
      if (!s.value.background) s.value.background = { unbound: false, value: Array(6).fill(0) as NTuple6 }
      s.value.background.value[i] = Math.min(2, Math.max(0, Number(e.target.value)))
    })} />
  }

  if (bgAbility?.unbound) {
    return <div>
      自由分配加值（最多3点）：
      <div>{unboundCheckBox}</div>
      { abilityData.map((v, i) => (
        <div key={i}>
          {v.name}
          {bgInput(i)}
        </div>
      )) }
    </div>
  }

  if (!bg) return <><div>未选择背景</div>{unboundCheckBox}</>

  
  return <div>
    来自背景 {bg.name} 的加值：
    { 
      // maybe undefined but here is PHB2024 only
      bg.ability!.map((v, i) => {
        if (!bgAbility?.unbound && v === 0) return
        
        return <div key={i}>
          {abilityData[i].name}
          { bgInput(i) }
        </div>
      })
    }
    {unboundCheckBox}
  </div>
}

export default function Ability() {
  const [ edtStep, ability, setAbility ] = useContextSelector(StepsContext, s => [ s.edition, ...s.ability])
  const edition = edtStep[0].value.edition

  function renderwithType(type: string | undefined) {
    switch (type) {
      case "standard":
        return <>
          <h3>标准序列</h3>
          <div className='description'>一个固定的序列（{standardArray.join(", ")}）并且将序列中的值不重复地填入角色属性中。本方法是27购点法的平均分配版，如果你需要创建一个熟悉平均，而且dm要求只能使用27购点法，那么这个选项是最合适的。</div>
          <div>
            {abilityData.map((a, i) => <div key={a.id}>
              <label>{a.name}：</label>
              <ArrayChoice index={i} array={standardArray} />
            </div>)}
          </div>
        </>
      case "point buy": {
        const pointsUsed = ability.value.base?.reduce((acc, v) => (acc ?? 0) + (v ? pointCosts[v] : 0), 0) ?? 0
        return <>
          <h3>27购点法</h3>
          <div className='description'>每个属性初始值为8，拥有27点购买点数，可以将属性值提升到15（15点），每提升1点需要消耗的购买点数如下表所示：</div>
          <table>
            <thead>
              <tr>
                <th>属性值</th>
                <th>消耗点数</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(pointCosts).map(v => <tr key={v}>
                <td>{v}</td>
                <td>{pointCosts[v]}</td>
              </tr>)}
            </tbody>
          </table>
          <div>
            {abilityData.map((a, i) => <div key={a.id}>
              <label>{a.name}：</label>
              <PointBuy index={i} />
            </div>)}
          </div>
          <div>
            点数：<span style={{ color: pointsUsed > 27 ? 'red' : 'inherit' }}>{pointsUsed}</span> / 27
          </div>
        </>
      }
      case "rolling point": {
        return <>
          <h3>掷骰点数法</h3>
          <div className='description'>掷四个六面骰，去掉最低的一个骰子，剩下的三个骰子点数之和即为该属性的值。重复此过程六次，得到六个属性值，并将其不重复地填入角色属性中。</div>
          <PointRolling />
        </>
      }
      case "custom": {
        return <>
          <h3>自定义</h3>
          <div className='description'>直接输入各属性值。</div>
          <div>
            {abilityData.map((a, i) => <div key={a.id}>
              <label>{a.name}：</label>
              <input type="number" min={1} max={30} value={ability.value.base?.[i] ?? ''} onChange={e => setAbility(s => {
                if (!s.value.base) s.value.base = Array(6).fill(undefined) as NTuple6
                s.value.base[i] = e.target.value ? Math.min(30, Math.max(1, Number(e.target.value))) : undefined
              })} />
            </div>)}
          </div>
        </>
      }
        
      default:
        return
    }
  }

  return <>
    <select value={ability.value.type ?? ''} onChange={e => setAbility(s => {
      s.value.base = undefined
      s.value.type = e.target.value as any
      if (e.target.value == 'custom') {
        setAbility(s => {
          s.value.base = [10, 10, 10, 10, 10, 10]
        })
      }
    })}>
      <option value="" hidden>请选择配点方式</option>
      <option value="point buy">27购点法</option>
      <option value="standard">标准序列</option>
      <option value="rolling point">掷骰点数法</option>
      <option value="custom">自定义</option>
    </select>
    { renderwithType(ability.value.type) }
    { edition === '5e2024' && <BackgroundBonus /> }
  </>
}
