import { getIndefiniteArticle } from "@/lib/indefinite-article"
import { getUnitBySlug } from "@/lib/quantities/units"
import { isNumber } from "@/lib/type-guards"
import { Complete } from "@/lib/types/extra-utility-types"
import type { Fraction } from "@/lib/types/fraction"
import type { NounLabel } from "@/lib/types/noun-label"
import type {
  Quantity,
  QuantityRange,
  SpecialQuantityRange,
  SpecialSpecificQuantity,
  SpecificQuantity,
} from "@/lib/types/quantity"
import { optionsMerge } from "@/lib/utils"
import { render } from "react-dom"

const unicodeFractions = new Map<string, string>([
  ["1/2", "½"],
  ["1/3", "⅓"],
  ["2/3", "⅔"],
  ["1/4", "¼"],
  ["3/4", "¾"],
  ["1/5", "⅕"],
  ["2/5", "⅖"],
  ["3/5", "⅗"],
  ["4/5", "⅘"],
  ["1/6", "⅙"],
  ["5/6", "⅚"],
  ["1/7", "⅐"],
  ["1/8", "⅛"],
  ["3/8", "⅜"],
  ["5/8", "⅝"],
  ["7/8", "⅞"],
  ["1/9", "⅑"],
  ["1/10", "⅒"],
])

function renderAmount(amount: number | Fraction): string {
  if (isNumber(amount)) return `${amount}`
  const quotient = (amount.numerator / amount.denominator) | 0 // bitwise OR implicitly 'casts' to integer
  const remainder = amount.numerator % amount.denominator
  if (remainder === 0) return `${quotient}`
  let remainderString = `${remainder}/${amount.denominator}`
  remainderString = unicodeFractions.get(remainderString) ?? remainderString
  if (quotient === 0) return remainderString
  return `${quotient} ${remainderString}`
}

function renderOrdinaryQuantity(quantity: SpecificQuantity | QuantityRange): string {
  const unit = getUnitBySlug(quantity.unit)

  if (quantity.quantityType === "range") {
    const unitString = unit.label.symbol ?? ` ${unit.label.plural}`
    const amountString = `${renderAmount(quantity.fromAmount)}-${renderAmount(quantity.toAmount)}`
    if (unitString.trim().length === 0) return amountString
    return `${amountString}${unitString}`
  }

  const isPlural = quantity.amount !== 1
  const unitString = unit.label.symbol ?? (isPlural ? ` ${unit.label.plural}` : ` ${unit.label.singular}`)
  const amountString = renderAmount(quantity.amount)
  if (unitString.trim().length === 0) return amountString
  return `${amountString}${unitString}`
}

function renderSpecialQuantity(quantity: SpecialSpecificQuantity | SpecialQuantityRange): string {
  if (quantity.quantityType === "special-range") {
    return `${renderAmount(quantity.fromAmount)}-${renderAmount(quantity.toAmount)} ${quantity.label}`
  }

  return `${renderAmount(quantity.amount)} ${quantity}`
}

export function renderQuantity(quantity: Quantity): string {
  if (quantity.quantityType == null || quantity.quantityType === "specific" || quantity.quantityType === "range")
    return renderOrdinaryQuantity(quantity)

  if (quantity.quantityType === "special-specific" || quantity.quantityType === "special-range")
    return renderSpecialQuantity(quantity)

  throw new Error(`tried to render quantity with unknown quantity type ${quantity.quantityType}`)
}

export function renderQuantityFor(quantity: Quantity, noun: NounLabel): string {
  return renderQuantity(quantity)
}

export function renderQuantityUsingIndefiniteArticleForSingularAmountsFor(quantity: Quantity, noun: NounLabel): string {
  if (isSingular(quantity) && noun.countable) return getIndefiniteArticle(noun)
  return renderQuantityFor(quantity, noun)
}

export function isPlural(quantity: Quantity): boolean {
  return quantity.quantityType === "range" || quantity.quantityType === "special-range" || quantity.amount !== 1
}

export function isSingular(quantity: Quantity): quantity is SpecificQuantity | SpecialSpecificQuantity {
  return !isPlural(quantity)
}
