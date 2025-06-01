import { RecipeHeading } from "@/components/recipes/recipe-heading"

import { SuppliesSection } from "@/components/recipes/supplies-section"
import { defineRecipe } from "@/lib/recipes/define-recipe"
import { fraction } from "@/lib/utils"

export default defineRecipe({
  slug: "white-chocolate-and-raspberry-cookies",
  title: "White Chocolate and Raspberry Cookies",
  type: "bake",
  excerpt:
    "The americans have actually done something right bc these are yummy even if they look like you've successfully managed to bruise and inanimate object. That's their whole appeal so just lean into the aenemic energy.",
  date: new Date("2025-03-08"),
  coverImageProps: {
    src: "/assets/recipes/white-chocolate-and-raspberry-cookies/wc-cookies.jpg",
    width: 638,
    height: 509,
    alt: "top-down photograph of raspberry and white chocolate cookies in a baking tray",
  },
  openGraphImageUrl: "/assets/recipes/white-chocolate-and-raspberry-cookies/high-zoom-rotated.webp",
  ingredients: [
    {
      ingredient: "unsalted-butter",
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
  kitchenware: [],
  content: () => (
    <>
      <section id="preamble">
        <RecipeHeading className="mt-0">Preamble</RecipeHeading>
        The americans have actually done something right bc these are yummy even if they look like you've successfully
        managed to bruise an inanimate object. That's their whole appeal so just lean into the anaemia energy.
      </section>

      <SuppliesSection />

      <section id="method">
        <RecipeHeading>Method</RecipeHeading>
        <ol className="list-decimal">
          <li>Pre-heat (fan) oven to 180 degrees</li>
          <li>Mix the butter and cream cheese in a large bowl</li>
          <li>Once combined, add the sugar and mix</li>
          <li>Beat the egg gently then mix it in</li>
          <li>Add dry ingredients (use a sieve if you love puppies), mix</li>
          <li>Bake for 6 minutes at 180 degrees</li>
          <li>Wack the tray so they cringle - yes that is a very real term and surely not one I just made up</li>
          <li>Return tray to the oven to bake for another 7 minutes</li>
          <li>Allow to cool (using a spatula to transfer off the tray is easiest)</li>
        </ol>
      </section>
    </>
  ),
})
