import { motion } from 'framer-motion'
import { HardHat, Compass, Activity, Shield } from 'lucide-react'

const equipments = [
  {
    num: '01',
    title: 'Medición & Control (Ultrasonido)',
    desc: 'Equipos portátiles de escaneo no destructivo para medición de espesores de láminas de acero y mapeo de corrosión certificados por sociedades de clasificación.',
    spec: 'Marca/Clase: Olympus / GE | Calibración: Mensual Certificada | Precisión: +/- 0.05 mm',
    icon: <Activity size={24} color="#F97316" />,
  },
  {
    num: '02',
    title: 'Soldadura Naval Especializada',
    desc: 'Máquinas de soldadura de proceso múltiple (MIG, TIG, electrodo revestido) de alto rendimiento aptas para trabajar a bordo o en condiciones marítimas extremas.',
    spec: 'Procesos: SMAW, GMAW, GTAW | Estándares: AWS D1.1 & D1.6 | Potencia: 400A - 600A',
    icon: <HardHat size={24} color="#F97316" />,
  },
  {
    num: '03',
    title: 'Sandblasting & Pintura Naval',
    desc: 'Compresores de alta presión y tolvas de arenado industrial, junto con equipos de pulverización airless de alto caudal para la correcta aplicación de esquemas de pintura.',
    spec: 'Presión: 120-150 PSI | Boquillas: Carburo de Boro | Equipos Airless: Graco Extreme',
    icon: <Compass size={24} color="#F97316" />,
  },
  {
    num: '04',
    title: 'Apoyo & Salvamento Marítimo',
    desc: 'Lanchas de casco rígido de respuesta rápida y embarcaciones auxiliares equipadas con motobombas de achique de gran caudal, globos de reflotamiento y equipos de buceo.',
    spec: 'Capacidad: Achique 150 m³/h | Lanchas: 28-36 pies | Equipos: Buceo KMB-18',
    icon: <Shield size={24} color="#F97316" />,
  },
]

export default function FlotaEquipos() {
  return (
    <div className="blueprint-bg min-h-screen pt-24 pb-16">
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="container-astikmar" style={{ paddingLeft: '52px', marginTop: '30px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '20px', padding: '6px 16px', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#F97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Módulo 4
            </span>
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#1D2939' }}>
            Capacidad Técnica y Flota
          </h1>
          <p style={{ fontSize: '15px', color: '#6b7280', maxWidth: '600px', margin: '0 auto', marginTop: '6px' }}>
            Herramientas y equipamiento propio de nivel profesional para garantizar rapidez y autonomía.
          </p>
        </div>

        {/* Enfoque banner */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #1D2939 0%, #334e68 100%)',
            border: 'none', padding: '32px', color: 'white', marginBottom: '40px',
            position: 'relative', overflow: 'hidden'
          }}
        >
          {/* Blueprint background grid effect */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.15,
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '42px' }}>⚙️</span>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#F97316', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Enfoque Operativo de Autonomía
              </h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, maxWidth: '800px', marginTop: '4px' }}>
                Contamos con herramienta y maquinaria propia de nivel profesional para ejecutar cada una de nuestras líneas de servicio sin depender de subcontratistas. Esto nos permite un estricto control de calidad y plazos de entrega inmejorables.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Equipos destacados */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {equipments.map((eq, i) => (
            <motion.div
              key={eq.num}
              className="service-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '28px', height: 'auto', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
            >
              {/* Icon / Number */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'Rajdhani', fontSize: '24px', fontWeight: 800,
                  color: 'rgba(29,41,57,0.15)', marginBottom: '8px'
                }}>
                  {eq.num}
                </span>
                <div style={{
                  width: '46px', height: '46px', borderRadius: '10px',
                  background: 'rgba(29,41,57,0.04)', border: '1px solid rgba(29,41,57,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {eq.icon}
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3 className="card-title" style={{ fontSize: '16.5px', marginBottom: '6px' }}>{eq.title}</h3>
                <p className="card-desc" style={{ fontSize: '13px', color: '#4b5563', lineHeight: 1.6 }}>{eq.desc}</p>
                <div style={{
                  marginTop: '12px', background: 'rgba(29,41,57,0.03)',
                  borderLeft: '2.5px solid #F97316', padding: '8px 12px',
                  fontSize: '11.5px', fontFamily: 'Rajdhani', color: '#1D2939', fontWeight: 600
                }}>
                  ESPECIFICACIONES: {eq.spec}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
