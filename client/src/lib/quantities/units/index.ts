import { type UnitTypeSlug, getUnitTypeSlugs } from "@/lib/quantities/unit-types"
import type { Unit } from "@/lib/types/unit"

import countUnits from "./count-units"
import temperatureUnits from "./temperature-units"
import volumeUnits from "./volume-units"
import weightUnits from "./weight-units"

const units = [...countUnits, ...volumeUnits, ...temperatureUnits, ...weightUnits] as const satisfies Unit[]

export type UnitSlug = (typeof units)[number]["slug"]

const unitsMap = new Map<string, Unit>(units.map((unit) => [unit.slug, unit]))
const unitsByTypeMap: Map<string, Unit[]> = Map.groupBy(units, (unit) => unit.type)

export function getUnitSlugs(): UnitSlug[] {
  return Array.from(unitsMap.keys()) as UnitSlug[]
}

export function getUnitBySlug(slug: UnitSlug): Unit
export function getUnitBySlug(slug: string): Unit | undefined
export function getUnitBySlug(slug: string): Unit | undefined {
  return unitsMap.get(slug)
}

export function getAllUnits(): readonly Readonly<(typeof units)[number]>[] {
  return Array.from(units)
}

export function getAllUnitsOfType(type: UnitTypeSlug): readonly Readonly<Unit>[]
export function getAllUnitsOfType(type: string): readonly Readonly<Unit>[] | undefined
export function getAllUnitsOfType(type: string): readonly Readonly<Unit>[] | undefined {
  return unitsByTypeMap.get(type)
}

export function getAllUnitsGroupedByType(): Map<UnitTypeSlug, readonly Readonly<Unit>[]> {
  return new Map(getUnitTypeSlugs().map((unitType) => [unitType, getAllUnitsOfType(unitType)]))
}
