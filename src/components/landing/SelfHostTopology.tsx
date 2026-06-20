import { useRef } from "react"
import { gsap } from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { selfHostContrast, selfHostTopology } from "@/lib/landing-content"
import { prefersReducedMotion } from "@/lib/parallax"
import { cn } from "@/lib/utils"
import { CloudTopologySvg, SelfHostedTopologySvg } from "./topology-svgs"

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, useGSAP)

function ImpactList({
  items,
  variant,
}: {
  items: string[]
  variant: "cloud" | "self"
}) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "topo-impact flex items-start gap-2.5 text-sm",
            variant === "cloud" ? "text-muted-foreground" : "text-foreground",
          )}
        >
          <span
            className={cn(
              "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold",
              variant === "cloud"
                ? "bg-amber-500/10 text-amber-600"
                : "bg-brand-blue/15 text-brand-blue",
            )}
          >
            {variant === "cloud" ? "!" : "✓"}
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function SelfHostTopology() {
  const rootRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const root = rootRef.current
      if (!root) return

      const all = root.querySelectorAll(
        ".topo-panel, .topo-line, .topo-node, .topo-impact, .topo-flow-note, .topo-warning, .topo-warning-label, .topo-sync-badge, .topo-zone, .topo-badge, [data-topo-canvas]",
      )

      if (prefersReducedMotion()) {
        gsap.set(all, { autoAlpha: 1, scale: 1, x: 0, y: 0 })
        return
      }

      const panels = root.querySelectorAll<HTMLElement>(".topo-panel")
      const canvases = root.querySelectorAll<SVGElement>("[data-topo-canvas]")
      const lines = root.querySelectorAll<SVGPathElement>(".topo-line-draw")
      const nodes = root.querySelectorAll<SVGGElement>(".topo-node")
      const zones = root.querySelectorAll<SVGGElement>(".topo-zone")
      const impacts = root.querySelectorAll<HTMLElement>(".topo-impact")
      const notes = root.querySelectorAll<HTMLElement>(".topo-flow-note")
      const badges = root.querySelectorAll<SVGElement>(
        ".topo-badge, .topo-sync-badge, .topo-warning, .topo-warning-label",
      )

      gsap.set(panels, { autoAlpha: 0, y: 36 })
      gsap.set(canvases, { autoAlpha: 0, scale: 0.97 })
      gsap.set(nodes, { autoAlpha: 0, scale: 0.9, transformOrigin: "center center" })
      gsap.set(zones, { autoAlpha: 0, scale: 0.98, transformOrigin: "center center" })
      gsap.set(impacts, { autoAlpha: 0, x: -10 })
      gsap.set(notes, { autoAlpha: 0, y: 6 })
      gsap.set(badges, { autoAlpha: 0, scale: 0.85 })

      lines.forEach((line) => {
        const length = line.getTotalLength()
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length, autoAlpha: 0.35 })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      tl.to(panels, { autoAlpha: 1, y: 0, duration: 0.65, stagger: 0.16, ease: "power3.out" })
        .to(canvases, { autoAlpha: 1, scale: 1, duration: 0.55, stagger: 0.12, ease: "power2.out" }, "-=0.4")
        .to(zones, { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.08 }, "-=0.35")
        .to(
          lines,
          { strokeDashoffset: 0, autoAlpha: 1, duration: 1, stagger: 0.07, ease: "power2.inOut" },
          "-=0.3",
        )
        .to(
          nodes,
          { autoAlpha: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: "back.out(1.5)" },
          "-=0.7",
        )
        .to(badges, { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(2)" }, "-=0.35")
        .to(notes, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.08 }, "-=0.2")
        .to(impacts, { autoAlpha: 1, x: 0, duration: 0.35, stagger: 0.06 }, "-=0.15")

      const cloudPacket = root.querySelector(".topo-packet-cloud")
      if (cloudPacket) {
        gsap.to(cloudPacket, {
          motionPath: {
            path: "M 108 310 C 108 190 175 105 260 92",
            align: "M 108 310 C 108 190 175 105 260 92",
            alignOrigin: [0.5, 0.5],
          },
          duration: 4.2,
          repeat: -1,
          ease: "none",
          delay: 1.4,
        })
      }

      const cloudPacket2 = root.querySelector(".topo-packet-cloud-2")
      if (cloudPacket2) {
        gsap.to(cloudPacket2, { x: -84, duration: 2.4, repeat: -1, ease: "power1.inOut", delay: 1 })
      }

      const selfPacket = root.querySelector(".topo-packet-self")
      if (selfPacket) {
        gsap.to(selfPacket, {
          motionPath: {
            path: "M 382 310 L 318 310 L 260 310 L 260 272",
            align: "M 382 310 L 318 310 L 260 310 L 260 272",
            alignOrigin: [0.5, 0.5],
          },
          duration: 1.4,
          repeat: -1,
          ease: "none",
          delay: 1,
        })
      }

      const selfPacket2 = root.querySelector(".topo-packet-self-2")
      if (selfPacket2) {
        gsap.to(selfPacket2, { x: 40, duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut", delay: 0.6 })
      }

      gsap.to(root.querySelectorAll(".topo-line-sync, .topo-line-sync-rev"), {
        strokeOpacity: 0.4,
        duration: 0.85,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.6,
      })

      gsap.to(root.querySelector(".topo-line-broken"), {
        strokeOpacity: 0.35,
        duration: 0.7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8,
      })

      gsap.to(root.querySelector(".topo-warning circle"), {
        scale: 1.12,
        transformOrigin: "260px 216px",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      })

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === root) st.kill()
        })
      }
    },
    { scope: rootRef },
  )

  return (
    <div ref={rootRef} className="mt-12 space-y-5">
      <div data-animate="reveal" className="max-w-2xl">
        <p className="text-sm font-semibold text-brand-red">Perbandingan topologi</p>
        <h3 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
          Dua cara ISP menjalankan billing & jaringan
        </h3>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Diagram SVG memperlihatkan letak data, jalur sinkronisasi, dan titik kegagalan
          pada masing-masing model.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <article className="topo-panel overflow-hidden rounded-2xl border border-border bg-background" data-hover-lift>
          <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 md:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                {selfHostTopology.cloud.label}
              </p>
              <p className="mt-1 text-sm font-semibold">{selfHostTopology.cloud.subtitle}</p>
            </div>
            <span className="shrink-0 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold text-amber-600">
              Terpisah
            </span>
          </div>
          <div className="bg-muted/15 px-3 py-4 md:px-4">
            <CloudTopologySvg className="mx-auto w-full max-w-[520px]" />
            <p className="topo-flow-note mt-3 text-center text-xs font-medium text-amber-700/90">
              {selfHostTopology.cloud.flowNote}
            </p>
          </div>
          <div className="border-t border-border bg-muted/20 px-5 py-4 md:px-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              Dampak operasional
            </p>
            <ImpactList items={selfHostContrast.cloud} variant="cloud" />
          </div>
        </article>

        <article
          className="topo-panel overflow-hidden rounded-2xl border border-brand-blue/25 bg-gradient-to-br from-brand-blue/[0.04] to-transparent"
          data-hover-lift
        >
          <div className="flex items-start justify-between gap-4 border-b border-brand-blue/15 px-5 py-4 md:px-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-blue">
                {selfHostTopology.selfHosted.label}
              </p>
              <p className="mt-1 text-sm font-semibold">{selfHostTopology.selfHosted.subtitle}</p>
            </div>
            <span className="shrink-0 rounded-full border border-brand-blue/25 bg-brand-blue/10 px-2.5 py-1 text-[10px] font-bold text-brand-blue">
              Terpadu
            </span>
          </div>
          <div className="bg-brand-blue/[0.03] px-3 py-4 md:px-4">
            <SelfHostedTopologySvg className="mx-auto w-full max-w-[520px]" />
            <p className="topo-flow-note mt-3 text-center text-xs font-medium text-brand-blue">
              {selfHostTopology.selfHosted.flowNote}
            </p>
          </div>
          <div className="border-t border-brand-blue/15 px-5 py-4 md:px-6">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-brand-blue">
              Dampak positif
            </p>
            <ImpactList items={selfHostContrast.selfHosted} variant="self" />
          </div>
        </article>
      </div>
    </div>
  )
}