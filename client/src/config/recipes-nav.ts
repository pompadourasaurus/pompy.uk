import { getAllRecipesGroupedByType } from "@/lib/recipes"
import { type RecipeTypeSlug, getRecipeTypeBySlug } from "@/lib/recipes/recipe-types"
import type { NavItem, NavItemWithChildren } from "@/lib/types/nav"
import type { Recipe } from "@/lib/types/recipe"

import type { NavMatcherSlug } from "./nav-matchers"

export type MainNavItem = NavItem &
  Readonly<{
    /**
     * refers to a predicate that should return True when the active
     * pathname 'matches' the nav item
     * @see getNavMatcherBySlug
     */
    matcherSlug: NavMatcherSlug
  }>

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

export const recipesNavConfig: RecipesNavConfig = {
  mainNav: [
    {
      slug: "recipes",
      title: "Recipes",
      href: "/recipes",
      matcherSlug: "default",
    },
  ],
  sidebarNav: [
    {
      slug: "home",
      title: "Home",
      items: [
        {
          slug: "gallery",
          title: "Gallery",
          href: "/recipes",
        },
      ],
    },
    ...navGroupsForRecipes(),
  ],
}
