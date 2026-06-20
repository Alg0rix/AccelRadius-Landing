import type { FeatureItem } from "@/lib/features-data"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  feature: FeatureItem
  index: number
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const reversed = index % 2 === 1

  return (
    <article
      id={`fitur-${feature.number}`}
      className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-background shadow-sm"
    >
      <div
        className={cn(
          "grid min-h-[320px] lg:grid-cols-2 lg:min-h-[360px]",
          reversed && "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
        )}
      >
        <div className="relative flex flex-col justify-center border-b border-border p-8 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
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
        </div>

        <div className="flex items-center justify-center bg-[#14141a] p-6 md:p-10">
          <feature.Illustration className="h-full w-full max-w-md" />
        </div>
      </div>
    </article>
  )
}