import type { Recipe } from "@/lib/types/recipe"

import { RecipePreview } from "./recipe-preview"

type Props = {
  recipes: Recipe[]
}

export function MoreRecipes({ recipes }: Props) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">More Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {recipes.map((recipe) => (
          <RecipePreview key={recipe.slug} {...recipe} />
        ))}
      </div>
    </section>
  )
}
