import { motion } from 'framer-motion'
import { Shield, Users, Award, HeartHandshake, CheckCircle2, Cpu, Leaf, UserCheck } from 'lucide-react'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'
import MarinePropellerBlueprint from '../components/Icons/MarinePropellerBlueprint'
import MarineRudderBlueprint from '../components/Icons/MarineRudderBlueprint'
import MarineLiftingHookBlueprint from '../components/Icons/MarineLiftingHookBlueprint'
import CompleteShipBlueprint from '../components/Icons/CompleteShipBlueprint'
import SectionBadge from '../components/SectionBadge'

const valores = [
  {
    icon: <Shield size={22} />,
    title: 'Seguridad',
    desc: 'Priorizamos la seguridad en cada operación, protegiendo a las personas, el ambiente y los activos.',
  },
  {
    icon: <Award size={22} />,
    title: 'Calidad',
    desc: 'Ejecutamos cada trabajo con los exigentes estándares técnicos del sector marítimo internacional.',
  },
  {
    icon: <Users size={22} />,
    title: 'Experiencia',
    desc: 'Personal altamente calificado y formado específicamente para cada especialidad técnica.',
  },
  {
    icon: <CheckCircle2 size={22} />,
    title: 'Excelencia',
    desc: 'Nos esforzamos por superar las expectativas con calidad, innovación y mejora continua.',
  },
  {
    icon: <HeartHandshake size={22} />,
    title: 'Compromiso',
    desc: 'Cumplimos con rigor los tiempos acordados y las especificaciones técnicas de cada cliente.',
  },
]

const compromisos = [
  {
    icon: <CheckCircle2 size={18} className="text-orange-500" />,
    title: 'Calidad garantizada',
    desc: 'Cumplimos con los más altos estándares internacionales.',
  },
  {
    icon: <Cpu size={18} className="text-orange-500" />,
    title: 'Tecnología avanzada',
    desc: 'Invertimos en innovación para ofrecer soluciones eficientes.',
  },
  {
    icon: <Leaf size={18} className="text-orange-500" />,
    title: 'Sostenibilidad',
    desc: 'Operamos de manera responsable con el ambiente y la sociedad.',
  },
]

// Equipo humano — antes vivía en su propia página; como no hay ruta aparte,
// se integra aquí como una lista simple (sin cartas/cajas).
const teamMembers = [
  {
    id: 1,
    name: 'Ing. Carlos Mendoza',
    role: 'Director General & Ingeniero Naval Senior',
    desc: 'Más de 20 años de trayectoria liderando proyectos de ingeniería naval, conversiones de cascos y certificación de dique seco en el Caribe. Especialista homologado por sociedades clasificadoras internacionales.',
    image: '/team-1.png',
    badge: 'Dirección Técnica',
    skills: ['Cálculos de Estabilidad & CAD', "Certificación Lloyd's / ABS", 'Supervisión en Dique Seco'],
  },
  {
    id: 2,
    name: 'Ing. Alejandro Torres',
    role: 'Jefe de Operaciones & Propulsión',
    desc: 'Especialista en overhaul a cero horas de motores diésel de alta potencia, turbocargadores y sistemas de transmisión marina. Coordinación integral de equipos multidisciplinarios a bordo.',
    image: '/team-2.png',
    badge: 'Operaciones Navales',
    skills: ['Overhaul a Cero Horas', 'Sistemas Eléctricos Navales', 'Ensayos No Destructivos NDT'],
  },
  {
    id: 3,
    name: 'Ing. Alejandro Torres',
    role: 'Jefe de Operaciones & Propulsión',
    desc: 'Especialista en overhaul a cero horas de motores diésel de alta potencia, turbocargadores y sistemas de transmisión marina. Coordinación integral de equipos multidisciplinarios a bordo.',
    image: '/team-2.png',
    badge: 'Operaciones Navales',
    skills: ['Overhaul a Cero Horas', 'Sistemas Eléctricos Navales', 'Ensayos No Destructivos NDT'],
  },
]

