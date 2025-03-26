import type { UnitTypeSlug } from "@/lib/quantities/unit-types"

export type Unit = {
  slug: string
  label: {
    singular: string
    plural: string

    /**
     * e.g. 'tsp.' for 'teaspoons'; the abbreviated name of the unit, if one exists
     */
    symbol?: string | null | undefined
  }
  type: UnitTypeSlug
}
