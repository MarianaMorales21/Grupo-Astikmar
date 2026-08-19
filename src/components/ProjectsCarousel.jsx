import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ArrowRight } from 'lucide-react'

import './ProjectsCarousel.css'

const carouselImages = [
  { src: '/petrolero.jpg', alt: 'Construcción naval de buque de carga', category: 'Construcción Naval' },
  { src: '/WhatsApp Image 2026-07-22 at 12.28.31 PM (3).jpeg', alt: 'Overhaul de motor marino principal', category: 'Mantenimiento de Motores' },
  { src: '/obra muerta.jpg', alt: 'Reparación estructural de casco', category: 'Reparaciones Estructurales' },
  { src: '/2a8893e76c6c41dd2a89da66fcf07ea1.jpg', alt: 'Instalación de grúa de cubierta', category: 'Cubierta y Grúas' },
  { src: '/eliminacion de gases.jpeg', alt: 'Rehabilitación de tanques de lastre', category: 'Tanques y Sistemas' },
  { src: '/tug.jpg', alt: 'Overhaul completo de remolcador', category: 'Construcción y Overhaul' },
  { src: '/compact-Oil-Tanker-with-a-high-load-capacity.jpg', alt: 'Diseño de petrolero compacto', category: 'Diseño Naval' },
  { src: '/images.jpg', alt: 'Servicios marítimos integrales', category: 'Servicios Integrales' },
  { src: '/remolcadores.jpg', alt: 'Flota de remolcadores portuarios', category: 'Remolcadores' },
  { src: '/small-tanker-port-bergen-norway-61367570.webp', alt: 'Tanquero en puerto', category: 'Transporte Marítimo' },
  { src: '/push-or-pull-to-move-ships-1743598323.jpg', alt: 'Asistencia portuaria', category: 'Asistencia Portuaria' },
  { src: '/salvamento 1.jpg', alt: 'Operaciones de salvamento', category: 'Salvamento Marítimo' },
]

const duplicated = [...carouselImages, ...carouselImages]

const TOTAL_PROJECTS = 47

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const stepTime = 30
    const steps = duration / stepTime
    const increment = target / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <span ref={ref} style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}
    </span>
  )
}

export default function ProjectsCarousel({ setCurrentPage }) {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section
      id="proyectos"
      className="blueprint-bg"
      style={{
        padding: '70px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Regla de Plano Técnico Superior ── */}
      <div className="blueprint-ruler-top">
        {["-20'", "-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'", "90'", "100'"].map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>

      {/* ── LEFT VERTICAL RULER ── */}
      <div className="blueprint-ruler-vertical" style={{
        position: 'absolute', left: 0, top: 28, bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderRight: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* ── RIGHT VERTICAL RULER ── */}
      <div className="blueprint-ruler-vertical" style={{
        position: 'absolute', right: 0, top: 28, bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderLeft: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* Marcas de esquina */}
      <div className="cad-corner-marker" style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace', zIndex: 1 }}>
        + SEC-03 [PROYECTOS_NAVALES]
      </div>
      <div className="cad-corner-marker" style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace', zIndex: 1 }}>
        CAD-REF: 1440x800 +
      </div>

      {/* ═══ Encabezado + Contador ═══ */}
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          {/* Contador de proyectos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, rgba(249,115,22,0.1), rgba(249,115,22,0.05))',
              border: '1px solid rgba(249,115,22,0.25)',
              borderRadius: '100px',
              padding: '8px 20px',
              marginBottom: '20px',
            }}
          >
            <Award size={18} color="#F97316" />
            <span style={{
              fontSize: '13px',
              fontWeight: 700,
              color: '#F97316',
              letterSpacing: '0.02em',
            }}>
              <AnimatedCounter target={TOTAL_PROJECTS} />+ Proyectos Completados
            </span>
          </motion.div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 900,
              color: '#1D2939',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '12px',
            }}
          >
            Nuestros <span style={{ color: '#F97316' }}>Trabajos</span>
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: '#6b7280',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Más de 47 proyectos de construcción, mantenimiento y reparación naval completados con éxito en toda la región.
          </p>
        </motion.div>
      </div>

      {/* ═══ Carrusel de imágenes ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: 0.15 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          overflow: 'hidden',
          padding: '10px 0 20px',
          zIndex: 2,
        }}
      >
        {/* Degradados laterales */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '90px',
            background: 'linear-gradient(90deg, var(--steel) 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '90px',
            background: 'linear-gradient(270deg, var(--steel) 0%, transparent 100%)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />

        {/* Track continuo */}
        <div
          className={`projects-marquee-track ${isPaused ? 'paused' : ''}`}
          style={{
            display: 'flex',
            gap: '20px',
            width: 'max-content',
            paddingLeft: '20px',
          }}
        >
          {duplicated.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="projects-carousel-card"
              style={{
                width: 'clamp(300px, 70vw, 420px)',
                height: 'clamp(260px, 50vw, 340px)',
                flexShrink: 0,
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              {/* Imagen */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease, filter 0.4s ease',
                }}
              />

              {/* Overlay gradiente */}
              <div
                className="projects-card-overlay"
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(15,23,42,0.85) 100%)',
                  transition: 'background 0.4s ease',
                }}
              />

              {/* Contenido */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '24px',
                  zIndex: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  height: '100%',
                }}
              >
                {/* Badge de categoría */}
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    background: '#F97316',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    boxShadow: '0 2px 10px rgba(249,115,22,0.4)',
                    alignSelf: 'flex-start',
                    marginBottom: '10px',
                  }}
                >
                  {img.category}
                </span>

                {/* Descripción */}
                <p
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)',
                    lineHeight: 1.5,
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                >
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ═══ CTA inferior ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '48px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.button
          onClick={() => setCurrentPage?.('proyectos')}
          whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(249,115,22,0.45)' }}
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
          Ver Galería Completa
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  )
}
