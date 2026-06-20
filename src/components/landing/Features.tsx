import AnimatedContent from "@/components/AnimatedContent"
import BlurText from "@/components/BlurText"
import {
  FleetDashboardIllustration,
  GoClientIllustration,
  LicenseGridIllustration,
  MachineActivationIllustration,
} from "@/components/illustrations/SwissIllustrations"

const features = [
  {
    number: "01",
    title: "Manajemen Lisensi",
    description:
      "Kelola pelanggan, kunci lisensi, batas aktivasi, masa berlaku, serta operasi suspend, restore, dan perpanjangan.",
    Illustration: LicenseGridIllustration,
  },
  {
    number: "02",
    title: "Aktivasi Mesin",
    description:
      "Identitas mesin berbasis fingerprint, pelacakan hostname, dan heartbeat last-seen untuk setiap aktivasi.",
    Illustration: MachineActivationIllustration,
  },
  {
    number: "03",
    title: "Kebijakan IP Lokal",
    description:
      "Aktivasi pertama mencatat IP privat utama mesin. Admin dapat menambah IP yang diizinkan kapan saja.",
    Illustration: LicenseGridIllustration,
  },
  {
    number: "04",
    title: "Token Bertanda Tangan",
    description:
      "JWT Ed25519 untuk activate, heartbeat, dan deactivate — aman dan dapat diverifikasi secara independen.",
    Illustration: MachineActivationIllustration,
  },
  {
    number: "05",
    title: "Dashboard Admin",
    description:
      "Konsol React dengan KPI armada, tampilan pelanggan, lisensi, aktivasi, dan distribusi versi aplikasi.",
    Illustration: FleetDashboardIllustration,
  },
  {
    number: "06",
    title: "Kebijakan Versi",
    description:
      "Klien melaporkan app_version; admin menetapkan versi minimum dan dapat memperingatkan atau memblokir klien usang.",
    Illustration: FleetDashboardIllustration,
  },
  {
    number: "07",
    title: "Klien Go",
    description:
      "Paket pkg/licensing dengan Manager untuk siklus produksi: aktivasi, heartbeat loop, penyimpanan token, dan re-aktivasi.",
    Illustration: GoClientIllustration,
  },
]

export default function Features() {
  return (
    <section id="fitur" className="border-b border-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-b border-foreground py-16">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-red">
            Kemampuan Inti
          </p>
          <BlurText
            text="Semua yang Anda Butuhkan untuk Lisensi Komersial"
            className="max-w-3xl text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl"
            delay={60}
            animateBy="words"
          />
        </div>

        <div className="divide-y divide-foreground">
          {features.map((feature, index) => (
            <AnimatedContent
              key={feature.number}
              distance={40}
              direction="vertical"
              duration={0.7}
              delay={index * 0.05}
            >
              <article className="grid grid-cols-12 gap-0 py-12 lg:py-16">
                <div className="col-span-12 mb-8 lg:col-span-1 lg:mb-0">
                  <span className="text-4xl font-bold text-brand-red lg:text-5xl">
                    {feature.number}
                  </span>
                </div>
                <div className="col-span-12 lg:col-span-5 lg:pr-12">
                  <h3 className="mb-4 text-xl font-bold uppercase tracking-tight md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="col-span-12 mt-8 border border-foreground lg:col-span-6 lg:mt-0">
                  <feature.Illustration className="h-full w-full" />
                </div>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}