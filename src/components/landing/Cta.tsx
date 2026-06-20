import ContactForm from "@/components/landing/ContactForm"
import {
  BRAND_LOGO,
  BRAND_NAME,
  BRAND_TAGLINE,
  RELEASE_REPO,
  SUPPORT_EMAIL,
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
        <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="flex flex-col justify-between gap-10 border-b border-border p-8 md:p-12 lg:border-b-0 lg:border-r">
              <div>
                <img
                  src={BRAND_LOGO}
                  alt={BRAND_NAME}
                  className="h-14 w-auto object-contain md:h-16"
                />
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                  {BRAND_TAGLINE}
                </p>

                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                  Konsultasi lisensi dan demo
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  Tim Accel Radius siap membantu evaluasi, penawaran lisensi produksi,
                  dan onboarding untuk ISP di seluruh Indonesia.
                </p>

                <ul className="mt-8 space-y-3">
                  {contactPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-foreground/85"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-red" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="modern-btn-primary">
                    WhatsApp
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
            </div>

            <div className="bg-muted/35 p-8 md:p-12">
              <p className="mb-6 text-sm font-semibold text-foreground">
                Kirim permintaan penawaran
              </p>
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}