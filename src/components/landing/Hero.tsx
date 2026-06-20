import { useRef } from "react"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import SplitText from "@/components/SplitText"
import FadeContent from "@/components/FadeContent"
import Parallax from "@/components/Parallax"
import { CustomerIllustration } from "@/components/illustrations/AccelRadMocks"
import { audiences } from "@/lib/features-data"
import { prefersReducedMotion } from "@/lib/parallax"
import {
  BRAND_ICON,
  BRAND_LOGO,
  BRAND_NAME,
  BRAND_TAGLINE,
  WHATSAPP_URL,
} from "@/lib/brand"
import { ArrowRight, MessageCircle } from "lucide-react"

const WHATSAPP_PREFILL = encodeURIComponent(
  "Halo tim Accel Radius, saya tertarik platform billing & operasi ISP. Bisa konsultasi?",
)

gsap.registerPlugin(useGSAP)

const highlights = [
  { value: "9", label: "Modul terintegrasi" },
  { value: "24/7", label: "Operasi realtime" },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return

      gsap.to(".hero-float", {
        y: -10,
        duration: 2.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.4,
      })

      gsap.to(".hero-glow", {
        scale: 1.06,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.8,
      })
    },
    { scope: sectionRef },
  )

  return (
    <section ref={sectionRef} className="mesh-hero relative overflow-hidden">
      <Parallax
        speed={90}
        className="hero-glow pointer-events-none absolute -right-32 top-20 size-[480px] rounded-full bg-brand-blue/10 blur-3xl"
      />
      <Parallax
        speed={-70}
        className="hero-glow pointer-events-none absolute -left-20 bottom-0 size-[360px] rounded-full bg-brand-red/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <div className="space-y-8">
          <FadeContent duration={800} playOnMount>
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/80 px-4 py-2 backdrop-blur-sm">
              <img src={BRAND_ICON} alt={BRAND_NAME} className="size-7 object-contain" />
              <span className="text-xs font-semibold text-muted-foreground">
                {BRAND_NAME} · {BRAND_TAGLINE}
              </span>
            </div>
          </FadeContent>

          <div>
            <FadeContent delay={150} playOnMount>
              <p className="mb-4 text-sm font-semibold text-brand-blue">
                Platform all-in-one untuk ISP Indonesia
              </p>
            </FadeContent>
            <SplitText
              text="Satu platform untuk billing, jaringan, dan operasi ISP."
              tag="h1"
              className="text-left text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl"
              splitType="words"
              delay={70}
              textAlign="left"
              playOnMount
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          <FadeContent blur duration={1000} delay={300} playOnMount>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Satukan pelanggan, tagihan, pembayaran, RADIUS, WhatsApp, dan laporan
              dalam satu dashboard modern — bukan lagi spreadsheet dan lima aplikasi
              berbeda.
            </p>
          </FadeContent>

          <FadeContent delay={450} playOnMount>
            <div className="flex flex-wrap gap-3">
              {audiences.map((item, i) => (
                <FadeContent key={item} delay={500 + i * 80} playOnMount>
                  <span className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground/80 transition-colors hover:border-brand-blue/40 hover:bg-muted">
                    {item}
                  </span>
                </FadeContent>
              ))}
            </div>
          </FadeContent>

          <FadeContent delay={550} playOnMount>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <a href="#install" className="modern-btn-primary">
                  Pasang sekarang
                  <ArrowRight className="size-4" aria-hidden />
                </a>
                <a
                  href={`${WHATSAPP_URL}?text=${WHATSAPP_PREFILL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modern-btn-ghost"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Hubungi WhatsApp
                </a>
                <a href="#kontak" className="modern-btn-ghost">
                  Konsultasi lisensi
                </a>
              </div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Evaluasi gratis di server Anda — atau{" "}
                <a
                  href="#harga"
                  className="font-medium text-foreground underline-offset-2 hover:text-brand-red hover:underline"
                >
                  lihat paket lisensi
                </a>{" "}
                sebelum komit produksi.
              </p>
            </div>
          </FadeContent>

          <FadeContent delay={650} playOnMount>
            <div className="flex flex-wrap gap-6 pt-2">
              {highlights.map((h, i) => (
                <FadeContent key={h.label} delay={700 + i * 100} playOnMount>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{h.value}</p>
                    <p className="text-xs text-muted-foreground">{h.label}</p>
                  </div>
                </FadeContent>
              ))}
            </div>
          </FadeContent>
        </div>

        <FadeContent delay={400} duration={1200} playOnMount>
          <Parallax speed={56} className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#14141a] shadow-2xl ring-1 ring-white/5 transition-shadow duration-500 hover:shadow-[0_32px_80px_-20px_rgba(43,95,217,0.35)]">
              <CustomerIllustration className="w-full" />
            </div>
            <Parallax
              speed={-36}
              className="hero-float absolute -bottom-6 -left-4 rounded-2xl border bg-background p-4 shadow-lg md:-left-8"
            >
              <img src={BRAND_LOGO} alt={BRAND_NAME} className="h-10 w-auto object-contain" />
            </Parallax>
            <Parallax
              speed={44}
              className="hero-float absolute -right-2 top-8 rounded-xl border border-brand-red/30 bg-brand-red px-4 py-3 text-white shadow-lg md:-right-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">
                Pelanggan aktif
              </p>
              <p className="text-2xl font-bold">247</p>
            </Parallax>
            <Parallax
              speed={-28}
              className="hero-float absolute -left-2 top-1/3 rounded-xl border bg-background px-4 py-3 shadow-lg md:-left-6"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Tagihan bulan ini
              </p>
              <p className="text-lg font-bold text-brand-blue">Rp 48,5jt</p>
            </Parallax>
          </Parallax>
        </FadeContent>
      </div>
    </section>
  )
}