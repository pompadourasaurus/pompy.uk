import { DateFormatter } from "@/components/date-formatter"
import type { Recipe } from "@/lib/types/recipe"

import { RecipeCoverImage } from "./recipe-cover-image"
import { RecipeTitle } from "./recipe-title"

type Props = Pick<Recipe, "slug" | "title" | "coverImageProps" | "date">

export function RecipeHeader({ slug, title, coverImageProps, date }: Props) {
  return (
    <>
      <RecipeTitle>{title}</RecipeTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <RecipeCoverImage slug={slug} title={title} coverImageProps={coverImageProps} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter date={date} />
        </div>
      </div>
    </>
  )
}
