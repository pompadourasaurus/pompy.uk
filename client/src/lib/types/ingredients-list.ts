import type { IngredientSlug } from "@/lib/ingredients"
import type { Quantity } from "@/lib/types/quantity"

type IngredientListItem = {
  ingredient: IngredientSlug
  detail?: string | null | undefined
} & Quantity

export type IngredientsList = readonly IngredientListItem[]
