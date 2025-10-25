import type { ClassData, Level } from './data/classes'
import type { Ability, EditionStep, FromOptions, NTuple6 } from './types'

export function isCompAvailable(classData: { from: string | string[] }, edition: EditionStep) {
  return Array.isArray(classData.from)
    ? classData.from.some(e => edition.value.expansions.includes(e))
    : edition.value.expansions.includes(classData.from)
}

export function flatArray<T>(options: FromOptions<T[]>): T[] {
  return Array.from(Iterator.from(options.values()).flatMap(v => v.value))
}

export function flatSet<T>(options: FromOptions<Set<T>>): Set<T> {
  return new Set(Array.from(Iterator.from(options.values()).flatMap(v => Array.from(v.value))))
}

export function flatAbilities(options: FromOptions<NTuple6>): NTuple6 {
  return Array.from(Iterator.from(options.values()).map(v => v.value)).reduce((a, b) => a.map((x, i) => x + b[i]) as NTuple6, [0, 0, 0, 0, 0, 0] as NTuple6)
}

export function classFeatureAtLevel<T extends keyof Level>(classData: ClassData, level: number, feature: T): Level[T] {
  let result = classData[feature as keyof ClassData] as Level[T]
  for (const lvl of classData.levels) {
    if (lvl.level > level) {
      return result
    }
    if (result === undefined) {
      result = lvl[feature]
    } else {
      if (Array.isArray(result)) {
        result = result.concat(lvl[feature] as any[]) as Level[T]
      } else if (typeof result === 'object') {
        result = { ...result, ...(lvl[feature] as object) } as Level[T]
      } else if (['number', 'string', 'boolean'].includes(typeof lvl[feature])) {
        result = lvl[feature] as Level[T]
      }
    }
  }
  return result
}

export function randInt(min: number, max: number) {
  // generate randint with [min,max]
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function rollDice(rolls: { side: number, count: number, offset?: number, modifier?: { policy: 'kh' | 'kl' | 'dh' | 'dl', value: number } }): number {
  let result: number[] = []
  
  for (let i = 0; i < rolls.count; i++) {
    result.push(randInt(1, rolls.side))
  }

  switch (rolls.modifier?.policy) {
    case 'kh':
      result = result.sort((a, b) => b - a).slice(0, rolls.modifier.value)
      break
    case 'kl':
      result = result.sort((a, b) => a - b).slice(0, rolls.modifier.value)
      break
    case 'dh':
      result = result.sort((a, b) => b - a).slice(rolls.modifier.value)
      break
    case 'dl':
      result = result.sort((a, b) => a - b).slice(rolls.modifier.value)
      break
  }

  return (result.reduce((a, b) => a + b, 0)) + (rolls.offset ?? 0)
}

export function countItem<T>(arr: T[]): Map<NonNullable<T>, number> {
  return arr.reduce((acc, item) => {
    if (item === undefined || item === null) return acc
    acc.set(item, (acc.get(item) || 0) + 1);
    return acc
  }, new Map<NonNullable<T>, number>())
}

export const abilityData: { id: Ability, name: string }[] = [
  { id: 'str', name: '力量' },
  { id: 'dex', name: '敏捷' },
  { id: 'con', name: '体质' },
  { id: 'int', name: '智力' },
  { id: 'wis', name: '感知' },
  { id: 'cha', name: '魅力' },
]
