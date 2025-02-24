import { defineRecipe } from "@/lib/recipes/define-recipe"

export default defineRecipe({
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
      <section id="preamble">
        <h2>Preamble</h2>
        This recipe is really cool!
      </section>

      <section id="ingredients">
        <h2>Ingredients</h2>
        <ul>
          <li>a smattering of flour</li>
          <li>1 metric tonne of sugar</li>
          <li>1/2 cup milk</li>
        </ul>
      </section>

      <section id="method">
        <h2>Method</h2>
        <ol>
          <li>eat the sugar</li>
          <li>drink the milk</li>
        </ol>

        <section id="subsection">
          <h3>Subsection</h3>
          <ol>
            <li>foobar</li>
            <li>barbaz</li>
          </ol>
        </section>
      </section>
    </>
  ),
})
