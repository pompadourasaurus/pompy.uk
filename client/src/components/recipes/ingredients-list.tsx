"use client"

import { useRecipeContext } from "@/components/recipes/recipe-context"
import { getIngredientBySlug } from "@/lib/ingredients"
import { isPlural, renderQuantity } from "@/lib/quantities"
import type { Ingredient } from "@/lib/types/ingredient"
import type { IngredientsList as IngredientsListType } from "@/lib/types/ingredients-list"

function renderIngredient(ingredient: Ingredient, plural: boolean): string {
  if (ingredient.label.countable === false) return ingredient.label.noun
  if (plural) return ingredient.label.plural
  return ingredient.label.singular
}

function IngredientsListItem({ listItem }: { listItem: IngredientsListType[number] }) {
  const ingredient = getIngredientBySlug(listItem.ingredient)
  return <li>{`${renderQuantity(listItem)} ${renderIngredient(ingredient, isPlural(listItem))}`}</li>
}

export function IngredientsList() {
  const { recipe } = useRecipeContext()

  const renderListItem = (listItem: IngredientsListType[number], index: number) => (
    <IngredientsListItem key={index} listItem={listItem} />
  )

  return <ul className="list-disc">{recipe.ingredients.map(renderListItem)}</ul>
}
