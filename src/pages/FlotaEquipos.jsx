import { motion } from 'framer-motion'
import {
  HardHat, Compass, Activity, Shield, Video, Settings, Droplet, Anchor,
  Ship, Users, Award, Briefcase,
} from 'lucide-react'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'
import MarinePropellerBlueprint from '../components/Icons/MarinePropellerBlueprint'
import MarineLiftingHookBlueprint from '../components/Icons/MarineLiftingHookBlueprint'
import CompleteShipBlueprint from '../components/Icons/CompleteShipBlueprint'
import SectionBadge from '../components/SectionBadge'

const equipments = [
  {
    num: '01',
    title: 'Equipos de Medición y Control por Ultrasonido',
    desc: 'Realizamos escaneo y medición de espesores de láminas con equipos de ultrasonido de última generación, asegurando precisión y confiabilidad en cada inspección.',
    icon: <Activity size={20} color="#F97316" />,
  },
  {
    num: '02',
    title: 'Maquinaria y Herramientas Avanzadas para Soldadura Naval',
    desc: 'Contamos con equipos de soldadura MIG, TIG, SMAW y FCAW, generadores y herramientas especializadas para todo tipo de trabajos navales y estructuras metálicas.',
    icon: <HardHat size={20} color="#F97316" />,
  },
  {
    num: '03',
    title: 'Equipos de Preparación de Superficie y Pintura Anticorrosiva',
    desc: 'Disponemos de equipos de sandblasting, compresores y sistemas de aplicación de pinturas anticorrosivas de alto desempeño para máxima protección y durabilidad.',
    icon: <Compass size={20} color="#F97316" />,
  },
  {
    num: '04',
    title: 'Embarcaciones y Equipo Especializado de Apoyo para Salvamento y Abastecimiento',
    desc: 'Flota propia de embarcaciones y equipos de apoyo para operaciones de salvamento, abastecimiento, transporte de personal y logística marítima.',
    icon: <Shield size={20} color="#F97316" />,
  },
]

const quickLinks = [
  { label: 'Vista 360°', icon: <Video size={18} className="text-orange-500" /> },
  { label: 'Motores', icon: <Settings size={18} className="text-orange-500" /> },
  { label: 'Tanques', icon: <Droplet size={18} className="text-orange-500" /> },
  { label: 'Cubierta y Grúas', icon: <Anchor size={18} className="text-orange-500" /> },
]

const stats = [
  { icon: <Ship size={22} color="white" />, value: '20+', label: 'Años de experiencia' },
  { icon: <Users size={22} color="white" />, value: '120+', label: 'Proyectos realizados' },
  { icon: <Briefcase size={22} color="white" />, value: '85+', label: 'Profesionales especializados' },
  { icon: <Anchor size={22} color="white" />, value: '15+', label: 'Embarcaciones construidas' },
  { icon: <Award size={22} color="white" />, value: '100%', label: 'Comprometidos con la calidad' },
]

// Placeholder de imagen — con variante clara ("light") para usarse sobre el panel oscuro.
function ImagePlaceholder({ radius = '10px', light = false, style = {} }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      border: `1.5px dashed ${light ? 'rgba(255,255,255,0.28)' : 'rgba(29,41,57,0.22)'}`,
      borderRadius: radius, position: 'relative', overflow: 'hidden',
      background: light ? 'rgba(255,255,255,0.04)' : 'rgba(29,41,57,0.02)', ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={light ? 'rgba(255,255,255,0.18)' : 'rgba(29,41,57,0.14)'} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={light ? 'rgba(255,255,255,0.18)' : 'rgba(29,41,57,0.14)'} strokeWidth="1" />
      </svg>
    </div>
  )
}

// light=true → variante para usar sobre fondo navy (sin uso externo, se mantiene por compatibilidad)
function SectionTitleCenter({ children, light = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
      {children}
    </div>
  )
}

