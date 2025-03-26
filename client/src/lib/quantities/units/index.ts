import { type UnitTypeSlug, getUnitTypeSlugs } from "@/lib/quantities/unit-types"
import type { Unit, UnitInput } from "@/lib/types/unit"

import countUnits from "./count-units"
import temperatureUnits from "./temperature-units"
import volumeUnits from "./volume-units"
import weightUnits from "./weight-units"

const units = [...countUnits, ...volumeUnits, ...temperatureUnits, ...weightUnits] as const satisfies UnitInput[]

export type UnitSlug = (typeof units)[number]["slug"]
export type StrongUnit = Unit & { slug: UnitSlug }

// biome-ignore format: formatter ruins readability
const unitsMap = (
  new Map(units.map((unit) => [unit.slug, unit]))
) satisfies Map<string, UnitInput> as Map<string, StrongUnit>
// biome-ignore format: formatter ruins readability
const unitsByTypeMap = (
  Map.groupBy(units, (unit) => unit.type)
) satisfies Map<string, UnitInput[]> as Map<string, StrongUnit[]>

export function getUnitSlugs(): UnitSlug[] {
  return Array.from(unitsMap.keys()) as UnitSlug[]
}

export function getUnitBySlug(slug: UnitSlug): StrongUnit
export function getUnitBySlug(slug: string): StrongUnit | undefined
export function getUnitBySlug(slug: string): StrongUnit | undefined {
  return unitsMap.get(slug)
}

export function getAllUnits(): readonly Readonly<StrongUnit>[] {
  return Array.from(units) satisfies UnitInput[] as Readonly<StrongUnit>[]
}

export function getAllUnitsOfType(type: UnitTypeSlug): readonly Readonly<StrongUnit>[]
export function getAllUnitsOfType(type: string): readonly Readonly<StrongUnit>[] | undefined
export function getAllUnitsOfType(type: string): readonly Readonly<StrongUnit>[] | undefined {
  return unitsByTypeMap.get(type)
}

export function getAllUnitsGroupedByType(): Map<UnitTypeSlug, readonly Readonly<StrongUnit>[]> {
  return new Map(getUnitTypeSlugs().map((unitType) => [unitType, getAllUnitsOfType(unitType)]))
}
