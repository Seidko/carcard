import { createContext } from 'use-context-selector'
import * as Type from '@/types'
import type { ImmerHook } from 'use-immer'

export interface StepsContext {
  edition: ImmerHook<Type.EditionStep>
  classes: ImmerHook<Type.ClassesStep>
  subclasses: ImmerHook<Type.SubclassesStep>
  species: ImmerHook<Type.SpeciesStep>
  ability: ImmerHook<Type.AbilityStep>
  feat: ImmerHook<Type.FeatStep>
  background: ImmerHook<Type.BackgroundStep>
  equipments: ImmerHook<Type.EquipmentsStep>
  skills: ImmerHook<Type.SkillsStep>
  spells: ImmerHook<Type.SpellsStep>
  about: ImmerHook<Type.AboutStep>
}

export const StepsContext = createContext<StepsContext>({} as StepsContext)
