import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes"

import { Header } from "@/components/header"
import type { LinkTreeRootSpec } from "@/components/link-tree"
import { RecipeBody } from "@/components/recipes/recipe-body"
import { RecipeHeader } from "@/components/recipes/recipe-header"
import { TableOfContents } from "@/components/table-of-contents"

export default async function RecipePage(props: Params) {
  const params = await props.params
  const recipe = getRecipeBySlug(params.slug)

  if (recipe == null) {
    return notFound()
  }

  const toc: LinkTreeRootSpec = {
    children: [
      {
        title: "foobar",
        href: "#baz",
      },
    ],
  }

  return (
    <div className="lg:gap-10 xl:grid xl:grid-cols-[1fr_150px]">
      <main className="container py-6 lg:py-8">
        <Header />
        <article className="mb-32">
          <RecipeHeader
            slug={recipe.slug}
            title={recipe.title}
            coverImageProps={recipe.coverImageProps}
            date={recipe.date}
          />
          <RecipeBody content={recipe.content} />
        </article>
      </main>

      <aside className="top-14 hidden text-sm h-[calc(100vh-3.5rem)] w-full shrink-0 xl:sticky xl:block">
        <div className="no-scrollbar h-full overflow-auto py-10">
          <TableOfContents toc={toc} />
        </div>
      </aside>
    </div>
  )
}

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getRecipeBySlug(params.slug)

  if (post == null) return notFound()

  const { title } = post

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      description: post.excerpt,
      images: [post.openGraphImageUrl],
    },
  }
}

export async function generateStaticParams() {
  const recipes = getAllRecipes()

  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }))
}
