export type RecipeType = {
  slug: string
  description: string
  label: {
    singular: string
    plural: string
  }
}

const recipeTypes = [
  {
    slug: "cake",
    description: "encompasses baked goods served whole and sliced: particularly decorated and/or layered cakes.",
    label: {
      singular: "Cake",
      plural: "Cakes",
    },
  },
  {
    slug: "bake",
    description: "encompasses baked goods served pre-portioned: tray-bakes, cookies, pastries, etc.",
    label: {
      singular: "Bake",
      plural: "Bakes",
    },
  },
  {
    slug: "meal",
    description: "encompasses conventional meals - breakfast, lunch, dinner.",
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

export function getRecipeTypeBySlug(slug: RecipeTypeSlug): Readonly<RecipeType>
export function getRecipeTypeBySlug(slug: string): Readonly<RecipeType> | undefined
export function getRecipeTypeBySlug(slug: string) {
  return recipeTypesMap.get(slug)
}

export function getAllRecipeTypes(): readonly Readonly<(typeof recipeTypes)[number]>[] {
  return Array.from(recipeTypes)
}
