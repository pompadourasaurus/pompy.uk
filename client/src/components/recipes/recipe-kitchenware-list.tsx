"use client"

import type * as React from "react"

import { useRecipeContext } from "@/components/recipes/recipe-context"
import { getKitchenwareBySlug } from "@/lib/kitchenwares"
import { isPlural, renderQuantityUsingIndefiniteArticleForSingularAmountsFor } from "@/lib/quantities"
import type { Kitchenware } from "@/lib/types/kitchenware"
import type { KitchenwareList as KitchenwareListType } from "@/lib/types/kitchenware-list"
import type { Quantity } from "@/lib/types/quantity"

function renderKitchenware(kitchenware: Kitchenware, quantity: Quantity): string {
  if (kitchenware.label.countable === false) return kitchenware.label.noun
  if (isPlural(quantity)) return kitchenware.label.plural
  return kitchenware.label.singular
}

function renderKitchenwareAmount(kitchenware: Kitchenware, quantity: Quantity): string {
  return renderQuantityUsingIndefiniteArticleForSingularAmountsFor(quantity, kitchenware.label)
}

function KitchenwareListItem({ listItem }: { listItem: KitchenwareListType[number] }) {
  const kitchenware = getKitchenwareBySlug(listItem.kitchenware)
  const quantity: Quantity = listItem
  return <li>{`${renderKitchenwareAmount(kitchenware, quantity)} ${renderKitchenware(kitchenware, quantity)}`}</li>
}

export function KitchenwareList() {
  const { recipe } = useRecipeContext()
  if (recipe.kitchenware.length === 0) return null

  const renderListItem = (listItem: KitchenwareListType[number], index: number) => (
    <KitchenwareListItem key={index} listItem={listItem} />
  )

  return <ul className="list-disc">{recipe.kitchenware.map(renderListItem)}</ul>
}

export function TitledKitchenwareList(props: Omit<React.HTMLAttributes<HTMLDivElement>, "children">) {
  const { recipe } = useRecipeContext()
  if (recipe.kitchenware.length === 0) return null

  return (
    <div {...props}>
      <strong>Kitchenware</strong>
      <KitchenwareList />
    </div>
  )
}
