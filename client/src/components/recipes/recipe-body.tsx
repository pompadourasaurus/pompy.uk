import * as React from "react"

import type { Recipe } from "@/lib/types/recipe"

type RecipeBodyProps = Pick<Recipe, "content">

export const RecipeBody = React.forwardRef<HTMLDivElement, RecipeBodyProps>(({ content: Content }, ref) => {
  return (
    <div ref={ref} className="max-w-2xl mx-auto text-lg space-y-6">
      <Content />
    </div>
  )
})
RecipeBody.displayName = "RecipeBody"
