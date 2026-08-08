import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

const allProjects = [
  {
    id: 1,
    title: 'Overhaul Completo del Remolcador "Astikmar I"',
    vessel: 'Remolcador Portuario de Alta Potencia',
    service: 'Construcción Naval & Overhaul de Motor',
    challenge: 'Reconstrucción completa de la propulsión y restauración estructural del casco en un plazo estricto de 45 días en dique seco para evitar pérdidas comerciales al operador portuario.',
    location: 'Santo Domingo, R.D.',
    duration: '45 días',
    year: '2024',
    emoji: '🚢',
    gradient: 'linear-gradient(135deg, #1D2939 0%, #334e68 100%)',
    category: 'Construcción',
  },
  {
    id: 2,
    title: 'Sustitución de Planchas de Casco — M/V Caribbean Star',
    vessel: 'Buque de Carga General de 85m',
    service: 'Reparación Estructural & Sandblasting',
    challenge: 'Remoción de incrustaciones, granallado (sandblasting) a metal blanco y sustitución de más de 12 toneladas de acero corroído en casco y mamparos de lastre bajo supervisión de Lloyd\'s.',
    location: 'Puerto La Cruz, Venezuela',
    duration: '35 días',
    year: '2024',
    emoji: '⚓',
    gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d5f8a 100%)',
    category: 'Reparación',
  },
  {
    id: 3,
    title: 'Campaña de Espesores — Buques Tanqueros Petrocaribe',
    vessel: 'Flota de 5 Buques Tanqueros de Producto',
    service: 'Escaneo de Láminas por Ultrasonido',
    challenge: 'Ejecutar la medición no destructiva de espesores de planchas de casco de forma sistemática en 5 tanqueros mientras se encontraban fondeados, emitiendo reportes técnicos aptos para clasificadoras.',
    location: 'Región Caribe',
    duration: '2 meses',
    year: '2023',
    emoji: '📐',
    gradient: 'linear-gradient(135deg, #7c3410 0%, #c05010 100%)',
    category: 'Inspección',
  },
  {
    id: 4,
    title: 'Suministro Crítico de Víveres y Combustible en Alta Mar',
    vessel: 'Granelero M/V Ocean Rider',
    service: 'Provisionamiento & Bunkering',
    challenge: 'Reabastecer con 150 toneladas de Marine Gas Oil y provisiones de alimentos frescos a un buque granelero en tránsito fondeado en la bahía de Santo Domingo sin interrumpir su itinerario de viaje.',
    location: 'Bahía de Santo Domingo',
    duration: '24 horas',
    year: '2023',
    emoji: '⛽',
    gradient: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    category: 'Logística',
  },
  {
    id: 5,
    title: 'Salvamento y Reflotamiento de Barcaza Encallada',
    vessel: 'Barcaza de Carga Plana de 120 pies',
    service: 'Operación de Salvamento',
    challenge: 'Reflotar de forma segura una barcaza cargada con agregados que encalló en un banco de arena cerca de la costa, controlando averías en el casco y utilizando globos de reflotamiento.',
    location: 'Costa Este, R.D.',
    duration: '8 días',
    year: '2022',
    emoji: '🚨',
    gradient: 'linear-gradient(135deg, #312e81 0%, #4338ca 100%)',
    category: 'Salvamento',
  },
]

const categories = ['Todos', 'Reparación', 'Construcción', 'Inspección', 'Logística', 'Salvamento']

export default function ProyectosGaleria({ setCurrentPage }) {
  const [activeCat, setActiveCat] = useState('Todos')

  const filtered = allProjects.filter(p => activeCat === 'Todos' || p.category === activeCat)

  return (
    <div className="blueprint-bg min-h-screen pt-24 pb-16">
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="container-astikmar" style={{ paddingLeft: '52px', marginTop: '30px' }}>
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '20px', padding: '6px 16px', marginBottom: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#F97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Módulo 7
            </span>
          </div>
          <h1 style={{ fontSize: '38px', fontWeight: 800, color: '#1D2939' }}>
            Proyectos y Casos de Éxito
          </h1>
          <p style={{ fontSize: '15px', color: '#6b7280', maxWidth: '600px', margin: '0 auto', marginTop: '6px' }}>
            Fichas técnicas detalladas de nuestras intervenciones navales más exigentes y exitosas en el Caribe.
          </p>
        </div>

        {/* Filter categories */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifycontent: 'center', marginBottom: '32px' }} className="justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              style={{
                padding: '8px 18px', borderRadius: '8px',
                border: `1.5px solid ${activeCat === cat ? '#F97316' : 'rgba(29,41,57,0.1)'}`,
                background: activeCat === cat ? 'rgba(249,115,22,0.06)' : 'white',
                color: activeCat === cat ? '#F97316' : '#4b5563',
                fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                className="project-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
                style={{ background: 'white', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                {/* Visual Area */}
                <div style={{
                  height: '180px', background: proj.gradient, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}>
                  <span style={{ fontSize: '62px', opacity: 0.85 }}>{proj.emoji}</span>
                  <span style={{
                    position: 'absolute', bottom: '12px', right: '12px',
                    background: 'rgba(255,255,255,0.15)', borderRadius: '6px',
                    padding: '4px 10px', backdropFilter: 'blur(8px)',
                    fontSize: '11px', color: 'white', fontWeight: 700, fontFamily: 'Rajdhani'
                  }}>
                    AÑO: {proj.year}
                  </span>
                </div>

                {/* Card Body */}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <span className="project-tag" style={{ alignSelf: 'flex-start' }}>{proj.service}</span>
                  <h3 className="project-title" style={{ fontSize: '17px', margin: '8px 0 6px' }}>{proj.title}</h3>
                  <div style={{ fontSize: '12.5px', color: '#1D2939', fontWeight: 700, fontFamily: 'Rajdhani', marginBottom: '8px' }}>
                    EMBARCACIÓN: {proj.vessel}
                  </div>
                  <p className="project-desc" style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.6, flex: 1, marginBottom: '16px' }}>
                    <strong>Reto Técnico:</strong> {proj.challenge}
                  </p>

                  {/* Metadata */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '1px solid rgba(29,41,57,0.06)', paddingTop: '12px', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#9ca3af' }}>
                      <MapPin size={12} color="#F97316" />
                      {proj.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#9ca3af' }}>
                      <Clock size={12} color="#F97316" />
                      Duración: {proj.duration}
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentPage('contacto')}
                    className="card-more border-0 bg-transparent cursor-pointer"
                    style={{ alignSelf: 'flex-start', padding: '6px 12px' }}
                  >
                    Consultar caso <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
