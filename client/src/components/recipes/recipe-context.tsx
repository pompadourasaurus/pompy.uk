"use client"

import type { Recipe } from "@/lib/types/recipe"
import * as React from "react"

type RecipeContextProps = {
  recipe: Omit<Recipe, "content">
}

const RecipeContext = React.createContext<RecipeContextProps | null>(null)

export function useRecipeContext(): RecipeContextProps {
  const state = React.useContext(RecipeContext)
  if (state == null) throw Error("useRecipeContext() should only be used within recipes' content")
  return state
}

export function RecipeContextProvider({ recipe, children }: RecipeContextProps & { children: React.ReactNode }) {
  return <RecipeContext.Provider value={{ recipe }}>{children}</RecipeContext.Provider>
}
