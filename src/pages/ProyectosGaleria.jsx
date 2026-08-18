import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, MapPin, Calendar, ClipboardList, Ship, Settings,
  TrendingUp, Layers, Anchor, Droplet, Video, Users, Award, Briefcase,
} from 'lucide-react'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'
import MarinePropellerBlueprint from '../components/Icons/MarinePropellerBlueprint'
import MarineRudderBlueprint from '../components/Icons/MarineRudderBlueprint'
import MarineLiftingHookBlueprint from '../components/Icons/MarineLiftingHookBlueprint'
import SectionBadge from '../components/SectionBadge'

// Mapa de iconos: cada campo de proyecto guarda el nombre del icono (string),
// aquí se resuelve al componente real — así cada proyecto puede traer sus propios campos.
const fieldIconMap = {
  ClipboardList: <ClipboardList size={16} className="text-orange-500" />,
  Ship: <Ship size={16} className="text-orange-500" />,
  MapPin: <MapPin size={16} className="text-orange-500" />,
  Calendar: <Calendar size={16} className="text-orange-500" />,
  Settings: <Settings size={16} className="text-orange-500" />,
  TrendingUp: <TrendingUp size={16} className="text-orange-500" />,
  Layers: <Layers size={16} className="text-orange-500" />,
  Anchor: <Anchor size={16} className="text-orange-500" />,
  Droplet: <Droplet size={16} className="text-orange-500" />,
}

import { allProjects } from '../data/projectsData'

export { allProjects }

const tabs = [
  'Todos los proyectos',
  'Diseño y Construcción Naval',
  'Mantenimiento de Motores',
  'Reparaciones Estructurales',
  'Cubierta y Grúas',
  'Tanques y Sistemas',
]

const quickLinks = [
  { label: 'Vista 360°', icon: <Video size={18} className="text-orange-500" />, category: 'Todos los proyectos' },
  { label: 'Motores', icon: <Settings size={18} className="text-orange-500" />, category: 'Mantenimiento de Motores' },
  { label: 'Tanques', icon: <Droplet size={18} className="text-orange-500" />, category: 'Tanques y Sistemas' },
  { label: 'Cubierta y Grúas', icon: <Anchor size={18} className="text-orange-500" />, category: 'Cubierta y Grúas' },
]

const stats = [
  { icon: <Ship size={22} color="white" />, value: '20+', label: 'Años de experiencia' },
  { icon: <Users size={22} color="white" />, value: '120+', label: 'Proyectos realizados' },
  { icon: <Briefcase size={22} color="white" />, value: '85+', label: 'Profesionales especializados' },
  { icon: <Anchor size={22} color="white" />, value: '15+', label: 'Embarcaciones construidas' },
  { icon: <Award size={22} color="white" />, value: '100%', label: 'Comprometidos con la calidad' },
]

