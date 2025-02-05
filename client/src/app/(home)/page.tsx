import * as React from "react"

import { onest } from "@/lib/fonts"
import { cn } from "@/lib/utils"

function Title() {
  return <h1 className={cn(onest.className, "text-4xl lg:text-7xl")}>pompy.uk</h1>
}

export default function HomePage() {
  return (
    <main className="flex flex-col space-y-10 items-center justify-center">
      <Title />
    </main>
  )
}
