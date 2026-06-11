'use client'

import { useState } from 'react'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useLead } from '@/components/lead-dialog'

type InlineCtaProps = {
  buttonLabel?: string
  placeholder?: string
  compact?: boolean
  className?: string
}

export function InlineCta({
  buttonLabel = 'See My Roof’s Potential',
  placeholder = 'Enter your address or ZIP code',
  compact = false,
  className,
}: InlineCtaProps) {
  const { open } = useLead()
  const [zip, setZip] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        open(zip)
      }}
      className={cn(
        'flex w-full flex-col gap-2 sm:flex-row',
        compact ? 'gap-2' : 'gap-3',
        className,
      )}
    >
      <div className="relative flex-1">
        <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className={cn(
            'border-border/60 bg-background/40 pl-9 backdrop-blur-sm',
            compact ? 'h-10' : 'h-12 text-base',
          )}
        />
      </div>
      <Button
        type="submit"
        size={compact ? 'default' : 'lg'}
        className={cn(
          'group shrink-0 font-semibold',
          !compact && 'h-12 px-6 text-base',
        )}
      >
        {buttonLabel}
        <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
      </Button>
    </form>
  )
}
