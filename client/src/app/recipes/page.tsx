import { Intro } from "@/components/intro"
import { HeroRecipe } from "@/components/recipes/hero-recipe"
import { MoreRecipes } from "@/components/recipes/more-recipes"
import { getAllRecipes } from "@/lib/recipes"

export default function Index() {
  const allRecipes = getAllRecipes()

  const mostRecentRecipe = allRecipes[0]
  const remainingRecipes = allRecipes.slice(1)

  return (
    <main>
      <div className="container">
        <Intro />
        <HeroRecipe {...mostRecentRecipe} />
        {remainingRecipes.length > 0 && <MoreRecipes recipes={remainingRecipes} />}
      </div>
    </main>
  )
}
