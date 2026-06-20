import { useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { prefersReducedMotion, resolveParallaxTrigger } from "@/lib/parallax"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger, useGSAP)

interface ParallaxProps {
  children?: ReactNode
  className?: string
  speed?: number
  axis?: "y" | "x"
  trigger?: string
  scrub?: number | boolean
}

export default function Parallax({
  children,
  className,
  speed = 48,
  axis = "y",
  trigger,
  scrub = 1,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el || prefersReducedMotion()) return

      const triggerEl = resolveParallaxTrigger(el, trigger)
      const from = axis === "y" ? { y: -speed * 0.5 } : { x: -speed * 0.5 }
      const to = axis === "y" ? { y: speed * 0.5 } : { x: speed * 0.5 }

      const tween = gsap.fromTo(el, from, {
        ...to,
        ease: "none",
        scrollTrigger: {
          trigger: triggerEl,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
      }
    },
    { scope: ref, dependencies: [speed, axis, trigger, scrub] },
  )

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  )
}