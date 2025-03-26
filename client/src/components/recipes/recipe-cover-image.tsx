import Image from "next/image"
import Link from "next/link"

import type { Recipe } from "@/lib/types/recipe"
import { cn } from "@/lib/utils"

type Props = Pick<Recipe, "coverImageProps" | "slug" | "title">

export const RecipeCoverImage = ({
  slug,
  coverImageProps: { className: coverImageClassName, ...coverImageProps },
  title,
}: Props) => {
  const image = (
    <Image
      className={cn(
        coverImageClassName,
        "aspect-[3/2] object-cover bg-secondary rounded-lg shadow-sm w-full hover:shadow-lg transition-shadow duration-200",
      )}
      {...coverImageProps}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/recipes/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
