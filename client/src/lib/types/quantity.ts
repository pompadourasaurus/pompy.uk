import type { Fraction } from "fraction.js"

import type { UnitSlug } from "@/lib/quantities/units"

export type SpecificQuantity = {
  quantityType?: "specific" | null | undefined
  amount: number | Fraction
  unit: UnitSlug
}

export type QuantityRange = {
  quantityType: "range"
  from: number | Fraction
  to: number | Fraction
  unit: UnitSlug
}

export type SpecialSpecificQuantity = {
  quantityType: "special-specific"
  amount: number | Fraction
  label: string
}

export type SpecialQuantityRange = {
  quantityType: "special-range"
  from: number | Fraction
  to: number | Fraction
  label: string
}

export type Quantity = SpecificQuantity | QuantityRange | SpecialSpecificQuantity | SpecialQuantityRange