// Placeholder de imagen — con variante clara ("light") para usarse sobre el panel oscuro.
function ImagePlaceholder({ radius = '10px', light = false, style = {} }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      border: `1.5px dashed ${light ? 'rgba(255,255,255,0.28)' : 'rgba(29,41,57,0.25)'}`,
      borderRadius: radius,
      position: 'relative',
      overflow: 'hidden',
      background: light ? 'rgba(255,255,255,0.04)' : 'rgba(29,41,57,0.02)',
      ...style,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke={light ? 'rgba(255,255,255,0.18)' : 'rgba(29,41,57,0.15)'} strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke={light ? 'rgba(255,255,255,0.18)' : 'rgba(29,41,57,0.15)'} strokeWidth="1" />
      </svg>
    </div>
  )
}

// Título de sección estilo "plano" — con variante clara para fondo oscuro
function SectionTitleLeft({ children, light = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
      <span style={{
        fontSize: '13px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
        color: light ? 'rgba(255,255,255,0.8)' : '#334e68', whiteSpace: 'nowrap',
      }}>
        {children}
      </span>
      <span style={{
        flex: 1, height: '1px',
        background: light
          ? 'linear-gradient(90deg, rgba(255,255,255,0.3), transparent)'
          : 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)',
      }} />
    </div>
  )
}

