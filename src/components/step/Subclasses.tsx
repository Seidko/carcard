import { StepsContext } from '@/structure/Context'
import { useContextSelector } from 'use-context-selector'
import { classesData } from '@/data/classes'
import { subclassesData } from '@/data/subclasses'
import { isCompAvailable } from '@/utils'
import { useMemo, useState } from 'react'

export function Subclasses() {
  const [edition, classes, subclasses, setSubclasses] = useContextSelector(StepsContext, v => [
    v.edition[0],
    v.classes[0],
    ...v.subclasses,
  ])

  const classesDataFiltered = useMemo(() => classesData.filter(c => isCompAvailable(c, edition)), [edition])
  const subclassesDataFiltered = useMemo(() => subclassesData.filter(s => isCompAvailable(s, edition)), [edition])

  function SubclassChoice({ classId }: { classId: string }) {
    const classData = classesDataFiltered.find(c => c.id === classId)
    if (!classData) return <div style={{ color: 'red' }}>未知的职业id</div>
    return <>
      <div>
        → 选择 {classData.name} 的子职：
      </div>
      <ul>
        {
          subclassesDataFiltered.filter(s => s.class === classId).map(v => (
            <li key={v.id} onClick={() => setSubclasses(s => {
              s.value.subclasses[classId] = v.id
            })}>
              {v.name}
            </li>
          ))
        }
      </ul>
    </>
  }
  function SubclassComp({ classId }: { classId: string }) {
    const [selected, setSelected] = useState(!!subclasses.value.subclasses[classId])

    const classData = classesDataFiltered.find(cd => cd.id === classId)
    if (!classData) return <li style={{ color: 'red' }} key={classId}>未知的职业id</li>


    return <li key={classId}>
      { 
        !selected ? 
          <SubclassChoice classId={classId} /> : 
          <>
            <div>{ classData.name } 的子职：</div>
            <div>{ subclassesDataFiltered.find(s => s.id === subclasses.value.subclasses[classId])?.name }</div>
            <div onClick={() => setSelected(false)}>↻ 更换子职</div>
          </>
      }
    </li>
  }

  return <>
    <ul>
      {
        classes.value.classes.map(c => <SubclassComp key={c.id} classId={c.id} />)
      }
    </ul>
  </>
}