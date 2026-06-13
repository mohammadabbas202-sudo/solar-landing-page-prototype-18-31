'use client'

import { Cpu, ShieldCheck, Sun } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'

const FEATURES = [
  {
    icon: Sun,
    title: 'Tier-1 Hardware',
    body: 'Long-lasting, high-efficiency monocrystalline panels engineered to handle extreme Texas heat waves without performance loss.',
  },
  {
    icon: Cpu,
    title: 'Smart Grid Integration',
    body: 'Localized home battery compatibility that automatically pushes excess power back to the grid for credits when you produce a surplus.',
  },
  {
    icon: ShieldCheck,
    title: 'White-Glove Installation',
    body: 'Seamless handling of local HOA approvals, municipal permits, and full structural engineering assessments — start to finish.',
  },
]

export function FeaturesGrid() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-primary">
          The Program
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_15px_rgba(245,158,11,0.55)] cursor-default">
          Premium hardware. Handled for you.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <Card className="group h-full border-border/50 bg-zinc-900/40 p-7 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15">
                <f.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
