'use client'

import { useEffect, useState } from 'react'
import { animate } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import {
  DEFAULT_BILL,
  MAX_BILL,
  MIN_BILL,
  estimateNewMonthlyBill,
  estimateTwentyYearSavings,
  formatCurrency,
} from '@/lib/savings'

export function RoiSandbox() {
  const [bill, setBill] = useState(DEFAULT_BILL)
  const [displaySavings, setDisplaySavings] = useState(
    estimateTwentyYearSavings(DEFAULT_BILL),
  )

  const targetSavings = estimateTwentyYearSavings(bill)
  const newBill = estimateNewMonthlyBill(bill)

  useEffect(() => {
    const controls = animate(displaySavings, targetSavings, {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplaySavings(v),
    })
    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetSavings])

  return (
    <Card className="w-full gap-0 border-border/50 bg-zinc-900/40 p-6 backdrop-blur-md sm:p-8">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <TrendingUp className="size-4 text-primary" />
        Instant ROI Sandbox
      </div>

      <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">
        Your Estimated 20-Year Savings
      </p>
      <p className="mt-1 font-serif text-5xl font-semibold tracking-tight text-primary tabular-nums sm:text-6xl">
        {formatCurrency(Math.round(displaySavings))}
      </p>

      <div className="mt-8">
        <div className="flex items-end justify-between">
          <label htmlFor="bill" className="text-sm text-muted-foreground">
            Current monthly electric bill
          </label>
          <span className="font-serif text-2xl font-semibold tabular-nums">
            {formatCurrency(bill)}
          </span>
        </div>
        <Slider
          id="bill"
          className="mt-4"
          min={MIN_BILL}
          max={MAX_BILL}
          step={5}
          value={[bill]}
          onValueChange={(v) => setBill(v[0])}
          aria-label="Monthly electric bill"
        />
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>{formatCurrency(MIN_BILL)}</span>
          <span>{formatCurrency(MAX_BILL)}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-lg border border-border/50 bg-background/30 px-4 py-3">
        <span className="text-sm text-muted-foreground">
          New est. monthly bill with solar
        </span>
        <span className="font-semibold tabular-nums text-primary">
          {formatCurrency(newBill)}/mo
        </span>
      </div>
    </Card>
  )
}
