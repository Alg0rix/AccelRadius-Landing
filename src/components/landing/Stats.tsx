import CountUp from "@/components/CountUp"
import FadeContent from "@/components/FadeContent"
import Parallax from "@/components/Parallax"

const stats = [
  { value: 9, suffix: "", label: "Modul terintegrasi", hint: "Billing hingga RADIUS" },
  { value: 5, suffix: "", label: "Layanan sistem", hint: "API · Worker · WA" },
  { value: 24, suffix: "/7", label: "Operasi realtime", hint: "Heartbeat & queue" },
  { value: 100, suffix: "%", label: "Satu dashboard", hint: "Tanpa app terpisah" },
]

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 text-background md:py-24">
      <Parallax
        speed={80}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(43,95,217,0.25),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,77,0,0.2),transparent_45%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeContent>
          <p className="mb-12 text-center text-sm font-semibold text-brand-red">
            Dibangun untuk skala ISP
          </p>
        </FadeContent>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <FadeContent key={stat.label} duration={900}>
              <div
                className="glass-dark rounded-2xl border border-white/10 p-6 md:p-8"
                data-hover-lift
              >
                <p className="text-4xl font-bold md:text-5xl">
                  <CountUp to={stat.value} duration={2} />
                  {stat.suffix}
                </p>
                <p className="mt-2 font-semibold">{stat.label}</p>
                <p className="mt-1 text-sm text-background/50">{stat.hint}</p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}