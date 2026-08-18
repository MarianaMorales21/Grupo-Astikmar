import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'

import { allServices } from '../data/servicesData'

export { allServices }

const categories = ['Todos', 'Técnico', 'Mantenimiento', 'Logística', 'Inspección', 'Combustible', 'Emergencia']

// Placeholder de imagen/ilustración por servicio — reemplaza por la foto real cuando la tengas.
// Ahora incluye una etiqueta técnica "IMG·REF" en la esquina, coherente con el resto
// del lenguaje de plano (referencias, sellos, marcas de corte).
function ServiceImagePlaceholder({ size = 96 }) {
  return (
    <div style={{
      width: size,
      height: size,
      minWidth: size,
      border: '1.5px dashed rgba(29,41,57,0.22)',
      borderRadius: '10px',
      position: 'relative',
      overflow: 'hidden',
      background: 'rgba(29,41,57,0.02)',
      flexShrink: 0,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(29,41,57,0.14)" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(29,41,57,0.14)" strokeWidth="1" />
      </svg>
      <span style={{
        position: 'absolute', bottom: 4, left: 0, right: 0,
        textAlign: 'center', fontSize: '7px', letterSpacing: '0.1em',
        color: 'rgba(29,41,57,0.3)', fontFamily: 'monospace',
      }}>
        IMG·REF
      </span>
    </div>
  )
}

// setSelectedService: eleva el servicio elegido hacia App para que InfoServicios pueda leerlo.
export default function ServiciosDetalle({ setCurrentPage, setSelectedService }) {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('Todos')
  const [cursorPos, setCursorPos] = useState(null)

  // Lector de coordenadas tipo CAD: sigue el mouse mostrando X/Y,
  // como si el usuario estuviera trabajando sobre un plano real.
  const filtered = allServices.filter(svc => {
    const matchesSearch = svc.title.toLowerCase().includes(search.toLowerCase()) || svc.desc.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeCat === 'Todos' || svc.category === activeCat
    return matchesSearch && matchesCat
  })

  const handleOpenService = (svc) => {
    if (setSelectedService) {
      setSelectedService(svc)
    }
    setCurrentPage('info-servicio')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className="blueprint-bg min-h-screen pb-16"
      style={{ position: 'relative' }}
    >

      {/* Foco accesible coherente con el acento naranja del sistema.
          Vive aquí para que el componente sea autocontenido; si ya tienes
          un stylesheet global, mueve este bloque allí. */}
      <style>{`
        .calc-input:focus-visible,
        .astikmar-focusable:focus-visible {
          outline: 1.5px solid #F97316;
          outline-offset: 2px;
        }
      `}</style>

      {/* Regla pegada al borde superior real de la página */}
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* ── LEFT VERTICAL RULER ── */}
      <div
        className="blueprint-ruler-vertical"
        style={{
          position: 'absolute', left: 0, top: 28, bottom: 0, width: '26px',
          background: 'rgba(29,41,57,0.05)', borderRight: '1px solid rgba(29,41,57,0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
          zIndex: 10, padding: '10px 0',
        }}
      >
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* ── RIGHT VERTICAL RULER ── */}
      <div
        className="blueprint-ruler-vertical"
        style={{
          position: 'absolute', right: 0, top: 28, bottom: 0, width: '26px',
          background: 'rgba(29,41,57,0.05)', borderLeft: '1px solid rgba(29,41,57,0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
          zIndex: 10, padding: '10px 0',
        }}
      >
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* Marcas de esquina / Orillos técnicos */}
      <div className="cad-corner-marker" style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        + SEC-02 [EQUIPO_TECNICO_NAVAL]
      </div>
      <div className="cad-corner-marker" style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        STAFF-CAD: 1440x600 +
      </div>

      {/* Inscripciones sutiles dispersas */}
      <div className="cad-coord-annotation" style={{ position: 'absolute', top: '22%', right: '4%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.55)', pointerEvents: 'none' }}>
        ⊕ CERT_REF: AWS_D1.1 / LLOYD_REG
      </div>

      {/* 1. SideProfileBlueprint - Esquina superior derecha */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{ position: 'absolute', top: '4%', right: '-2%', width: '310px', pointerEvents: 'none', zIndex: 0 }}
      >
        <SideProfileBlueprint />
      </motion.div>

      {/* 2. FrontBlueprint - Esquina superior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.70, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{ position: 'absolute', top: '6%', left: '-1%', width: '270px', pointerEvents: 'none', zIndex: 0 }}
      >
        <FrontBlueprint />
      </motion.div>

      {/* 3. ConceptBlueprint - Espacio medio izquierdo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.15 }}
        style={{ position: 'absolute', top: '42%', left: '-2%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>

      {/* 4. MarineEngineBlueprint - Espacio medio derecho */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.2 }}
        style={{ position: 'absolute', top: '45%', right: '-2%', width: '330px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      {/* 5. ShipTanksBlueprint - Esquina inferior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{ position: 'absolute', bottom: '2%', left: '2%', width: '360px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* paddingTop unificado para alineación visual exacta */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '108px', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Servicios</span>
        </p>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px 32px', alignItems: 'end', marginBottom: '40px' }}>
          <div>
            <h1
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 900,
                color: '#101c2c',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontFamily: 'var(--font-heading)',
              }}
            >
              Nuestros{' '}
              <span style={{ color: '#F97316', fontStyle: 'italic' }}>Servicios</span>{' '}
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, color: '#334e68', marginTop: '4px' }}>
              Soluciones marítimas <span style={{ color: '#F97316', fontStyle: 'italic' }}>integrales</span>
            </p>
          </div>
          <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75 }}>
            Acompañamos a nuestros clientes en cada etapa del ciclo de vida de su embarcación, con equipo especializado, tecnología avanzada y altos estándares de calidad.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1 1 280px' }}>
            <input
              type="text"
              placeholder="Buscar servicio por nombre o palabra clave..."
              className="calc-input astikmar-focusable"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: '40px', width: '100%' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          </div>

          {/* Filtros */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                className="astikmar-focusable"
                onClick={() => setActiveCat(cat)}
                style={{
                  padding: '8px 4px',
                  border: 'none',
                  borderBottom: `2px solid ${activeCat === cat ? '#F97316' : 'transparent'}`,
                  background: 'transparent',
                  color: activeCat === cat ? '#F97316' : '#4b5563',
                  fontSize: '13px', fontWeight: activeCat === cat ? 700 : 600, cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de servicios — Grid Responsivo */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '16px 36px' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                layout
                whileHover={{ x: 2 }}
                onClick={() => handleOpenService(svc)}
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  padding: '26px 0',
                  borderTop: '1px solid rgba(29,41,57,0.08)',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                {/* Marca de corte de plano en el extremo del divisor superior */}
                <span style={{
                  position: 'absolute', top: '-1px', left: 0,
                  width: '6px', height: '6px',
                  borderLeft: '1px solid rgba(249,115,22,0.45)',
                  borderTop: '1px solid rgba(249,115,22,0.45)',
                  pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <ServiceImagePlaceholder size={92} />
                  {/* Badge tipo sello de referencia técnica en vez de círculo sólido */}
                  <span style={{
                    position: 'absolute', top: '-6px', left: '-6px',
                    padding: '2px 5px',
                    background: '#F2F4F7',
                    border: '1px solid #F97316',
                    color: '#F97316',
                    fontSize: '9px', fontWeight: 700,
                    fontFamily: 'monospace', letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}>
                    N°{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, color: '#F97316',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {svc.category}
                  </span>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1D2939', margin: '4px 0 6px', textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                    {svc.title}
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{ marginLeft: 8, fontSize: 11, color: '#F97316', fontFamily: 'monospace', fontWeight: 400 }}
                    >
                      ⊕
                    </motion.span>
                  </h3>
                  <p style={{
                    fontSize: '13px', color: '#6b7280', lineHeight: 1.6,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {svc.desc}
                  </p>
                  <button
                    className="card-more border-0 bg-transparent cursor-pointer astikmar-focusable"
                    style={{ marginTop: '10px' }}
                    onClick={(e) => { e.stopPropagation(); handleOpenService(svc) }}
                  >
                    Ver más <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state — mismo vocabulario técnico (referencias, sellos) que el resto de la página */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px', border: '1.5px dashed rgba(29,41,57,0.15)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1D2939' }}>No se encontraron servicios</h3>
            <p style={{
              fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.05em',
              color: 'rgba(29,41,57,0.4)', marginTop: '8px',
            }}>
              ∅ NO_MATCH — AJUSTE PARÁMETROS DE BÚSQUEDA
            </p>
          </div>
        )}
      </div>
    </div>
  )
}