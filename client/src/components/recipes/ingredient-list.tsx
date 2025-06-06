"use client"

import type * as React from "react"

import { useRecipeContext } from "@/components/recipes/recipe-context"
import { getIngredientBySlug } from "@/lib/ingredients"
import { isPlural, renderQuantity } from "@/lib/quantities"
import type { Ingredient } from "@/lib/types/ingredient"
import type { IngredientList as IngredientListType } from "@/lib/types/ingredient-list"
import type { Quantity } from "@/lib/types/quantity"

function renderIngredient(ingredient: Ingredient, quantity: Quantity): string {
  if (ingredient.label.countable === false) return ingredient.label.noun
  if (isPlural(quantity)) return ingredient.label.plural
  return ingredient.label.singular
}

function IngredientListItem({ listItem }: { listItem: IngredientListType[number] }) {
  const ingredient = getIngredientBySlug(listItem.ingredient)
  const quantity: Quantity = listItem
  return <li>{`${renderQuantity(quantity)} ${renderIngredient(ingredient, quantity)}`}</li>
}

export function IngredientList() {
  const { recipe } = useRecipeContext()
  if (recipe.ingredients.length === 0) return null

  const renderListItem = (listItem: IngredientListType[number], index: number) => (
    <IngredientListItem key={index} listItem={listItem} />
  )

  return <ul className="list-disc">{recipe.ingredients.map(renderListItem)}</ul>
}

export function TitledIngredientList(props: Omit<React.HTMLAttributes<HTMLDivElement>, "children">) {
  const { recipe } = useRecipeContext()
  if (recipe.ingredients.length === 0) return null

  return (
    <div {...props}>
      <strong>Ingredients</strong>
      <IngredientList />
    </div>
  )
}
