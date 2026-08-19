import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, ChevronLeft, ChevronRight,
  PenTool, Hammer, ClipboardCheck, ShieldCheck, UserCheck, Wrench,
  CheckCircle2, Award,
} from 'lucide-react'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'
import SectionBadge from '../components/SectionBadge'

// Mapa de iconos: el dato de cada servicio guarda solo el nombre del icono (string),
// aquí se resuelve al componente real. Así "incluye" puede venir de la data del servicio.
const iconMap = {
  PenTool: <PenTool size={20} className="text-orange-500" />,
  Hammer: <Hammer size={20} className="text-orange-500" />,
  ClipboardCheck: <ClipboardCheck size={20} className="text-orange-500" />,
  ShieldCheck: <ShieldCheck size={20} className="text-orange-500" />,
  UserCheck: <UserCheck size={20} className="text-orange-500" />,
  Wrench: <Wrench size={20} className="text-orange-500" />,
}

// Fallback genérico, solo se usa si un servicio no trae su propio "incluye" definido.
const defaultIncluye = [
  { icon: 'PenTool', title: 'Diseño Conceptual y de Ingeniería', desc: 'Desarrollamos planos y modelos con ingeniería naval avanzada, optimizando funcionalidad y rendimiento.' },
  { icon: 'Hammer', title: 'Ejecución Técnica Especializada', desc: 'Ejecutamos el trabajo con procesos certificados y personal altamente calificado.' },
  { icon: 'ClipboardCheck', title: 'Pruebas y Puesta en Marcha', desc: 'Realizamos pruebas de control, calibración de sistemas y entrega operativa lista para su misión.' },
  { icon: 'ShieldCheck', title: 'Cumplimiento Normativo', desc: 'Cumplimos con normativas nacionales e internacionales de seguridad y clasificación.' },
  { icon: 'UserCheck', title: 'Asesoría y Acompañamiento', desc: 'Acompañamos al cliente en cada etapa del proyecto, desde la idea inicial hasta la entrega final.' },
  { icon: 'Wrench', title: 'Garantía y Soporte Post Entrega', desc: 'Ofrecemos garantía en nuestros trabajos y soporte técnico continuo.' },
]

// Placeholder de imagen: caja con borde punteado y una X diagonal (estilo wireframe).
// Reemplaza el contenido de este componente por un <img> cuando tengas la foto real.
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
          fontSize: '10px', fontWeight: 700, color: 'rgba(29,41,57,0.45)',
          textAlign: 'center',
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

