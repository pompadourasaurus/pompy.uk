import { getAllRecipesGroupedByType } from "@/lib/recipes"
import { type RecipeTypeSlug, getRecipeTypeBySlug } from "@/lib/recipes/recipe-types"
import type { NavItem, NavItemWithChildren } from "@/lib/types/nav"
import type { Recipe } from "@/lib/types/recipe"

export type MainNavItem = NavItem & {}

export type SidebarNavSubItem = NavItem & {}
export type SidebarNavItem = NavItemWithChildren<SidebarNavSubItem> & {}

export type RecipesNavConfig = Readonly<{
  mainNav: readonly MainNavItem[]
  sidebarNav: readonly SidebarNavItem[]
}>

function navItemForRecipe(recipe: Readonly<Recipe>): SidebarNavSubItem {
  return {
    slug: `recipes/${recipe.slug}`,
    title: recipe.title,
    href: `/recipes/${recipe.slug}`,
  }
}

function navGroupForRecipeType(recipeTypeSlug: RecipeTypeSlug, recipes: readonly Readonly<Recipe>[]): SidebarNavItem {
  const recipeType = getRecipeTypeBySlug(recipeTypeSlug)
  return {
    slug: `recipe-types/${recipeType.slug}`,
    title: recipeType.label.plural,
    items: recipes.map(navItemForRecipe),
  }
}

function navGroupsForRecipes(): SidebarNavItem[] {
  const recipeGroups = getAllRecipesGroupedByType()
  const navItemsIterator = recipeGroups
    .entries()
    .map(([recipeTypeSlug, recipes]) => navGroupForRecipeType(recipeTypeSlug, recipes))
  return Array.from(navItemsIterator)
}

export const recipesNavConfig = {
  mainNav: [],
  sidebarNav: [...navGroupsForRecipes()],
} as const satisfies RecipesNavConfig
