export type AnimatePreset =
  | "reveal"
  | "reveal-up-sm"
  | "reveal-left"
  | "reveal-right"
  | "scale"
  | "fade"

type MotionFrom = {
  autoAlpha: number
  x?: number
  y?: number
  scale?: number
}

export const animateFrom: Record<AnimatePreset, MotionFrom> = {
  reveal: { autoAlpha: 0, y: 48 },
  "reveal-up-sm": { autoAlpha: 0, y: 24 },
  "reveal-left": { autoAlpha: 0, x: -56 },
  "reveal-right": { autoAlpha: 0, x: 56 },
  scale: { autoAlpha: 0, scale: 0.92 },
  fade: { autoAlpha: 0 },
}

export const animateTo = {
  autoAlpha: 1,
  x: 0,
  y: 0,
  scale: 1,
  clearProps: "transform",
}