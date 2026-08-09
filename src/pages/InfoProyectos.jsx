import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, ChevronLeft, ChevronRight, MapPin, Calendar, Clock,
  CheckCircle2, Ruler,
} from 'lucide-react'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'

// Placeholder de imagen — reemplaza por <img src="..." /> cuando tengas la foto real.
function ImagePlaceholder({ radius = '10px', style = {}, label }) {
  return (
    <div style={{
      width: '100%', height: '100%', border: '1.5px dashed rgba(29,41,57,0.25)',
      borderRadius: radius, position: 'relative', overflow: 'hidden',
      background: 'rgba(29,41,57,0.02)', ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(29,41,57,0.15)" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(29,41,57,0.15)" strokeWidth="1" />
      </svg>
      {label && (
        <span style={{
          position: 'absolute', bottom: '8px', left: '8px', right: '8px',
          fontSize: '10px', fontWeight: 700, color: 'rgba(29,41,57,0.45)', textAlign: 'center',
        }}>
          {label}
        </span>
      )}
    </div>
  )
}

function SectionTitleLeft({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
      <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#334e68', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)' }} />
    </div>
  )
}

const GALLERY_PAGE_SIZE = 4

// setCurrentPage: navegación; project: objeto específico elevado desde ProyectosGaleria.
export default function InfoProyecto({ project, setCurrentPage }) {
  const [galleryPage, setGalleryPage] = useState(0)

  // Fallback por si se navega aquí sin un proyecto seleccionado.
  if (!project) {
    return (
      <div className="blueprint-bg min-h-screen pb-16" style={{ paddingTop: '132px', textAlign: 'center' }}>
        <p style={{ color: '#6b7280' }}>No se seleccionó ningún proyecto.</p>
        <button onClick={() => setCurrentPage('proyectos')} className="btn-solicitar border-0" style={{ marginTop: '16px' }}>
          Volver a Proyectos
        </button>
      </div>
    )
  }

  const detail = project.detail || {}
  const gallery = detail.gallery && detail.gallery.length > 0
    ? detail.gallery
    : [project.title, `Ejecución — ${project.title}`, 'Equipo especializado', 'Resultado final']

  const totalPages = Math.max(1, Math.ceil(gallery.length / GALLERY_PAGE_SIZE))
  const visibleGallery = gallery.slice(galleryPage * GALLERY_PAGE_SIZE, galleryPage * GALLERY_PAGE_SIZE + GALLERY_PAGE_SIZE)

  const scope = detail.scope && detail.scope.length > 0 ? detail.scope : []
  const specs = detail.specs && detail.specs.length > 0 ? detail.specs : []

  return (
    <div className="blueprint-bg min-h-screen pb-16" style={{ position: 'relative' }}>
      {/* Regla pegada al borde superior real de la página */}
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* ── LEFT VERTICAL RULER ── */}
      <div style={{
        position: 'absolute', left: 0, top: 28, bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderRight: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* ── RIGHT VERTICAL RULER ── */}
      <div style={{
        position: 'absolute', right: 0, top: 28, bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderLeft: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* Bocetos de plano decorativos, muy sutiles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.5, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        style={{ position: 'absolute', bottom: '4%', right: '-2%', width: '300px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.5, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, delay: 0.1 }}
        style={{ position: 'absolute', top: '50%', left: '-2%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>

      <div className="container-astikmar" style={{ paddingLeft: '52px', paddingTop: '132px', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px' }}>
          <button onClick={() => setCurrentPage('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span style={{ margin: '0 6px' }}>›</span>
          <button onClick={() => setCurrentPage('proyectos')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Proyectos</button>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>{project.title}</span>
        </p>

        {/* ══════════ HERO ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(320px, 440px) 1fr', gap: '40px', alignItems: 'center', marginBottom: '40px' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {project.category}
            </span>
            <h1 style={{ fontSize: '34px', fontWeight: 900, color: '#1D2939', lineHeight: 1.15, letterSpacing: '-0.01em', marginTop: '6px' }}>
              {project.title}
            </h1>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '16px' }}>
              {detail.fullDescription || project.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ height: '260px' }}
          >
            <ImagePlaceholder label="Foto del proyecto" />
          </motion.div>
        </div>

        {/* ══════════ METADATOS RÁPIDOS ══════════ */}
        <div style={{
          display: 'flex', gap: '32px', flexWrap: 'wrap', padding: '18px 24px',
          border: '1px solid rgba(29,41,57,0.1)', borderRadius: '12px', marginBottom: '48px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={16} className="text-orange-500" />
            <span style={{ fontSize: '13px', color: '#374151' }}>{project.location}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={16} className="text-orange-500" />
            <span style={{ fontSize: '13px', color: '#374151' }}>Duración: {project.duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={16} className="text-orange-500" />
            <span style={{ fontSize: '13px', color: '#374151' }}>Año: {project.year}</span>
          </div>
        </div>

        {/* ══════════ FICHA TÉCNICA (campos específicos del proyecto) ══════════ */}
        <div style={{ marginBottom: '48px' }}>
          <SectionTitleLeft>Ficha Técnica del Proyecto</SectionTitleLeft>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px 24px' }}>
            {project.fields.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1D2939', marginBottom: '4px' }}>
                  {f.label}
                </h4>
                <p style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.6 }}>
                  {f.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════ GALERÍA + ALCANCE DE TRABAJO ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px', marginBottom: '56px', alignItems: 'start' }}>

          {/* Carrusel de galería */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#334e68', whiteSpace: 'nowrap' }}>
                Galería del Proyecto
              </span>
              <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)' }} />
              <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                <button
                  onClick={() => setGalleryPage(p => (p - 1 + totalPages) % totalPages)}
                  style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(29,41,57,0.15)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronLeft size={16} color="#1D2939" />
                </button>
                <button
                  onClick={() => setGalleryPage(p => (p + 1) % totalPages)}
                  style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(29,41,57,0.15)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <ChevronRight size={16} color="#1D2939" />
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visibleGallery.length}, 1fr)`, gap: '16px' }}>
              {visibleGallery.map((label, i) => (
                <motion.div key={label + i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                  <div style={{ height: '130px', marginBottom: '8px' }}>
                    <ImagePlaceholder />
                  </div>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#1D2939', textAlign: 'center', lineHeight: 1.3 }}>{label}</p>
                </motion.div>
              ))}
            </div>

            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '16px' }}>
                {Array.from({ length: totalPages }).map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setGalleryPage(i)}
                    style={{
                      width: '7px', height: '7px', borderRadius: '50%', cursor: 'pointer',
                      background: i === galleryPage ? '#F97316' : 'rgba(29,41,57,0.15)',
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Alcance de trabajo + especificaciones */}
          <div>
            <SectionTitleLeft>Alcance de Trabajo</SectionTitleLeft>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {(scope.length > 0 ? scope : ['Diagnóstico técnico inicial', 'Ejecución especializada bajo supervisión', 'Pruebas y verificación final']).map((s, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#374151' }}
                >
                  <CheckCircle2 size={16} color="#F97316" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {s}
                </motion.li>
              ))}
            </ul>

            {specs.length > 0 && (
              <div style={{ border: '1px solid rgba(29,41,57,0.1)', borderRadius: '12px', padding: '20px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px',
                }}>
                  <Ruler size={20} className="text-orange-500" />
                </div>
                <h5 style={{ fontSize: '14px', fontWeight: 800, color: '#1D2939', marginBottom: '10px' }}>Especificaciones técnicas</h5>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {specs.map((s, i) => (
                    <li key={i} style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.6 }}>• {s}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setCurrentPage('contacto')}
                  style={{ background: 'none', border: 0, cursor: 'pointer', color: '#F97316', fontSize: '12.5px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px', padding: 0, marginTop: '14px' }}
                >
                  Consultar un proyecto similar <ArrowRight size={12} />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}