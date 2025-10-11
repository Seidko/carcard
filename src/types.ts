import type { Coins } from "./data/equipments"

export type NTuple6 = [number, number, number, number, number, number]

export interface StepBase {
  id: string
  name: string
  status?: 'complete' | 'incomplete' | 'not opened'
  value: unknown
}

interface FromOptions<T> {
  species?: T
  background?: T
  feat?: T[]
  classes?: T[]
  subclasses?: T[]
  other?: {
    from: string
    value: T
  }[]
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
    base?: Partial<NTuple6>
  } & FromOptions<NTuple6>
}

export interface FeatStep extends StepBase {
  id: 'feat'
  value: {
    feats: Omit<FromOptions<Feat[]>, 'feat'>
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
    skillProficiencies: FromOptions<string[]>
    skillExpertise: FromOptions<string[]>
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
  type: 'origin' | 'general' | 'fighting style' | 'epic boon'
}

export type FeatType = 'origin' | 'general' | 'fighting style' | 'epic boon'

export type Spellcasting = 'full' | 'half' | 'third' | 'pact' | 'none'

export type Ability = 'str' | 'dex' | 'con' | 'int' | 'wis' | 'cha'
