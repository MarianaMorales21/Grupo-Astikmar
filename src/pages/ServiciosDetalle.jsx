import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ArrowRight } from 'lucide-react'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'

const allServices = [
  {
    id: 'reparacion-naval',
    title: 'Reparación Naval',
    desc: 'Soluciones técnicas para mantener su embarcación operativa. Ejecutamos reparaciones estructurales y de sistemas a bordo (cascos, motores, sistemas eléctricos y mecánicos) en puerto o dique seco.',
    details: ['Reparaciones estructurales del casco', 'Sistemas de propulsión y gobierno', 'Alineación de ejes y hélices', 'Reparación de sistemas eléctricos y de automatización'],
    category: 'Técnico',
    galleryTitle: 'Tipos de Embarcaciones que Reparamos',
    gallery: ['Reparación de casco', 'Sistemas de propulsión', 'Alineación de ejes y hélices', 'Sistemas eléctricos y automatización'],
    incluye: [
      { icon: 'PenTool', title: 'Diagnóstico Técnico Inicial', desc: 'Evaluamos el alcance del daño estructural o mecánico antes de iniciar cualquier intervención.' },
      { icon: 'Hammer', title: 'Reparación Estructural y Mecánica', desc: 'Ejecutamos reparaciones de casco, propulsión y gobierno con personal certificado.' },
      { icon: 'ClipboardCheck', title: 'Pruebas de Funcionamiento', desc: 'Verificamos el correcto funcionamiento de los sistemas reparados antes de la entrega.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento de Normativas', desc: 'Trabajos alineados a los estándares de sociedades clasificadoras.' },
      { icon: 'UserCheck', title: 'Acompañamiento Técnico', desc: 'Asesoría directa durante todo el proceso de reparación.' },
      { icon: 'Wrench', title: 'Garantía de Reparación', desc: 'Soporte post-entrega y garantía sobre el trabajo realizado.' },
    ],
  },
  {
    id: 'mantenimiento',
    title: 'Mantenimiento',
    desc: 'Programas de mantenimiento preventivo y correctivo orientados a prevenir fallas, prolongar la vida útil de los equipos a bordo y garantizar la operatividad constante de su flota.',
    details: ['Planes de mantenimiento preventivo para flotas', 'Overhaul y puesta a punto de motores principales', 'Servicio a generadores auxiliares', 'Sistemas hidráulicos y neumáticos'],
    category: 'Mantenimiento',
    galleryTitle: 'Equipos que Mantenemos',
    gallery: ['Motores principales', 'Generadores auxiliares', 'Sistemas hidráulicos', 'Sistemas neumáticos'],
    incluye: [
      { icon: 'PenTool', title: 'Plan de Mantenimiento a Medida', desc: 'Diseñamos el cronograma según el perfil de operación de su flota.' },
      { icon: 'Hammer', title: 'Overhaul de Motores y Generadores', desc: 'Puesta a punto completa de motores principales y auxiliares.' },
      { icon: 'ClipboardCheck', title: 'Inspección Preventiva', desc: 'Diagnóstico periódico para anticipar fallas antes de que ocurran.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento de Cronogramas de Clase', desc: 'Alineado a los requisitos de sociedades clasificadoras.' },
      { icon: 'UserCheck', title: 'Gestión de Flota Personalizada', desc: 'Seguimiento dedicado a cada embarcación de su flota.' },
      { icon: 'Wrench', title: 'Soporte Correctivo 24/7', desc: 'Respuesta rápida ante fallas imprevistas.' },
    ],
  },
  {
    id: 'pintura-naval',
    title: 'Pintura Naval',
    desc: 'Aplicación de sistemas de pintura industrial y anticorrosiva en ambiente marino, incluyendo preparación de superficie de alto estándar con sandblasting y acabados de línea de flotación.',
    details: ['Sandblasting bajo normas internacionales', 'Pintura anticorrosiva y antiincrustante (antifouling)', 'Tratamiento de tanques de lastre y bodegas', 'Esquemas de pintura certificados'],
    category: 'Técnico',
    galleryTitle: 'Procesos de Pintura Naval',
    gallery: ['Sandblasting', 'Pintura anticorrosiva', 'Antifouling', 'Tanques de lastre'],
    incluye: [
      { icon: 'PenTool', title: 'Evaluación de Superficie', desc: 'Diagnosticamos el estado del casco para definir el esquema de pintura adecuado.' },
      { icon: 'Hammer', title: 'Sandblasting Certificado', desc: 'Preparación de superficie bajo normas internacionales.' },
      { icon: 'ClipboardCheck', title: 'Control de Espesores', desc: 'Medición y verificación de espesores de película seca.' },
      { icon: 'ShieldCheck', title: 'Esquemas de Pintura Certificados', desc: 'Sistemas anticorrosivos y antifouling homologados.' },
      { icon: 'UserCheck', title: 'Asesoría en Selección de Sistemas', desc: 'Recomendamos el producto según ambiente de operación.' },
      { icon: 'Wrench', title: 'Garantía de Acabado', desc: 'Respaldo sobre la durabilidad y protección aplicada.' },
    ],
  },
  {
    id: 'flete-maritimo',
    title: 'Flete Marítimo',
    desc: 'Transporte de carga por vía marítima a nivel nacional e internacional, coordinando la logística integral de embarque, estiba y desembarque para garantizar una entrega segura.',
    details: ['Logística de carga general y a granel', 'Fletamento de embarcaciones a medida', 'Coordinación portuaria y aduanal', 'Monitoreo de tránsito y seguridad de carga'],
    category: 'Logística',
    galleryTitle: 'Tipos de Carga que Movilizamos',
    gallery: ['Carga general', 'Carga a granel', 'Fletamento a medida', 'Coordinación portuaria'],
    incluye: [
      { icon: 'PenTool', title: 'Planificación Logística', desc: 'Diseñamos la ruta y el esquema de embarque según su carga.' },
      { icon: 'Hammer', title: 'Estiba y Manejo de Carga', desc: 'Operaciones seguras de carga y descarga en puerto.' },
      { icon: 'ClipboardCheck', title: 'Monitoreo de Tránsito', desc: 'Seguimiento en tiempo real de la carga durante el trayecto.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento Aduanal y Portuario', desc: 'Gestión documental y normativa en cada puerto.' },
      { icon: 'UserCheck', title: 'Coordinación con el Cliente', desc: 'Comunicación constante sobre el estado del embarque.' },
      { icon: 'Wrench', title: 'Soporte en Ruta', desc: 'Resolución de imprevistos durante el transporte.' },
    ],
  },
  {
    id: 'salvamento',
    title: 'Salvamento',
    desc: 'Respuesta especializada y rápida ante embarcaciones y cargas siniestradas o encalladas, operando en coordinación directa con autoridades marítimas, aseguradoras y armadores.',
    details: ['Operaciones de reflotamiento de cascos', 'Control de averías e inundaciones', 'Remolque de emergencia en alta mar', 'Mitigación de riesgos ambientales'],
    category: 'Emergencia',
    galleryTitle: 'Tipos de Operaciones de Salvamento',
    gallery: ['Reflotamiento de cascos', 'Control de inundaciones', 'Remolque en alta mar', 'Mitigación ambiental'],
    incluye: [
      { icon: 'PenTool', title: 'Evaluación de Emergencia', desc: 'Diagnóstico rápido de la situación del siniestro.' },
      { icon: 'Hammer', title: 'Operaciones de Reflotamiento', desc: 'Ejecución técnica para reflotar embarcaciones encalladas.' },
      { icon: 'ClipboardCheck', title: 'Control de Averías', desc: 'Contención de inundaciones y daños estructurales.' },
      { icon: 'ShieldCheck', title: 'Mitigación de Riesgo Ambiental', desc: 'Protocolos para evitar derrames y contaminación.' },
      { icon: 'UserCheck', title: 'Coordinación con Autoridades', desc: 'Trabajo conjunto con aseguradoras y autoridades marítimas.' },
      { icon: 'Wrench', title: 'Remolque de Emergencia', desc: 'Respuesta inmediata en alta mar.' },
    ],
  },
  {
    id: 'limpieza',
    title: 'Limpieza',
    desc: 'Limpieza técnica especializada de cascos (remoción de incrustaciones), tanques de almacenamiento de combustible o agua, y espacios confinados a bordo bajo estrictos protocolos de seguridad.',
    details: ['Limpieza submarina de casco y hélices', 'Desgasificación y limpieza de tanques de combustible', 'Limpieza industrial de salas de máquinas', 'Certificación de espacios libres de gases'],
    category: 'Mantenimiento',
    galleryTitle: 'Tipos de Limpieza que Realizamos',
    gallery: ['Limpieza de casco', 'Desgasificación de tanques', 'Limpieza de sala de máquinas', 'Certificación de espacios'],
    incluye: [
      { icon: 'PenTool', title: 'Evaluación de Espacios', desc: 'Identificamos los espacios y niveles de riesgo antes de intervenir.' },
      { icon: 'Hammer', title: 'Limpieza Submarina de Casco', desc: 'Remoción de incrustaciones en casco y hélices.' },
      { icon: 'ClipboardCheck', title: 'Certificación de Espacios Libres de Gases', desc: 'Verificación previa al ingreso a espacios confinados.' },
      { icon: 'ShieldCheck', title: 'Protocolos de Seguridad Industrial', desc: 'Cumplimiento estricto de normas de seguridad ocupacional.' },
      { icon: 'UserCheck', title: 'Coordinación con Tripulación', desc: 'Trabajo alineado con la operación diaria a bordo.' },
      { icon: 'Wrench', title: 'Desgasificación de Tanques', desc: 'Limpieza segura de tanques de combustible.' },
    ],
  },
  {
    id: 'soldadura',
    title: 'Soldadura',
    desc: 'Soldadura especializada en acero naval y estructuras metálicas a bordo y en taller, ejecutada por soldadores homologados y supervisada bajo estrictos estándares por inspectores.',
    details: ['Soldadura estructural homologada (AWS / Lloyd\'s)', 'Reparación de planchas de acero y refuerzos', 'Fabricación e instalación de tuberías a bordo', 'Ensayos no destructivos en soldadura'],
    category: 'Técnico',
    galleryTitle: 'Trabajos de Soldadura que Realizamos',
    gallery: ['Soldadura estructural', 'Reparación de planchas', 'Tuberías a bordo', 'Ensayos no destructivos'],
    incluye: [
      { icon: 'PenTool', title: 'Diseño de Reparación Estructural', desc: 'Planificamos el proceso según el tipo de acero y estructura.' },
      { icon: 'Hammer', title: 'Soldadura Homologada AWS / Lloyd\'s', desc: 'Ejecutada por soldadores calificados bajo norma.' },
      { icon: 'ClipboardCheck', title: 'Ensayos No Destructivos', desc: 'Verificación de calidad de la soldadura sin dañar la pieza.' },
      { icon: 'ShieldCheck', title: 'Supervisión de Inspectores Certificados', desc: 'Control de calidad en cada etapa del trabajo.' },
      { icon: 'UserCheck', title: 'Soldadores Calificados', desc: 'Personal homologado con experiencia naval.' },
      { icon: 'Wrench', title: 'Fabricación de Tuberías a Bordo', desc: 'Instalación de sistemas de tubería a medida.' },
    ],
  },
  {
    id: 'reconstruccion',
    title: 'Reconstrucción',
    desc: 'Evaluación técnica detallada de daños estructurales y reconstrucción parcial o total de embarcaciones colisionadas o deterioradas, devolviéndoles su plena condición operativa original.',
    details: ['Reconstrucción de secciones completas del casco', 'Reparación de superestructuras colisionadas', 'Modernización de espacios a bordo (Refit)', 'Cumplimiento con requisitos de sociedades de clasificación'],
    category: 'Técnico',
    galleryTitle: 'Tipos de Reconstrucción que Realizamos',
    gallery: ['Reconstrucción de casco', 'Superestructuras', 'Refit de espacios', 'Cumplimiento de clase'],
    incluye: [
      { icon: 'PenTool', title: 'Evaluación de Daños Estructurales', desc: 'Diagnóstico técnico completo del alcance del daño.' },
      { icon: 'Hammer', title: 'Reconstrucción de Secciones de Casco', desc: 'Restitución parcial o total de la estructura afectada.' },
      { icon: 'ClipboardCheck', title: 'Pruebas de Estanqueidad', desc: 'Verificación estructural antes de la entrega.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento con Sociedades de Clasificación', desc: 'Trabajo alineado a los requisitos de clase.' },
      { icon: 'UserCheck', title: 'Acompañamiento en Refit', desc: 'Asesoría durante todo el proceso de modernización.' },
      { icon: 'Wrench', title: 'Modernización de Espacios a Bordo', desc: 'Actualización funcional de áreas operativas.' },
    ],
  },
  {
    id: 'escaneo-laminas',
    title: 'Escaneo de Láminas (Ultrasonido)',
    desc: 'Medición de espesores de lámina mediante equipos avanzados de ultrasonido para el control preventivo de la corrosión y emisión de reportes técnicos certificados para sociedades de clasificación.',
    details: ['Medición no destructiva de espesores de casco', 'Mapeo de corrosión en bodegas y tanques', 'Reportes certificados para Lloyd\'s, ABS, RINA, etc.', 'Evaluación estructural predictiva'],
    category: 'Inspección',
    galleryTitle: 'Alcance del Escaneo por Ultrasonido',
    gallery: ['Medición de espesores', 'Mapeo de corrosión', 'Reportes certificados', 'Evaluación predictiva'],
    incluye: [
      { icon: 'PenTool', title: 'Planificación del Escaneo', desc: 'Definimos las zonas críticas a inspeccionar.' },
      { icon: 'Hammer', title: 'Medición por Ultrasonido', desc: 'Equipos avanzados para medición no destructiva.' },
      { icon: 'ClipboardCheck', title: 'Mapeo de Corrosión', desc: 'Identificación de zonas de desgaste en bodegas y tanques.' },
      { icon: 'ShieldCheck', title: 'Reportes Certificados', desc: 'Documentación válida ante Lloyd\'s, ABS, RINA y otras.' },
      { icon: 'UserCheck', title: 'Asesoría en Interpretación de Resultados', desc: 'Explicamos los hallazgos y su impacto operativo.' },
      { icon: 'Wrench', title: 'Evaluación Estructural Predictiva', desc: 'Anticipamos el mantenimiento necesario a futuro.' },
    ],
  },
  {
    id: 'provisionamiento-alimentos',
    title: 'Provisionamiento en Alta Mar',
    desc: 'Suministro puntual y confiable de alimentos frescos, víveres secos, repuestos menores y agua potable para tripulaciones en plena operación, sin que tengan que interrumpir su itinerario.',
    details: ['Víveres frescos, congelados y secos', 'Suministro de agua potable certificada', 'Logística de entrega rápida con lanchas de apoyo', 'Servicio disponible 24/7 en puntos estratégicos'],
    category: 'Logística',
    galleryTitle: 'Qué Suministramos en Alta Mar',
    gallery: ['Víveres frescos', 'Agua potable', 'Entrega en alta mar', 'Logística 24/7'],
    incluye: [
      { icon: 'PenTool', title: 'Planificación de Pedido', desc: 'Coordinamos cantidades y fechas según el itinerario.' },
      { icon: 'Hammer', title: 'Preparación de Víveres', desc: 'Selección de productos frescos, congelados y secos.' },
      { icon: 'ClipboardCheck', title: 'Control de Calidad de Alimentos', desc: 'Verificación de frescura y condiciones de almacenamiento.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento Sanitario', desc: 'Productos certificados bajo normas de higiene.' },
      { icon: 'UserCheck', title: 'Coordinación con Tripulación', desc: 'Comunicación directa para ajustar la entrega.' },
      { icon: 'Wrench', title: 'Entrega Rápida con Lanchas de Apoyo', desc: 'Servicio disponible 24/7 en puntos estratégicos.' },
    ],
  },
  {
    id: 'bunkering',
    title: 'Reabastecimiento de Combustible (Bunkering)',
    desc: 'Suministro confiable, seguro y eficiente de combustibles marinos (MGO, IFO) a embarcaciones tanto en puerto como fondeadas en alta mar, bajo estrictas normas de seguridad ambiental.',
    details: ['Suministro de Marine Gas Oil (MGO)', 'Operaciones en muelle y por barcaza', 'Estricto control de calidad y cantidad (bunker surveys)', 'Cumplimiento con convenios MARPOL'],
    category: 'Combustible',
    galleryTitle: 'Modalidades de Bunkering',
    gallery: ['Suministro en muelle', 'Suministro por barcaza', 'Bunker survey', 'Cumplimiento MARPOL'],
    incluye: [
      { icon: 'PenTool', title: 'Planificación de Suministro', desc: 'Coordinamos volumen, punto y horario de entrega.' },
      { icon: 'Hammer', title: 'Operación en Muelle o Barcaza', desc: 'Suministro seguro en puerto o fondeadero.' },
      { icon: 'ClipboardCheck', title: 'Bunker Survey', desc: 'Control estricto de calidad y cantidad entregada.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento MARPOL', desc: 'Operación alineada a convenios ambientales internacionales.' },
      { icon: 'UserCheck', title: 'Coordinación con la Tripulación', desc: 'Comunicación directa durante toda la operación.' },
      { icon: 'Wrench', title: 'Suministro de MGO / IFO', desc: 'Combustibles marinos de calidad garantizada.' },
    ],
  },
  {
    id: 'compra-venta-combustible',
    title: 'Compra y Venta de Combustible',
    desc: 'Comercialización directa de combustibles marinos de alta calidad, brindando asesoría de precios, logística y volumen según el itinerario de navegación de su flota en la región.',
    details: ['Precios competitivos en combustibles marinos', 'Garantía de calidad de producto certificado', 'Asesoría en contratos de suministro a largo plazo', 'Logística de distribución regional eficiente'],
    category: 'Combustible',
    galleryTitle: 'Nuestra Oferta de Combustibles',
    gallery: ['Combustibles marinos', 'Certificación de producto', 'Contratos de suministro', 'Distribución regional'],
    incluye: [
      { icon: 'PenTool', title: 'Asesoría de Precios', desc: 'Análisis de mercado para su itinerario de navegación.' },
      { icon: 'Hammer', title: 'Gestión de Contratos', desc: 'Negociación de contratos de suministro a largo plazo.' },
      { icon: 'ClipboardCheck', title: 'Control de Calidad de Producto', desc: 'Verificación de especificaciones antes de la entrega.' },
      { icon: 'ShieldCheck', title: 'Certificación de Producto', desc: 'Combustibles con respaldo de calidad certificada.' },
      { icon: 'UserCheck', title: 'Asesoría en Volumen y Logística', desc: 'Planificación según necesidades de su flota.' },
      { icon: 'Wrench', title: 'Distribución Regional', desc: 'Logística eficiente en toda la región.' },
    ],
  },
  {
    id: 'servicios-integrales-medida',
    title: 'Servicios Integrales a Medida',
    desc: 'Capacidad operativa versátil y ágil para estructurar y ejecutar cualquier combinación de servicios especializados o complementarios que su operación marítima particular requiera.',
    details: ['Diseño de soluciones técnicas ad-hoc', 'Movilización rápida de personal y equipos a nivel regional', 'Gestión integral de proyectos marítimos complejos', 'Soporte y consultoría técnica especializada'],
    category: 'Logística',
    galleryTitle: 'Soluciones a la Medida que Ofrecemos',
    gallery: ['Soluciones ad-hoc', 'Movilización regional', 'Gestión de proyectos', 'Consultoría técnica'],
    incluye: [
      { icon: 'PenTool', title: 'Diseño de Solución Ad-hoc', desc: 'Estructuramos el servicio según su necesidad particular.' },
      { icon: 'Hammer', title: 'Movilización de Personal y Equipos', desc: 'Despliegue ágil a nivel regional.' },
      { icon: 'ClipboardCheck', title: 'Gestión Integral del Proyecto', desc: 'Seguimiento de principio a fin de proyectos complejos.' },
      { icon: 'ShieldCheck', title: 'Cumplimiento Normativo Multisectorial', desc: 'Adaptado a los distintos servicios involucrados.' },
      { icon: 'UserCheck', title: 'Consultoría Técnica Especializada', desc: 'Acompañamiento experto en cada etapa.' },
      { icon: 'Wrench', title: 'Soporte Continuo', desc: 'Disponibilidad post-entrega para ajustes o incidencias.' },
    ],
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

// setSelectedService: eleva el servicio elegido hacia App para que InfoServicios pueda leerlo.
export default function ServiciosDetalle({ setCurrentPage, setSelectedService }) {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('Todos')

  const filtered = allServices.filter(svc => {
    const matchesSearch = svc.title.toLowerCase().includes(search.toLowerCase()) || svc.desc.toLowerCase().includes(search.toLowerCase())
    const matchesCat = activeCat === 'Todos' || svc.category === activeCat
    return matchesSearch && matchesCat
  })

  const handleOpenService = (svc) => {
    if (setSelectedService) {
      setSelectedService(svc)
    }
    setCurrentPage('info-servicio')
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

      {/* 1. SideProfileBlueprint - Esquina superior derecha */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{ position: 'absolute', top: '4%', right: '-2%', width: '310px', pointerEvents: 'none', zIndex: 0 }}
      >
        <SideProfileBlueprint />
      </motion.div>

      {/* 2. FrontBlueprint - Esquina superior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.70, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{ position: 'absolute', top: '6%', left: '-1%', width: '270px', pointerEvents: 'none', zIndex: 0 }}
      >
        <FrontBlueprint />
      </motion.div>

      {/* 3. ConceptBlueprint - Espacio medio izquierdo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.15 }}
        style={{ position: 'absolute', top: '42%', left: '-2%', width: '260px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>

      {/* 4. MarineEngineBlueprint - Espacio medio derecho */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.65, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, ease: 'out', delay: 0.2 }}
        style={{ position: 'absolute', top: '45%', right: '-2%', width: '330px', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>

      {/* 5. ShipTanksBlueprint - Esquina inferior izquierda */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.70, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{ position: 'absolute', bottom: '2%', left: '2%', width: '360px', pointerEvents: 'none', zIndex: 0 }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* paddingTop deja libre el alto de la regla + el navbar flotante */}
      <div className="container-astikmar" style={{ paddingLeft: '52px', paddingTop: '132px' }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '10px' }}>
          Inicio <span style={{ margin: '0 4px' }}>›</span> <span style={{ color: '#F97316', fontWeight: 600 }}>Servicios</span>
        </p>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'end', marginBottom: '48px' }}>
          <div>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 900,
                color: '#101c2c',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              Nuestros{' '}
              <span style={{ color: '#F97316', fontStyle: 'italic' }}>Servicios</span>{' '}
            </h2>
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

        {/* Lista de servicios — sin panel/carta, filas planas separadas por línea divisoria.
            Al hacer clic navega a la pantalla InfoServicios con el detalle completo. */}
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
                onClick={() => handleOpenService(svc)}
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
                    onClick={(e) => { e.stopPropagation(); handleOpenService(svc) }}
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
    </div>
  )
}