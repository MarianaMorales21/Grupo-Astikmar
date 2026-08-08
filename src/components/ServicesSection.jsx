import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Wrench, ShieldCheck, FileSearch, Anchor, Zap, Layers } from 'lucide-react'
import WaveTop from './WaveTop'

// ── Datos de servicios ───────────────────────────────────────────────────────
const services = [
  {
    num: '01',
    title: 'Reparación Naval',
    desc: 'Soluciones técnicas integrales en muelle y dique para mantener su embarcación 100% operativa. Sandblasting, pintura de grado marino y reparación de propulsión.',
    image: '/service-reparacion.png',
    icon: Wrench,
    badge: 'Muelle & Dique',
  },
  {
    num: '02',
    title: 'Mantenimiento Preventivo',
    desc: 'Programas de mantenimiento continuo orientados a prevenir fallas y maximizar el tiempo en mar. Overhaul a cero horas de motores y generadores navales.',
    image: '/service-motores.png',
    icon: ShieldCheck,
    badge: 'Flotas & Ferries',
  },
  {
    num: '03',
    title: 'Ingeniería & Ultrasonido',
    desc: 'Medición de espesores de lámina mediante ultrasonido NDT y emisión de reportes para clasificadoras internacionales. Documentación técnica para aseguradoras.',
    image: '/service-ultrasonido.png',
    icon: FileSearch,
    badge: 'Certificado NDT',
  },
  {
    num: '04',
    title: 'Diseño & Construcción Naval',
    desc: 'Diseño asistido por CAD y construcción de embarcaciones de carga y pasajeros. Ingeniería de alto nivel con certificación por clasificadoras internacionales.',
    image: '/service-reparacion.png',
    icon: Anchor,
    badge: 'CAD & Clasificación',
  },
  {
    num: '05',
    title: 'Sistemas Eléctricos Navales',
    desc: 'Instalación, diagnóstico y reparación de sistemas eléctricos navales. Tableros de distribución, automatización y sistemas de navegación.',
    image: '/service-motores.png',
    icon: Zap,
    badge: 'Electricidad Naval',
  },
  {
    num: '06',
    title: 'Equipos de Cubierta & Grúas',
    desc: 'Mantenimiento e instalación de grúas, molinetes, escotillas y sistemas de amarre. Equipos de salvamento y seguridad certificados.',
    image: '/service-ultrasonido.png',
    icon: Layers,
    badge: 'Cubierta & Grúas',
  },
]

const GAP = 24       // px de separación entre tarjetas
const VISIBLE = 3    // tarjetas visibles al mismo tiempo

// ── Componente tarjeta ───────────────────────────────────────────────────────
function ServiceCard({ svc, setCurrentPage }) {
  const Icon = svc.icon
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
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
        cursor: 'default',
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
        {svc.num}
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
            {svc.badge}
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
          src={svc.image}
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
          onClick={() => setCurrentPage?.('servicios')}
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
export default function ServicesSection({ setCurrentPage }) {
  const [current, setCurrent] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  const maxIndex = services.length - VISIBLE

  // Calcula el ancho de una tarjeta en píxeles al montar y al redimensionar
  const computeCardWidth = useCallback(() => {
    if (!viewportRef.current) return
    const totalGap = (VISIBLE - 1) * GAP
    const w = (viewportRef.current.offsetWidth - totalGap) / VISIBLE
    setCardWidth(w)
  }, [])

  useEffect(() => {
    computeCardWidth()
    window.addEventListener('resize', computeCardWidth)
    return () => window.removeEventListener('resize', computeCardWidth)
  }, [computeCardWidth])

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
      {/* ── Ola superior: fill=#0f172a (color de esta sección), bgColor=#F2F4F7 (color de la sección anterior/hero) ── */}
      <WaveTop
        fill="#0f172a"
        bgColor="#F2F4F7"
        height={90}
        style={{ marginTop: '-2px' }}
      />

      {/* Decoración de fondo: cuadrícula punteada */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(249,115,22,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          pointerEvents: 'none',
          zIndex: 0,
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

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '12px',
            }}
          >
            Nuestros{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>Servicios</span>{' '}
            Principales
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.5)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Ingeniería, reparación y mantenimiento naval con estándares internacionales ISO 9001.
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
              {services.map((svc, i) => (
                <div
                  key={svc.num}
                  style={{
                    flex: '0 0 auto',
                    width: cardWidth > 0 ? `${cardWidth}px` : `calc((100% - ${(VISIBLE - 1) * GAP}px) / ${VISIBLE})`,
                  }}
                >
                  <ServiceCard
                    svc={svc}
                    setCurrentPage={setCurrentPage}
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
            Ver catálogo completo de servicios
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
