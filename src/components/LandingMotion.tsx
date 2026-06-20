import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { animateFrom, animateTo, type AnimatePreset } from "@/lib/motion-presets"
import { prefersReducedMotion, resolveParallaxTrigger } from "@/lib/parallax"

gsap.registerPlugin(ScrollTrigger)

function initParallax() {
  const tweens: gsap.core.Tween[] = []

  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const speed = Number(el.dataset.parallax) || 40
    const axis = el.dataset.parallaxAxis === "x" ? "x" : "y"
    const trigger = resolveParallaxTrigger(el, el.dataset.parallaxTrigger)
    const scrub = Number(el.dataset.parallaxScrub ?? 1)
    const from = axis === "y" ? { y: -speed * 0.5 } : { x: -speed * 0.5 }
    const to = axis === "y" ? { y: speed * 0.5 } : { x: speed * 0.5 }

    tweens.push(
      gsap.fromTo(el, from, {
        ...to,
        ease: "none",
        scrollTrigger: {
          trigger,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      }),
    )
  })

  return () => {
    tweens.forEach((tween) => {
      tween.scrollTrigger?.kill()
      tween.kill()
    })
  }
}

function initScrollAnimations() {
  document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
    const preset = (el.dataset.animate as AnimatePreset) || "reveal"
    const from = animateFrom[preset] ?? animateFrom.reveal
    gsap.set(el, from)
  })

  gsap.set("[data-stagger-item]", { autoAlpha: 0, y: 32 })

  const animateBatch = ScrollTrigger.batch("[data-animate]", {
    start: "top 88%",
    once: true,
    onEnter: (batch) => {
      batch.forEach((item) => {
        const el = item as HTMLElement
        const delay = Number(el.dataset.animateDelay ?? 0)
        const preset = (el.dataset.animate as AnimatePreset) || "reveal"
        const from = animateFrom[preset] ?? animateFrom.reveal
        gsap.fromTo(el, from, {
          ...animateTo,
          duration: 0.8,
          delay,
          ease: "power3.out",
          overwrite: "auto",
        })
      })
    },
  })

  const staggerBatch = ScrollTrigger.batch("[data-stagger-item]", {
    start: "top 90%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        ...animateTo,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      })
    },
  })

  return () => {
    animateBatch.forEach((st) => st.kill())
    staggerBatch.forEach((st) => st.kill())
  }
}

function initHoverMotion() {
  const cleanups: Array<() => void> = []

  document.querySelectorAll<HTMLElement>("[data-hover-lift]").forEach((el) => {
    const onEnter = () =>
      gsap.to(el, { y: -4, scale: 1.01, duration: 0.25, ease: "power2.out" })
    const onLeave = () =>
      gsap.to(el, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" })

    el.addEventListener("mouseenter", onEnter)
    el.addEventListener("mouseleave", onLeave)
    cleanups.push(() => {
      el.removeEventListener("mouseenter", onEnter)
      el.removeEventListener("mouseleave", onLeave)
    })
  })

  return () => cleanups.forEach((fn) => fn())
}

export default function LandingMotion() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const cleanupParallax = initParallax()
    const cleanupScroll = initScrollAnimations()
    const cleanupHover = initHoverMotion()

    const refresh = () => ScrollTrigger.refresh()
    refresh()
    window.addEventListener("load", refresh)

    return () => {
      cleanupParallax()
      cleanupScroll()
      cleanupHover()
      window.removeEventListener("load", refresh)
    }
  }, [])

  return null
}