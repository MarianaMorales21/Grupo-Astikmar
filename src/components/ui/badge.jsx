import React from 'react'
import { cn } from '../../lib/utils'

export const badgeVariants = {
  orange: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
  navy: 'bg-[#1D2939]/10 text-[#1D2939] border-[#1D2939]/20',
  emerald: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
  blue: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
  gray: 'bg-slate-100 text-slate-700 border-slate-200',
  dark: 'bg-[#1D2939] text-white border-slate-700',
}

export function Badge({ className, variant = 'orange', dot = false, children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full border transition-colors',
        badgeVariants[variant] || badgeVariants.orange,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0 animate-pulse" />
      )}
      {children}
    </span>
  )
}
