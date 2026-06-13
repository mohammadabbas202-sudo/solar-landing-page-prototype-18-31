'use client'

import { Cpu, ShieldCheck, Sun } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

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
    <section className="group/program border-t border-border/50 bg-zinc-900/20 mx-auto max-w-7xl px-4 py-20 transition-[box-shadow] duration-500 hover:shadow-[inset_0_0_80px_rgba(245,158,11,0.04)] sm:px-6 sm:py-28 lg:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-primary transition-all duration-300 group-hover/program:[text-shadow:0_0_12px_rgba(245,158,11,0.45)]">
          The Program
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance transition-all duration-300 sm:text-4xl group-hover/program:text-primary group-hover/program:[text-shadow:0_0_20px_rgba(245,158,11,0.35)]">
          Premium hardware. Handled for you.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1}>
            <Card
              className={cn(
                'h-full border-border/50 bg-zinc-900/40 p-7 backdrop-blur-md',
                'transition-all duration-300',
                'group-hover/program:border-primary/15 group-hover/program:shadow-[0_0_24px_rgba(245,158,11,0.08)]',
                'hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_0_32px_rgba(245,158,11,0.14)]',
              )}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 transition-all duration-300 group-hover/program:bg-primary/20 group-hover/program:shadow-[0_0_16px_rgba(245,158,11,0.2)]">
                <f.icon className="size-6 text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight transition-colors duration-300 group-hover/program:text-primary/90">
                {f.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground transition-colors duration-300 group-hover/program:text-muted-foreground/90">
                {f.body}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
