import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight, ShieldCheck } from 'lucide-react'

const allServices = [
  {
    id: 'reparacion-naval',
    title: 'Reparación Naval',
    desc: 'Soluciones técnicas para mantener su embarcación operativa. Ejecutamos reparaciones estructurales y de sistemas a bordo (cascos, motores, sistemas eléctricos y mecánicos) en puerto o dique seco.',
    details: ['Reparaciones estructurales del casco', 'Sistemas de propulsión y gobierno', 'Alineación de ejes y hélices', 'Reparación de sistemas eléctricos y de automatización'],
    category: 'Técnico',
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    desc: 'Programas de mantenimiento preventivo y correctivo orientados a prevenir fallas, prolongar la vida útil de los equipos a bordo y garantizar la operatividad constante de su flota.',
    details: ['Planes de mantenimiento preventivo para flotas', 'Overhaul y puesta a punto de motores principales', 'Servicio a generadores auxiliares', 'Sistemas hidráulicos y neumáticos'],
    category: 'Mantenimiento',
  },
  {
    id: 'pintura-naval',
    title: 'Pintura Naval',
    desc: 'Aplicación de sistemas de pintura industrial y anticorrosiva en ambiente marino, incluyendo preparación de superficie de alto estándar con sandblasting y acabados de línea de flotación.',
    details: ['Sandblasting bajo normas internacionales', 'Pintura anticorrosiva y antiincrustante (antifouling)', 'Tratamiento de tanques de lastre y bodegas', 'Esquemas de pintura certificados'],
    category: 'Técnico',
  },
  {
    id: 'flete-maritimo',
    title: 'Flete Marítimo',
    desc: 'Transporte de carga por vía marítima a nivel nacional e internacional, coordinando la logística integral de embarque, estiba y desembarque para garantizar una entrega segura.',
    details: ['Logística de carga general y a granel', 'Fletamento de embarcaciones a medida', 'Coordinación portuaria y aduanal', 'Monitoreo de tránsito y seguridad de carga'],
    category: 'Logística',
  },
  {
    id: 'salvamento',
    title: 'Salvamento',
    desc: 'Respuesta especializada y rápida ante embarcaciones y cargas siniestradas o encalladas, operando en coordinación directa con autoridades marítimas, aseguradoras y armadores.',
    details: ['Operaciones de reflotamiento de cascos', 'Control de averías e inundaciones', 'Remolque de emergencia en alta mar', 'Mitigación de riesgos ambientales'],
    category: 'Emergencia',
  },
  {
    id: 'limpieza',
    title: 'Limpieza',
    desc: 'Limpieza técnica especializada de cascos (remoción de incrustaciones), tanques de almacenamiento de combustible o agua, y espacios confinados a bordo bajo estrictos protocolos de seguridad.',
    details: ['Limpieza submarina de casco y hélices', 'Desgasificación y limpieza de tanques de combustible', 'Limpieza industrial de salas de máquinas', 'Certificación de espacios libres de gases'],
    category: 'Mantenimiento',
  },
  {
    id: 'soldadura',
    title: 'Soldadura',
    desc: 'Soldadura especializada en acero naval y estructuras metálicas a bordo y en taller, ejecutada por soldadores homologados y supervisada bajo estrictos estándares por inspectores.',
    details: ['Soldadura estructural homologada (AWS / Lloyd\'s)', 'Reparación de planchas de acero y refuerzos', 'Fabricación e instalación de tuberías a bordo', 'Ensayos no destructivos en soldadura'],
    category: 'Técnico',
  },
  {
    id: 'reconstruccion',
    title: 'Reconstrucción',
    desc: 'Evaluación técnica detallada de daños estructurales y reconstrucción parcial o total de embarcaciones colisionadas o deterioradas, devolviéndoles su plena condición operativa original.',
    details: ['Reconstrucción de secciones completas del casco', 'Reparación de superestructuras colisionadas', 'Modernización de espacios a bordo (Refit)', 'Cumplimiento con requisitos de sociedades de clasificación'],
    category: 'Técnico',
  },
  {
    id: 'escaneo-laminas',
    title: 'Escaneo de Láminas (Ultrasonido)',
    desc: 'Medición de espesores de lámina mediante equipos avanzados de ultrasonido para el control preventivo de la corrosión y emisión de reportes técnicos certificados para sociedades de clasificación.',
    details: ['Medición no destructiva de espesores de casco', 'Mapeo de corrosión en bodegas y tanques', 'Reportes certificados para Lloyd\'s, ABS, RINA, etc.', 'Evaluación estructural predictiva'],
    category: 'Inspección',
  },
  {
    id: 'provisionamiento-alimentos',
    title: 'Provisionamiento en Alta Mar',
    desc: 'Suministro puntual y confiable de alimentos frescos, víveres secos, repuestos menores y agua potable para tripulaciones en plena operación, sin que tengan que interrumpir su itinerario.',
    details: ['Víveres frescos, congelados y secos', 'Suministro de agua potable certificada', 'Logística de entrega rápida con lanchas de apoyo', 'Servicio disponible 24/7 en puntos estratégicos'],
    category: 'Logística',
  },
  {
    id: 'bunkering',
    title: 'Reabastecimiento de Combustible (Bunkering)',
    desc: 'Suministro confiable, seguro y eficiente de combustibles marinos (MGO, IFO) a embarcaciones tanto en puerto como fondeadas en alta mar, bajo estrictas normas de seguridad ambiental.',
    details: ['Suministro de Marine Gas Oil (MGO)', 'Operaciones en muelle y por barcaza', 'Estricto control de calidad y cantidad (bunker surveys)', 'Cumplimiento con convenios MARPOL'],
    category: 'Combustible',
  },
  {
    id: 'compra-venta-combustible',
    title: 'Compra y Venta de Combustible',
    desc: 'Comercialización directa de combustibles marinos de alta calidad, brindando asesoría de precios, logística y volumen según el itinerario de navegación de su flota en la región.',
    details: ['Precios competitivos en combustibles marinos', 'Garantía de calidad de producto certificado', 'Asesoría en contratos de suministro a largo plazo', 'Logística de distribución regional eficiente'],
    category: 'Combustible',
  },
  {
    id: 'servicios-integrales-medida',
    title: 'Servicios Integrales a Medida',
    desc: 'Capacidad operativa versátil y ágil para estructurar y ejecutar cualquier combinación de servicios especializados o complementarios que su operación marítima particular requiera.',
    details: ['Diseño de soluciones técnicas ad-hoc', 'Movilización rápida de personal y equipos a nivel regional', 'Gestión integral de proyectos marítimos complejos', 'Soporte y consultoría técnica especializada'],
    category: 'Logística',
  },
]

