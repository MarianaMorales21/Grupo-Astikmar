import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function Card({ className, hover = true, animated = false, children, ...props }) {
  const Component = animated ? motion.div : 'div'
  const motionProps = animated
    ? {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4 }
      }
    : {}

  return (
    <Component
      className={cn(
        'rounded-2xl bg-white border border-slate-200/80 shadow-sm transition-all duration-300 overflow-hidden flex flex-col',
        hover && 'hover:shadow-xl hover:border-slate-300 hover:-translate-y-1',
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  )
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pb-3 flex flex-col gap-1.5', className)} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn('text-xl font-bold text-[#1D2939] tracking-tight', className)} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ className, children, ...props }) {
  return (
    <p className={cn('text-sm text-slate-600 leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pt-0 flex-1', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className, children, ...props }) {
  return (
    <div className={cn('p-6 pt-0 mt-auto flex items-center justify-between border-t border-slate-100/80 pt-4', className)} {...props}>
      {children}
    </div>
  )
}
