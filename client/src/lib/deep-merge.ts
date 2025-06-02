// https://github.com/alexmarqs/zod-config/blob/0630f22e68b65ec1c25c2a9c867527745f84320e/src/lib/adapters/utils.ts
// Copyright (c) 2024 Alexandre Marques
// Alexandre Marques licenses zod-config to Lordfirespeed under the terms of the MIT license

import { isObject } from "@/lib/type-guards"
import type { StringRecord } from "@/lib/types/extra-utility-types"

type Mergeable = StringRecord<unknown>

export function deepMerge<T extends {}, U extends Mergeable>(target: T, source: U): T & U
export function deepMerge<T extends {}, U extends Mergeable, V extends Mergeable>(
  target: T,
  source1: U,
  source2: V,
): T & U & V
export function deepMerge<T extends {}, U extends Mergeable, V extends Mergeable, W extends Mergeable>(
  target: T,
  source1: U,
  source2: V,
  source3: W,
): T & U & V & W
export function deepMerge(target: Mergeable, ...sources: Mergeable[]): Mergeable {
  if (!sources.length) {
    return target
  }

  const source = sources.shift()

  if (source === undefined) {
    return target
  }

  if (isMergeableObject(target) && isMergeableObject(source)) {
    for (const key of Object.keys(source)) {
      if (source[key] === undefined) continue

      if (!isMergeableObject(source[key])) {
        target[key] = source[key]
        continue
      }

      const subTarget = target[key]
      if (!isMergeableObject(subTarget)) {
        target[key] = deepMerge({}, source[key])
        continue
      }

      deepMerge(subTarget, source[key])
    }
  }

  // @ts-expect-error
  return deepMerge(target, ...sources)
}

export function isMergeableObject(item: unknown): item is Mergeable {
  if (!isObject(item)) return false
  return true
}
