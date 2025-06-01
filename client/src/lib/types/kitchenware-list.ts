import type { KitchenwareSlug } from "@/lib/kitchenwares"
import type { Quantity } from "@/lib/types/quantity"

type KitchenwareListItem = {
  kitchenware: KitchenwareSlug
  detail?: string | null | undefined
} & Quantity

export type KitchenwareList = readonly KitchenwareListItem[]
