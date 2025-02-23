"use client"

import * as React from "react"

import { useTableOfContents } from "@/components/contextual-table-of-contents"
import { useSections } from "@/hooks/use-sections"
import { cn } from "@/lib/utils"

export function RecipeBodyWrapper({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const recipeBodyRef = React.useRef<HTMLDivElement | null>(null)
  const sections = useSections(recipeBodyRef.current)
  const { setRootSpec } = useTableOfContents()

  React.useEffect(() => {
    setRootSpec(sections)
  }, [setRootSpec, sections])

  return (
    <div ref={recipeBodyRef} className={cn("max-w-2xl mx-auto text-lg space-y-6", className)} {...props}>
      {children}
    </div>
  )
}
