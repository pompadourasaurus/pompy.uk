import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type * as React from "react"

import { getAllRecipes, getRecipeBySlug } from "@/lib/recipes"

import { ContextualTableOfContents, TableOfContentsContextProvider } from "@/components/contextual-table-of-contents"
import { Header } from "@/components/header"
import { RecipeBodyWrapper } from "@/components/recipes/recipe-body-wrapper"
import { RecipeContextProvider } from "@/components/recipes/recipe-context"
import { RecipeHeader } from "@/components/recipes/recipe-header"

type RecipePageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function RecipePage(props: RecipePageProps) {
  const params = await props.params
  const recipe = getRecipeBySlug(params.slug)

  if (recipe == null) {
    return notFound()
  }

  const { content: RecipeContent, ...recipeMeta } = recipe

  return (
    <TableOfContentsContextProvider>
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
            <RecipeBodyWrapper>
              <RecipeContextProvider recipe={recipeMeta}>
                <RecipeContent />
              </RecipeContextProvider>
            </RecipeBodyWrapper>
          </article>
        </main>

        <RecipePageAside>
          <ContextualTableOfContents />
        </RecipePageAside>
      </div>
    </TableOfContentsContextProvider>
  )
}

function RecipePageAside({ children }: { children?: React.ReactNode }) {
  return (
    <aside className="top-14 hidden text-sm h-[calc(100vh-3.5rem)] w-full shrink-0 xl:sticky xl:block">
      <div className="no-scrollbar h-full overflow-auto py-10">{children}</div>
    </aside>
  )
}

export async function generateMetadata(props: RecipePageProps): Promise<Metadata> {
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
