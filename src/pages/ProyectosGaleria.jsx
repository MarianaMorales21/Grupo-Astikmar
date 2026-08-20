import { motion } from 'framer-motion'
import { Ship, Users, Award, Anchor } from 'lucide-react'

const stats = [
  { icon: <Ship size={22} color="white" />, value: '47+', label: 'Proyectos completados' },
  { icon: <Users size={22} color="white" />, value: '20+', label: 'Años de experiencia' },
  { icon: <Award size={22} color="white" />, value: '100%', label: 'Calidad garantizada' },
  { icon: <Anchor size={22} color="white" />, value: '15+', label: 'Embarcaciones construidas' },
]

export default function ProyectosGaleria({ setCurrentPage }) {
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
      </div>
    </div>
  )
}
