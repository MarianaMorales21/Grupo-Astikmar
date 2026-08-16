import { useRef, useEffect } from 'react'

/**
 * CadCursor — Cursor global personalizado discreto y fluido con coordenadas CAD en tiempo real.
 * Usa manipulación directa del DOM (translate3d) para 60-120 FPS sin re-renders de React.
 */
export default function CadCursor() {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return

    let rafId = null

    const handleMouseMove = (e) => {
      const x = Math.round(e.clientX)
      const y = Math.round(e.clientY)

      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          containerRef.current.style.transform = `translate3d(${x + 12}px, ${y + 12}px, 0)`
          containerRef.current.style.opacity = '1'
        }
        if (textRef.current) {
          textRef.current.textContent = `X:${String(x).padStart(4, '0')} Y:${String(y).padStart(4, '0')}`
        }
      })
    }

    const handleMouseLeave = () => {
      if (containerRef.current) {
        containerRef.current.style.opacity = '0'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        userSelect: 'none',
        opacity: 0,
        willChange: 'transform, opacity',
        transition: 'opacity 0.25s ease',
      }}
    >
      {/* Mira/Crosshair discreta */}
      <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, opacity: 0.65 }}>
        <line x1="6" y1="0" x2="6" y2="12" stroke="#64748b" strokeWidth="0.8" />
        <line x1="0" y1="6" x2="12" y2="6" stroke="#64748b" strokeWidth="0.8" />
        <circle cx="6" cy="6" r="2.5" fill="none" stroke="#F97316" strokeWidth="0.8" />
      </svg>

      {/* Coordenadas discretas con fondo transparente */}
      <span
        ref={textRef}
        style={{
          fontFamily: "'Chakra Petch', 'Rajdhani', monospace",
          fontSize: '9.5px',
          fontWeight: 600,
          color: 'rgba(71, 85, 105, 0.75)',
          letterSpacing: '0.05em',
          background: 'transparent',
          padding: '1px 4px',
          whiteSpace: 'nowrap',
          textShadow: '0 1px 2px rgba(255,255,255,0.85)',
        }}
      />
    </div>
  )
}
