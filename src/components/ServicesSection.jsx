import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, ChevronLeft, ChevronRight, Wrench, ShieldCheck,
  FileSearch, Anchor, Zap, Layers, Hammer, Droplets, Sparkles
} from 'lucide-react'
import WaveTop from './WaveTop'
import SectionBadge from './SectionBadge'
import MarineEngineBlueprint from './Icons/MarineEngineBlueprint'
import SideProfileBlueprint from './Icons/SideprofileBlueprint'
import ConceptBlueprint from './Icons/ConceptBlueprint'
import ShipTanksBlueprint from './Icons/ShipTanksBlueprint'
import { allServices } from '../data/servicesData'
import { servicesSectionContent } from '../data/siteConfig'

const iconMap = {
  Wrench,
  ShieldCheck,
  FileSearch,
  Anchor,
  Zap,
  Layers,
  Hammer,
  Droplets,
  Sparkles,
}

const GAP = 24       // px de separación entre tarjetas

// Número de tarjetas visibles según ancho de viewport
function useVisibleCards() {
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 600) setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else setVisible(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return visible
}

// ── Componente tarjeta ───────────────────────────────────────────────────────
function ServiceCard({ svc, index, setCurrentPage, setSelectedService }) {
  const Icon = iconMap[svc.iconName] || Wrench
  const [hovered, setHovered] = useState(false)
  const num = String(index + 1).padStart(2, '0')

  const handleOpenService = () => {
    if (setSelectedService) {
      setSelectedService(svc)
    }
    if (setCurrentPage) {
      setCurrentPage('info-servicio')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleOpenService}
      animate={{
        y: hovered ? -6 : 0,
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.5), 0 4px 20px rgba(249,115,22,0.25)'
          : '0 6px 24px rgba(0,0,0,0.25)',
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{
        position: 'relative',
        background: 'rgba(255,255,255,0.04)',
        border: hovered ? '1px solid rgba(249,115,22,0.45)' : '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backdropFilter: 'blur(12px)',
        transition: 'border-color 0.3s',
        cursor: 'pointer',
      }}
    >
      {/* Número decorativo en esquina */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '14px',
          right: '18px',
          fontSize: '54px',
          fontWeight: 900,
          color: 'rgba(249,115,22,0.07)',
          fontFamily: 'Rajdhani, sans-serif',
          lineHeight: 1,
          pointerEvents: 'none',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        {num}
      </div>

      {/* Contenido de texto */}
      <div style={{ padding: '28px 28px 20px', position: 'relative', zIndex: 1, flex: 1 }}>
        {/* Ícono + Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: hovered ? 'rgba(249,115,22,0.2)' : 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#F97316',
              flexShrink: 0,
              transition: 'background 0.3s',
            }}
          >
            <Icon size={22} />
          </div>
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#F97316',
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.25)',
              borderRadius: '20px',
              padding: '3px 10px',
              whiteSpace: 'nowrap',
            }}
          >
            {svc.badge || svc.category}
          </span>
        </div>

        {/* Título */}
        <h3
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: '10px',
            lineHeight: 1.2,
          }}
        >
          {svc.title}
        </h3>

        {/* Descripción */}
        <p
          style={{
            fontSize: '13.5px',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.65,
          }}
        >
          {svc.desc}
        </p>
      </div>

      {/* Imagen */}
      <div
        style={{
          width: '100%',
          height: '180px',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <img
          src={svc.image || '/service-reparacion.png'}
          alt={svc.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.6s ease',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
          }}
        />
        {/* Gradiente sobre la imagen */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15,23,42,0.5) 0%, rgba(15,23,42,0.1) 100%)',
          }}
        />
      </div>

      {/* Botón inferior */}
      <div
        style={{
          padding: '16px 28px 24px',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          flexShrink: 0,
        }}
      >
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            handleOpenService()
          }}
          whileHover={{ scale: 1.04, background: 'rgba(249,115,22,0.18)', borderColor: 'rgba(249,115,22,0.7)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#F97316',
            background: 'transparent',
            border: '1px solid rgba(249,115,22,0.35)',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            letterSpacing: '0.04em',
          }}
        >
          Explorar servicio <ArrowRight size={13} />
        </motion.button>
      </div>
    </motion.div>
  )
}

