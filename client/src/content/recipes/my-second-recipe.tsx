import type { Recipe } from "@/lib/types/recipe"

export const mySecondRecipe = {
  slug: "my-second-recipe",
  title: "My Second Recipe",
  type: "meal",
  excerpt: "this recipe is also really cool!",
  date: new Date("2024-12-25"),
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
        <h2>Preamble</h2>
        This recipe is really cool!
      </section>

      <section>
        <h2>Ingredients</h2>
        <ul>
          <li>a smattering of flour</li>
          <li>1 metric tonne of sugar</li>
          <li>1/2 cup milk</li>
        </ul>
      </section>

      <section>
        <h2>Method</h2>
        <ol>
          <li>eat the sugar</li>
          <li>drink the milk</li>
        </ol>
      </section>
    </>
  ),
} as const satisfies Recipe
