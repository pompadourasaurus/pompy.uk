"use client"

import { useRecipeContext } from "@/components/recipes/recipe-context"
import { getIndefiniteArticle } from "@/lib/indefinite-article"
import { getKitchenwareBySlug } from "@/lib/kitchenwares"
import { isPlural, isSingular, renderQuantity } from "@/lib/quantities"
import type { Kitchenware } from "@/lib/types/kitchenware"
import type { KitchenwareList as KitchenwareListType } from "@/lib/types/kitchenware-list"
import type { Quantity } from "@/lib/types/quantity"

function renderKitchenware(kitchenware: Kitchenware, quantity: Quantity): string {
  if (kitchenware.label.countable === false) return kitchenware.label.noun
  if (isPlural(quantity)) return kitchenware.label.plural
  return kitchenware.label.singular
}

function renderKitchenwareAmount(kitchenware: Kitchenware, quantity: Quantity): string {
  if (isSingular(quantity) && kitchenware.label.countable) return getIndefiniteArticle(kitchenware.label)
  return renderQuantity(quantity)
}

function KitchenwareListItem({ listItem }: { listItem: KitchenwareListType[number] }) {
  const kitchenware = getKitchenwareBySlug(listItem.kitchenware)
  const quantity: Quantity = listItem
  return <li>{`${renderKitchenwareAmount(kitchenware, quantity)} ${renderKitchenware(kitchenware, quantity)}`}</li>
}

export function KitchenwareList() {
  const { recipe } = useRecipeContext()

  const renderListItem = (listItem: KitchenwareListType[number], index: number) => (
    <KitchenwareListItem key={index} listItem={listItem} />
  )

  return <ul className="list-disc">{recipe.kitchenware.map(renderListItem)}</ul>
}