// Fila de un miembro del equipo — responsivo y compacto lado a lado
function TeamRow({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'flex-start',
        padding: '20px',
        background: 'transparent',
        borderRadius: '16px',
        border: '1px solid rgba(29, 41, 57, 0.16)',
        boxShadow: 'none',
      }}
    >
      <div style={{ width: '130px', height: '150px', borderRadius: '10px', overflow: 'hidden', background: '#0f172a', flexShrink: 0 }}>
        <img
          src={member.image}
          alt={member.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
        />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#1D2939', marginBottom: '2px', lineHeight: 1.2 }}>
          {member.name}
        </h3>

        <p style={{ fontSize: '13px', fontWeight: 700, color: '#F97316', marginBottom: '8px' }}>
          {member.role}
        </p>

        <p style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.5, marginBottom: '12px' }}>
          {member.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
          {member.skills.map((skill, idx) => (
            <span key={idx} style={{
              fontSize: '11.5px', color: '#334155', display: 'inline-flex',
              alignItems: 'center', gap: '5px', fontWeight: 600,
            }}>
              <CheckCircle2 size={12} color="#F97316" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Nosotros({ setCurrentPage }) {
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* Marcas de esquina / Orillos técnicos */}
      <div style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        + SEC-02 [EQUIPO_TECNICO_NAVAL]
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        STAFF-CAD: 1440x600 +
      </div>

      {/* Inscripciones sutiles dispersas */}
      <div style={{ position: 'absolute', top: '22%', right: '4%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.55)', pointerEvents: 'none' }}>
        ⊕ CERT_REF: AWS_D1.1 / LLOYD_REG
      </div>

      {/* 1. SideProfileBlueprint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{
          position: 'absolute',
          top: '4%',
          right: '-2%',
          width: '310px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <CompleteShipBlueprint/>
      </motion.div>

      {/* 2. FrontBlueprint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.70, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '6%',
          left: '-1%',
          width: '270px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <FrontBlueprint />
      </motion.div>

      {/* 3. ConceptBlueprint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.15 }}
        style={{
          position: 'absolute',
          top: '42%',
          left: '-2%',
          width: '260px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <ConceptBlueprint />
      </motion.div>

      {/* 4. MarineEngineBlueprint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '45%',
          right: '-2%',
          width: '330px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      {/* 5. ShipTanksBlueprint */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '2%',
          width: '360px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* paddingTop unificado con el resto de páginas */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '108px', position: 'relative', zIndex: 1 }}>

        {/* ══════════ HERO: título + imagen grande ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '32px 40px', alignItems: 'center', marginBottom: '64px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb unificado */}
            <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button onClick={() => setCurrentPage?.('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
              <span>›</span>
              <span style={{ color: '#F97316', fontWeight: 600 }}>Nosotros</span>
            </p>



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
              Quienes{' '}
              <span style={{ color: '#F97316', fontStyle: 'italic' }}>Somos</span>{' '}
            </h1>
            <p style={{ fontSize: '19px', fontWeight: 600, color: '#334e68', marginTop: '8px' }}>
              Construyendo <span style={{ color: '#F97316', fontStyle: 'italic' }}>confianza</span>, impulsando el mar.
            </p>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '16px' }}>
              Somos una empresa dominicana especializada en soluciones marítimas integrales. Combinamos experiencia, tecnología y compromiso para acompañar a nuestros clientes en cada etapa del ciclo de vida de su embarcación.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{ minHeight: '260px' }}
          >
            <ImagePlaceholder />
          </motion.div>
        </div>
      </div>

      {/* ══════════ NUESTRO COMPROMISO ══════════ */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', position: 'relative', zIndex: 1, marginTop: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px 48px', alignItems: 'start', marginBottom: '56px' }}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 900,
                color: '#101c2c',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '12px',
                fontFamily: 'var(--font-heading)',
              }}
            >
              Nuestro{' '}
              <span style={{ color: '#F97316', fontStyle: 'italic' }}>Compromiso</span>{' '}
            </h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: 1.75, marginTop: '0' }}
            >
              En Grupo Astikmar, estamos comprometidos con el desarrollo sostenible del sector marítimo, implementando prácticas responsables que generan valor para nuestros clientes, colaboradores y la comunidad.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '16px' }}>
            {compromisos.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{
                  background: 'rgba(29,41,57,0.02)',
                  border: '1px solid rgba(29,41,57,0.08)',
                  borderRadius: '12px',
                  padding: '18px 16px',
                }}
              >
                <div style={{
                  width: '34px', height: '34px', borderRadius: '8px', flexShrink: 0,
                  background: 'rgba(29,41,57,0.05)', border: '1px solid rgba(29,41,57,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px',
                }}>
                  {c.icon}
                </div>
                <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#1D2939', marginBottom: '5px' }}>{c.title}</h5>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.6 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ NUESTROS VALORES ══════════ */}
      <section
        style={{
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
          background: 'linear-gradient(180deg, #101c2c 0%, #16283d 100%)',
          padding: '76px 24px 84px',
          overflow: 'hidden',
        }}
      >
        {/* cuadrícula de plano */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.065) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
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

        {/* Marcas de esquina / Orillos técnicos CAD */}
        <div style={{ position: 'absolute', top: '20px', left: '36px', fontSize: '10.5px', fontWeight: 800, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', zIndex: 2, pointerEvents: 'none' }}>
          + SEC-02 [PRINCIPIOS_Y_VALORES_NAVALES]
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
          whileInView={{ opacity: 0.22, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: 'out' }}
          style={{ position: 'absolute', top: '6%', right: '-3%', width: '320px', pointerEvents: 'none', zIndex: 0 }}
        >
          <MarineEngineBlueprint />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: -30 }}
          whileInView={{ opacity: 0.2, scale: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: 'out', delay: 0.1 }}
          style={{ position: 'absolute', bottom: '4%', left: '-3%', width: '340px', pointerEvents: 'none', zIndex: 0 }}
        >
          <ShipTanksBlueprint />
        </motion.div>

        <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '40px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            Nuestros{' '}
            <span style={{ color: '#F97316', fontStyle: 'italic' }}>Valores</span>{' '}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '40px', alignItems: 'start' }}>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '24px 20px' }}>
              {valores.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: 'rgba(249,115,22,0.14)', border: '1px solid rgba(249,115,22,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px',
                    color: '#F97316',
                  }}>
                    {val.icon}
                  </div>
                  <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                    {val.title}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 120px), 1fr))', gap: '16px', minHeight: '200px' }}>
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                >
                  <ImagePlaceholder light />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ EQUIPO HUMANO ══════════ */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', position: 'relative', zIndex: 1, marginTop: '20px' }}>
        <div style={{ position: 'relative', marginBottom: '40px' }}>
          {/* Concept sketch decorativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: -30 }}
            whileInView={{ opacity: 0.35, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: 'out' }}
            style={{ position: 'absolute', top: '-10px', right: '-20px', width: '230px', pointerEvents: 'none', zIndex: 0 }}
          >
            <ConceptBlueprint />
          </motion.div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '30px' }}
            >

              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 900,
                  color: '#101c2c',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  marginBottom: '15px',
                  fontFamily: 'var(--font-heading)',
                }}
              >
                Nuestro{' '}
                <span style={{ color: '#F97316', fontStyle: 'italic' }}>Equipo Humano</span>{' '}
              </h2>

              <p style={{ fontSize: '14px', color: '#6b7280', maxWidth: '580px', lineHeight: 1.65 }}>
                Profesionales altamente calificados y certificados para afrontar los desafíos técnicos más exigentes en la industria marítima.
              </p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: '20px' }}>
              {teamMembers.map((member, index) => (
                <TeamRow key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}