import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * CadCursor — Cursor global personalizado interactivo con coordenadas CAD en tiempo real.
 * Se muestra en todas las pantallas y páginas de la web para dispositivos con puntero (mouse).
 */
export default function CadCursor() {
  const [pos, setPos] = useState(null)
  const [isPointerDevice, setIsPointerDevice] = useState(false)

  useEffect(() => {
    // Detectar si el dispositivo tiene cursor/mouse (evita mostrarlo en móviles touch)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsPointerDevice(mediaQuery.matches)

    const handleMediaChange = (e) => setIsPointerDevice(e.matches)
    mediaQuery.addEventListener('change', handleMediaChange)

    let animationFrameId = null

    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(() => {
        setPos({
          x: Math.round(e.clientX),
          y: Math.round(e.clientY),
        })
      })
    }

    const handleMouseLeave = () => {
      setPos(null)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!isPointerDevice || !pos) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x + 14,
        top: pos.y + 14,
        pointerEvents: 'none',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        userSelect: 'none',
      }}
    >
      {/* Mira/Crosshair CAD */}
      <svg width="14" height="14" viewBox="0 0 14 14" style={{ flexShrink: 0, filter: 'drop-shadow(0 0 4px rgba(0,240,255,0.7))' }}>
        <line x1="7" y1="0" x2="7" y2="14" stroke="#00f0ff" strokeWidth="1.2" />
        <line x1="0" y1="7" x2="14" y2="7" stroke="#00f0ff" strokeWidth="1.2" />
        <circle cx="7" cy="7" r="3.5" fill="none" stroke="#F97316" strokeWidth="1" />
      </svg>

      {/* Caja de Coordenadas X/Y */}
      <span
        style={{
          fontFamily: "'Chakra Petch', 'Rajdhani', monospace",
          fontSize: '10.5px',
          fontWeight: 700,
          color: '#00f0ff',
          letterSpacing: '0.06em',
          background: 'rgba(11, 29, 58, 0.90)',
          padding: '2px 7px',
          borderRadius: '4px',
          border: '1px solid rgba(0, 240, 255, 0.45)',
          boxShadow: '0 2px 10px rgba(0,0,0,0.35), 0 0 8px rgba(0,240,255,0.25)',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(4px)',
        }}
      >
        X:{String(pos.x).padStart(4, '0')} Y:{String(pos.y).padStart(4, '0')}
      </span>
    </div>
  )
}
