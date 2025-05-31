export type CountableLabel = {
  countable: true
  singular: string
  plural: string
}

export type UncountableLabel = {
  countable: false
  noun: string
}

export type NounLabel = CountableLabel | UncountableLabel
