import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../lib/utils'

export function Accordion({ items = [], allowMultiple = false, className }) {
  const [openIndexes, setOpenIndexes] = useState([0])

  const toggle = (index) => {
    if (allowMultiple) {
      setOpenIndexes(prev =>
        prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
      )
    } else {
      setOpenIndexes(prev => (prev.includes(index) ? [] : [index]))
    }
  }

  return (
    <div className={cn('divide-y divide-slate-200 border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden', className)}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        return (
          <div key={item.id || index} className="transition-colors">
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-[#1D2939] hover:bg-slate-50/80 transition-colors focus:outline-none focus:bg-slate-50"
            >
              <span className="flex items-center gap-3 text-base">
                {item.icon && <item.icon className="w-5 h-5 text-orange-500 shrink-0" />}
                {item.title}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200',
                  isOpen && 'transform rotate-180 text-orange-500'
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden bg-slate-50/50"
                >
                  <div className="px-6 py-4 text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
