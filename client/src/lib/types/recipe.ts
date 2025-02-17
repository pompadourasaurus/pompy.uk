import type Image from "next/image"
import type * as React from "react"

import type { RecipeTypeSlug } from "@/lib/recipes/recipe-types"

type FC = React.FC<React.HTMLAttributes<HTMLElement>>

export type Recipe = {
  slug: string
  title: string
  type: RecipeTypeSlug
  excerpt: string
  date: Date
  coverImageProps: React.ComponentProps<typeof Image>
  openGraphImageUrl: string
  content: FC
}
