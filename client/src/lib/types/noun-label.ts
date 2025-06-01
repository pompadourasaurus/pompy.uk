export type CountableLabel = {
  countable: true
  singular: string
  plural: string
  indefiniteArticle?: "a" | "an" | null | undefined
}

export type UncountableLabel = {
  countable: false
  noun: string
}

export type NounLabel = CountableLabel | UncountableLabel
