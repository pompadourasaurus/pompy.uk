import Image from "next/image"

import { IngredientsList } from "@/components/recipes/ingredients-list"

import { defineRecipe } from "@/lib/recipes/define-recipe"
import { cn } from "@/lib/utils"

function RecipeHeading({ children, className, ...props }: React.HTMLAttributes<HTMLHeadElement>) {
  return (
    <h2 className={cn("text-xl font-semibold pb-4 border-b mt-10 mb-4", className)} {...props}>
      {children}
    </h2>
  )
}

export default defineRecipe({
  slug: "brownies",
  title: "Brownies",
  type: "bake",
  excerpt:
    "I know everyone claims they make the best brownies. They are wrong. " +
    "I do. But now you can too. So now you can brag you make the best brownies. You're so welcome.",
  date: new Date("2025-05-31"),
  coverImageProps: {
    src: "/assets/recipes/brownies/brownies-uncut.jpg",
    width: 709,
    height: 942,
    alt: "photograph of freshly baked brownies",
  },
  openGraphImageUrl: "/public/assets/recipes/brownies/brownies-uncut.jpg",
  ingredients: [
    {
      ingredient: "unsalted-butter",
      amount: 150,
      unit: "grams",
    },
    {
      ingredient: "light-brown-sugar",
      amount: 300,
      unit: "grams",
    },
    {
      ingredient: "eggs",
      amount: 2,
      unit: "count",
    },
    {
      ingredient: "vanilla-extract",
      amount: 1,
      unit: "tsp",
    },
    {
      ingredient: "plain-flour",
      amount: 125,
      unit: "grams",
    },
    {
      ingredient: "cocoa-powder",
      amount: 20,
      unit: "grams",
    },
    {
      ingredient: "baking-powder",
      amount: 1,
      unit: "tsp",
    },
    {
      ingredient: "milk-chocolate",
      amount: 100,
      unit: "grams",
    },
  ],
  content: () => (
    <>
      <section id="preamble">
        <RecipeHeading className="mt-0">Preamble</RecipeHeading>I know everyone claims they make the best brownies. They
        are wrong. I do. But now you can too. So now you can brag you make the best brownies. You're so welcome. They
        are the perfect mix of firm and gooey and have enough sugar to trigger a migraine. AKA they're perfect
      </section>

      <section id="ingredients">
        <RecipeHeading>Ingredients</RecipeHeading>
        <IngredientsList />
      </section>

      <section id="photo">
        <RecipeHeading>What to do if your tray is too big</RecipeHeading>
        <Image
          src="/assets/recipes/brownies/brownies-cropped.png"
          alt="photograph of freshly baked brownies in a square tin"
          width={1070}
          height={985}
        />
      </section>

      <section id="method">
        <RecipeHeading>Method</RecipeHeading>
        <ol className="list-decimal">
          <li>Pre-heat (fan) oven to 180 degrees</li>
          <li>
            Use a bain-marie (water bath where you put a bowl over a steaming pot, melting the contents of the bowl) to
            melt the chocolate
          </li>
          <li>Stirring continuously, add the butter</li>
          <li>When fully melted, take off the heat and set aside</li>
          <li>In a second bowl, beat the eggs then mix in the sugar and vanilla extract</li>
          <li>In a third bowl, sieve the dry ingredients (flour, cocoa powder, baking powder, salt)</li>
          <li>Fold the contents of the first bowl (chocolate and butter mixture) into the second bowl</li>
          <li>Fold in the contents from the third bowl</li>
          <li>Add white chocolate chunks if preferred, then spoon into lined baking tray</li>
          <li>Bake for 35 minutes, removing from the oven whilst they still seem slightly underdone</li>
          <li>ALLOW TO COOL in tray for 20 minutes (I promise they're worth the wait, this is where they firm up)</li>
          <li>Profit</li>
        </ol>
      </section>
    </>
  ),
})
