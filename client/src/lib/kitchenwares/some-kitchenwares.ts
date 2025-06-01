import type { KitchenwareInput } from "@/lib/types/kitchenware"

export default [
  {
    slug: "heat-resistant-bowl",
    label: {
      countable: true,
      singular: "Heat-Resistant Bowl",
      plural: "Heat-Resistant Bowls",
    },
  },
] as const satisfies KitchenwareInput[]
