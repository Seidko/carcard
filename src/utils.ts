import type { ClassData } from './data/classes'
import type { EditionStep } from './types'

export function isCompAvailable(classData: { from: string | string[] }, edition: EditionStep) {
  return Array.isArray(classData.from)
    ? classData.from.some(e => edition.value.expansions.includes(e))
    : edition.value.expansions.includes(classData.from)
}

export function isClassHasFeatureAtLevel(classData: ClassData, level: number, feature: string): boolean {
  if (feature === 'subclass') {
    return classData.levels.some(lv => lv.level <= level && lv.subclass)
  }
  return classData.levels.some(lv => lv.level <= level && !!lv?.updateAbleAbilities?.[feature])
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