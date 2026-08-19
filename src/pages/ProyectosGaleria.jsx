import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Ship, Users, Award, Anchor } from 'lucide-react'

const galleryImages = [
  { src: '/petrolero.jpg', alt: 'Buque de carga en construcción naval', category: 'Construcción Naval' },
  { src: '/WhatsApp Image 2026-07-22 at 12.28.31 PM (3).jpeg', alt: 'Overhaul de motor marino principal', category: 'Mantenimiento' },
  { src: '/obra muerta.jpg', alt: 'Reparación estructural de casco', category: 'Reparaciones' },
  { src: '/2a8893e76c6c41dd2a89da66fcf07ea1.jpg', alt: 'Instalación de grúa de cubierta', category: 'Cubierta y Grúas' },
  { src: '/eliminacion de gases.jpeg', alt: 'Rehabilitación de tanques de lastre', category: 'Tanques y Sistemas' },
  { src: '/tug.jpg', alt: 'Remolcador portuario', category: 'Construcción Naval' },
  { src: '/compact-Oil-Tanker-with-a-high-load-capacity.jpg', alt: 'Diseño de petrolero compacto', category: 'Diseño Naval' },
  { src: '/images.jpg', alt: 'Operaciones marítimas', category: 'Servicios Integrales' },
  { src: '/remolcadores.jpg', alt: 'Flota de remolcadores', category: 'Construcción Naval' },
  { src: '/small-tanker-port-bergen-norway-61367570.webp', alt: 'Tanquero en puerto', category: 'Transporte Marítimo' },
  { src: '/push-or-pull-to-move-ships-1743598323.jpg', alt: 'Asistencia portuaria', category: 'Servicios Integrales' },
  { src: '/salvamento 1.jpg', alt: 'Operaciones de salvamento marítimo', category: 'Salvamento' },
  { src: '/salvamento 2.jpg', alt: 'Salvamento y rescate naval', category: 'Salvamento' },
  { src: '/ultra sonido.jpg', alt: 'Inspección por ultrasonido', category: 'Inspección' },
  { src: '/ultra sonido 2.jpg', alt: 'Ensayos no destructivos', category: 'Inspección' },
  { src: '/33234ac7b9097192ee286b4cb636ab33.jpg', alt: 'Trabajo naval en dique seco', category: 'Reparaciones' },
  { src: '/WhatsApp Image 2026-07-22 at 12.27.15 PM.jpeg', alt: 'Mantenimiento de motores marinos', category: 'Mantenimiento' },
]

const stats = [
  { icon: <Ship size={22} color="white" />, value: '47+', label: 'Proyectos completados' },
  { icon: <Users size={22} color="white" />, value: '20+', label: 'Años de experiencia' },
  { icon: <Award size={22} color="white" />, value: '100%', label: 'Calidad garantizada' },
  { icon: <Anchor size={22} color="white" />, value: '15+', label: 'Embarcaciones construidas' },
]

const categories = ['Todas', 'Construcción Naval', 'Reparaciones', 'Mantenimiento', 'Servicios Integrales', 'Inspección', 'Salvamento', 'Diseño Naval']

