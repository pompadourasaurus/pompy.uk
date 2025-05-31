import type { CountableLabel } from "@/lib/types/noun-label"

const vowelSet = new Set("aeiou")

function startsWithVowel(text: string): boolean {
  if (text.length === 0) throw new Error()
  const firstCharacter = text.toLowerCase().charAt(0)
  return vowelSet.has(firstCharacter)
}

export function bestGuessIndefiniteArticle(noun: string): string {
  if (startsWithVowel(noun)) return "an"
  return "a"
}

export function getIndefiniteArticle(noun: CountableLabel): string {
  if (noun.indefiniteArticle != null) return noun.indefiniteArticle
  return bestGuessIndefiniteArticle(noun.singular)
}
