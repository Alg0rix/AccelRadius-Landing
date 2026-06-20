import SplitText from "@/components/SplitText"
import FadeContent from "@/components/FadeContent"
import { BRAND_LOGO, BRAND_NAME } from "@/lib/brand"

export default function Cta() {
  return (
    <section id="kontak" className="swiss-grid">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-0 px-6 py-24">
        <div className="col-span-12 border-b border-foreground pb-12 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-16">
          <SplitText
            text="Siap Mengamankan Lisensi Aplikasi Anda?"
            tag="h2"
            className="text-left text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
            splitType="words"
            delay={70}
            textAlign="left"
          />
          <FadeContent delay={300}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Mulai dengan server lisensi dan konsol admin Accel Radius. Integrasikan
              SDK Go dalam hitungan menit dan pantau armada Anda secara real-time.
            </p>
          </FadeContent>
        </div>

        <div className="col-span-12 flex flex-col items-start justify-center gap-8 pt-12 lg:col-span-5 lg:pt-0 lg:pl-16">
          <img
            src={BRAND_LOGO}
            alt={BRAND_NAME}
            className="h-16 w-auto object-contain"
          />
          <div className="w-full space-y-3">
            <a
              href="https://github.com/Alg0rix/AccelRadius-License"
              target="_blank"
              rel="noopener noreferrer"
              className="swiss-btn-primary flex w-full items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Lihat di GitHub
              <span aria-hidden>↗</span>
            </a>
            <a
              href="mailto:admin@example.com"
              className="swiss-btn-outline flex w-full items-center justify-between border border-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest"
            >
              Email Admin
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}