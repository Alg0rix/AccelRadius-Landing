import AnimatedContent from "@/components/AnimatedContent"

const stack = [
  { layer: "API", tech: "FastAPI, SQLModel, PostgreSQL, Alembic" },
  { layer: "Admin UI", tech: "React, TypeScript, Vite, TanStack, shadcn/ui" },
  { layer: "Client SDK", tech: "Go — pkg/licensing" },
  { layer: "Auth", tech: "JWT Admin · Ed25519 JWT Lisensi" },
  { layer: "Deploy", tech: "Docker Compose, Traefik, Kubernetes" },
]

export default function Stack() {
  return (
    <section className="border-b border-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <AnimatedContent>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-blue">
            Arsitektur
          </p>
          <h2 className="mb-12 text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Stack Teknologi
          </h2>
        </AnimatedContent>

        <div className="divide-y divide-foreground border border-foreground">
          {stack.map((item, index) => (
            <AnimatedContent key={item.layer} delay={index * 0.08}>
              <div className="grid grid-cols-12 gap-4 px-6 py-6 md:py-8">
                <div className="col-span-12 md:col-span-3">
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-red">
                    {item.layer}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <p className="font-mono text-sm md:text-base">{item.tech}</p>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  )
}