export default function ProyectosGaleria({ setCurrentPage }) {
  const [activeFilter, setActiveFilter] = useState('Todas')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'Todas'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter)

  const openLightbox = (index) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)
  const prevImage = () => setLightbox((prev) => (prev > 0 ? prev - 1 : filtered.length - 1))
  const nextImage = () => setLightbox((prev) => (prev < filtered.length - 1 ? prev + 1 : 0))

  return (
    <div className="blueprint-bg min-h-screen pb-16" style={{ position: 'relative', paddingTop: '110px' }}>
      {/* Regla superior */}
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* Reglas laterales */}
      <div className="blueprint-ruler-vertical" style={{
        position: 'absolute', left: 0, top: 28, bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderRight: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["40'", "20'", "0'", "-20'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      <div className="blueprint-ruler-vertical" style={{
        position: 'absolute', right: 0, top: 28, bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderLeft: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["40'", "20'", "0'", "-20'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '30px', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Proyectos</span>
        </p>

        {/* ══════════ HERO: Texto + Métricas lado a lado ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px', alignItems: 'start', marginBottom: '48px' }}>
          {/* Columna izquierda: Texto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
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
              Nuestros <span style={{ color: '#F97316', fontStyle: 'italic' }}>Proyectos</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, color: '#334e68', marginTop: '8px' }}>
              Ingeniería, experiencia y compromiso en cada proyecto.
            </p>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '12px', maxWidth: '520px' }}>
              Hemos participado en proyectos marítimos de gran envergadura a lo largo de toda la región caribeña y latinoamericana. Desde la construcción integral de buques hasta reparaciones estructurales complejas, cada proyecto refleja nuestro compromiso con la excelencia y los más altos estándares de calidad.
            </p>
          </motion.div>

          {/* Columna derecha: Métricas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  borderRadius: '14px',
                  padding: '18px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid rgba(249,115,22,0.15)',
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {stat.icon}
                </div>
                <div>
                  <p style={{ fontSize: '22px', fontWeight: 900, color: '#F97316', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════ TIPOS DE PROYECTOS ══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: '40px',
            padding: '32px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(249,115,22,0.15)',
          }}
        >
          <h2 style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '16px',
            fontFamily: 'var(--font-heading)',
          }}>
            ¿Qué tipo de <span style={{ color: '#F97316' }}>proyectos</span> desarrollamos?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px' }}>
            {[
              { title: 'Construcción Naval', desc: 'Diseño y construcción integral de buques de carga, petroleros, remolcadores y embarcaciones especiales desde cero.' },
              { title: 'Reparaciones Estructurales', desc: 'Sustitución de planchas de casco, reparación de mamparos, granallado y soldadura estructural certificada.' },
              { title: 'Mantenimiento de Motores', desc: 'Overhaul mayor y menor de motores principales y auxiliares, calibración y pruebas de rendimiento.' },
              { title: 'Servicios Integrales', desc: 'Asistencia portuaria, salvamento marítimo, inspecciones por ultrasonido y consultoría naval.' },
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#F97316', marginBottom: '5px' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ══════════ FILTROS ══════════ */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat
                  ? 'linear-gradient(135deg, #F97316, #ea580c)'
                  : 'rgba(255,255,255,0.7)',
                color: activeFilter === cat ? '#ffffff' : '#4b5563',
                border: activeFilter === cat ? '1px solid #F97316' : '1px solid rgba(29,41,57,0.12)',
                borderRadius: '100px',
                padding: '8px 18px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(8px)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ══════════ GALERÍA ══════════ */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '16px',
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                layout
                onClick={() => openLightbox(idx)}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  aspectRatio: '4 / 3',
                  border: '1px solid rgba(29,41,57,0.08)',
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Overlay gradiente */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.8) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  pointerEvents: 'none',
                }}
                  className="gallery-overlay"
                />

                {/* Badge de categoría */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                  background: '#F97316',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  boxShadow: '0 2px 8px rgba(249,115,22,0.4)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  pointerEvents: 'none',
                }}
                  className="gallery-badge"
                >
                  {img.category}
                </span>

                {/* Descripción abajo */}
                <p style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '14px',
                  right: '14px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#ffffff',
                  textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                  opacity: 0,
                  transition: 'opacity 0.35s ease',
                  pointerEvents: 'none',
                }}
                  className="gallery-text"
                >
                  {img.alt}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px', border: '1.5px dashed rgba(29,41,57,0.15)', borderRadius: '12px', marginTop: '24px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1D2939' }}>No hay imágenes en esta categoría</h3>
            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Prueba con otro filtro.</p>
          </div>
        )}
      </div>

      {/* ══════════ LIGHTBOX ══════════ */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15,23,42,0.92)',
              backdropFilter: 'blur(8px)',
              zIndex: 99999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute', top: '20px', right: '20px',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '44px', height: '44px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#ffffff', zIndex: 10,
              }}
            >
              <X size={22} />
            </button>

            {/* Flecha izquierda */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage() }}
              style={{
                position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#ffffff', zIndex: 10,
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Flecha derecha */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage() }}
              style={{
                position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '50%', width: '48px', height: '48px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#ffffff', zIndex: 10,
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Imagen */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}
            >
              <img
                src={filtered[lightbox].src}
                alt={filtered[lightbox].alt}
                style={{
                  width: '100%',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                }}
              />
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '14px' }}>
                {filtered[lightbox].alt}
              </p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                {lightbox + 1} / {filtered.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estilos hover para la galería */}
      <style>{`
        .gallery-overlay { opacity: 0 !important; }
        .gallery-badge { opacity: 0 !important; }
        .gallery-text { opacity: 0 !important; }
        div:hover > .gallery-overlay { opacity: 1 !important; }
        div:hover > .gallery-badge { opacity: 1 !important; }
        div:hover > .gallery-text { opacity: 1 !important; }
      `}</style>
    </div>
  )
}
