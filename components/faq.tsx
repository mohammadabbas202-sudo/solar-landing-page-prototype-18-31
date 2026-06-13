'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const FAQ_ITEMS = [
  {
    question: 'Will my HOA approve solar panels?',
    answer:
      'Texas law protects your right to install solar, and most Austin-area HOAs approve standard rooftop systems. We prepare all architectural drawings and submit the application on your behalf — approval typically takes 2–4 weeks.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'From signed agreement to flipping the switch, most projects take 6–8 weeks. The on-roof install itself is usually 1–2 days. Permitting and utility interconnection account for most of the timeline.',
  },
  {
    question: 'Is $0 down really $0 down?',
    answer:
      'Yes. Our ownership program requires no upfront payment. You start with a fixed monthly solar payment that replaces most of your utility bill — often for less than you pay the grid today.',
  },
  {
    question: 'What happens if I sell my home?',
    answer:
      'Owned systems transfer with the home and typically increase resale value. If you financed, the loan transfers to the buyer or can be paid off at closing. We provide a production guarantee packet for your listing agent.',
  },
  {
    question: 'What about hail and storm damage?',
    answer:
      'Panels are rated for hail up to 1 inch at 50 mph. Your homeowner\'s insurance covers storm damage, and we assist with claims. Our zero-leak roof warranty covers every penetration we make.',
  },
  {
    question: 'What tax credits are available in 2026?',
    answer:
      'The federal Investment Tax Credit covers 30% of system cost for qualifying homeowners. Texas has no state income tax credit, but Austin Energy offers additional rebates for eligible customers. We itemize every incentive in your custom report.',
  },
  {
    question: 'How much maintenance do panels need?',
    answer:
      'Very little. Rain usually keeps panels clean in Austin. We include remote monitoring and an annual production check. There are no moving parts — most systems run 25+ years with minimal upkeep.',
  },
  {
    question: 'What financing options do you offer?',
    answer:
      'We offer $0-down ownership loans with fixed rates, plus traditional cash purchase. Every option is modeled side-by-side in your savings report so you can compare monthly payment vs. long-term savings.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <Reveal className="text-center">
        <p className="text-sm uppercase tracking-widest text-primary">
          FAQ
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Common questions from Austin homeowners
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
          Straight answers about HOA rules, timelines, financing, and what to
          expect after install.
        </p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-2">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <Reveal key={item.question} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl border border-border/50 bg-zinc-900/40 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-background/20"
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      'size-5 shrink-0 text-muted-foreground transition-transform duration-200',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-[grid-template-rows] duration-200',
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
