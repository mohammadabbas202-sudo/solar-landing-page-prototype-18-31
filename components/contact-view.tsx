'use client'

import { useState } from 'react'
import { ArrowLeft, CheckCircle2, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export function ContactView({ onBack }: { onBack: () => void }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24">
      <div className="absolute inset-0 -z-10">
        <img
          src="/estate-hero.png"
          alt=""
          aria-hidden
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/90 to-zinc-950" />
      </div>

      <Card className="w-full max-w-lg border-border/50 bg-zinc-900/50 p-8 backdrop-blur-xl">
        <Button
          variant="ghost"
          onClick={onBack}
          className="-ml-2 mb-4 gap-2 text-muted-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to landing
        </Button>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle2 className="size-12 text-primary" />
            <h1 className="font-serif text-2xl font-semibold tracking-tight">
              Message received.
            </h1>
            <p className="text-muted-foreground">
              A Solstice Solar representative will reach out within one business
              day.
            </p>
          </div>
        ) : (
          <>
            <div className="flex size-11 items-center justify-center rounded-full bg-primary/15">
              <Sun className="size-5 text-primary" />
            </div>
            <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
              Talk to a representative
            </h1>
            <p className="mt-2 text-muted-foreground">
              Have questions before you calculate? Send us a note and we&apos;ll
              get back to you.
            </p>
            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
            >
              <Input required placeholder="Full name" aria-label="Full name" />
              <Input
                required
                type="email"
                placeholder="Email address"
                aria-label="Email address"
              />
              <Input placeholder="ZIP code" aria-label="ZIP code" />
              <textarea
                required
                rows={4}
                placeholder="How can we help?"
                aria-label="Message"
                className="flex w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm backdrop-blur-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button type="submit" size="lg" className="mt-1 font-semibold">
                Send Message
              </Button>
            </form>
          </>
        )}
      </Card>
    </main>
  )
}
