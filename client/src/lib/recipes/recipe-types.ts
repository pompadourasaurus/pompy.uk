export type RecipeType = {
  slug: string
  label: {
    singular: string
    plural: string
  }
}

const recipeTypes = [
  {
    slug: "cake",
    label: {
      singular: "Cake",
      plural: "Cakes",
    },
  },
  {
    slug: "tray-bake",
    label: {
      singular: "Traybake",
      plural: "Traybakes",
    },
  },
  {
    slug: "meal",
    label: {
      singular: "Meal",
      plural: "Meals",
    },
  },
] as const satisfies RecipeType[]

export type RecipeTypeSlug = (typeof recipeTypes)[number]["slug"]

const recipeTypesMap = new Map<string, RecipeType>(recipeTypes.map((recipeType) => [recipeType.slug, recipeType]))

export function getRecipeTypeSlugs(): RecipeTypeSlug[] {
  return Array.from(recipeTypesMap.keys()) as RecipeTypeSlug[]
}

export function getRecipeTypeBySlug(slug: RecipeTypeSlug): RecipeType
export function getRecipeTypeBySlug(slug: string): RecipeType | undefined
export function getRecipeTypeBySlug(slug: string) {
  return recipeTypesMap.get(slug)
}

export function getAllRecipeTypes(): readonly (typeof recipeTypes)[number][] {
  return Array.from(recipeTypes)
}
