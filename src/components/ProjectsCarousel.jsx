import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Sparkles, Eye } from 'lucide-react'

// Import de los 5 planos/iconos técnicos de la carpeta src/components/Icons
import FrontBlueprint from './Icons/FrontBlueprint'
import ConceptBlueprint from './Icons/ConceptBlueprint'
import SideProfileBlueprint from './Icons/SideprofileBlueprint'
import ShipTanksBlueprint from './Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from './Icons/MarineEngineBlueprint'

import './ProjectsCarousel.css'

const projectsData = [
  {
    id: 1,
    tag: 'Construcción Naval',
    title: 'Remolcador "Astikmar I"',
    desc: 'Diseño integral y construcción en acero naval con propulsión azimutal de 3,200 HP y certificación Lloyd\'s Register.',
    specs: ['Eslora: 28.5m', 'Potencia: 3,200 HP', 'Bollard Pull: 45 Toneladas'],
    year: '2024',
    location: 'Santo Domingo, R.D.',
    image: '/service-reparacion.png',
  },
  {
    id: 2,
    tag: 'Reparación Mayor',
    title: 'M/V Caribbean Star — Dique Seco',
    desc: 'Granallado hidro-cinético Sa 2.5, pintado marino anticorrosivo y sustitución de 18 toneladas de planchaje de acero.',
    specs: ['Área de casco: 4,500 m²', 'Acero reemplazado: 18 Ton', 'Pruebas NDT: 100%'],
    year: '2024',
    location: 'Puerto La Cruz, Ven.',
    image: '/service-motores.png',
  },
  {
    id: 3,
    tag: 'Ingeniería NDT',
    title: 'Medición Ultrasonido — Flota Tanquera',
    desc: 'Inspección de espesores de lámina en 8 buques tanqueros con modelado 3D de corrosión para la sociedad clasificadora.',
    specs: ['Buques inspeccionados: 8', 'Puntos NDT: +12,000', 'Clasificadora: ABS'],
    year: '2023',
    location: 'Región Caribe',
    image: '/service-ultrasonido.png',
  },
  {
    id: 4,
    tag: 'Mantenimiento Preventivo',
    title: 'Plan Integral — Expresos del Mar',
    desc: 'Programa continuo 24/7 de mantenimiento preventivo y predictivo en motores marinos y cascos para flota de 5 ferrys.',
    specs: ['Flota: 5 Ferries', 'Disponibilidad: 99.4%', 'Atención de emergencias: < 2h'],
    year: '2023',
    location: 'Santo Domingo',
    image: '/ship-cutaway.png',
  },
  {
    id: 5,
    tag: 'Overhaul Motores',
    title: 'Motor Principal MAN B&W 8,400 HP',
    desc: 'Overhaul a cero horas de motor propulsor de 2 tiempos, recambio de camisas y pruebas de mar con dinamómetro.',
    specs: ['Modelo: MAN B&W 6S50MC', 'Potencia: 8,400 HP', 'Pruebas de mar: 100% Carga'],
    year: '2023',
    location: 'Puerto La Cruz',
    image: '/service-motores.png',
  },
]

// Duplicamos el array para lograr un recorrido infinito sin pausas
const duplicatedProjects = [...projectsData, ...projectsData]

