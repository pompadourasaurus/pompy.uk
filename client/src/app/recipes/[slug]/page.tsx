import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes"

import { Header } from "@/components/header"
import { RecipeBody } from "@/components/recipes/recipe-body"
import { RecipeHeader } from "@/components/recipes/recipe-header"

export default async function RecipePage(props: Params) {
  const params = await props.params
  const recipe = getRecipeBySlug(params.slug)

  if (recipe == null) {
    return notFound()
  }

  return (
    <main>
      <div className="container">
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
      </div>
    </main>
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
