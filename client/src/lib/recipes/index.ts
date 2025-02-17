import type { Recipe } from "@/lib/types/recipe"

import { myFirstRecipe } from "@/content/recipes/my-first-recipe"

const recipes = [myFirstRecipe] as const satisfies Recipe[]

export type RecipeSlug = (typeof recipes)[number]["slug"]

const recipesMap = new Map<string, Recipe>(recipes.map((recipe) => [recipe.slug, recipe]))

export function getRecipeSlugs(): RecipeSlug[] {
  return Array.from(recipesMap.keys()) as RecipeSlug[]
}

export function getRecipeBySlug(slug: RecipeSlug): Recipe
export function getRecipeBySlug(slug: string): Recipe | undefined
export function getRecipeBySlug(slug: string) {
  return recipesMap.get(slug)
}

export function getAllRecipes(): (typeof recipes)[number][] {
  return recipes.toSorted((first, second) => (first.date > second.date ? -1 : 1))
}
