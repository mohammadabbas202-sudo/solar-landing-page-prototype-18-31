'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { CheckCircle2, MapPin, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

type LeadContextValue = {
  open: (prefillZip?: string) => void
}

const LeadContext = createContext<LeadContextValue | null>(null)

export function useLead() {
  const ctx = useContext(LeadContext)
  if (!ctx) throw new Error('useLead must be used within <LeadProvider>')
  return ctx
}

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [zip, setZip] = useState('')

  const open = useCallback((prefillZip?: string) => {
    if (prefillZip) setZip(prefillZip)
    setSubmitted(false)
    setIsOpen(true)
  }, [])

  const value = useMemo(() => ({ open }), [open])

  return (
    <LeadContext.Provider value={value}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border-border/60 bg-card/80 backdrop-blur-xl sm:max-w-md">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-6 text-center">
              <CheckCircle2 className="size-12 text-primary" />
              <DialogTitle className="font-serif text-2xl tracking-tight">
                {"You're on the list."}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                A solar advisor will review your roof and reach out within one
                business day with a custom savings report.
              </DialogDescription>
              <Button
                variant="outline"
                className="mt-2"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <div className="mb-2 flex size-11 items-center justify-center rounded-full bg-primary/15">
                  <Sun className="size-5 text-primary" />
                </div>
                <DialogTitle className="font-serif text-2xl tracking-tight">
                  See your roof&apos;s potential
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Enter your details and we&apos;ll model your exact 20-year
                  savings. No cost, no obligation.
                </DialogDescription>
              </DialogHeader>
              <form
                className="flex flex-col gap-3"
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
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    required
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Address or ZIP code"
                    aria-label="Address or ZIP code"
                    className="pl-9"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-1 w-full font-semibold">
                  Calculate My Savings
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </LeadContext.Provider>
  )
}
