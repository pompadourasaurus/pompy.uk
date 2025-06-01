import type { NounLabel } from "@/lib/types/noun-label"

export type IngredientInput = {
  slug: string
  label: NounLabel
}

const isIngredientSymbol = Symbol("is-ingredient")
export type Ingredient = IngredientInput & { [isIngredientSymbol]: true }
