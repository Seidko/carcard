import { backgroundsData } from '@/data/background'
import { StepsContext } from '@/structure/Context'
import { isCompAvailable } from '@/utils'
import { useMemo } from 'react'
import Markdown from 'react-markdown'
import { useContextSelector } from 'use-context-selector'

export default function Background() {
  const [edt, bg, setBgStep, setFeatStep] = useContextSelector(StepsContext, v => [
    v.edition[0],
    ...v.background,
    v.feat[1]
  ])

  const bgFiltered = useMemo(() => backgroundsData.filter(b => isCompAvailable(b, edt)), [edt])
  const selectedBg = bgFiltered.find(b => b.id === bg.value.background)

  const setBg = (bg?: string) => {
    const bgData = bgFiltered.find(b => b.id === bg)!

    setBgStep(s => {
      s.value.background = bg
    })

    if (bgData?.feats) {
      setFeatStep(s => {
        const featFromBg = s.value.feats.get('background')
        const draft = featFromBg?.value.find(f => f.type == 'origin')

        if (!featFromBg) {
          s.value.feats.set('background', {
            from: 'background',
            unbound: false,
            value: [
              bgData.feats!
            ],
          })
        } else if (featFromBg.unbound) {
          // do nothing
        } else if (!draft) {
          featFromBg.value.push(bgData.feats!)
        } else {
          draft.id = bgData.feats!.id
          draft.type = bgData.feats!.type
        }
      })
    } else {
      setFeatStep(s => {
        if (!s.value.feats.get('background')?.unbound) {
          s.value.feats.delete('background')
        }
      })
    }
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