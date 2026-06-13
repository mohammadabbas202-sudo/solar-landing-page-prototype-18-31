'use client'

const STATS = [
  { value: '500+', label: 'Austin installs' },
  { value: '$12M+', label: 'Homeowner savings' },
  { value: '4.9★', label: 'Avg. rating' },
]

const PARTNERS = [
  { name: 'Enphase', abbr: 'EP' },
  { name: 'NABCEP', abbr: 'NB' },
  { name: 'REC Solar', abbr: 'RC' },
  { name: 'Tesla Powerwall', abbr: 'TP' },
]

export function SocialProofBar() {
  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-zinc-900/40 backdrop-blur-md">
      <div className="grid grid-cols-3 divide-x divide-border/50">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-4 py-5 text-center sm:py-6">
            <p className="font-serif text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border/50 px-6 py-4">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          Certified partners
        </span>
        {PARTNERS.map((partner) => (
          <div
            key={partner.name}
            className="flex items-center gap-2 text-muted-foreground"
            title={partner.name}
          >
            <span className="flex size-8 items-center justify-center rounded border border-border/60 bg-background/30 text-[10px] font-bold tracking-wider">
              {partner.abbr}
            </span>
            <span className="hidden text-xs sm:inline">{partner.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
