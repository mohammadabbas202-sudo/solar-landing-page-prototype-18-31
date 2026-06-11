'use client'

import { ShieldCheck, Umbrella } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { formatCurrency } from '@/lib/savings'

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: '25-Year Production Guarantee',
    body: 'If your system produces less than calculated, we pay you the difference. Your savings are contractually protected for a quarter century.',
  },
  {
    icon: Umbrella,
    title: 'Zero-Leak Roof Warranty',
    body: 'Comprehensive multi-decade structural and workmanship coverage. Your roof is protected everywhere we touch it.',
  },
]

const STATS = [
  { label: 'First-year savings', value: formatCurrency(2100) },
  { label: 'System size', value: '8.2 kW' },
  { label: 'Bill before', value: '$280/mo' },
  { label: 'Bill after', value: '$35/mo' },
]

export function ProofGuarantees() {
  return (
    <section
      id="guarantees"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-primary">
          Protection &amp; Proof
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Guarantees in writing. Results on the ground.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="flex flex-col gap-6 lg:col-span-2">
          {GUARANTEES.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <Card className="border-border/50 bg-zinc-900/40 p-7 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/15">
                    <g.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold tracking-tight">
                    {g.title}
                  </h3>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {g.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="lg:col-span-3">
          <Card className="flex h-full flex-col justify-between border-border/50 bg-zinc-900/40 p-8 backdrop-blur-md">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Case Study
              </p>
              <blockquote className="mt-4 font-serif text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
                &ldquo;My July bill went from $280 to $35. The solar payment is
                lower than what I used to hand the utility.&rdquo;
              </blockquote>
              <p className="mt-4 text-muted-foreground">
                Marcus V. — Austin, TX
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/50 bg-border/50 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-card p-4">
                  <p className="font-serif text-xl font-semibold tracking-tight text-primary tabular-nums">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
