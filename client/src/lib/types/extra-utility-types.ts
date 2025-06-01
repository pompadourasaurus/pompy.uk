/**
 * Include null and undefined in T
 */
export type Nullable<T> = T | null | undefined

/**
 * Make all properties in T nullable
 */
export type AllNullable<T> = {
  [P in keyof T]: Nullable<T>
}

/**
 * Make all properties in T non-nullable
 */
export type AllNonNullable<T> = {
  [P in keyof T]: NonNullable<T[P]>
}

/**
 * Make all properties in T nullable and optional
 */
export type Incomplete<T> = {
  [P in keyof T]?: Nullable<T[P]>
}

/**
 * Make all properties in T non-nullable and required
 */
export type Complete<T> = {
  [P in keyof T]-?: NonNullable<T[P]>
}
