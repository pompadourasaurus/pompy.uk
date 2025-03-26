import type { Fraction } from "fraction.js"

import type { UnitSlug } from "@/lib/quantities/units"

export type SpecificQuantity = {
  type?: "specific" | null | undefined
  amount: number | Fraction
  unit: UnitSlug
}

export type QuantityRange = {
  type: "range"
  from: number | Fraction
  to: number | Fraction
  unit: UnitSlug
}

export type SpecialSpecificQuantity = {
  type: "special-specific"
  amount: number | Fraction
  label: string
}

export type SpecialQuantityRange = {
  type: "special-range"
  from: number | Fraction
  to: number | Fraction
  label: string
}

export type Quantity = SpecificQuantity | QuantityRange | SpecialSpecificQuantity | SpecialQuantityRange
