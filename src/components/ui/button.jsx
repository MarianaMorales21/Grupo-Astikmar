import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const buttonVariants = {
  primary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20 active:scale-[0.98]',
  navy: 'bg-[#1D2939] hover:bg-[#2A3B50] text-white shadow-md shadow-slate-900/10 active:scale-[0.98]',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 active:scale-[0.98]',
  outline: 'border-2 border-[#1D2939] text-[#1D2939] hover:bg-[#1D2939] hover:text-white active:scale-[0.98]',
  outlineOrange: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white active:scale-[0.98]',
  ghost: 'hover:bg-slate-100 text-slate-700 hover:text-slate-900',
  link: 'text-orange-500 underline-offset-4 hover:underline p-0 h-auto font-semibold'
}

export const buttonSizes = {
  sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
  md: 'h-10 px-4 text-sm rounded-lg gap-2 font-medium',
  lg: 'h-12 px-6 text-base rounded-xl gap-2.5 font-semibold',
  icon: 'h-10 w-10 p-0 rounded-lg justify-center'
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'left',
  animated = true,
  disabled = false,
  ...props
}) {
  const Component = animated ? motion.button : 'button'
  const motionProps = animated
    ? {
        whileHover: disabled ? {} : { scale: 1.02 },
        whileTap: disabled ? {} : { scale: 0.97 }
      }
    : {}

  return (
    <Component
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 font-sans cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
        buttonVariants[variant] || buttonVariants.primary,
        buttonSizes[size] || buttonSizes.md,
        className
      )}
      {...motionProps}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </Component>
  )
}
