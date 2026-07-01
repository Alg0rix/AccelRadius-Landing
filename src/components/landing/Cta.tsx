import AnimatedContent from "@/components/AnimatedContent"
import Reveal from "@/components/Reveal"
import SplitText from "@/components/SplitText"
import ContactForm from "@/components/landing/ContactForm"
import {
  BRAND_LOGO,
  BRAND_NAME,
  BRAND_TAGLINE,
  RELEASE_REPO,
  SUPPORT_EMAIL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "@/lib/brand"

const contactPoints = [
  "Evaluasi installer di server Anda",
  "Penawaran lisensi produksi",
  "Bantuan onboarding & migrasi",
]

export default function Cta() {
  return (
    <section id="kontak" className="relative scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm" data-hover-lift>
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <AnimatedContent
                distance={48}
                direction="horizontal"
                reverse
                duration={0.9}
                className="flex flex-col justify-between gap-10 border-b border-border p-8 md:p-12 lg:border-b-0 lg:border-r"
              >
                <div>
                  <img
                    src={BRAND_LOGO}
                    alt={BRAND_NAME}
                    className="h-14 w-auto object-contain md:h-16"
                  />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                    {BRAND_TAGLINE}
                  </p>

                  <SplitText
                    text="Konsultasi lisensi dan demo"
                    tag="h2"
                    className="mt-6 text-left text-3xl font-bold leading-tight tracking-tight md:text-4xl"
                    splitType="words"
                    delay={45}
                    textAlign="left"
                  />
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                    Tim Accel Radius siap membantu evaluasi, penawaran lisensi produksi,
                    dan onboarding untuk ISP di seluruh Indonesia.
                  </p>

                  <ul className="mt-8 space-y-3">
                    {contactPoints.map((point, i) => (
                      <AnimatedContent
                        key={point}
                        distance={24}
                        duration={0.6}
                        delay={0.15 + i * 0.1}
                      >
                        <li className="flex items-start gap-3 text-sm text-foreground/85">
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
                          {point}
                        </li>
                      </AnimatedContent>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modern-btn-primary"
                    >
                      WhatsApp {WHATSAPP_DISPLAY}
                      <span aria-hidden>↗</span>
                    </a>
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="modern-btn-ghost">
                      Email kami
                    </a>
                    <a
                      href={RELEASE_REPO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modern-btn-ghost"
                    >
                      Unduh rilis
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Perangkat lunak berlisensi tertutup · Hak cipta dilindungi
                  </p>
                </div>
              </AnimatedContent>

              <AnimatedContent
                distance={48}
                direction="horizontal"
                duration={0.9}
                delay={0.1}
                className="bg-muted/35 p-8 md:p-12"
              >
                <p className="mb-6 text-sm font-semibold text-foreground">
                  Kirim permintaan penawaran
                </p>
                <ContactForm variant="light" />
              </AnimatedContent>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}