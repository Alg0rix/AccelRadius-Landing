import FeatureCard from "@/components/landing/FeatureCard"
import { features } from "@/lib/features-data"

export default function Features() {
  return (
    <section id="fitur-detail" className="scroll-mt-20 bg-muted/25 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
            Detail modul
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
            Lihat cara kerja setiap fitur
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sembilan modul dijelaskan satu per satu — teks di satu sisi, pratinjau UI di
            sisi lain. Layout bergantian agar mudah dibaca saat scroll.
          </p>
        </div>

        <div className="space-y-5 md:space-y-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}