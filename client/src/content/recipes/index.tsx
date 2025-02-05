import type { Recipe } from "@/lib/types/recipe"

import { myFirstRecipe } from "./my-first-recipe"

const recipes: Recipe[] = [myFirstRecipe]

const recipesMap = new Map<string, Recipe>(recipes.map((recipe) => [recipe.slug, recipe]))

export function getRecipeSlugs() {
  return Array.from(recipesMap.keys())
}

export function getRecipeBySlug(slug: string) {
  return recipesMap.get(slug)
}

export function getAllRecipes(): Recipe[] {
  return recipes.toSorted((first, second) => (first.date > second.date ? -1 : 1))
}
