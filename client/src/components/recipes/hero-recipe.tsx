import Link from "next/link"

import { DateFormatter } from "@/components/date-formatter"
import type { Recipe } from "@/lib/types/recipe"

import { RecipeCoverImage } from "./recipe-cover-image"

export function HeroRecipe({ title, coverImageProps, date, excerpt, slug }: Recipe) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <RecipeCoverImage slug={slug} title={title} coverImageProps={coverImageProps} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/recipes/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter date={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  )
}
