import CountUp from "@/components/CountUp"
import FadeContent from "@/components/FadeContent"

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime API", decimals: 1 },
  { value: 3, suffix: "", label: "Endpoint Publik", decimals: 0 },
  { value: 1, suffix: "", label: "SDK Go Siap Pakai", decimals: 0 },
  { value: 24, suffix: "/7", label: "Heartbeat Otomatis", decimals: 0 },
]

export default function Stats() {
  return (
    <section className="border-b border-foreground bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeContent>
          <p className="mb-12 text-center text-[11px] font-bold uppercase tracking-[0.28em] text-brand-red">
            Angka yang Berbicara
          </p>
        </FadeContent>
        <div className="grid grid-cols-2 gap-px bg-background/20 md:grid-cols-4">
          {stats.map((stat) => (
            <FadeContent key={stat.label} duration={900}>
              <div className="bg-foreground px-6 py-10 text-center">
                <p className="text-4xl font-bold md:text-5xl">
                  <CountUp to={stat.value} duration={2} />
                  {stat.suffix}
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-background/60">
                  {stat.label}
                </p>
              </div>
            </FadeContent>
          ))}
        </div>
      </div>
    </section>
  )
}