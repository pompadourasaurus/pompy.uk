"use client"

import { useRecipeContext } from "@/components/recipes/recipe-context"
import { getIngredientBySlug } from "@/lib/ingredients"
import { isPlural, renderQuantity } from "@/lib/quantities"
import type { Ingredient } from "@/lib/types/ingredient"
import type { IngredientList as IngredientListType } from "@/lib/types/ingredient-list"

function renderIngredient(ingredient: Ingredient, plural: boolean): string {
  if (ingredient.label.countable === false) return ingredient.label.noun
  if (plural) return ingredient.label.plural
  return ingredient.label.singular
}

function IngredientListItem({ listItem }: { listItem: IngredientListType[number] }) {
  const ingredient = getIngredientBySlug(listItem.ingredient)
  return <li>{`${renderQuantity(listItem)} ${renderIngredient(ingredient, isPlural(listItem))}`}</li>
}

export function IngredientList() {
  const { recipe } = useRecipeContext()

  const renderListItem = (listItem: IngredientListType[number], index: number) => (
    <IngredientListItem key={index} listItem={listItem} />
  )

  return <ul className="list-disc">{recipe.ingredients.map(renderListItem)}</ul>
}
