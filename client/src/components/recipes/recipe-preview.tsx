import Image from "next/image"
import Link from "next/link"

import { DateFormatter } from "@/components/date-formatter"
import type { Recipe } from "@/lib/types/recipe"

export function RecipePreview({ title, coverImageProps, date, excerpt, slug }: Recipe) {
  return (
    <div>
      <div className="mb-5">
        <Image {...coverImageProps} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/recipes/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter date={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
