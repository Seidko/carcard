import { StepsContext } from "@/structure/Context"
import { useContextSelector } from "use-context-selector"


export default function Spells() {
  const [ edition, classes, subclasses, feats, species, spells, setSpells ] = useContextSelector(StepsContext, v => [
    v.edition[0],
    v.classes[0],
    v.subclasses[0],
    v.feat[0],
    v.species[0],
    ...v.spells,
  ])

  return <>
    
  </>
}