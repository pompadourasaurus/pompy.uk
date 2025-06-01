import type * as React from "react"

import { TitledIngredientList } from "@/components/recipes/ingredient-list"
import { TitledKitchenwareList } from "@/components/recipes/kitchenware-list"
import { RecipeHeading } from "@/components/recipes/recipe-heading"

type SuppliesSectionProps = {
  headingText?: string | null | undefined
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">

export function SuppliesSection({ headingText, ...props }: SuppliesSectionProps) {
  headingText ??= "Supplies"
  return (
    <section id="supplies" {...props}>
      <RecipeHeading>{headingText}</RecipeHeading>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <TitledIngredientList />
        <TitledKitchenwareList />
      </div>
    </section>
  )
}
