'use client'

import { Star, ShieldCheck, Umbrella } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Reveal } from '@/components/reveal'
import { SocialProofBar } from '@/components/social-proof-bar'
import { useSavings } from '@/components/savings-context'
import {
  estimateFirstYearSavings,
  estimateSystemSize,
  formatCurrency,
} from '@/lib/savings'

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

const TESTIMONIALS = [
  {
    initials: 'MV',
    name: 'Marcus V.',
    neighborhood: 'Mueller, Austin',
    quote:
      'My July bill went from $280 to $35. The solar payment is lower than what I used to hand the utility.',
    featured: true,
  },
  {
    initials: 'SL',
    name: 'Sarah L.',
    neighborhood: 'Circle C, Austin',
    quote:
      'The whole process took six weeks from sign-up to flip the switch. HOA approval was handled before I even asked.',
    featured: false,
  },
  {
    initials: 'DK',
    name: 'David K.',
    neighborhood: 'Steiner Ranch, Austin',
    quote:
      'We ran the numbers three times. Even with the loan payment, we save $140 a month compared to our old bill.',
    featured: false,
  },
  {
    initials: 'RP',
    name: 'Rachel P.',
    neighborhood: 'Hyde Park, Austin',
    quote:
      'After the hail storm last spring, they handled the insurance claim and panel replacement at no cost to us.',
    featured: false,
  },
]

export function ProofGuarantees() {
  const { bill, newMonthlyBill } = useSavings()
  const featured = TESTIMONIALS.find((t) => t.featured)!

  const stats = [
    { label: 'First-year savings', value: formatCurrency(estimateFirstYearSavings(bill)) },
    { label: 'System size', value: estimateSystemSize(bill) },
    { label: 'Bill before', value: `${formatCurrency(bill)}/mo` },
    { label: 'Bill after', value: `${formatCurrency(newMonthlyBill)}/mo` },
  ]

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

      <Reveal delay={0.05} className="mt-10">
        <SocialProofBar />
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
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">
                  Case Study
                </p>
                <div className="flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <Star className="size-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold text-primary">4.9</span>
                  <span className="text-xs text-muted-foreground">avg rating</span>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/15 font-serif text-sm font-semibold text-primary">
                  {featured.initials}
                </div>
                <div>
                  <blockquote className="font-serif text-2xl font-medium leading-snug tracking-tight text-balance sm:text-3xl">
                    &ldquo;{featured.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-muted-foreground">
                    {featured.name} — {featured.neighborhood}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-muted-foreground">
                Stats below sync with your calculator slider above.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border/50 bg-border/50 sm:grid-cols-4">
              {stats.map((s) => (
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

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {TESTIMONIALS.filter((t) => !t.featured).map((t, i) => (
          <Reveal key={t.name} delay={0.1 + i * 0.08}>
            <Card className="h-full border-border/50 bg-zinc-900/40 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.neighborhood}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