const categories = ['Todos', 'Técnico', 'Mantenimiento', 'Logística', 'Inspección', 'Combustible', 'Emergencia']

// Placeholder de imagen/ilustración por servicio — reemplaza por la foto real cuando la tengas.
function ServiceImagePlaceholder({ size = 96 }) {
  return (
    <div style={{
      width: size,
      height: size,
      minWidth: size,
      border: '1.5px dashed rgba(29,41,57,0.22)',
      borderRadius: '10px',
      position: 'relative',
      overflow: 'hidden',
      background: 'rgba(29,41,57,0.02)',
      flexShrink: 0,
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(29,41,57,0.14)" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(29,41,57,0.14)" strokeWidth="1" />
      </svg>
    </div>
  )
}

export default function ServiciosDetalle({ setCurrentPage, setContactService }) {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('Todos')
  const [selectedService, setSelectedService] = useState(null)

  const filtered = allServices.filter(svc => {
    const matchesSearch = svc.title.toLowerCase().includes(search.toLowerCase()) || svc.desc.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeCat === 'Todos' || svc.category === activeCat
    return matchesSearch && matchesCat
  })

  const handleSolicitar = (title) => {
    if (setContactService) {
      setContactService(title)
    }
    setCurrentPage('contacto')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="blueprint-bg min-h-screen pb-16">
      {/* Regla pegada al borde superior real de la página */}
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* paddingTop deja libre el alto de la regla + el navbar flotante */}
      <div className="container-astikmar" style={{ paddingLeft: '52px', paddingTop: '132px' }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '10px' }}>
          Inicio <span style={{ margin: '0 4px' }}>›</span> <span style={{ color: '#F97316', fontWeight: 600 }}>Servicios</span>
        </p>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'end', marginBottom: '48px' }}>
          <div>
            <h1 style={{ fontSize: '40px', fontWeight: 900, color: '#1D2939', lineHeight: 1.1, letterSpacing: '-0.01em' }}>
              Nuestros servicios
            </h1>
            <p style={{ fontSize: '20px', fontWeight: 600, color: '#334e68', marginTop: '4px' }}>
              Soluciones marítimas <span style={{ color: '#F97316', fontStyle: 'italic' }}>integrales</span>
            </p>
          </div>
          <p style={{ fontSize: '14.5px', color: '#4b5563', lineHeight: 1.75 }}>
            Acompañamos a nuestros clientes en cada etapa del ciclo de vida de su embarcación, con equipo especializado, tecnología avanzada y altos estándares de calidad.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: '1 1 300px' }}>
            <input
              type="text"
              placeholder="Buscar servicio por nombre o palabra clave..."
              className="calc-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ paddingLeft: '40px' }}
            />
            <Search size={16} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                style={{
                  padding: '8px 16px', borderRadius: '8px',
                  border: `1.5px solid ${activeCat === cat ? '#F97316' : 'rgba(29,41,57,0.1)'}`,
                  background: activeCat === cat ? 'rgba(249,115,22,0.06)' : 'transparent',
                  color: activeCat === cat ? '#F97316' : '#4b5563',
                  fontSize: '12.5px', fontWeight: 600, cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de servicios — sin panel/carta, filas planas separadas por línea divisoria */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '48px' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.04 }}
                layout
                whileHover={{ x: 3 }}
                onClick={() => setSelectedService(svc)}
                style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'flex-start',
                  padding: '26px 0',
                  borderTop: '1px solid rgba(29,41,57,0.08)',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'relative', flexShrink: 0 }}>
                  <ServiceImagePlaceholder size={92} />
                  <span style={{
                    position: 'absolute', top: '-8px', left: '-8px',
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: '#F97316', color: 'white',
                    fontSize: '11px', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '2px solid #F2F4F7',
                  }}>
                    {i + 1}
                  </span>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <span style={{
                    fontSize: '10px', fontWeight: 700, color: '#F97316',
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {svc.category}
                  </span>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#1D2939', margin: '4px 0 6px', textTransform: 'uppercase', letterSpacing: '0.01em' }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontSize: '13px', color: '#6b7280', lineHeight: 1.6,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  }}>
                    {svc.desc}
                  </p>
                  <button
                    className="card-more border-0 bg-transparent cursor-pointer"
                    style={{ marginTop: '10px' }}
                  >
                    Ver más <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px', border: '1.5px dashed rgba(29,41,57,0.15)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1D2939' }}>No se encontraron servicios</h3>
            <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '4px' }}>Intente buscar con otra palabra clave o limpie los filtros.</p>
          </div>
        )}
      </div>

      {/* Service spec modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="modal-box"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '600px' }}
            >
              <button className="modal-close" onClick={() => setSelectedService(null)}>
                ×
              </button>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                <ServiceImagePlaceholder size={60} />
                <div>
                  <span style={{ fontSize: '11px', color: '#F97316', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Línea de Servicio • {selectedService.category}
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1D2939' }}>{selectedService.title}</h3>
                </div>
              </div>

              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, marginBottom: '20px' }}>
                {selectedService.desc}
              </p>

              <div style={{ background: 'rgba(29,41,57,0.03)', borderRadius: '12px', padding: '20px', marginBottom: '24px', border: '1px solid rgba(29,41,57,0.05)' }}>
                <h4 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: '#1D2939', letterSpacing: '0.06em', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <ShieldCheck size={16} color="#F97316" />
                  Capacidades y Operaciones Incluidas:
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedService.details.map((d, idx) => (
                    <li key={idx} style={{ fontSize: '13.5px', color: '#374151', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <span style={{ color: '#F97316', fontWeight: 'bold' }}>•</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={() => handleSolicitar(selectedService.title)}
                  className="btn-ver-servicios border-0 cursor-pointer"
                  style={{ flex: 1, marginTop: 0, justifyContent: 'center' }}
                >
                  Solicitar cotización de {selectedService.title}
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  style={{
                    padding: '0 20px', borderRadius: '8px',
                    border: '1.5px solid rgba(29,41,57,0.15)', background: 'white',
                    color: '#4b5563', fontSize: '13.5px', fontWeight: 600, cursor: 'pointer',
                  }}
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}