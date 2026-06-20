import SplitText from "@/components/SplitText"
import FadeContent from "@/components/FadeContent"
import { BRAND_ICON, BRAND_NAME, BRAND_TAGLINE } from "@/lib/brand"

export default function Hero() {
  return (
    <section className="swiss-grid relative min-h-[90vh] border-b border-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-0 px-6 py-16 lg:py-24">
        <div className="col-span-12 flex items-center gap-4 border-b border-foreground pb-8 lg:col-span-8">
          <img
            src={BRAND_ICON}
            alt={BRAND_NAME}
            className="size-12 object-contain"
          />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">
              {BRAND_TAGLINE}
            </p>
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              {BRAND_NAME}
            </p>
          </div>
        </div>

        <div className="col-span-12 border-b border-foreground py-12 lg:col-span-8 lg:border-r lg:py-20">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-blue">
            Platform Lisensi Komersial
          </p>
          <SplitText
            text="Kelola Lisensi Aplikasi Go dengan Presisi"
            tag="h1"
            className="text-left text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl"
            splitType="words"
            delay={80}
            textAlign="left"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
          />
          <FadeContent blur duration={1200} delay={400}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Terbitkan kunci lisensi, lacak aktivasi mesin, tegakkan kebijakan IP
              lokal, dan pantau armada aplikasi Go Anda — semua dari satu panel
              kontrol.
            </p>
          </FadeContent>
        </div>

        <div className="col-span-12 flex flex-col justify-end gap-6 py-12 lg:col-span-4 lg:py-20 lg:pl-12">
          <FadeContent duration={1000} delay={600}>
            <div className="space-y-4">
              <a
                href="#fitur"
                className="swiss-btn-primary inline-flex w-full items-center justify-between px-6 py-4 text-sm font-bold uppercase tracking-widest"
              >
                Jelajahi Fitur
                <span aria-hidden>→</span>
              </a>
              <a
                href="#kontak"
                className="swiss-btn-outline inline-flex w-full items-center justify-between border border-foreground px-6 py-4 text-sm font-bold uppercase tracking-widest"
              >
                Hubungi Kami
                <span aria-hidden>→</span>
              </a>
            </div>
          </FadeContent>
          <div className="grid grid-cols-2 gap-px bg-foreground">
            <div className="bg-background p-4">
              <p className="text-2xl font-bold">130+</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Komponen UI
              </p>
            </div>
            <div className="bg-brand-red p-4 text-white">
              <p className="text-2xl font-bold">Go</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80">
                SDK Siap Pakai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}