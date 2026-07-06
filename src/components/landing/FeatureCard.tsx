import AnimatedContent from "@/components/AnimatedContent"
import Parallax from "@/components/Parallax"
import Reveal from "@/components/Reveal"
import type { FeatureItem } from "@/lib/features-data"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  feature: FeatureItem
  index: number
  /** Differentiate heading text when an index list shares the same feature names. */
  detailSuffix?: string
}

export default function FeatureCard({
  feature,
  index,
  detailSuffix = " — pratinjau modul",
}: FeatureCardProps) {
  const reversed = index % 2 === 1

  return (
    <article
      id={`fitur-${feature.number}`}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-shadow duration-300 hover:shadow-md"
      data-hover-lift
    >
      <div
        className={cn(
          "grid min-h-[320px] lg:grid-cols-2 lg:min-h-[360px]",
          reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <AnimatedContent
          distance={56}
          direction="horizontal"
          reverse={reversed}
          duration={0.9}
          delay={index * 0.05}
          className="relative flex flex-col justify-center border-b border-border p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-2 top-2 select-none text-7xl font-bold leading-none tracking-tighter text-foreground/[0.04] md:text-8xl lg:right-4"
          >
            {feature.number}
          </span>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Modul {feature.number}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            {feature.title}
            {detailSuffix}
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            {feature.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {feature.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-muted/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground/65"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedContent>

        <Reveal
          distance={40}
          duration={0.85}
          delay={0.1 + index * 0.05}
          className="flex items-center justify-center overflow-hidden bg-[#14141a] p-6 md:p-10"
        >
          <Parallax speed={24 + index * 4} trigger={`#fitur-${feature.number}`}>
            <feature.Illustration className="h-full w-full max-w-md" />
          </Parallax>
        </Reveal>
      </div>
    </article>
  )
}