export function isNumber(value: unknown): value is number | number {
  return typeof value === "number" || value instanceof Number
}

export function isString(value: unknown): value is string | string {
  return typeof value === "string" || value instanceof String
}

export function isBoolean(value: unknown): value is boolean | boolean {
  return typeof value === "boolean" || value instanceof Boolean
}

export function isObject(value: unknown): value is Record<string, unknown> {
  if (!value) return false
  if (typeof value !== "object") return false
  const valuePrototype = Object.getPrototypeOf(value)
  // ES6 class instances, Maps, Sets, Arrays, etc. are not considered records
  if (Object.is(valuePrototype, Object.prototype)) return true
  // Some library/Node.js functions return records with null prototype
  if (Object.is(valuePrototype, null)) return true
  return false
}
