import { backgroundsData } from '@/data/background'
import { featsData, featsMap } from '@/data/feats'
import { StepsContext } from '@/structure/Context'
import type { Feat, FeatType, From, FromOptions } from '@/types'
import { isCompAvailable } from '@/utils'
import type { WritableDraft } from 'immer'
import { useContextSelector } from 'use-context-selector'

const typeNameMap: Record<FeatType, string> = {
  origin: '起源',
  general: '通用',
  'fighting style': '战斗风格',
  'epic boon': '传奇恩惠',
}

function flatValues(options: FromOptions<Feat[]>): Feat[] {
  return Array.from(options.values().flatMap(v => v.value))
}

function FeatSelect({ from, type, index }: { from: From, type: FeatType, index?: number }) {
  const [ edition, feats, setFeats ] = useContextSelector(StepsContext, v => [
    v.edition[0],
    ...v.feat
  ])

  const featsFiltered = featsData.filter(f => isCompAvailable(f, edition) && f.type === type)
  const featsSelected = flatValues(feats.value.feats).filter(f => !featsMap.get(f.id)?.repeatable).map(f => f.id)
  let feat = feats.value.feats.get(from)?.value[index ?? 0]

  if (index === undefined) {
    feat = feats.value.feats.get(from)?.value.find(f => f.type === type)
  }
  
  return <div style={{ padding: '8px 8px' }}>
    <select value={feat?.id || ''} onChange={e => setFeats(s => {
      if (!e.target.value) {
        return
      }
      const featsFrom = s.value.feats.get(from)!
      let draft: WritableDraft<Feat> | undefined = featsFrom.value[index ?? 0]

      if (index === undefined) {
        draft = featsFrom.value.find(f => f.type === type)
      }
    
      if (!draft) {
        featsFrom.value.push({
          id: e.target.value, 
          type,
        })
      } else {
        draft.id = e.target.value
      }
    })}>
      <option value="" hidden>选择{typeNameMap[type]}专长</option>
      {
        featsFiltered.map((f, i) => <option key={i} value={f.id} hidden={featsSelected.includes(f.id)}>{f.name}</option>)
      }
    </select>
  </div>

}

function OriginFeat() {
  const [bg, spec, feats, setFeats] = useContextSelector(StepsContext, v => [
    v.background[0],
    v.species[0],
    ...v.feat,
  ])

  const featsFromBg = feats.value.feats.get('background')
  const origFeatFromBg = featsFromBg?.value.find(f => f.type == 'origin')

  return <>
    { featsFromBg?.unbound ? <div>
        来自背景（已解绑）的起源专长：
        <FeatSelect from="background" type="origin" />
      </div> : origFeatFromBg ? <div>来自背景的起源专长：{ featsMap.get(origFeatFromBg.id)!.name }</div> : <div>未选择背景</div>
    }
    <label>
      <input type="checkbox" checked={featsFromBg?.unbound ?? false} onChange={e => setFeats(s => {
        const featFromBg = s.value.feats.get('background')
      
        if (!featFromBg) {
          s.value.feats.set('background', {
            from: 'background',
            unbound: e.target.checked,
            value: [],
          })
        } else {
          featFromBg.unbound = e.target.checked
          
          if (!e.target.checked) {
            featFromBg.value = featFromBg.value.filter(f => f.type !== 'origin')
            if (bg.value.background) {
              const bgData = backgroundsData.find(b => b.id === bg.value.background)!
              featFromBg.value.push(bgData.feats!)
            }
          }
        }
      })} />
        允许自由选择起源专长
    </label>
    { spec.value.species === 'human2024' && <div>
        人类起源专长：
        <FeatSelect from="species" type="origin" />
      </div>
    }
  </>
}

export default function Feats() {
  const [edition, classes, subclasses] = useContextSelector(StepsContext, v => [
    v.edition[0],
    v.classes[0],
    v.subclasses[0],
  ])

  const [genFeatCount, epicBoonFeatCount] = classes.value.classes.reduce(([g, e], cls) => {
    return [
      g + Math.min(Math.floor(cls.level / 4), 4),
      e + (cls.level >= 19 ? 1 : 0)
    ]
  }, [0, 0])

  const fightFeatCount = classes.value.classes.reduce((acc, cls) => {
    if (cls.id === 'fighter') {
      acc += 1
      if (cls.level >= 3 && subclasses.value.subclasses[cls.id] == 'fighter champion') {
        acc += 1
      }
    }
    if (cls.level >= 2 && ['paladin', 'ranger'].includes(cls.id)) acc += 1
    return acc
  }, 0)

  return <>
    { edition.value.edition === '5e2024' && <OriginFeat /> }
    { 
      [...Array(genFeatCount).keys()].map(i => <div key={i}>
        通用专长 {i + 1}：
        <FeatSelect from="class" type="general" index={i} />
      </div>)
    }
    {
      [...Array(fightFeatCount).keys()].map(i => <div key={i}>
        战斗风格专长 {i + 1}：
        <FeatSelect from="class" type="fighting style" index={i} />
      </div>)
    }
    { 
      [...Array(epicBoonFeatCount).keys()].map(i => <div key={i}>
        传奇恩惠专长 {i + 1}：
        <FeatSelect from="class" type="epic boon" index={i} />
      </div>)
    }
  </>
}