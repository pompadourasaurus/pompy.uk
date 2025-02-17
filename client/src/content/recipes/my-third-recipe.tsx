import type { Recipe } from "@/lib/types/recipe"

export const myThirdRecipe = {
  slug: "my-third-recipe",
  title: "My Third Recipe",
  type: "cake",
  excerpt: "this recipe is not as cool as the others.",
  date: new Date("2024-12-24"),
  coverImageProps: {
    src: "/assets/recipes/cake.png",
    width: 1020,
    height: 768,
    alt: "photograph of a Bundt cake",
  },
  openGraphImageUrl: "/assets/recipes/cake.png",
  content: () => (
    <>
      <section>
        <h1>Preamble</h1>
        This recipe is really cool!
      </section>

      <section>
        <h1>Ingredients</h1>
        <ul>
          <li>a smattering of flour</li>
          <li>1 metric tonne of sugar</li>
          <li>1/2 cup milk</li>
        </ul>
      </section>

      <section>
        <h1>Method</h1>
        <ol>
          <li>eat the sugar</li>
          <li>drink the milk</li>
        </ol>
      </section>
    </>
  ),
} as const satisfies Recipe
