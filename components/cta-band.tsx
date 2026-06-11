'use client'

import { Reveal } from '@/components/reveal'
import { InlineCta } from '@/components/inline-cta'

export function CtaBand() {
  return (
    <section className="border-y border-border/50 bg-zinc-900/30">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <Reveal>
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Find out what your roof is worth.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
            One address is all it takes. We&apos;ll map your roof, model
            production, and send a custom savings report.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl">
          <InlineCta />
        </Reveal>
      </div>
    </section>
  )
}
