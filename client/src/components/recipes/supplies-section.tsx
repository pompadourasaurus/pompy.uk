import type * as React from "react"

import { TitledIngredientList } from "@/components/recipes/ingredient-list"
import { TitledKitchenwareList } from "@/components/recipes/kitchenware-list"
import { RecipeHeading } from "@/components/recipes/recipe-heading"
import { RecipeSection } from "@/components/recipes/recipe-section"

type SuppliesSectionProps = {
  headingText?: string | null | undefined
} & Omit<React.ComponentProps<"div">, "children">

export function SuppliesSection({ headingText, ...props }: SuppliesSectionProps) {
  headingText ??= "Supplies"
  return (
    <RecipeSection id="supplies" {...props}>
      <RecipeHeading>{headingText}</RecipeHeading>
      <div className="flex gap-4 flex-col md:flex-row">
        <TitledIngredientList id="ingredients" className="flex-1" />
        <TitledKitchenwareList id="kitchenware" className="flex-1" />
      </div>
    </RecipeSection>
  )
}
