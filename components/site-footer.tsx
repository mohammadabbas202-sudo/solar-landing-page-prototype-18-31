'use client'

import { ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InlineCta } from '@/components/inline-cta'
import { Logo } from '@/components/logo'

export function SiteFooter({
  onContact,
}: {
  onContact: () => void
}) {
  return (
    <footer className="border-t border-border/50 bg-zinc-950/60 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Logo layout="vertical" className="items-start text-left" />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              Last chance — drop your ZIP and we&apos;ll calculate your 20-year
              savings before you go.
            </p>
            <div className="mt-4 max-w-md">
              <InlineCta
                compact
                buttonLabel="Calculate Savings"
                placeholder="Enter ZIP code"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Button
              variant="outline"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
              className="gap-2"
            >
              <ArrowUp className="size-4" />
              Back to Top
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Solstice Solar, LLC. Savings estimates
            are illustrative and not a guarantee of future results.
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={onContact}
              className="transition-colors hover:text-foreground"
            >
              Contact a Representative
            </button>
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Legal Disclaimers
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
