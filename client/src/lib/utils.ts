import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { Fraction } from "@/lib/types/fraction"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fraction(a: number, b: number): Fraction {
  return { numerator: a, denominator: b }
}

export function optionsMerge<TInput extends Record<string, unknown>, TResolved extends TInput>(
  options: TInput | null | undefined,
  defaults: TResolved,
): Readonly<TResolved> {
  if (options == null) return defaults
  const resolvedOptions: Record<string, unknown> = Object.assign({}, options)
  for (const [key, value] of Object.entries(defaults)) {
    resolvedOptions[key] ??= value
  }
  return resolvedOptions as TResolved
}
