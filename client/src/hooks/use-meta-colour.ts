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
