'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { InlineCta } from '@/components/inline-cta'

export function ConversionDock() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop: sticky top bar */}
          <motion.div
            initial={{ y: -64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -64, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-40 hidden border-b border-border/50 bg-zinc-950/70 backdrop-blur-md lg:block"
          >
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
              <p className="font-serif text-sm font-medium tracking-tight">
                Ready to own your power? Calculate your savings.
              </p>
              <div className="w-full max-w-md">
                <InlineCta
                  compact
                  buttonLabel="Calculate Savings"
                  placeholder="Address or ZIP code"
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile: bottom dock */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-zinc-950/80 p-3 backdrop-blur-md lg:hidden"
          >
            <InlineCta
              compact
              buttonLabel="Calculate Savings"
              placeholder="Address or ZIP code"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
