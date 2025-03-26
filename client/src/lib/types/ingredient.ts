type CountableLabel = {
  countable: true
  singular: string
  plural: string
}

type UncountableLabel = {
  countable: false
  noun: string
}

type NounLabel = CountableLabel | UncountableLabel

export type IngredientInput = {
  slug: string
  label: NounLabel
}

const isIngredientSymbol = Symbol("is-ingredient")
export type Ingredient = IngredientInput & { [isIngredientSymbol]: true }
