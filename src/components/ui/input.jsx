import React from 'react'
import { cn } from '../../lib/utils'

export function Input({ className, label, error, helperText, icon: Icon, ...props }) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-slate-700 flex items-center justify-between">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          className={cn(
            'w-full h-11 px-3.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 disabled:bg-slate-100 disabled:opacity-70',
            Icon && 'pl-10',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
            className
          )}
          {...props}
        />
      </div>
      {error ? (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-500">{helperText}</span>
      ) : null}
    </div>
  )
}

export function Textarea({ className, label, error, helperText, ...props }) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          'w-full min-h-[120px] p-3.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 disabled:bg-slate-100 disabled:opacity-70 resize-y',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500/10',
          className
        )}
        {...props}
      />
      {error ? (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      ) : helperText ? (
        <span className="text-xs text-slate-500">{helperText}</span>
      ) : null}
    </div>
  )
}
