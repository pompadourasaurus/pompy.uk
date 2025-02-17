import type { Recipe } from "@/lib/types/recipe"

type Props = Pick<Recipe, "content">

export function RecipeBody({ content: Content }: Props) {
  return (
    <div className="max-w-2xl mx-auto text-lg space-y-6">
      <Content />
    </div>
  )
}
