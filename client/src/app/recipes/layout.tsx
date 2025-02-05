import type React from "react"

export default function RecipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen">{children}</div>
}
