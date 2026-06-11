'use client'

import { useState } from 'react'
import { LeadProvider } from '@/components/lead-dialog'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CtaBand } from '@/components/cta-band'
import { FeaturesGrid } from '@/components/features-grid'
import { PricingCompare } from '@/components/pricing-compare'
import { ProofGuarantees } from '@/components/proof-guarantees'
import { SiteFooter } from '@/components/site-footer'
import { ConversionDock } from '@/components/conversion-dock'
import { ContactView } from '@/components/contact-view'

export default function Page() {
  const [view, setView] = useState<'landing' | 'contact'>('landing')

  if (view === 'contact') {
    return <ContactView onBack={() => setView('landing')} />
  }

  return (
    <LeadProvider>
      <Navbar />
      <ConversionDock />
      <main>
        <Hero />
        <CtaBand />
        <FeaturesGrid />
        <PricingCompare />
        <ProofGuarantees />
      </main>
      <SiteFooter onContact={() => setView('contact')} />
    </LeadProvider>
  )
}
