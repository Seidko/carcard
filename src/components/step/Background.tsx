import { backgroundsData } from '@/data/background'
import { StepsContext } from '@/structure/Context'
import type { NTuple6 } from '@/types'
import { isCompAvailable } from '@/utils'
import { useMemo } from 'react'
import Markdown from 'react-markdown'
import { useContextSelector } from 'use-context-selector'

export default function Background() {
  const [edt, bg, setBgStep, setAbility] = useContextSelector(StepsContext, v => [
    v.edition[0],
    ...v.background,
    v.ability[1],
  ])

  const bgFiltered = useMemo(() => backgroundsData.filter(b => isCompAvailable(b, edt)), [edt])
  const selectedBg = bgFiltered.find(b => b.id === bg.value.background)

  const setBg = (bg?: string) => {
    setBgStep(s => {
      s.value.background = bg
    })
    setAbility(s => {
      if (!s.value.background) s.value.background = { unbound: false, value: Array(6).fill(0) as NTuple6 }
      s.status = 'incomplete'
      if (!s.value.background.unbound && !s.value.background.value.every(v => v === 0)) {
        s.value.background.value = Array(6).fill(0) as NTuple6
      }
    })
  }

  return <>
    <div>→ 选择背景：</div>
    { selectedBg ? <>
        <div>背景：{ selectedBg.name || '未知背景' } </div>
        <Markdown >{selectedBg.description}</Markdown>
        <div onClick={() => setBg(undefined)}>↻更换背景</div>
      </>
      : 
      <ul>
        { bgFiltered.map(b => (
          <li key={b.id} onClick={() => setBg(b.id)}>
            {b.name}
          </li>
        ))}
      </ul>
    }
    
  </>
}