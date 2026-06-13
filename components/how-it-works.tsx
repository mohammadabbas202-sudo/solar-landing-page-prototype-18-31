'use client'

import { ClipboardCheck, DraftingCompass, Hammer, Zap } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    icon: ClipboardCheck,
    title: 'Consult',
    body: 'We review your roof, usage history, and goals — then model your exact savings with no obligation.',
  },
  {
    icon: DraftingCompass,
    title: 'Design',
    body: 'Our engineers create a custom system layout optimized for your roof pitch, shading, and Austin utility rates.',
  },
  {
    icon: Hammer,
    title: 'Permit & Install',
    body: 'We handle HOA approvals, city permits, and a white-glove install — typically completed in 1–2 days on site.',
  },
  {
    icon: Zap,
    title: 'Power On',
    body: 'Flip the switch and start generating. We monitor production remotely and guarantee output for 25 years.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-primary">
          How It Works
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          From first call to first kilowatt in four steps.
        </h2>
        <p className="mt-4 text-muted-foreground text-pretty">
          Most Austin homeowners go from consultation to generating power in
          6–8 weeks. We handle every detail in between.
        </p>
      </Reveal>

      <div className="relative mt-14">
        {/* Connecting line — desktop */}
        <div
          aria-hidden
          className="absolute left-0 right-0 top-8 hidden h-px bg-border/60 lg:block"
        />

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <li className="relative flex flex-col items-start">
                <div className="relative z-10 flex size-16 items-center justify-center rounded-full border border-primary/30 bg-zinc-900/80 backdrop-blur-md">
                  <step.icon className="size-6 text-primary" />
                  <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>

                {/* Mobile connecting line */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute left-8 top-16 h-[calc(100%+2rem)] w-px bg-border/60 lg:hidden"
                  />
                )}

                <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
