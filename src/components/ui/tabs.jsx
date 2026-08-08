import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export function Tabs({ tabs = [], activeTab, onChange, variant = 'pills', className }) {
  return (
    <div
      className={cn(
        variant === 'pills'
          ? 'inline-flex items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/60 overflow-x-auto max-w-full'
          : 'flex border-b border-slate-200 gap-6 overflow-x-auto max-w-full',
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative flex items-center gap-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer focus:outline-none',
              variant === 'pills'
                ? cn(
                    'px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900',
                    isActive && 'text-[#1D2939] font-bold shadow-sm'
                  )
                : cn(
                    'pb-3 text-slate-500 hover:text-slate-800',
                    isActive && 'text-orange-500 font-bold'
                  )
            )}
          >
            {tab.icon && <tab.icon className={cn('w-4 h-4', isActive ? 'text-orange-500' : 'text-slate-400')} />}
            {tab.label}
            {tab.badge && (
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-slate-200 text-slate-700 font-medium">
                {tab.badge}
              </span>
            )}
            {variant === 'pills' && isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-white rounded-lg -z-10 shadow-sm border border-slate-200/50"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            {variant === 'underline' && isActive && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
