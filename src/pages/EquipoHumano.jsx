import { motion } from 'framer-motion'
import { ShieldCheck, Award, Wrench, CheckCircle2, UserCheck, Users, Cpu } from 'lucide-react'

// Import de los 5 planos/iconos técnicos de la carpeta src/components/Icons
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'

export default function EquipoHumano({ isSection = false }) {
  return (
    <section
      id="equipo"
      className="blueprint-bg"
      style={{
        padding: isSection ? '5px 0 70px' : '110px 0 90px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
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
      <div style={{ position: 'absolute', top: '65%', left: '4%', fontSize: '11px', fontFamily: 'Rajdhani, monospace', fontWeight: 700, color: 'rgba(29,41,57,0.55)', pointerEvents: 'none' }}>
        ⊕ STAFF_CAPACITY: 100% HOMOLOGADO
      </div>

      {/* Planos decorativos */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{ position: 'absolute', top: '4%', right: '-2%', width: '310px', pointerEvents: 'none', zIndex: 0 }}
      >
        <SideProfileBlueprint />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.70, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{ position: 'absolute', top: '6%', left: '-1%', width: '270px', pointerEvents: 'none', zIndex: 0 }}
      >
        <FrontBlueprint />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.15 }}
        style={{ position: 'absolute', top: '42%', left: '-2%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.2 }}
        style={{ position: 'absolute', top: '45%', right: '-2%', width: '330px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{ position: 'absolute', bottom: '2%', left: '2%', width: '360px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* Contenido principal */}
      <div className="container-astikmar" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Encabezado centrado */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#F97316',
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.25)',
              borderRadius: '20px',
              padding: '6px 16px',
              marginBottom: '14px',
            }}
          >
            <UserCheck size={14} />
            Liderazgo Técnico & Especialistas Navales
          </span>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 900,
              color: '#1D2939',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '14px',
            }}
          >
            Nuestro <span style={{ color: '#F97316' }}>Equipo Humano</span>
          </h2>

          <p
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#334e68',
              maxWidth: '750px',
              margin: '0 auto 8px',
              lineHeight: 1.4,
            }}
          >
            Los mejores especialistas multidisciplinarios, unidos por la excelencia y la pasión naval.
          </p>
        </motion.div>

        {/* Bloque de dos columnas: Texto + Espacio para Imagen */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))', gap: '36px 48px', alignItems: 'center' }}>
          {/* Columna Izquierda: Texto Atrapante y Áreas de Especialidad */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
          >
            <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.75, marginBottom: '16px' }}>
              En <strong style={{ color: '#101c2c' }}>Grupo Astikmar</strong> nos enorgullece contar con el capital humano más calificado, apasionado y experimentado del sector naval. Integramos a los mejores profesionales en cada una de las disciplinas clave de la industria marítima, combinando décadas de trayectoria en dique seco, ingeniería aplicada y operaciones portuarias.
            </p>

            <p style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: 1.75, marginBottom: '28px' }}>
              Desde cálculos estructurales de máxima precisión y conversiones de cascos, hasta el overhaul a cero horas de motores de alta potencia y maniobras críticas; nuestro equipo multidisciplinario trabaja en perfecta sincronía para garantizar que cada proyecto supere los más altos estándares internacionales de seguridad y eficiencia.
            </p>

            {/* 4 Especialidades Clave */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))', gap: '14px' }}>
              <div style={{
                background: 'rgba(29,41,57,0.02)',
                border: '1px solid rgba(29,41,57,0.1)',
                borderRadius: '12px',
                padding: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Award size={16} color="#F97316" />
                  <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#101c2c' }}>Ingeniería & Diseño</h4>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
                  Cálculos de estabilidad, arquitectura naval y certificación ante casas clasificadoras.
                </p>
              </div>

              <div style={{
                background: 'rgba(29,41,57,0.02)',
                border: '1px solid rgba(29,41,57,0.1)',
                borderRadius: '12px',
                padding: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Wrench size={16} color="#F97316" />
                  <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#101c2c' }}>Mecánica & Propulsión</h4>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
                  Overhaul de motores diésel marinos, turbocompresores y sistemas de transmisión.
                </p>
              </div>

              <div style={{
                background: 'rgba(29,41,57,0.02)',
                border: '1px solid rgba(29,41,57,0.1)',
                borderRadius: '12px',
                padding: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <ShieldCheck size={16} color="#F97316" />
                  <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#101c2c' }}>Soldadura Homologada</h4>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
                  Especialistas certificados bajo normas AWS D1.1, Lloyd's Register y ABS.
                </p>
              </div>

              <div style={{
                background: 'rgba(29,41,57,0.02)',
                border: '1px solid rgba(29,41,57,0.1)',
                borderRadius: '12px',
                padding: '16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Cpu size={16} color="#F97316" />
                  <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#101c2c' }}>Sistemas & Control</h4>
                </div>
                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
                  Ensayos no destructivos (NDT), electricidad de potencia, gobierno e hidráulica naval.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Espacio para Imagen Representativa del Equipo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '380px',
              borderRadius: '20px',
              border: '1.5px dashed rgba(249, 115, 22, 0.4)',
              background: 'linear-gradient(135deg, rgba(29, 41, 57, 0.04) 0%, rgba(249, 115, 22, 0.05) 100%)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Cuadrícula de plano sutil de fondo */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'linear-gradient(rgba(29,41,57,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(29,41,57,0.06) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                pointerEvents: 'none',
              }}
            />

            {/* Marcas técnicas CAD de esquina */}
            <div style={{ position: 'absolute', top: '12px', left: '16px', fontSize: '10px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace' }}>
              + REF: ASTIKMAR_TEAM_2025
            </div>
            <div style={{ position: 'absolute', bottom: '12px', right: '16px', fontSize: '10px', fontWeight: 800, color: 'rgba(249,115,22,0.7)', fontFamily: 'monospace' }}>
              [STAFF_MULTIDISCIPLINARIO] +
            </div>

            {/* Contenedor central representativo */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '340px' }}>
              <div
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '50%',
                  background: 'rgba(249,115,22,0.12)',
                  border: '2px solid rgba(249,115,22,0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#F97316',
                }}
              >
                <Users size={34} />
              </div>

              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#101c2c', marginBottom: '8px' }}>
                Espacio para Imagen Representativa
              </h3>

              <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, marginBottom: '14px' }}>
                Fotografía grupal o panorámica de nuestro equipo técnico, ingenieros y especialistas en operaciones de campo y astillero.
              </p>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#F97316',
                  background: '#ffffff',
                  border: '1px solid rgba(249,115,22,0.3)',
                  borderRadius: '16px',
                  padding: '4px 12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                <CheckCircle2 size={12} color="#F97316" />
                100% Personal Homologado
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}