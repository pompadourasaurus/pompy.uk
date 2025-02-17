export type KeyboardTrigger = (e: KeyboardEvent) => boolean

export function buildCompositeKeyboardTrigger({
  triggers,
}: {
  triggers: readonly KeyboardTrigger[]
}): KeyboardTrigger {
  function anyTrigger(e: KeyboardEvent) {
    return triggers.some((trigger) => trigger(e))
  }
  return (e) => {
    if (!anyTrigger(e)) return false
    if (e.target instanceof HTMLElement && e.target.isContentEditable) return false
    if (e.target instanceof HTMLInputElement) return false
    if (e.target instanceof HTMLTextAreaElement) return false
    if (e.target instanceof HTMLSelectElement) return false
    return true
  }
}
