export type RecipeType = {
  slug: string
  label: {
    singular: string
    plural: string
  }
}

export const recipeTypes = [
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
