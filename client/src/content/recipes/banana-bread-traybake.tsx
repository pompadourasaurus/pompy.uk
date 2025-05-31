import { IngredientList } from "@/components/recipes/ingredient-list"

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
  slug: "banana-bread-traybake",
  title: "Banana Bread Traybake",
  type: "bake",
  excerpt: "My bananas are always going bad and that is very cringe so make banana bread",
  date: new Date("2025-05-30"),
  coverImageProps: {
    src: "/assets/recipes/banana-bread-traybake/banana-bread-cross-section.jpg",
    width: 4080,
    height: 3072,
    alt: "cross-section photograph of a banana bread traybake on a chopping board",
  },
  openGraphImageUrl: "/public/assets/recipes/banana-bread-traybake/banana-bread-cross-section.jpg",
  ingredients: [
    {
      ingredient: "unsalted-butter",
      amount: 140,
      unit: "grams",
    },
    {
      ingredient: "caster-sugar",
      amount: 140,
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
      ingredient: "self-raising-flour",
      amount: 140,
      unit: "grams",
    },
    {
      ingredient: "baking-powder",
      amount: 1,
      unit: "tsp",
    },
    {
      ingredient: "bananas",
      fromAmount: 2,
      toAmount: 3,
      unit: "count",
      quantityType: "range",
    },
    {
      ingredient: "milk-chocolate",
      amount: 150,
      unit: "grams",
    },
  ],
  content: () => (
    <>
      <section id="preamble">
        <RecipeHeading className="mt-0">Preamble</RecipeHeading>
        My bananas are always going bad and that is very cringe so make banana bread before they go gross and mouldy.
        This recipe produces 10 squares of banana bread, so I typically double the recipe and share with friends :)
      </section>

      <section id="ingredients">
        <RecipeHeading>Ingredients</RecipeHeading>
        <IngredientList />
      </section>

      <section id="method">
        <RecipeHeading>Method</RecipeHeading>
        <ol className="list-decimal">
          <li>Pre-heat (fan) oven to 180 degrees</li>
          <li>Mix the butter and sugar in a large bowl</li>
          <li>Add the sugar, mix</li>
          <li>Introduce the egg, mix</li>
          <li>Introduce mashed banana, mix</li>
          <li>Add the vanilla extract, mix</li>
          <li>Add dry ingredients, mix</li>
          <li>Bake for 35 minutes at 180 degrees</li>
          <li>Allow to cool in tray for 20 minutes</li>
          <li>
            Melt chocolate in microwave-safe bowl, stirring every 30 seconds to prevent burning. Take chocolate out of
            microwave before fully melted, using the residual temperature to finish the melting process.
          </li>
          <li>Spoon the melted chocolate over the banana bread, using a large spoon to smooth</li>
          <li>Wait to cool, then use bread knife to section</li>
        </ol>
      </section>
    </>
  ),
})
