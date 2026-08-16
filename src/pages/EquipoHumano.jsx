import { motion } from 'framer-motion'
import { ShieldCheck, Award, Wrench, CheckCircle2, UserCheck } from 'lucide-react'

// Import de los 5 planos/iconos técnicos de la carpeta src/components/Icons
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'

const teamMembers = [
  {
    id: 1,
    name: 'Ing. Carlos Mendoza',
    role: 'Director General & Ingeniero Naval Senior',
    desc: 'Más de 20 años de trayectoria liderando proyectos de ingeniería naval, conversiones de cascos y certificación de dique seco en el Caribe. Especialista homologado por sociedades clasificadoras internacionales.',
    image: '/team-1.png',
    badge: 'Dirección Técnica',
    skills: ['Cálculos de Estabilidad & CAD', 'Certificación Lloyd\'s / ABS', 'Supervisión en Dique Seco'],
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

      {/* ════════════════════════════════════════════════════════════════════════
         TODOS LOS PLANOS Y DIBUJOS DE LA CARPETA ICONS CON MAYOR OPACIDAD (MÁS OSCUROS)
         ════════════════════════════════════════════════════════════════════════ */}

      {/* 1. SideProfileBlueprint - Esquina superior derecha */}
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
        <SideProfileBlueprint />
      </motion.div>

      {/* 2. FrontBlueprint - Esquina superior izquierda */}
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

      {/* 3. ConceptBlueprint - Espacio medio izquierdo */}
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

      {/* 4. MarineEngineBlueprint - Espacio medio derecho */}
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

      {/* 5. ShipTanksBlueprint - Esquina inferior izquierda */}
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


      {/* Contenido principal */}
      <div className="container-astikmar" style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Encabezado centrado con animación de aparición progresiva */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
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
            Liderazgo Técnico Certificado
          </span>

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
            Nuestro <span style={{ color: '#F97316' }}>Equipo Humano</span>
          </h2>

          <p
            style={{
              fontSize: '15px',
              color: '#6b7280',
              maxWidth: '580px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Profesionales altamente calificados y certificados para afrontar los desafíos técnicos más exigentes en la industria marítima.
          </p>
        </motion.div>

        {/* Las 3 columnas de Equipo en una misma fila — foto arriba (ancho completo), texto abajo */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '28px', alignItems: 'stretch' }}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 45, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                type: 'spring',
                stiffness: 180,
                damping: 20,
                delay: index * 0.18,
              }}
              whileHover={{ y: -4 }}
              style={{
                display: 'flex',
                flexDirection: 'column',    // 👈 foto arriba, texto abajo
                flex: '1 1 320px',          // 👈 3 columnas por fila (ajusta según ancho del contenedor)
                minWidth: '300px',
                maxWidth: 'calc(33.333% - 19px)',  // 👈 fuerza máximo 3 por fila
                background: 'transparent',
                borderRadius: '20px',
                border: '1px solid rgba(29, 41, 57, 0.16)',
                boxShadow: 'none',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
              }}
            >
              {/* Foto arriba — ocupa todo el ancho de la carta */}
              <div
                style={{
                  width: '100%',
                  height: '260px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#0f172a',
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(15,23,42,0) 55%, rgba(15,23,42,0.55) 100%)',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: 'rgba(15,23,42,0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }}
                >
                  {member.experience}
                </span>
              </div>

              {/* Título y descripción abajo */}
              <div
                style={{
                  flex: '1 1 auto',
                  padding: '26px 26px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#F97316',
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                      borderRadius: '12px',
                      padding: '3px 10px',
                    }}
                  >
                    {member.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: '#1D2939',
                    marginBottom: '4px',
                    lineHeight: 1.2,
                  }}
                >
                  {member.name}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 700,
                    color: '#F97316',
                    marginBottom: '16px',
                  }}
                >
                  {member.role}
                </p>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#4b5563',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                  }}
                >
                  {member.desc}
                </p>

                {/* Habilidades / Funciones clave */}
                <div
                  style={{
                    background: '#f8fafc',
                    borderRadius: '12px',
                    padding: '14px 18px',
                    border: '1px solid #f1f5f9',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#1D2939',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    Especialidades Destacadas:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {member.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '12px',
                          color: '#334155',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle2 size={13} color="#F97316" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}