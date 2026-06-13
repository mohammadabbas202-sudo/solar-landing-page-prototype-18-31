import { cn } from '@/lib/utils'

interface LogoProps {
  layout?: 'horizontal' | 'vertical'
  className?: string
  iconClassName?: string
}

export function Logo({ layout = 'horizontal', className, iconClassName }: LogoProps) {
  // SVG Icon element (Sun Arc + 6 Perspective Panels)
  const iconSvg = (
    <svg
      viewBox="0 0 120 90"
      className={cn('h-10 w-auto shrink-0 select-none overflow-visible', iconClassName)}
      aria-hidden="true"
    >
      {/* Golden Rising Sun Arc */}
      <path
        d="M 33,62 A 28,28 0 1,1 87,62"
        fill="none"
        stroke="#F5A623"
        strokeWidth="4.5"
        strokeLinecap="round"
        className="transition-all duration-300 group-hover:stroke-[#F5A623] group-hover:[filter:drop-shadow(0_0_7px_rgba(245,158,11,0.85))]"
      />
      {/* 6 Perspective Solar Panels */}
      {/* Back Row */}
      <polygon
        points="50,56 58,56 55,64 45,64"
        className="fill-zinc-800 dark:fill-zinc-200 transition-colors duration-300 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-100"
      />
      <polygon
        points="60,56 70,56 69,64 59,64"
        className="fill-zinc-800 dark:fill-zinc-200 transition-colors duration-300 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-100"
      />
      <polygon
        points="72,56 80,56 83,64 73,64"
        className="fill-zinc-800 dark:fill-zinc-200 transition-colors duration-300 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-100"
      />
      {/* Front Row */}
      <polygon
        points="43,66 57,66 52,78 30,78"
        className="fill-zinc-800 dark:fill-zinc-200 transition-colors duration-300 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-100"
      />
      <polygon
        points="59,66 73,66 71,78 55,78"
        className="fill-zinc-800 dark:fill-zinc-200 transition-colors duration-300 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-100"
      />
      <polygon
        points="75,66 87,66 94,78 74,78"
        className="fill-zinc-800 dark:fill-zinc-200 transition-colors duration-300 group-hover:fill-zinc-600 dark:group-hover:fill-zinc-100"
      />
    </svg>
  )

  if (layout === 'vertical') {
    return (
      <div className={cn('group flex flex-col items-center text-center cursor-pointer', className)}>
        {iconSvg}
        <div className="mt-4 flex flex-col items-center">
          <span className="font-sans text-2xl font-bold tracking-[0.25em] text-foreground uppercase transition-all duration-300 group-hover:text-primary group-hover:[text-shadow:0_0_12px_rgba(245,158,11,0.55)]">
            Solstice
          </span>
          {/* Thin divider line with a golden segment */}
          <div className="my-2 h-[1px] w-36 bg-zinc-200 dark:bg-zinc-800 relative transition-colors duration-300 group-hover:bg-primary/30">
            <div className="absolute inset-x-10 top-0 h-[1px] bg-[#F5A623] transition-all duration-300 group-hover:inset-x-6" />
          </div>
          <span className="font-sans text-xs font-semibold tracking-[0.4em] text-[#F5A623] uppercase transition-all duration-300 group-hover:tracking-[0.45em] group-hover:[text-shadow:0_0_8px_rgba(245,158,11,0.4)]">
            Solar
          </span>
        </div>
      </div>
    )
  }

  // Horizontal layout for header navbar
  return (
    <div className={cn('group flex items-center gap-3 cursor-pointer', className)}>
      <div className="flex size-9 items-center justify-center rounded-lg bg-zinc-900/40 border border-border/40 p-1">
        <svg
          viewBox="0 0 120 90"
          className="size-full shrink-0 select-none overflow-visible"
          aria-hidden="true"
        >
          {/* Golden Rising Sun Arc */}
          <path
            d="M 33,62 A 28,28 0 1,1 87,62"
            fill="none"
            stroke="#F5A623"
            strokeWidth="5"
            strokeLinecap="round"
            className="transition-all duration-300 group-hover:stroke-[#F5A623] group-hover:[filter:drop-shadow(0_0_6px_rgba(245,158,11,0.85))]"
          />
          {/* Back Row */}
          <polygon points="50,56 58,56 55,64 45,64" className="fill-foreground transition-colors duration-300 group-hover:fill-primary" />
          <polygon points="60,56 70,56 69,64 59,64" className="fill-foreground transition-colors duration-300 group-hover:fill-primary" />
          <polygon points="72,56 80,56 83,64 73,64" className="fill-foreground transition-colors duration-300 group-hover:fill-primary" />
          {/* Front Row */}
          <polygon points="43,66 57,66 52,78 30,78" className="fill-foreground transition-colors duration-300 group-hover:fill-primary" />
          <polygon points="59,66 73,66 71,78 55,78" className="fill-foreground transition-colors duration-300 group-hover:fill-primary" />
          <polygon points="75,66 87,66 94,78 74,78" className="fill-foreground transition-colors duration-300 group-hover:fill-primary" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-sans text-base font-bold tracking-[0.15em] text-foreground uppercase transition-all duration-300 group-hover:text-primary group-hover:[text-shadow:0_0_8px_rgba(245,158,11,0.5)]">
          Solstice
        </span>
        <span className="mt-0.5 font-sans text-[9px] font-semibold tracking-[0.25em] text-[#F5A623] uppercase transition-all duration-300 group-hover:tracking-[0.28em] group-hover:[text-shadow:0_0_6px_rgba(245,158,11,0.4)]">
          Solar
        </span>
      </div>
    </div>
  )
}
