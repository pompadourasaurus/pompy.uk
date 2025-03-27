"use client"

import { useRecipeContext } from "@/components/recipes/recipe-context"
import { getIngredientBySlug } from "@/lib/ingredients"
import { getUnitBySlug } from "@/lib/quantities/units"
import { isNumber } from "@/lib/type-guards"
import type { Fraction } from "@/lib/types/fraction"
import type { Ingredient } from "@/lib/types/ingredient"
import type { IngredientsList as IngredientsListType } from "@/lib/types/ingredients-list"
import type {
  Quantity,
  QuantityRange,
  SpecialQuantityRange,
  SpecialSpecificQuantity,
  SpecificQuantity,
} from "@/lib/types/quantity"

function renderAmount(amount: number | Fraction): string {
  if (isNumber(amount)) return `${amount}`
  // todo: fancy fraction rendering, anyone?
  return `${amount.numerator}/${amount.denominator}`
}

function renderOrdinaryQuantity(quantity: SpecificQuantity | QuantityRange): string {
  const unit = getUnitBySlug(quantity.unit)

  if (quantity.quantityType === "range") {
    const unitString = unit.label.symbol ?? unit.label.plural
    return `${renderAmount(quantity.fromAmount)}-${renderAmount(quantity.toAmount)}${unitString}`
  }

  const isPlural = quantity.amount !== 1
  const unitString = unit.label.symbol ?? (isPlural ? unit.label.plural : unit.label.singular)
  return `${renderAmount(quantity.amount)}${unitString}`
}

function renderSpecialQuantity(quantity: SpecialSpecificQuantity | SpecialQuantityRange): string {
  if (quantity.quantityType === "special-range") {
    return `${renderAmount(quantity.fromAmount)}-${renderAmount(quantity.toAmount)} ${quantity.label}`
  }

  return `${renderAmount(quantity.amount)} ${quantity}`
}

function renderQuantity(quantity: Quantity): string {
  if (quantity.quantityType == null || quantity.quantityType === "specific" || quantity.quantityType === "range")
    return renderOrdinaryQuantity(quantity)

  if (quantity.quantityType === "special-specific" || quantity.quantityType === "special-range")
    return renderSpecialQuantity(quantity)

  throw new Error(`tried to render quantity with unknown quantity type ${quantity.quantityType}`)
}

function renderIngredient(ingredient: Ingredient, plural: boolean): string {
  if (ingredient.label.countable === false) return ingredient.label.noun
  if (plural) return ingredient.label.plural
  return ingredient.label.singular
}

function isPlural(quantity: Quantity): boolean {
  return quantity.quantityType === "range" || quantity.quantityType === "special-range" || quantity.amount !== 1
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
