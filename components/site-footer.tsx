'use client'

import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InlineCta } from '@/components/inline-cta'
import { Logo } from '@/components/logo'

export function SiteFooter({
  onContact,
}: {
  onContact: () => void
}) {
  return (
    <footer className="relative border-t border-border/50 bg-zinc-950/80 backdrop-blur-md pt-16 pb-8">
      {/* Decorative top ambient border glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo & Description Brand Column */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col items-start">
            <a href="#top" className="group">
              <Logo layout="vertical" className="items-start text-left" />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Lock in your fixed electricity costs and turn a dead utility expense into clean, wealth-building home equity. Engineered specifically for Texas homeowners.
            </p>
            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex size-8 items-center justify-center rounded-full border border-border/60 bg-zinc-900/40 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  aria-label={`Follow us on ${social}`}
                >
                  <span className="text-[10px] font-semibold tracking-wider">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Program Directory */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              The Program
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Savings Calculator', href: '#top' },
                { label: 'Compare Pricing', href: '#pricing' },
                { label: 'Solstice Guarantee', href: '#guarantees' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Directory */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Resources
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { label: 'Solar Tax Credits (2026)', href: '#' },
                { label: 'Texas Utility Rates', href: '#' },
                { label: 'Homeowner Guide', href: '#' },
                { label: 'Frequently Asked Questions', href: '#faq' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact HQ Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Contact
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="size-4 shrink-0 mt-0.5 text-primary/80" />
                <span>Austin Headquarters<br />Congress Ave, Austin, TX 78701</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="size-4 shrink-0 text-primary/80" />
                <a href="tel:5125550199" className="transition-colors hover:text-primary">
                  (512) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Mail className="size-4 shrink-0 text-primary/80" />
                <a href="mailto:hello@solsticesolar.com" className="transition-colors hover:text-primary">
                  hello@solsticesolar.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mid Band - Newsletter/ZIP Collector */}
        <div className="mt-16 flex flex-col gap-6 border-t border-border/50 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h4 className="text-sm font-semibold text-foreground">
              Ready to claim your solar incentives?
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Calculate your exact 20-year savings and lock in fixed energy rates before utility fees increase this summer.
            </p>
          </div>
          <div className="w-full max-w-sm">
            <InlineCta
              compact
              buttonLabel="Calculate Savings"
              placeholder="Enter ZIP code"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Solstice Solar, LLC. Savings estimates are illustrative and not a guarantee of financial outcomes.
          </p>
          <div className="flex items-center gap-5">
            <button
              onClick={onContact}
              className="transition-colors hover:text-primary"
            >
              Contact Representative
            </button>
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Legal Disclaimers
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="size-8 rounded-full border border-border/60 hover:border-primary hover:text-primary transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
