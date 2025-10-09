import { StepsContext } from '@/structure/Context'
import { isCompAvailable } from '@/utils'
import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { speciesData } from '@/data/species'

export default function Species() {
  const [ edition, species, setSpecies ] = useContextSelector(StepsContext, s => [s.edition[0], ...s.species])
  const speciesDataFiltered = useMemo(() => speciesData.filter(c => isCompAvailable(c, edition)), [edition])
  return <>
    <div>→ 选择种族：</div>
    { species.value.species ? <div>
      已选择 { speciesData.find(v => v.id === species.value.species)?.name || '未知的种族id' }
      <div onClick={() => setSpecies(s => {
        s.value.species = undefined
      })}>更换种族</div>
    </div> : <ul>
      { speciesDataFiltered.map(v => (
        <li key={v.id} onClick={() => setSpecies(s => {
          s.value.species = v.id
        })}>
          {v.name}
        </li>
      )) }
    </ul> }
  </>
}
