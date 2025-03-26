import type { UnitInput } from "@/lib/types/unit"

// region US Customary weight units
/**
 * https://en.wikipedia.org/wiki/United_States_customary_units#Mass_and_weight
 */
const customaryWeights = [
  {
    slug: "ounces",
    type: "weight",
    label: {
      singular: "Ounce",
      plural: "Ounces",
      symbol: "oz.",
    },
  },
  {
    slug: "pounds",
    type: "weight",
    label: {
      singular: "Pound",
      plural: "Pounds",
      symbol: "Ib.",
    },
  },
] as const satisfies UnitInput[]
// endregion

// region Metric units
const metricWeights = [
  {
    slug: "grams",
    type: "weight",
    label: {
      singular: "Gram",
      plural: "Grams",
      symbol: "g",
    },
  },
  {
    slug: "kilograms",
    type: "weight",
    label: {
      singular: "Kilogram",
      plural: "Kilograms",
      symbol: "kg",
    },
  },
] as const satisfies UnitInput[]
// endregion

export default [...customaryWeights, ...metricWeights] as const satisfies UnitInput[]
