import type * as React from "react"

import { cn } from "@/lib/utils"

export function RecipeSection({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("scroll-mt-20", className)} {...props} />
}
