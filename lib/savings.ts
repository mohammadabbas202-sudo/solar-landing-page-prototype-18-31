// Solar savings model — all client-side, persona-tuned for Austin, TX.

export const DEFAULT_BILL = 280
export const MIN_BILL = 100
export const MAX_BILL = 500

/**
 * Estimate 20-year savings from a monthly electric bill.
 * Assumes solar offsets ~88% of the bill, utility rates inflate ~3.5%/yr,
 * and nets out an amortized system cost. Tuned so $280/mo ≈ $45,000.
 */
export function estimateTwentyYearSavings(monthlyBill: number): number {
  const years = 20
  const annualInflation = 0.035
  const solarOffset = 0.88
  const annualSystemCost = monthlyBill * 12 * 0.57 // amortized $0-down payment

  let cumulative = 0
  for (let year = 0; year < years; year++) {
    const inflatedAnnualBill =
      monthlyBill * 12 * Math.pow(1 + annualInflation, year)
    const avoided = inflatedAnnualBill * solarOffset
    cumulative += avoided - annualSystemCost
  }
  return Math.max(0, Math.round(cumulative))
}

/** New post-solar monthly bill estimate (small fixed grid connection). */
export function estimateNewMonthlyBill(monthlyBill: number): number {
  return Math.max(15, Math.round(monthlyBill * 0.12))
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}
