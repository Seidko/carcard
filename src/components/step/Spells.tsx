import { StepsContext } from '@/structure/Context'
import { useContextSelector } from 'use-context-selector'

export function Spells() {
  const [edition, classes, spells, setSpells] = useContextSelector(StepsContext, v => [
    v.edition[0],
    v.classes[0],
    ...v.spells
  ])

  return <>

  </>
}