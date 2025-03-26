import type { Ingredient, IngredientInput } from "@/lib/types/ingredient"

import someIngredients from "./some-ingredients"

const ingredients = [...someIngredients] as const satisfies IngredientInput[]

export type IngredientSlug = (typeof ingredients)[number]["slug"]
export type StrongIngredient = Ingredient & { slug: IngredientSlug }

// biome-ignore format: formatter ruins readability
const ingredientsMap = (
  new Map(ingredients.map((ingredient) => [ingredient.slug, ingredient]))
) satisfies Map<string, IngredientInput> as Map<string, StrongIngredient>

export function getIngredientSlugs(): IngredientSlug[] {
  return Array.from(ingredientsMap.keys()) as IngredientSlug[]
}

export function getIngredientBySlug(slug: IngredientSlug): StrongIngredient
export function getIngredientBySlug(slug: string): StrongIngredient | undefined
export function getIngredientBySlug(slug: string): StrongIngredient | undefined {
  return ingredientsMap.get(slug)
}

export function getAllIngredients(): readonly Readonly<StrongIngredient>[] {
  return Array.from(ingredients) satisfies IngredientInput[] as Readonly<StrongIngredient>[]
}
