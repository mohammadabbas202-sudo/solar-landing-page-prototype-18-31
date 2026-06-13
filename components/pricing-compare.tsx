'use client'

import { Check, TrendingDown, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { useLead } from '@/components/lead-dialog'

const STATUS_QUO = [
  'Bills exposed to unpredictable annual rate hikes',
  'Decades of payments with zero ownership',
  'Summer spikes above $280/mo with no ceiling',
  'Every dollar is a dead expense',
]

const SOLAR = [
  '$0-down financing — nothing out of pocket',
  'Monthly solar payment lower than your current bill',
  'Fixed, predictable energy costs for 25+ years',
  'Every payment builds equity in your home',
]

export function PricingCompare() {
  const { open } = useLead()

  return (
    <section
      id="pricing"
      className="border-y border-border/50 bg-zinc-900/30"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl transition-all duration-300 hover:text-primary hover:[text-shadow:0_0_15px_rgba(245,158,11,0.55)] cursor-default">
            Turn a dead expense into equity.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full border-border/50 bg-background/30 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/80 hover:shadow-[0_10px_30px_-15px_rgba(255,255,255,0.07)]">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                The Status Quo
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-muted-foreground">
                Renting from the utility
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                {STATUS_QUO.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <X className="mt-0.5 size-5 shrink-0 text-zinc-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="relative h-full border-2 border-primary/60 bg-zinc-900/50 p-8 backdrop-blur-md overflow-visible transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_35px_-10px_rgba(245,158,11,0.18)]">
              <span className="absolute -top-3 left-8 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <TrendingDown className="size-3.5" />
                Recommended
              </span>
              <p className="text-sm uppercase tracking-widest text-primary">
                Solar Ownership Program
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
                Own your power
              </h3>
              <ul className="mt-6 flex flex-col gap-3">
                {SOLAR.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => open()}
                size="lg"
                className="mt-8 w-full font-semibold"
              >
                See My Roof&apos;s Potential
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
