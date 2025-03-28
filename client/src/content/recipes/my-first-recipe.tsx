import { defineRecipe } from "@/lib/recipes/define-recipe"

export default defineRecipe({
  slug: "my-first-recipe",
  title: "My First Recipe",
  type: "cake",
  excerpt: "this recipe is really cool!",
  date: new Date("2025-01-01"),
  coverImageProps: {
    src: "/assets/recipes/cake.png",
    width: 1020,
    height: 768,
    alt: "photograph of a Bundt cake",
  },
  openGraphImageUrl: "/assets/recipes/cake.png",
  ingredients: [],
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
})
