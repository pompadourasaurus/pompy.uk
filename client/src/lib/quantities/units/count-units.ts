import type { UnitInput } from "@/lib/types/unit"

export default [
  {
    slug: "count",
    type: "count",
    label: {
      singular: "",
      plural: "",
    },
  },
  {
    slug: "half-dozen",
    type: "count",
    label: {
      singular: "Half-Dozen",
      plural: "Half-Dozens",
    },
  },
  {
    slug: "dozen",
    type: "count",
    label: {
      singular: "Dozen",
      plural: "Dozen",
    },
  },
] as const satisfies UnitInput[]