// ── Componente principal ─────────────────────────────────────────────────────
export default function ServicesSection({ setCurrentPage, setSelectedService }) {
  const VISIBLE = useVisibleCards()
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  const maxIndex = Math.max(0, allServices.length - VISIBLE)

  // Calcula el ancho de una tarjeta en píxeles al montar y al redimensionar
  const computeCardWidth = useCallback(() => {
    if (!viewportRef.current) return
    const totalGap = (VISIBLE - 1) * GAP
    const w = (viewportRef.current.offsetWidth - totalGap) / VISIBLE
    setCardWidth(w)
  }, [VISIBLE])

  useEffect(() => {
    computeCardWidth()
    window.addEventListener('resize', computeCardWidth)
    return () => window.removeEventListener('resize', computeCardWidth)
  }, [computeCardWidth])

  useEffect(() => {
    if (current > maxIndex) {
      setCurrent(maxIndex)
    }
  }, [maxIndex, current])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1))

  const canPrev = current > 0
  const canNext = current < maxIndex

  // Desplazamiento en px: (cardWidth + gap) * índice actual
  const offsetX = cardWidth > 0 ? -current * (cardWidth + GAP) : 0

  return (
    <section
      id="servicios"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        overflow: 'hidden',
        paddingBottom: '80px',
      }}
    >
      {/* ── Ola superior: fill=#0f172a corta directamente el fondo blueprint del Hero ── */}
      <WaveTop
        fill="#0f172a"
        bgColor="transparent"
        height={95}
        style={{ marginTop: '-48px', position: 'relative', zIndex: 10 }}
      />

      {/* Decoración de fondo: cuadrícula de plano (cuadritos estilo Nosotros) — zIndex 12 para iniciar desde el borde superior real */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          zIndex: 12,
        }}
      />

      {/* Resplandor naranja central */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* ── REGLAS LATERALES Y COORDENADAS CAD TIPO NOSOTROS ── */}
      {/* Regla vertical izquierda */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '26px',
        background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 15, padding: '20px 0', pointerEvents: 'none',
      }}>
        {["60'", "50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Rajdhani, monospace', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* Regla vertical derecha */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '26px',
        background: 'rgba(255,255,255,0.02)', borderLeft: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 15, padding: '20px 0', pointerEvents: 'none',
      }}>
        {["60'", "50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Rajdhani, monospace', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* Marcas de esquina / Orillos técnicos CAD desde el borde superior */}
      <div style={{ position: 'absolute', top: '20px', left: '36px', fontSize: '10.5px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', zIndex: 15, pointerEvents: 'none' }}>
        + SEC-01 [SERVICIOS_PRINCIPALES_NAVALES]
      </div>
      <div style={{ position: 'absolute', top: '20px', right: '36px', fontSize: '10.5px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', zIndex: 15, pointerEvents: 'none' }}>
        CAD-GRID: 1440x900 +
      </div>

      {/* Inscripciones de coordenadas sutiles dispersas */}
      <div style={{ position: 'absolute', top: '28%', right: '3%', fontSize: '10.5px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none', zIndex: 2 }}>
        ⊕ COORD_REF: LAT 10.48° N / LON 66.90° W
      </div>
      <div style={{ position: 'absolute', bottom: '15%', left: '3%', fontSize: '10.5px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none', zIndex: 2 }}>
        ⊕ ISO_9001:2015 / LLOYD_REGISTERED
      </div>

      {/* Planos técnicos flotantes de fondo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.18, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out' }}
        style={{ position: 'absolute', top: '10%', right: '-2%', width: '320px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.16, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out' }}
        style={{ position: 'absolute', bottom: '12%', left: '-2%', width: '340px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* Contenido */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        {/* ── Encabezado ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '52px' }}
        >
          {/* Badge unificado cian neón */}

          <h2
            style={{
              fontSize: 'clamp(24px, 4vw, 42px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '12px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {servicesSectionContent.title.line1}{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>{servicesSectionContent.title.highlight}</span>{' '}
            {servicesSectionContent.title.line2}
          </h2>

          <p
            style={{
              fontSize: 'clamp(13px, 1.6vw, 15px)',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
              fontFamily: 'var(--font-body)',
            }}
          >
            {servicesSectionContent.subtitle}
          </p>
        </motion.div>

        {/* ── Carrusel ── */}
        <div style={{ position: 'relative' }}>
          {/* Fade izquierda */}
          {canPrev && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '64px',
                background: 'linear-gradient(90deg, #0f172a 0%, transparent 100%)',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            />
          )}
          {/* Fade derecha */}
          {canNext && (
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                width: '64px',
                background: 'linear-gradient(270deg, #1e293b 0%, transparent 100%)',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Viewport (clip) */}
          <div
            ref={viewportRef}
            style={{ overflow: 'hidden' }}
          >
            {/* Track animado */}
            <motion.div
              ref={trackRef}
              animate={{ x: offsetX }}
              transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              style={{
                display: 'flex',
                gap: `${GAP}px`,
              }}
            >
              {allServices.map((svc, i) => (
                <div
                  key={svc.id}
                  style={{
                    flex: '0 0 auto',
                    width: cardWidth > 0 ? `${cardWidth}px` : `calc((100% - ${(VISIBLE - 1) * GAP}px) / ${VISIBLE})`,
                  }}
                >
                  <ServiceCard
                    svc={svc}
                    index={i}
                    setCurrentPage={setCurrentPage}
                    setSelectedService={setSelectedService}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Controles: dots + botones ── */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginTop: '36px',
            }}
          >
            {/* Botón prev */}
            <motion.button
              id="services-carousel-prev"
              onClick={prev}
              disabled={!canPrev}
              whileHover={canPrev ? { scale: 1.08 } : {}}
              whileTap={canPrev ? { scale: 0.94 } : {}}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `2px solid ${canPrev ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.12)'}`,
                background: canPrev ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.04)',
                color: canPrev ? '#F97316' : 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canPrev ? 'pointer' : 'not-allowed',
                transition: 'all 0.25s ease',
              }}
              aria-label="Anterior"
            >
              <ChevronLeft size={22} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#F97316' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    padding: 0,
                  }}
                  aria-label={`Ir al grupo ${i + 1}`}
                />
              ))}
            </div>

            {/* Botón next */}
            <motion.button
              id="services-carousel-next"
              onClick={next}
              disabled={!canNext}
              whileHover={canNext ? { scale: 1.08 } : {}}
              whileTap={canNext ? { scale: 0.94 } : {}}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: `2px solid ${canNext ? 'rgba(249,115,22,0.5)' : 'rgba(255,255,255,0.12)'}`,
                background: canNext ? 'rgba(249,115,22,0.1)' : 'rgba(255,255,255,0.04)',
                color: canNext ? '#F97316' : 'rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: canNext ? 'pointer' : 'not-allowed',
                transition: 'all 0.25s ease',
              }}
              aria-label="Siguiente"
            >
              <ChevronRight size={22} />
            </motion.button>
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '52px' }}
        >
          <motion.button
            id="services-view-catalog"
            onClick={() => setCurrentPage?.('servicios')}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 12px 40px rgba(249,115,22,0.55)',
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)',
              color: 'white',
              fontSize: '15px',
              fontWeight: 700,
              padding: '14px 32px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(249,115,22,0.4)',
              letterSpacing: '0.01em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {servicesSectionContent.ctaText}
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
