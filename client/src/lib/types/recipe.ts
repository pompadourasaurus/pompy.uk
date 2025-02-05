import type Image from "next/image"
import type * as React from "react"

type FC = React.FC<React.HTMLAttributes<HTMLElement>>

export type Recipe = {
  slug: string
  title: string
  excerpt: string
  date: Date
  coverImageProps: React.ComponentProps<typeof Image>
  openGraphImageUrl: string
  content: FC
}
