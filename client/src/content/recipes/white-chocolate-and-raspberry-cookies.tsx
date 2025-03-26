import { IngredientsList } from "@/components/recipes/ingredients-list"

import { defineRecipe } from "@/lib/recipes/define-recipe"
import { cn, fraction } from "@/lib/utils"

function RecipeHeading({ children, className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return (
    <h2 className={cn("text-xl font-semibold pb-4 border-b mt-10 mb-4", className)} {...props}>
      {children}
    </h2>
  )
}

export default defineRecipe({
  slug: "white-chocolate-and-raspberry-cookies",
  title: "White Chocolate and Raspberry Cookies",
  type: "bake",
  excerpt: "These unusual American-style cookies were really tasty 😋",
  date: new Date("2025-03-08"),
  coverImageProps: {
    src: "/assets/recipes/white-chocolate-and-raspberry-cookies/top-down.webp",
    width: 619,
    height: 821,
    alt: "top-down photograph of a raspberry and white chocolate cookie in a baking tray",
  },
  openGraphImageUrl: "/assets/recipes/white-chocolate-and-raspberry-cookies/high-zoom-rotated.webp",
  ingredients: [
    {
      ingredient: "butter",
      amount: 113,
      unit: "grams",
    },
    {
      ingredient: "light-brown-sugar",
      amount: 110,
      unit: "grams",
    },
    {
      ingredient: "caster-sugar",
      amount: 67,
      unit: "grams",
    },
    {
      ingredient: "cream-cheese",
      amount: 56,
      unit: "grams",
    },
    {
      ingredient: "eggs",
      amount: 1,
      unit: "count",
    },
    {
      ingredient: "vanilla-extract",
      amount: 1,
      unit: "tsp",
    },
    {
      ingredient: "almond-extract",
      amount: fraction(1, 2),
      unit: "tsp",
    },
    {
      ingredient: "cornstarch",
      amount: 1,
      unit: "tsp",
    },
    {
      ingredient: "baking-powder",
      amount: fraction(5, 4),
      unit: "tsp",
    },
    {
      ingredient: "baking-soda",
      amount: fraction(3, 4),
      unit: "tsp",
    },
    {
      ingredient: "salt",
      amount: 1,
      unit: "tsp",
    },
    {
      ingredient: "plain-flour",
      amount: 250,
      unit: "grams",
    },
    {
      ingredient: "white-chocolate",
      amount: 200,
      unit: "grams",
      detail: "in chunks",
    },
    {
      ingredient: "frozen-raspberries",
      amount: 95,
      unit: "grams",
    },
  ],
  content: () => (
    <>
      <section id="preamble">
        <RecipeHeading className="mt-0">Preamble</RecipeHeading>
        These unusual American-style cookies were really tasty 😋
      </section>

      <section id="ingredients">
        <RecipeHeading>Ingredients</RecipeHeading>
        <IngredientsList />
      </section>

      <section id="method">
        <RecipeHeading>Method</RecipeHeading>
        <ol className="list-decimal">
          <li>Pre-heat (fan) oven to 180 degrees</li>
          <li>Mix the butter and cream cheese in a large bowl until ...</li>
          <li>Add the sugar, mix until ...</li>
          <li>Introduce the egg, mix until ...</li>
          <li>Add dry ingredients, mix well</li>
          <li>Bake for 6 minutes at 180 degrees</li>
          <li>Wack the tray so they cringle</li>
          <li>Return tray to the oven; bake for another 7 minutes at 180 degrees</li>
        </ol>
      </section>
    </>
  ),
})
