import { globContent } from "@/lib/glob-content"
import type { RecipeTypeSlug } from "@/lib/recipes/recipe-types"
import type { Recipe, RecipeSlug } from "@/lib/types/recipe"

const recipeModuleNames = await globContent("recipes")

// why this dynamic import works:
// https://webpack.js.org/api/module-methods/#dynamic-expressions-in-import
const recipeModules: { default: Recipe }[] = await Promise.all(
  recipeModuleNames.map((name) => import(`@/content/recipes/${name}`)),
)
const recipes = recipeModules.map((module) => module.default)
const recipesMap = new Map<string, Recipe>(recipes.map((recipe) => [recipe.slug, recipe]))

/**
 * This comparison function orders recipes from most recent to least recent.
 * In other words, it sorts recipes such that their dates are in descending order.
 */
function compareRecipesByDate(first: Readonly<Recipe>, second: Readonly<Recipe>): number {
  return +second.date - +first.date
}

export function getRecipeSlugs(): RecipeSlug[] {
  return Array.from(recipesMap.keys()) as RecipeSlug[]
}

export function getRecipeBySlug(slug: RecipeSlug): Recipe
export function getRecipeBySlug(slug: string): Recipe | undefined
export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipesMap.get(slug)
}

export function getAllRecipes(): readonly Readonly<(typeof recipes)[number]>[] {
  return recipes.toSorted(compareRecipesByDate)
}

export function getAllRecipesGroupedByType(): Map<RecipeTypeSlug, readonly Readonly<Recipe>[]> {
  const groups = Map.groupBy(recipes, (recipe) => recipe.type)

  for (const recipeGroup of groups.values()) {
    recipeGroup.sort(compareRecipesByDate)
  }

  return groups
}
