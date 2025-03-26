import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { Fraction } from "@/lib/types/fraction"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function fraction(a: number, b: number): Fraction {
  return { numerator: a, denominator: b }
}