export default function InfoServicios({ service, setCurrentPage }) {
  const [galleryPage, setGalleryPage] = useState(0)

  // Fallback por si se navega aquí sin un servicio seleccionado.
  if (!service) {
    return (
      <div className="blueprint-bg min-h-screen pb-16" style={{ paddingTop: '110px', textAlign: 'center' }}>
        <p style={{ color: '#6b7280' }}>No se seleccionó ningún servicio.</p>
        <button onClick={() => setCurrentPage('servicios')} className="btn-solicitar border-0" style={{ marginTop: '16px' }}>
          Volver a Servicios
        </button>
      </div>
    )
  }

  // Galería específica del servicio. Si el servicio no trae la suya, se arma un fallback
  // basado en su propio título en vez de un texto genérico fijo.
  const gallery = service.gallery && service.gallery.length > 0
    ? service.gallery
    : [service.title, `Ejecución de ${service.title}`, 'Equipo especializado', 'Resultado final']

  const totalPages = Math.max(1, Math.ceil(gallery.length / GALLERY_PAGE_SIZE))
  const visibleGallery = gallery.slice(galleryPage * GALLERY_PAGE_SIZE, galleryPage * GALLERY_PAGE_SIZE + GALLERY_PAGE_SIZE)

  const destacadas = service.details && service.details.length > 0
    ? service.details
    : ['Estructuras y procesos de alta resistencia', 'Sistemas eficientes y de bajo consumo', 'Diseño optimizado para seguridad y operación', 'Equipos integrados según requerimiento del cliente', 'Acabados de alta calidad y protección anticorrosiva']

  // "Nuestro servicio incluye" ahora viene de la data de cada servicio.
  // Si el servicio no define el suyo, cae en el genérico de arriba.
  const incluye = service.incluye && service.incluye.length > 0
    ? service.incluye
    : defaultIncluye

  return (
    <div className="blueprint-bg min-h-screen pb-16" style={{ position: 'relative', paddingTop: '110px' }}>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* Bocetos de plano decorativos, muy sutiles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.5, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8 }}
        style={{ position: 'absolute', top: '4%', right: '-2%', width: '280px', pointerEvents: 'none', zIndex: 0 }}
      >
        <SideProfileBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.5, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, delay: 0.1 }}
        style={{ position: 'absolute', top: '55%', left: '-2%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.5, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        style={{ position: 'absolute', bottom: '4%', right: '-2%', width: '300px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      {/* paddingTop unificado para alineación visual exacta */}
            <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '20px', position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <button onClick={() => setCurrentPage('servicios')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Servicios</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>{service.title}</span>
        </p>

        {/* ══════════ HERO: título + imagen + boceto lateral ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '32px 40px', alignItems: 'center', marginBottom: '48px' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            {(() => {
              const text = service.title || '';
              const words = text.trim().split(' ');
              const midIndex = Math.ceil(words.length / 2);

              const firstHalf = words.slice(0, midIndex).join(' ');
              const secondHalf = words.slice(midIndex).join(' ');

              return (
                <h1
                  style={{
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 900,
                    color: '#1D2939', // Primera mitad en tono oscuro
                    lineHeight: 1.1,
                    letterSpacing: '-0.01em',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  {firstHalf}{' '}
                  {secondHalf && (
                    <span
                      style={{
                        color: '#F97316', // Segunda mitad en naranja
                        fontStyle: 'italic',
                      }}
                    >
                      {secondHalf}
                    </span>
                  )}
                </h1>
              );
            })()}
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#334e68', marginTop: '8px' }}>
              Soluciones <span style={{ color: '#F97316', fontStyle: 'italic' }}>a la medida</span>, construidas para durar
            </p>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '16px' }}>
              {service.desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ width: '100%', minHeight: '260px', maxHeight: '360px', borderRadius: '16px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(29,41,57,0.12)', boxShadow: '0 8px 30px rgba(29,41,57,0.08)' }}
          >
            {service.image ? (
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            ) : (
              <ImagePlaceholder label="Foto del servicio en ejecución" />
            )}
          </motion.div>
        </div>

        {/* ══════════ NUESTRO SERVICIO INCLUYE ══════════ */}
        <div style={{ marginBottom: '48px' }}>
          <h6
            style={{
              fontSize: 'clamp(12px, 1.5vw, 16px)',
              fontWeight: 900,                      // Grosor máximo (Black/ExtraBold)
              color: '#000000',
              letterSpacing: '0.08em',              // Un poco más de separación para que no se peguen las letras gruesas
              lineHeight: 1.2,
              marginBottom: '15px',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              WebkitFontSmoothing: 'antialiased',   // Suavizado para renderizado ultra nítido
              WebkitTextStroke: '0.3px #000000',    // Truco técnico para añadir un extra de grosor visual
            }}
          >
            Nuestro Servicio{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic', WebkitTextStroke: '0.3px #F97316' }}>
              Incluye
            </span>{' '}
          </h6>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {incluye.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
                  background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {iconMap[item.icon]}
                </div>
                <div>
                  <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: '#1D2939', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.01em', fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════ GALERÍA + CARACTERÍSTICAS DESTACADAS ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '40px', marginBottom: '56px', alignItems: 'start' }}>

          {/* Carrusel */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0 }}>
                {(() => {
                  const text = service.galleryTitle || 'Tipos de Embarcaciones que Reparamos';
                  const words = text.trim().split(' ');
                  const midIndex = Math.ceil(words.length / 2);

                  const firstHalf = words.slice(0, midIndex).join(' ');
                  const secondHalf = words.slice(midIndex).join(' ');

                  return (
                    <h6
                      style={{
                        fontSize: 'clamp(12px, 1.5vw, 16px)',
                        fontWeight: 900,
                        color: '#1D2939', // Primera mitad en tono oscuro
                        letterSpacing: '0.08em',
                        lineHeight: 1.2,
                        marginBottom: '8px',
                        fontFamily: 'var(--font-heading)',
                        textTransform: 'uppercase',
                        WebkitFontSmoothing: 'antialiased',
                        WebkitTextStroke: '0.3px #1D2939',
                      }}
                    >
                      {firstHalf}{' '}
                      {secondHalf && (
                        <span
                          style={{
                            color: '#F97316', // Segunda mitad en naranja
                            fontStyle: 'italic',
                            WebkitTextStroke: '0.3px #F97316',
                          }}
                        >
                          {secondHalf}
                        </span>
                      )}
                    </h6>
                  );
                })()}
                <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)' }} />
              </div>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '16px' }}>
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

          {/* Características destacadas + sello de calidad */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(24px, 4vw, 42px)',
                fontWeight: 900,
                color: '#000000ff',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '12px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Características{' '}
              <span style={{ color: '#F97316', fontStyle: 'italic' }}>Destacadas</span>
            </h2>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {destacadas.map((d, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#374151' }}
                >
                  <CheckCircle2 size={16} color="#F97316" style={{ flexShrink: 0, marginTop: '2px' }} />
                  {d}
                </motion.li>
              ))}
            </ul>

            <div style={{ border: '1px solid rgba(29,41,57,0.1)', borderRadius: '12px', padding: '20px' }}>
              <div style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px',
              }}>
                <Award size={20} className="text-orange-500" />
              </div>
              <h5 style={{ fontSize: '14px', fontWeight: 800, color: '#1D2939', marginBottom: '6px' }}>Calidad certificada</h5>
              <p style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.6, marginBottom: '10px' }}>
                Garantizamos nuestros trabajos bajo los más altos estándares de calidad y seguridad.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}