export default function ProjectsCarousel({ setCurrentPage }) {
  const [activeProject, setActiveProject] = useState(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section
      id="proyectos"
      className="blueprint-bg"
      style={{
        padding: '70px 0 130px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Regla de Plano Técnico Superior (Equipo) ── */}
      <div className="blueprint-ruler-top">
        {["-20'", "-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'", "90'", "100'"].map((m, i) => (
          <span key={i}>{m}</span>
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
      {/* Marcas de esquina / Orillos marcados con mira técnica (+) */}
      <div style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        + SEC-03 [PROYECTOS_NAVALES]
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
        CAD-REF: 1440x800 +
      </div>

      {/* ── DETALLES E INSCRIPCIONES DE PLANO TÉCNICO DISPERSOS (MÁS OSCUROS) ── */}
      <div style={{ position: 'absolute', top: '18%', left: '4%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.55)', pointerEvents: 'none', zIndex: 1 }}>
        ⊕ COORD: 18°28'35.2"N 69°53'14.8"W [BASE_SD]
      </div>
      <div style={{ position: 'absolute', top: '75%', right: '5%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.55)', pointerEvents: 'none', zIndex: 1 }}>
        ⊕ COORD: 10°13'12.0"N 64°41'42.0"W [DIQUE_PLC]
      </div>
      <div style={{ position: 'absolute', top: '45%', left: '2%', fontSize: '10px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.45)', pointerEvents: 'none', transform: 'rotate(-90deg)', transformOrigin: 'top left', zIndex: 1 }}>
        --- DRAFT_DEPTH_MAX: 18.50m [WGS84_ZONE_19N] ---
      </div>
      <div style={{ position: 'absolute', top: '35%', right: '3%', fontSize: '10.5px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.5)', pointerEvents: 'none', zIndex: 1 }}>
        + NDT_ULTRASONIC_REF: ISO_9001:2015
      </div>
      <div style={{ position: 'absolute', bottom: '15%', left: '48%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(249,115,22,0.6)', pointerEvents: 'none', zIndex: 1 }}>
        📍 REF_GRID_ORIGIN [0,0,0]
      </div>

      {/* ════════════════════════════════════════════════════════════════════════
         TODOS LOS PLANOS Y DIBUJOS DE LA CARPETA ICONS CON MAYOR OPACIDAD (MÁS OSCUROS)
         ════════════════════════════════════════════════════════════════════════ */}

      {/* 1. MarineEngineBlueprint - Esquina superior derecha */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{
          position: 'absolute',
          top: '5%',
          right: '1%',
          width: '380px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      {/* 2. SideProfileBlueprint - Esquina superior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.70, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{
          position: 'absolute',
          top: '4%',
          left: '0%',
          width: '320px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <SideProfileBlueprint />
      </motion.div>

      {/* 3. FrontBlueprint - Espacio medio izquierdo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.15 }}
        style={{
          position: 'absolute',
          top: '45%',
          left: '-1%',
          width: '270px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <FrontBlueprint />
      </motion.div>

      {/* 4. ShipTanksBlueprint - Esquina inferior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: '2%',
          left: '0%',
          width: '410px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* 5. ConceptBlueprint - Esquina inferior derecha */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.65, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{
          position: 'absolute',
          bottom: '4%',
          right: '1%',
          width: '290px',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <ConceptBlueprint />
      </motion.div>


      {/* Encabezado centrado con animación de aparición al ir bajando */}
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >

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
            Proyectos <span style={{ color: '#F97316' }}>Destacados</span>
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
            Explora nuestra galería de trabajos recientes en construcción, mantenimiento y reparación naval.
          </p>
        </motion.div>
      </div>

      {/* Carrusel continuo por TODO EL ANCHO de la pantalla con animación de entrada */}
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
        {/* Degradados laterales sutiles para difuminar bordes de plano */}
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

        {/* Track continuo CSS */}
        <div
          className={`projects-marquee-track ${isPaused ? 'paused' : ''}`}
          style={{
            display: 'flex',
            gap: '24px',
            width: 'max-content',
            paddingLeft: '24px',
          }}
        >
          {duplicatedProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              style={{
                width: '380px',
                flexShrink: 0,
              }}
            >
              <ProjectCard
                project={project}
                onSelect={() => setActiveProject(project)}
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Modal de detalles de proyecto */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          setCurrentPage={setCurrentPage}
        />
      )}
    </section>
  )
}

// ── Componente de Carta Individual con HOVER RESALTADO ────────────────────────
function ProjectCard({ project, onSelect }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onSelect}
      style={{
        position: 'relative',
        height: '400px',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: hovered ? '2px solid #F97316' : '1px solid rgba(29, 41, 57, 0.15)',
        boxShadow: hovered
          ? '0 20px 40px rgba(249,115,22,0.3), 0 4px 15px rgba(249,115,22,0.18)'
          : '0 8px 24px rgba(29,41,57,0.08)',
        transition: 'all 0.35s ease',
      }}
    >
      {/* LA IMAGEN OCUPA TODA LA CARTA */}
      <img
        src={project.image}
        alt={project.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          // AL HACER HOVER LA IMAGEN SE OPACA (reduce brillo / opacidad)
          opacity: hovered ? 0.48 : 0.88,
          filter: hovered ? 'brightness(0.68) contrast(1.08)' : 'brightness(0.95)',
          transform: hovered ? 'scale(1.08)' : 'scale(1.0)',
          transition: 'all 0.5s ease',
        }}
      />

      {/* Gradiente de superposición para legibilidad */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: hovered
            ? 'linear-gradient(180deg, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.92) 100%)'
            : 'linear-gradient(180deg, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.15) 40%, rgba(15,23,42,0.8) 100%)',
          transition: 'background 0.4s ease',
        }}
      />

      {/* ARRIBA: TÍTULO Y BADGE (SE AGRANDA Y RESALTA EN HOVER) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '24px 24px 16px',
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
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
            }}
          >
            {project.tag}
          </span>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.9)',
              background: 'rgba(0,0,0,0.45)',
              padding: '3px 10px',
              borderRadius: '12px',
              backdropFilter: 'blur(4px)',
            }}
          >
            {project.year}
          </span>
        </div>

        {/* TÍTULO QUE SE AGRANDA Y RESALTA EN HOVER */}
        <h3
          style={{
            fontSize: hovered ? '21px' : '18px',
            fontWeight: 900,
            color: hovered ? '#F97316' : '#ffffff',
            marginTop: '14px',
            lineHeight: 1.25,
            textShadow: hovered ? '0 0 16px rgba(249,115,22,0.7)' : '0 2px 4px rgba(0,0,0,0.8)',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transformOrigin: 'top left',
            transition: 'all 0.35s ease',
          }}
        >
          {project.title}
        </h3>
      </div>

      {/* ABAJO: UBICACIÓN Y BOTÓN */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '24px',
          zIndex: 3,
        }}
      >
        <p
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.5,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {project.desc}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.75)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <MapPin size={13} color="#F97316" />
            {project.location}
          </span>

          <span
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: hovered ? '#ffffff' : '#F97316',
              background: hovered ? '#F97316' : 'rgba(249,115,22,0.15)',
              padding: '6px 14px',
              borderRadius: '8px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.3s ease',
            }}
          >
            <Eye size={13} />
            Ver Proyecto
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Modal de Detalle de Proyecto ──────────────────────────────────────────────
function ProjectModal({ project, onClose, setCurrentPage }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15,23,42,0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#ffffff',
          borderRadius: '24px',
          maxWidth: '650px',
          width: '100%',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
          border: '1px solid #eaecf0',
        }}
      >
        {/* Imagen superior */}
        <div style={{ position: 'relative', height: '220px' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, #ffffff 100%)' }} />
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '16px', right: '16px', background: 'rgba(15,23,42,0.6)',
              color: '#ffffff', border: 'none', borderRadius: '50%', width: '36px', height: '36px',
              fontSize: '18px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div style={{ padding: '24px 32px 32px' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', background: '#F97316', padding: '4px 12px', borderRadius: '12px' }}>
            {project.tag}
          </span>
          <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#1D2939', marginTop: '10px', marginBottom: '8px' }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, marginBottom: '20px' }}>
            {project.desc}
          </p>

          <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '16px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#F97316', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
              Especificaciones Técnicas:
            </span>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {project.specs.map((s, i) => (
                <li key={i} style={{ fontSize: '12.5px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '5px', height: '5px', background: '#F97316', borderRadius: '50%' }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button
              onClick={onClose}
              style={{
                background: 'transparent', border: '1px solid #cbd5e1',
                color: '#475569', padding: '10px 20px', borderRadius: '10px', fontSize: '13px', cursor: 'pointer'
              }}
            >
              Cerrar
            </button>
            {setCurrentPage && (
              <button
                onClick={() => { onClose(); setCurrentPage('contacto') }}
                style={{
                  background: '#F97316', border: 'none', color: '#ffffff',
                  padding: '10px 20px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer'
                }}
              >
                Solicitar Cotización Similar
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
