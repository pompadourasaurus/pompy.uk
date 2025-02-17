// https://github.com/shadcn-ui/ui/blob/4810f744e3b5ec23e7fcac14b8377448055e9560/apps/www/hooks/use-meta-color.ts

import { useTheme } from "next-themes"
import * as React from "react"

import { metaThemeColours } from "@/config/site"

export function useMetaColour() {
  const { resolvedTheme } = useTheme()

  const metaColor = React.useMemo(() => {
    return resolvedTheme !== "dark" ? metaThemeColours.light : metaThemeColours.dark
  }, [resolvedTheme])

  const setMetaColor = React.useCallback((color: string) => {
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color)
  }, [])

  return {
    metaColor,
    setMetaColor,
  }
}
