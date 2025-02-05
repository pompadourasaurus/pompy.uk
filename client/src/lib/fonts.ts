import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"

export const inter = Inter({
  variable: "--font-onest",
  weight: "variable",
  subsets: ["latin"],
})

export const fontVariableClassNames = cn(inter.variable)
