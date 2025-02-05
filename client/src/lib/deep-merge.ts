// https://github.com/alexmarqs/zod-config/blob/0630f22e68b65ec1c25c2a9c867527745f84320e/src/lib/adapters/utils.ts
// Copyright (c) 2024 Alexandre Marques
// Alexandre Marques licenses zod-config to Lordfirespeed under the terms of the MIT license

type Mergeable = Partial<Record<string, unknown>>

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
export function deepMerge(
  target: Partial<Record<string, unknown>>,
  ...sources: unknown[]
): Partial<Record<string, unknown>> {
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
  if (!item) return false
  if (typeof item !== "object") return false
  // ES6 class instances, Maps, Sets, Arrays, etc. should not be considered records
  if (Object.getPrototypeOf(item) === Object.prototype) return true
  // Some library/Node.js functions return records with null prototype
  if (Object.getPrototypeOf(item) === null) return true
  return false
}
