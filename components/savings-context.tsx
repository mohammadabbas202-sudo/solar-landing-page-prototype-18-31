'use client'

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  DEFAULT_BILL,
  estimateNewMonthlyBill,
  estimateTwentyYearSavings,
} from '@/lib/savings'

type SavingsContextValue = {
  bill: number
  setBill: (bill: number) => void
  twentyYearSavings: number
  newMonthlyBill: number
}

const SavingsContext = createContext<SavingsContextValue | null>(null)

export function useSavings() {
  const ctx = useContext(SavingsContext)
  if (!ctx) throw new Error('useSavings must be used within <SavingsProvider>')
  return ctx
}

export function SavingsProvider({ children }: { children: ReactNode }) {
  const [bill, setBill] = useState(DEFAULT_BILL)

  const value = useMemo(
    () => ({
      bill,
      setBill,
      twentyYearSavings: estimateTwentyYearSavings(bill),
      newMonthlyBill: estimateNewMonthlyBill(bill),
    }),
    [bill],
  )

  return (
    <SavingsContext.Provider value={value}>{children}</SavingsContext.Provider>
  )
}
