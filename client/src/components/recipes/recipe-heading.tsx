import { LinkIcon } from "lucide-react"
import Link from "next/link"
import type * as React from "react"

import { cn } from "@/lib/utils"

function AnchorLabel(props: React.ComponentProps<typeof Link>) {
  return (
    <Link {...props}>
      <LinkIcon className="size-full text-muted-foreground/ hover:text-gray-400" />
    </Link>
  )
}

type RecipeHeadingProps = React.ComponentProps<"h2"> & {
  linkHref?: string
}

export function RecipeHeading({ linkHref, children, className, ...props }: RecipeHeadingProps) {
  return (
    <h2
      className={cn("flex flex-row gap-2 items-center", "text-xl fo nt-semibold pb-4 border-b mt-10 mb-4", className)}
      {...props}
    >
      {children}
      {linkHref && <AnchorLabel href={linkHref} className="inline size-3" />}
    </h2>
  )
}
