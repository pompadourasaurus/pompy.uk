import type { Kitchenware, KitchenwareInput } from "@/lib/types/kitchenware"

import someKitchenwares from "./some-kitchenwares"

const kitchenwares = [...someKitchenwares] as const satisfies KitchenwareInput[]

export type KitchenwareSlug = (typeof kitchenwares)[number]["slug"]
export type StrongKitchenware = Kitchenware & { slug: KitchenwareSlug }

// biome-ignore format: formatter ruins readability
const kitchenwaresMap = (
  new Map(kitchenwares.map((kitchenware) => [kitchenware.slug, kitchenware]))
) satisfies Map<string, KitchenwareInput> as Map<string, StrongKitchenware>

export function getKitchenwareSlugs(): KitchenwareSlug[] {
  return Array.from(kitchenwaresMap.keys()) as KitchenwareSlug[]
}

export function getKitchenwareBySlug(slug: KitchenwareSlug): StrongKitchenware
export function getKitchenwareBySlug(slug: string): StrongKitchenware | undefined
export function getKitchenwareBySlug(slug: string): StrongKitchenware | undefined {
  return kitchenwaresMap.get(slug)
}

export function getAllKitchenwares(): readonly Readonly<StrongKitchenware>[] {
  return Array.from(kitchenwares) satisfies KitchenwareInput[] as Readonly<StrongKitchenware>[]
}
