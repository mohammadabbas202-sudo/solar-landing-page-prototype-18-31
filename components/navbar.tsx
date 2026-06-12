'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useLead } from '@/components/lead-dialog'

const LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Guarantees', href: '#guarantees' },
]

export function Navbar() {
  const { open } = useLead()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/50 bg-zinc-950/60 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top">
          <Logo layout="horizontal" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => open()}
            size="sm"
            className="hidden font-semibold sm:inline-flex"
          >
            Calculate Savings
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent className="border-border/50 bg-zinc-950/90 backdrop-blur-xl">
              <SheetTitle className="px-1">
                <Logo layout="horizontal" />
              </SheetTitle>
              <ul className="mt-6 flex flex-col gap-1">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-base text-foreground/90 transition-colors hover:bg-secondary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => {
                  setMobileOpen(false)
                  open()
                }}
                size="lg"
                className="mt-6 w-full font-semibold"
              >
                Calculate Savings
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
