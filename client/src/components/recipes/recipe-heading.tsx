import type * as React from "react"

import { cn } from "@/lib/utils"

export function RecipeHeading({ className, ...props }: React.ComponentProps<"h2">) {
  return <h2 className={cn("text-xl font-semibold pb-4 border-b mt-10 mb-4", className)} {...props} />
}
