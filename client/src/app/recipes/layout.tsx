import type * as React from "react"

import { RecipesNav } from "@/components/recipes/recipes-nav"
import { recipesNavConfig } from "@/config/recipes-nav"
import { cn } from "@/lib/utils"

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="container-wrapper min-h-screen">
      <div
        className={cn(
          "container flex-1 items-start",
          "md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6",
          "lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10",
        )}
      >
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 border-r md:sticky md:block">
          <div className="no-scrollbar h-full overflow-auto py-6 pr-4 lg:py-8">
            <RecipesNav config={recipesNavConfig} />
          </div>
        </aside>
        {children}
      </div>
    </div>
  )
}
