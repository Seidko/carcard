import { StepsContext } from '@/structure/Context'
import { useContextSelector } from 'use-context-selector'

export default function Feats() {
  const [edition, feats, setFeats] = useContextSelector(StepsContext, v => [
    v.edition[0],
    ...v.feat,
  ])

  return <></>
}