import { useState, type JSX } from 'react'
import * as Type from '@/types'
import { StepsContext } from '@/structure/Context'
import { useImmer } from 'use-immer'
import { Subclasses } from './step/Subclasses'
import Species from './step/Species'
import Edition from './step/Edition'
import Classes from './step/Classes'
import Ability from './step/Ability'
import Feats from './step/Feats'
import Background from './step/Background'
import Skills from './step/Skills'

export default function Builder() {
  const edition = useImmer<Type.EditionStep>({
    id: 'edition',
    name: '规则版本',
    status: 'incomplete',
    value: {
      expansions: [],
    }
  })

  const classes = useImmer<Type.ClassesStep>({
    id: 'classes',
    name: '职业',
    value: {
      classes: [],
    }
  })

  const subclasses = useImmer<Type.SubclassesStep>({
    id: 'subclasses',
    name: '子职',
    value: {
      subclasses: {},
    }
  })

  const species = useImmer<Type.SpeciesStep>({
    id: 'species',
    name: '种族',
    value: {
      options: {},
    }
  })

  const ability = useImmer<Type.AbilityStep>({
    id: 'ability',
    name: '属性值',
    value: {
      value: new Map()
    },
  })

  const feat = useImmer<Type.FeatStep>({
    id: 'feat',
    name: '专长',
    value: {
      feats: new Map(),
    },
  })

  const background = useImmer<Type.BackgroundStep>({
    id: 'background',
    name: '背景',
    value: {},
  })

  const equipments = useImmer<Type.EquipmentsStep>({
    id: 'equipment',
    name: '装备',
    value: {
      weapons: new Map(),
      armors: new Map(),
      tools: new Map(),
      coins: new Map(),
    }
  })

  const skills = useImmer<Type.SkillsStep>({
    id: 'skills',
    name: '技能',
    value: {
      languages: new Map(),
      weapons: new Map(),
      armors: new Map(),
      tools: new Map(),
      saving: new Map(),
      skillProficiencies: new Map(),
      skillExpertises: new Map(),
    },
  })

  const about = useImmer<Type.AboutStep>({
    id: 'about',
    name: '角色信息',
    value: {},
  })

  const steps = [
    edition[0],
    classes[0],
    subclasses[0],
    species[0],
    background[0],
    ability[0],
    feat[0],
    equipments[0],
    skills[0],
    about[0],
  ] as const

  const [ step, setStep ] = useState('edition')

  function main(): JSX.Element | undefined {
    switch (step) {
      case 'edition':
        return <Edition />
      case 'classes':
        return <Classes />
      case 'subclasses':
        return <Subclasses />
      case 'species':
        return <Species />
      case 'ability':
        return <Ability />
      case 'feat':
        return <Feats />
      case 'background':
        return <Background />
      case 'skills':
        return <Skills />
      case 'about':
    }
  }

  return <>
    <div className="builder-header">
      {steps.find(v => v.id === step)?.name || ''}
    </div>
    <div className="builder-main">
      <StepsContext.Provider value={{
        edition,
        classes,
        subclasses,
        species,
        ability,
        feat,
        background,
        equipments,
        skills,
        about
      }}>
        { main() }
      </StepsContext.Provider>
    </div>
    <div className="builder-navigation">
      {
        steps.filter(v => v.status).map(v => (
          <span key={v.id} className={`step-item ${v.id === step ? 'active' : ''}`} onClick={() => setStep(v.id)}>
            {v.name}&nbsp;
          </span>
        ))
      }
      <div onClick={() => setStep(steps[steps.findIndex(v => v.id === step) + 1]?.id || step)}>下一项</div>

    </div>
  </>
}