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