// Placeholder de imagen — reemplaza por <img src="..." /> cuando tengas la foto real del proyecto.
function ImagePlaceholder({ style = {} }) {
  return (
    <div style={{
      width: '100%', height: '100%', border: '1.5px dashed rgba(29,41,57,0.22)',
      borderRadius: '10px', position: 'relative', overflow: 'hidden',
      background: 'rgba(29,41,57,0.02)', ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(29,41,57,0.14)" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(29,41,57,0.14)" strokeWidth="1" />
      </svg>
    </div>
  )
}

// setSelectedProject: eleva el proyecto elegido hacia App para que InfoProyecto pueda leerlo.
export default function ProyectosGaleria({ setCurrentPage, setSelectedProject }) {
  const [activeCat, setActiveCat] = useState('Todos los proyectos')

  const filtered = allProjects.filter(p => activeCat === 'Todos los proyectos' || p.category === activeCat)

  const handleOpenProject = (proj) => {
    if (setSelectedProject) {
      setSelectedProject(proj)
    }
    setCurrentPage('info-proyecto')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        {["40'", "8", "-20'"].map((m, idx) => (
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
        {["40'", "-20'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* 1. SideProfileBlueprint - Esquina superior derecha */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.65, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{ position: 'absolute', top: '3%', right: '1%', width: '310px', pointerEvents: 'none', zIndex: 0 }}
      >
        <SideProfileBlueprint />
      </motion.div>

      {/* 2. FrontBlueprint - Esquina superior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{ position: 'absolute', top: '5%', left: '1%', width: '270px', pointerEvents: 'none', zIndex: 0 }}
      >
        <FrontBlueprint />
      </motion.div>

      {/* 3. ConceptBlueprint - Espacio medio izquierdo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.60, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.15 }}
        style={{ position: 'absolute', top: '38%', left: '0%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>

      {/* 4. MarineEngineBlueprint - Espacio medio derecho */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.60, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.2 }}
        style={{ position: 'absolute', top: '42%', right: '0%', width: '320px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      {/* 5. ShipTanksBlueprint - Esquina inferior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.65, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{ position: 'absolute', bottom: '2%', left: '1%', width: '350px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ShipTanksBlueprint />
      </motion.div>


      {/* paddingTop unificado para alineación visual exacta */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '108px', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Proyectos</span>
        </p>

        {/* ══════════ HERO ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px 32px', alignItems: 'start', marginBottom: '40px' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
              <span style={{ color: '#F97316', fontStyle: 'italic' }}>Proyectos</span>{' '}
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, color: '#334e68', marginTop: '4px' }}>
              Ingeniería, experiencia y compromiso<br />
              en <span style={{ color: '#F97316', fontStyle: 'italic' }}>cada proyecto.</span>
            </p>
          </motion.div>
          <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '6px' }}>
            Hemos participado en proyectos marítimos de gran envergadura, entregando soluciones personalizadas que cumplen con los más altos estándares de calidad, seguridad y eficiencia.
          </p>
        </div>

        {/* ══════════ TABS ══════════ */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderBottom: '1px solid rgba(29,41,57,0.1)', marginBottom: '16px' }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveCat(tab)}
              style={{
                background: 'none', border: 0, cursor: 'pointer',
                padding: '0 0 12px 0', fontSize: '13px',
                fontWeight: activeCat === tab ? 700 : 600,
                color: activeCat === tab ? '#F97316' : '#4b5563',
                borderBottom: activeCat === tab ? '2px solid #F97316' : '2px solid transparent',
                marginBottom: '-1px', whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ══════════ LISTA DE PROYECTOS ══════════ */}
        <div>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                layout
                style={{
                  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px 32px',
                  alignItems: 'start', padding: '32px 0', borderTop: '1px solid rgba(29,41,57,0.08)',
                }}
              >
                {/* Imagen */}
                <div style={{ width: '100%', minHeight: '200px', maxHeight: '240px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(29,41,57,0.1)' }}>
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <ImagePlaceholder style={{ borderRadius: '10px' }} />
                  )}
                </div>

                {/* Contenido */}
                <div>
                  <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {proj.category}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#1D2939', margin: '6px 0 8px' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: 1.65, marginBottom: '18px', maxWidth: '620px' }}>
                    {proj.desc}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))', gap: '14px 24px', marginBottom: '16px' }}>
                    {proj.fields.map((f, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <div style={{ marginTop: '2px', flexShrink: 0 }}>{fieldIconMap[f.icon]}</div>
                        <div>
                          <p style={{ fontSize: '12.5px', fontWeight: 700, color: '#1D2939', marginBottom: '2px' }}>{f.label}</p>
                          <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{f.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    className="card-more border-0 bg-transparent cursor-pointer"
                    style={{ marginTop: '6px' }}
                    onClick={(e) => { e.stopPropagation(); handleOpenProject(proj) }}
                  >
                    Ver más <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 24px', border: '1.5px dashed rgba(29,41,57,0.15)', borderRadius: '12px', marginTop: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1D2939' }}>No hay proyectos en esta categoría</h3>
              <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Prueba con otra categoría del filtro superior.</p>
            </div>
          )}
        </div>
      </div>
    </div >
  )
}