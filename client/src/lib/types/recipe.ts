import type Image from "next/image"
import type * as React from "react"

import type { RecipeTypeSlug } from "@/lib/recipes/recipe-types"
import type { IngredientsList } from "@/lib/types/ingredients-list"

type FC = React.FC<React.HTMLAttributes<HTMLElement>>

const isRecipeSlugSymbol = Symbol("is-recipe-slug")
export type RecipeSlug = string & { [isRecipeSlugSymbol]: true }

export type RecipeInput = {
  slug: string
  title: string
  type: RecipeTypeSlug
  excerpt: string
  date: Date
  coverImageProps: React.ComponentProps<typeof Image>
  openGraphImageUrl: string
  ingredients: IngredientsList
  content: FC
}

export type Recipe = RecipeInput & {
  slug: RecipeSlug
}
