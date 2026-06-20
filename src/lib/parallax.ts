export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function resolveParallaxTrigger(
  el: Element,
  triggerSelector?: string | null,
): Element {
  if (triggerSelector) {
    const resolved = document.querySelector(triggerSelector)
    if (resolved) return resolved
  }
  return el.closest("section") ?? el
}