import type { Coins } from "./data/equipments"

export type NTuple6 = [number, number, number, number, number, number]

export interface StepBase {
  id: string
  name: string
  status?: 'complete' | 'incomplete' | 'not opened'
  value: unknown
}

export interface EditionStep extends StepBase {
  id: 'edition'
  value: {
    edition?: string
    expansions: string[]
  }
}

export interface ClassesStep extends StepBase {
  id: 'classes'
  value: {
    classes: Class[]
  }
}

export interface SubclassesStep extends StepBase {
  id: 'subclasses'
  value: {
    subclasses: {
      [classId: string]: string | undefined
    }
  }
}

export interface SpeciesStep extends StepBase {
  id: 'species'
  value: {
    species?: string
    options: any
  }
}

export interface AbilityStep extends StepBase {
  id: 'ability'
  value: {
    type?: 'standard' | 'point buy' | 'rolling point' | 'custom'
    rolls?: {
      results: NTuple6[]
      selected: number
    }
    value: FromOptions<NTuple6>
  }
}

export interface FeatStep extends StepBase {
  id: 'feat'
  value: {
    feats: FromOptions<Feat[]>,
  }
}

export interface BackgroundStep extends StepBase {
  id: 'background'
  value: {
    background?: string
  }
}

export interface EquipmentsStep extends StepBase {
  id: 'equipment'
  value: {
    weapons: FromOptions<string[]>
    armors: FromOptions<string[]>
    tools: FromOptions<string[]>
    coins: FromOptions<Coins>
  }
}

export interface SkillsStep extends StepBase {
  id: 'skills'
  value: {
    languages: FromOptions<string[]>
    weapons: FromOptions<string[]>
    armors: FromOptions<string[]>
    tools: FromOptions<string[]>
    saving: FromOptions<string[]>
    skillProficiencies: FromOptions<Set<Skill>>
    skillExpertises: FromOptions<Set<Skill>>
  }
}

export interface SpellsStep extends StepBase {
  id: 'spells'
  value: {
    spells: FromOptions<string[]>
  }
}

export interface AboutStep extends StepBase {
  id: 'about'
  value: {
    name?: string
    backstory?: string
    image?: Blob
    alignment?: ['lawful' | 'neutral' | 'chaotic', 'good' | 'neutral' | 'evil']
    physical?: {
      age?: number
      gender?: string
      height?: string
      weight?: string
      hair?: string
      skin?: string
      eyes?: string
    }
    personal?: {
      pronouns?: string
      bonds?: string
      ideals?: string
      flaws?: string
      traits?: string
    }
    relationships?: {
      allies?: string
      organizations?: string
      enemies?: string
    }
    others?: string
  }
}

// export type Step = EditionStep | ClassesStep | SubclassesStep | SpeciesStep | AbilityStep | FeatStep | BackgroundStep | SkillStep | AboutStep

export interface Class {
  id: string
  level: number
}

export interface Feat {
  id: string
  type: FeatType
}

export type FromOptions<T> = Map<From, {
  from: From
  value: T
  unbound?: boolean
}>

export type From = 'base' | 'species' | 'background' | 'feat' | 'class' | 'subclass' | 'other'

export type FeatType = 'origin' | 'general' | 'fighting style' | 'epic boon'

export type Spellcasting = 'full' | 'half' | 'third' | 'pact' | 'none'

export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'

export type Skill = 'acrobatics' | 'animal handling' | 'arcana' | 'athletics' | 'deception' | 'history' | 'insight' | 'intimidation' | 'investigation' | 'medicine' | 'nature' | 'perception' | 'performance' | 'persuasion' | 'religion' | 'sleight of hand' | 'stealth' | 'survival'