// Tarjeta de equipo con hover explícito vía framer-motion (no depende de la clase CSS global,
// que se veía mal por asumir un fondo claro alrededor — aquí puede ir sobre fondo navy o blanco).
function EquipmentCard({ eq, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      style={{
        background: 'white',
        borderRadius: '16px',
        border: '1px solid rgba(29,41,57,0.08)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
      }}
      whileTap={{ scale: 0.99 }}
      onHoverStart={(e) => {}}
    >
      <div style={{ height: '160px' }}>
        <ImagePlaceholder style={{ borderRadius: 0 }} />
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{
          width: '38px', height: '38px', borderRadius: '10px', marginBottom: '10px',
          background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {eq.icon}
        </div>
        <h3 style={{ fontSize: '13px', fontWeight: 800, color: '#1D2939', textTransform: 'uppercase', lineHeight: 1.35, letterSpacing: '0.01em' }}>
          {eq.title}
        </h3>
        <p style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.6, marginTop: '8px' }}>
          {eq.desc}
        </p>
      </div>
    </motion.div>
  )
}

export default function FlotaEquipos({ setCurrentPage }) {
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

      {/* Marcas de esquina / Orillos técnicos */}
      <div style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        + SEC-04 [CAPACIDAD_TECNICA]
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        STAFF-CAD: 1440x600 +
      </div>

      {/* Inscripción sutil dispersa */}
      <div style={{ position: 'absolute', top: '22%', right: '4%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.55)', pointerEvents: 'none' }}>
        ⊕ EQUIP_REF: ISO_9001 / DNV-GL
      </div>

      {/* ════════ BOCETOS DE PLANO FLOTANTES DE FONDO (sobre el fondo claro de la página) ════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.65, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{ position: 'absolute', top: '4%', right: '-2%', width: '300px', pointerEvents: 'none', zIndex: 0 }}
      >
        <CompleteShipBlueprint />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{ position: 'absolute', top: '6%', left: '-1%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <FrontBlueprint />
      </motion.div>

      {/* paddingTop unificado para alineación visual exacta */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '108px', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage && setCurrentPage('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Capacidad técnica</span>
        </p>

        {/* ══════════ HERO ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '32px 40px', alignItems: 'center', marginBottom: '48px' }}>
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: '#101c2c', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
              Capacidad <span style={{ color: '#F97316', fontStyle: 'italic' }}>Técnica</span>
            </h1>
            <p style={{ fontSize: 'clamp(17px, 2.5vw, 20px)', fontWeight: 700, color: '#334e68', marginTop: '4px' }}>
              Flota y equipos de <span style={{ color: '#F97316' }}>nivel profesional</span>
            </p>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '16px' }}>
              Contamos con herramienta y maquinaria propia de nivel profesional para ejecutar cada una de nuestras líneas de servicio sin depender de subcontratistas, garantizando eficiencia, calidad y control total en cada proyecto.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ minHeight: '260px', position: 'relative' }}
          >
            <ImagePlaceholder />
            <div style={{ position: 'absolute', top: '4%', right: '2%', width: '200px', opacity: 0.7, pointerEvents: 'none' }}>
              <ConceptBlueprint />
              <p style={{
                fontFamily: 'cursive', fontSize: '12px', color: 'rgba(29,41,57,0.5)',
                textAlign: 'right', marginTop: '-6px', fontStyle: 'italic',
              }}>
                Equipos propios, resultados confiables
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════ PANEL 1: EQUIPOS DESTACADOS — fondo navy + cuadrícula ══════════ */}
      <section
        style={{
          position: 'relative', left: '50%', right: '50%',
          marginLeft: '-50vw', marginRight: '-50vw', width: '100vw',
          background: 'linear-gradient(180deg, #101c2c 0%, #16283d 100%)',
          padding: '76px 24px 64px', overflow: 'hidden', marginTop: '64px',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px)',
            backgroundSize: '28px 28px', pointerEvents: 'none',
          }}
        />

        {/* ── REGLAS LATERALES Y COORDENADAS CAD ── */}
        {/* Regla vertical izquierda */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '26px',
          background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.08)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
          zIndex: 2, padding: '20px 0', pointerEvents: 'none',
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
          zIndex: 2, padding: '20px 0', pointerEvents: 'none',
        }}>
          {["60'", "50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
            <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(255,255,255,0.35)', fontFamily: 'Rajdhani, monospace', fontWeight: 600 }}>
              {m}
            </span>
          ))}
        </div>

        {/* Marcas de esquina / Orillos técnicos CAD desde el borde superior */}
        <div style={{ position: 'absolute', top: '20px', left: '36px', fontSize: '10.5px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', zIndex: 2, pointerEvents: 'none' }}>
          + SEC-03 [EQUIPOS_TECNICOS_DESTACADOS]
        </div>
        <div style={{ position: 'absolute', top: '20px', right: '36px', fontSize: '10.5px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', zIndex: 2, pointerEvents: 'none' }}>
          CAD-GRID: 1440x900 +
        </div>

        {/* Inscripciones de coordenadas sutiles dispersas */}
        <div style={{ position: 'absolute', top: '28%', right: '3%', fontSize: '10.5px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none', zIndex: 2 }}>
          ⊕ COORD_REF: LAT 10.48° N / LON 66.90° W
        </div>
        <div style={{ position: 'absolute', bottom: '15%', left: '3%', fontSize: '10.5px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(255,255,255,0.3)', pointerEvents: 'none', zIndex: 2 }}>
          ⊕ ISO_9001:2015 / LLOYD_REGISTERED
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          whileInView={{ opacity: 0.18, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: 'out' }}
          style={{ position: 'absolute', top: '4%', right: '-3%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
        >
          <MarinePropellerBlueprint />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -30 }}
          whileInView={{ opacity: 0.16, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: 'out', delay: 0.1 }}
          style={{ position: 'absolute', bottom: '2%', left: '-3%', width: '280px', pointerEvents: 'none', zIndex: 0 }}
        >
          <MarineLiftingHookBlueprint />
        </motion.div>

        <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Badge estandarizado */}
          <SectionTitleCenter light>
            <span style={{ color: 'white', fontSize: 'clamp(22px, 3.5vw, 34px)', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em' }}>
              Nuestros <span style={{ color: '#F97316', fontStyle: 'italic' }}>Equipos Destacados</span>
            </span>
          </SectionTitleCenter>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
            {equipments.map((eq, i) => (
              <EquipmentCard key={eq.num} eq={eq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PANEL 2: ENFOQUE OPERATIVO — fondo blanco/claro + cuadrícula sutil ══════════ */}
      <section
        style={{
          position: 'relative', left: '50%', right: '50%',
          marginLeft: '-50vw', marginRight: '-50vw', width: '100vw',
          background: '#ffffff',
          padding: '76px 24px 64px', overflow: 'hidden',
          borderTop: '1px solid rgba(29,41,57,0.06)',
        }}
      >
        {/* Misma cuadrícula que el resto del sitio */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(29,41,57,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(29,41,57,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px', pointerEvents: 'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 30 }}
          whileInView={{ opacity: 0.5, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: 'out' }}
          style={{ position: 'absolute', top: '6%', right: '-3%', width: '320px', pointerEvents: 'none', zIndex: 0 }}
        >
          <MarineEngineBlueprint />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -30 }}
          whileInView={{ opacity: 0.45, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: 'out', delay: 0.1 }}
          style={{ position: 'absolute', bottom: '4%', left: '-3%', width: '300px', pointerEvents: 'none', zIndex: 0 }}
        >
          <ShipTanksBlueprint />
        </motion.div>

        <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 900, color: '#101c2c', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '14px', fontFamily: 'var(--font-heading)' }}>
            Nuestro <span style={{ color: '#F97316', fontStyle: 'italic' }}>Enfoque Operativo</span>
          </h2>
          <p style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: 1.75, maxWidth: '760px', marginBottom: '44px' }}>
            Contamos con herramienta y maquinaria propia de nivel profesional para ejecutar cada una de nuestras líneas de servicio sin depender de subcontratistas. Esto nos permite un estricto control de calidad y plazos de entrega inmejorables.
          </p>

          {/* Stats — responsivo */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '20px', borderTop: '1px solid rgba(29,41,57,0.1)', paddingTop: '32px' }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '14px', padding: '0 18px',
                  borderLeft: i === 0 ? 'none' : '1px solid rgba(29,41,57,0.1)',
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '10px', flexShrink: 0,
                  background: 'linear-gradient(135deg, #F97316, #ea580c)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(249,115,22,0.3)',
                }}>
                  {s.icon}
                </div>
                <div>
                  <p style={{ fontSize: '20px', fontWeight: 800, color: '#1D2939', lineHeight: 1.1 }}>{s.value}</p>
                  <p style={{ fontSize: '11.5px', color: '#6b7280', lineHeight: 1.3 }}>{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}