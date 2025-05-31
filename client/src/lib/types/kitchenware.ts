import type { NounLabel } from "@/lib/types/noun-label"

export type KitchenwareInput = {
  slug: string
  label: NounLabel
}

const isKitchenwareSymbol = Symbol("is-ingredient")
export type Kitchenware = KitchenwareInput & { [isKitchenwareSymbol]: true }
