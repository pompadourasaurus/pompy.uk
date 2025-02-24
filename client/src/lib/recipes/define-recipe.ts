import type { Recipe, RecipeInput } from "@/lib/types/recipe"

export function defineRecipe(input: RecipeInput): Recipe {
  return input satisfies Omit<Recipe, "slug"> as Recipe
}
