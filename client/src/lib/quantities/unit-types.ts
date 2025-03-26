export type UnitType = {
  slug: string
  label: {
    singular: string
    plural: string
  }
}

const unitTypes = [
  {
    slug: "volume",
    label: {
      singular: "Volume",
      plural: "Volumes",
    },
  },
  {
    slug: "weight",
    label: {
      singular: "Weight",
      plural: "Weights",
    },
  },
  {
    slug: "temperature",
    label: {
      singular: "Temperature",
      plural: "Temperatures",
    },
  },
  {
    slug: "count",
    label: {
      singular: "Count",
      plural: "Counts",
    },
  },
] as const satisfies UnitType[]

export type UnitTypeSlug = (typeof unitTypes)[number]["slug"]

const unitTypesMap = new Map<string, UnitType>(unitTypes.map((unitType) => [unitType.slug, unitType]))

export function getUnitTypeSlugs(): UnitTypeSlug[] {
  return Array.from(unitTypesMap.keys()) as UnitTypeSlug[]
}

export function getUnitTypeBySlug(slug: UnitTypeSlug): Readonly<UnitType>
export function getUnitTypeBySlug(slug: string): Readonly<UnitType> | undefined
export function getUnitTypeBySlug(slug: string) {
  return unitTypesMap.get(slug)
}

export function getAllUnitTypes(): readonly Readonly<(typeof unitTypes)[number]>[] {
  return Array.from(unitTypes)
}
