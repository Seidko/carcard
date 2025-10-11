import type { Feat, NTuple6 } from '@/types'

export interface Background {
  id: string
  name: string
  description: string
  from: string | string[]
  ability: NTuple6,
  equipment: string[]
  toolsProficiency: string[]
  skillsProficiency: string[]
  feats: Feat
}