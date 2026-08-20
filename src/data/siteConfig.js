// ──────────────────────────────────────────────────────────────
// siteConfig.js — Configuración centralizada de textos,
// imágenes, métricas y datos de contacto del sitio.
//
// Cualquier texto visible en la página se lee desde aquí.
// Las métricas (stats) y contacto se sincronizan con Supabase
// cuando hay conexión; si no, se usan estos valores por defecto.
// ──────────────────────────────────────────────────────────────

// ═══════════════════════ IMÁGENES ═══════════════════════
export const images = {
  logo: '/favicon.png',
  hero: '/Astikmar.png',
  tug: '/tug.jpg',
  petrolero: '/petrolero.jpg',
  obraMuerta: '/obra muerta.jpg',
  crane: '/2a8893e76c6c41dd2a89da66fcf07ea1.jpg',
  motors: '/WhatsApp Image 2026-07-22 at 12.28.31 PM (3).jpeg',
  welding: '/WhatsApp Image 2026-07-22 at 12.27.15 PM.jpeg',
  tanks: '/eliminacion de gases.jpeg',
  ultrasound: '/ultra sonido.jpg',
  salvage: '/salvamento 1.jpg',
  provisioning: '/images.jpg',
  fuelSmall: '/small-tanker-port-bergen-norway-61367570.webp',
  fuelCompact: '/compact-Oil-Tanker-with-a-high-load-capacity.jpg',
  towing: '/push-or-pull-to-move-ships-1743598323.jpg',
  remolcadores: '/remolcadores.jpg',
  aboutTeam: '/2a8893e76c6c41dd2a89da66fcf07ea1.jpg',
}

// ═══════════════════════ CONTACTO ═══════════════════════
export const contactInfo = {
  phone: '+1 (849) 513-9090',
  phoneRaw: '+18495139090',
  email: 'carlos.m@grupoastikmar.com',
  address: {
    street: 'Av. López de Vega No. 13, Plaza Progreso, Piso 8, Naco,',
    city: 'Santo Domingo, República Dominicana',
  },
  hours: {
    days: 'Lunes a Viernes',
    time: '8:00 a.m. - 5:00 p.m.',
  },
  whatsapp: 'https://wa.me/18495139090',
}

// ═══════════════════════ NAVBAR ═══════════════════════
export const navLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Capacidad Técnica', id: 'capacidad' },
]

// ═══════════════════════ HERO ═══════════════════════
export const heroContent = {
  title: {
    line1: 'Soluciones',
    line2: 'marítimas',
    highlight: 'integrales,',
  },
  subtitle: 'con la experiencia y el equipo<br />que su embarcación necesita.',
  description: 'Grupo Astikmar S.R.L. es una empresa dominicana especializada en servicios marítimos integrales. Contamos con personal técnico calificado —ingenieros, inspectores, capitanes, marineros, soldadores y pintores— y con tecnología y equipo de nivel profesional para atender cada etapa del ciclo de vida de una embarcación.',
  ctaText: 'Ver todos los 12 servicios',
}

// ═══════════════════════ SERVICIOS (sección Home) ═══════════════════════
export const servicesSectionContent = {
  title: {
    line1: 'Nuestros',
    highlight: 'Servicios',
    line2: 'Principales',
  },
  subtitle: 'Ingeniería, reparación y mantenimiento naval con estándares internacionales ISO 9001.',
  ctaText: 'Ver catálogo completo de servicios',
}

// ═══════════════════════ PROYECTOS (sección Home) ═══════════════════════
export const projectsSectionContent = {
  title: {
    line1: 'Nuestros',
    highlight: 'Proyectos',
  },
  subtitle: 'Ingeniería, experiencia y compromiso en cada proyecto.',
  description: 'Hemos participado en proyectos marítimos de gran envergadura a lo largo de toda la región caribeña y latinoamericana. Desde la construcción integral de buques hasta reparaciones estructurales complejas, cada proyecto refleja nuestro compromiso con la excelencia y los más altos estándares de calidad.',
  projectTypesTitle: '¿Qué tipo de proyectos desarrollamos?',
  projectTypes: [
    { title: 'Construcción Naval', desc: 'Diseño y construcción integral de buques de carga, petroleros, remolcadores y embarcaciones especiales desde cero.' },
    { title: 'Reparaciones Estructurales', desc: 'Sustitución de planchas de casco, reparación de mamparos, granallado y soldadura estructural certificada.' },
    { title: 'Mantenimiento de Motores', desc: 'Overhaul mayor y menor de motores principales y auxiliares, calibración y pruebas de rendimiento.' },
    { title: 'Servicios Integrales', desc: 'Asistencia portuaria, salvamento marítimo, inspecciones por ultrasonido y consultoría naval.' },
  ],
}

// ═══════════════════════ MÉTRICAS (stats) ═══════════════════════
// Estas métricas se sincronizan con Supabase.
// El admin puede editarlas desde /home/josegc2026
export const defaultStats = {
  projects: { value: '47+', label: 'Proyectos completados' },
  experience: { value: '20+', label: 'Años de experiencia' },
  quality: { value: '100%', label: 'Calidad garantizada' },
  vessels: { value: '15+', label: 'Embarcaciones construidas' },
  team: { value: '85+', label: 'Profesionales especializados' },
  commitment: { value: '100%', label: 'Comprometidos con la calidad' },
}

// Stats del carrusel de proyectos en Home ( ProjectsHero)
export const projectsStats = [
  { iconType: 'Ship', valueKey: 'projects' },
  { iconType: 'Users', valueKey: 'experience' },
  { iconType: 'Award', valueKey: 'quality' },
  { iconType: 'Anchor', valueKey: 'vessels' },
]

// Stats de FlotaEquipos
export const flotaStats = [
  { iconType: 'Ship', valueKey: 'experience' },
  { iconType: 'Users', valueKey: 'projects' },
  { iconType: 'Briefcase', valueKey: 'team' },
  { iconType: 'Anchor', valueKey: 'vessels' },
  { iconType: 'Award', valueKey: 'commitment' },
]

// ═══════════════════════ SERVICE NODES (Hero) ═══════════════════════
export const serviceNodes = [
  {
    id: 1,
    number: '1',
    label: 'DISEÑO Y CONSTRUCCIÓN NAVAL',
    desc: 'Diseño de embarcaciones de carga y pasajeros con ingeniería de alto nivel.',
    position: { top: '18%', left: '18%' },
    tooltipPos: 'bottom',
    floatDelay: 0,
  },
  {
    id: 2,
    number: '2',
    label: 'MANTENIMIENTO DE MOTORES',
    desc: 'Servicio completo de motores principales y auxiliares en sala de máquinas.',
    position: { top: '62%', left: '28%' },
    tooltipPos: 'right',
    floatDelay: 0.6,
  },
  {
    id: 3,
    number: '3',
    label: 'REPARACIONES ESTRUCTURALES',
    desc: 'Reparación y refuerzo de cascos, mamparos y estructuras de acero naval.',
    position: { top: '55%', left: '62%' },
    tooltipPos: 'left',
    floatDelay: 1.1,
  },
  {
    id: 4,
    number: '4',
    label: 'EQUIPOS DE CUBIERTA Y GRÚAS',
    desc: 'Mantenimiento, reparación e instalación de grúas y equipos de maniobra.',
    position: { top: '12%', left: '50%' },
    tooltipPos: 'bottom',
    floatDelay: 1.6,
  },
]

export const serviceNodeModals = {
  1: {
    title: 'Diseño y Construcción Naval',
    icon: '\u2693',
    items: [
      'Diseño asistido por computadora (CAD)',
      'Construcción en acero, aluminio y FRP',
      'Supervisión integral del proceso',
      'Certificación por clasificadoras internacionales',
      'Pruebas de mar y puesta en operación',
    ],
  },
  2: {
    title: 'Mantenimiento de Motores',
    icon: '\u2699\uFE0F',
    items: [
      'Motores MAN, Caterpillar, Cummins y Wärtsilä',
      'Overhaul completo de motores principales',
      'Sistemas de combustible y lubricación',
      'Motores auxiliares y generadores',
      'Diagnóstico vibracional y análisis de aceite',
    ],
  },
  3: {
    title: 'Reparaciones Estructurales',
    icon: '\uD83D\uDD27',
    items: [
      'Corte y soldadura de casco y superestructura',
      'Medición de espesores por ultrasonido',
      'Reparación de mamparos y refuerzos',
      'Arenado y pintura anticorrosiva',
      'Certificación por inspectores navales',
    ],
  },
  4: {
    title: 'Equipos de Cubierta y Grúas',
    icon: '\uD83C\uDFD7\uFE0F',
    items: [
      'Mantenimiento de grúas de cubierta',
      'Sistemas de anclas y molinetes',
      'Equipos de salvamento y seguridad',
      'Escotillas y tapas de bodega',
      'Sistemas de amarre y remolque',
    ],
  },
}

// ═══════════════════════ NOSOTROS ═══════════════════════
export const nosotrosContent = {
  hero: {
    title: { line1: 'Quienes', highlight: 'Somos' },
    subtitle: 'Construyendo confianza, impulsando el mar.',
    description: 'Somos una empresa dominicana especializada en soluciones marítimas integrales. Combinamos experiencia, tecnología y compromiso para acompañar a nuestros clientes en cada etapa del ciclo de vida de su embarcación.',
    image: images.tug,
  },
  compromiso: {
    title: { line1: 'Nuestro', highlight: 'Compromiso' },
    description: 'En Grupo Astikmar, estamos comprometidos con el desarrollo sostenible del sector marítimo, implementando prácticas responsables que generan valor para nuestros clientes, colaboradores y la comunidad.',
    items: [
      { title: 'Calidad garantizada', desc: 'Cumplimos con los más altos estándares internacionales.' },
      { title: 'Tecnología avanzada', desc: 'Invertimos en innovación para ofrecer soluciones eficientes.' },
      { title: 'Sostenibilidad', desc: 'Operamos de manera responsable con el ambiente y la sociedad.' },
    ],
  },
  valores: {
    title: { line1: 'Nuestros', highlight: 'Valores' },
    items: [
      { iconType: 'Shield', title: 'Seguridad', desc: 'Priorizamos la seguridad en cada operación, protegiendo a las personas, el ambiente y los activos.' },
      { iconType: 'Award', title: 'Calidad', desc: 'Ejecutamos cada trabajo con los exigentes estándares técnicos del sector marítimo internacional.' },
      { iconType: 'Users', title: 'Experiencia', desc: 'Personal altamente calificado y formado específicamente para cada especialidad técnica.' },
      { iconType: 'CheckCircle2', title: 'Excelencia', desc: 'Nos esforzamos por superar las expectativas con calidad, innovación y mejora continua.' },
      { iconType: 'HeartHandshake', title: 'Compromiso', desc: 'Cumplimos con rigor los tiempos acordados y las especificaciones técnicas de cada cliente.' },
    ],
    images: [
      { src: images.obraMuerta, alt: 'Reparación estructural naval' },
      { src: images.petrolero, alt: 'Construcción de buque' },
      { src: images.motors, alt: 'Mantenimiento de motor marino' },
    ],
  },
  equipo: {
    title: { line1: 'Nuestro', highlight: 'Equipo Humano' },
    subtitle: 'Los mejores especialistas multidisciplinarios, unidos por la excelencia y la pasión naval.',
    description1: 'En Grupo Astikmar nos enorgullece contar con el capital humano más calificado, apasionado y experimentado del sector naval. Integramos a los mejores profesionales en cada una de las disciplinas clave de la industria marítima, combinando décadas de trayectoria en dique seco, ingeniería aplicada y operaciones portuarias.',
    description2: 'Desde cálculos estructurales de máxima precisión y conversiones de cascos, hasta el overhaul a cero horas de motores de alta potencia y maniobras críticas; nuestro equipo multidisciplinario trabaja en perfecta sincronía para garantizar que cada proyecto supere los más altos estándares internacionales de seguridad y eficiencia.',
    image: images.crane,
    specialities: [
      { iconType: 'Award', title: 'Ingeniería y Diseño', desc: 'Cálculos de estabilidad, arquitectura naval y certificación ante casas clasificadoras.' },
      { iconType: 'Wrench', title: 'Mecánica y Propulsión', desc: 'Overhaul de motores diésel marinos, turbocompresores y sistemas de transmisión.' },
      { iconType: 'ShieldCheck', title: 'Soldadura Homologada', desc: 'Especialistas certificados bajo normas AWS D1.1, Lloyd\'s Register y ABS.' },
      { iconType: 'Cpu', title: 'Sistemas y Control', desc: 'Ensayos no destructivos (NDT), electricidad de potencia, gobierno e hidráulica naval.' },
    ],
  },
}

// ═══════════════════════ CAPACIDAD TÉCNICA ═══════════════════════
export const capacidadContent = {
  hero: {
    title: { line1: 'Capacidad', highlight: 'Técnica' },
    subtitle: 'Flota y equipos de nivel profesional',
    description: 'Contamos con herramienta y maquinaria propia de nivel profesional para ejecutar cada una de nuestras líneas de servicio sin depender de subcontratistas, garantizando eficiencia, calidad y control total en cada proyecto.',
    image: images.salvage,
  },
  equipos: [
    {
      num: '01',
      title: 'Equipos de Medición y Control por Ultrasonido',
      desc: 'Realizamos escaneo y medición de espesores de láminas con equipos de ultrasonido de última generación, asegurando precisión y confiabilidad en cada inspección.',
      iconType: 'Activity',
      image: images.ultrasound,
    },
    {
      num: '02',
      title: 'Maquinaria y Herramientas Avanzadas para Soldadura Naval',
      desc: 'Contamos con equipos de soldadura MIG, TIG, SMAW y FCAW, generadores y herramientas especializadas para todo tipo de trabajos navales y estructuras metálicas.',
      iconType: 'HardHat',
      image: images.welding,
    },
    {
      num: '03',
      title: 'Equipos de Preparación de Superficie y Pintura Anticorrosiva',
      desc: 'Disponemos de equipos de sandblasting, compresores y sistemas de aplicación de pinturas anticorrosivas de alto desempeño para máxima protección y durabilidad.',
      iconType: 'Compass',
      image: images.tanks,
    },
    {
      num: '04',
      title: 'Embarcaciones y Equipo Especializado de Apoyo para Salvamento y Abastecimiento',
      desc: 'Flota propia de embarcaciones y equipos de apoyo para operaciones de salvamento, abastecimiento, transporte de personal y logística marítima.',
      iconType: 'Shield',
      image: images.remolcadores,
    },
  ],
  enfoqueOperativo: {
    title: { line1: 'Nuestro', highlight: 'Enfoque Operativo' },
    description: 'Contamos con herramienta y maquinaria propia de nivel profesional para ejecutar cada una de nuestras líneas de servicio sin depender de subcontratistas. Esto nos permite un estricto control de calidad y plazos de entrega inmejorables.',
    advantages: [
      { iconType: 'ShieldCheck', title: 'Control total de calidad', desc: 'Al no depender de subcontratistas, supervisamos cada etapa del proceso directamente, garantizando resultados que cumplen con los estándares más exigentes del sector marítimo internacional.' },
      { iconType: 'Clock', title: 'Plazos de entrega optimizados', desc: 'Nuestra capacidad operativa interna nos permite ejecutar proyectos bajo cronogramas estrictos, minimizando tiempos de inactividad de la embarcación y maximizando la eficiencia.' },
      { iconType: 'Wrench', title: 'Equipo propio certificado', desc: 'Disponemos de maquinaria, herramientas y tecnología de última generación, mantenidos bajo protocolos internacionales y operados por personal certificado en cada especialidad.' },
      { iconType: 'Users', title: 'Equipo multidisciplinario integrado', desc: 'Ingenieros, soldadores certificados, mecánicos navales e inspectores trabajan bajo una misma estructura, eliminando demoras por coordinación externa.' },
    ],
    process: [
      { step: '01', title: 'Evaluación técnica', desc: 'Diagnosticamos el estado de la embarcación o equipo con inspección directa y mediciones precisas.' },
      { step: '02', title: 'Planificación operativa', desc: 'Diseñamos el plan de trabajo con cronograma, recursos y especificaciones técnicas detalladas.' },
      { step: '03', title: 'Ejecución controlada', desc: 'Nuestro equipo ejecuta cada fase con supervisión constante y control de calidad en tiempo real.' },
      { step: '04', title: 'Verificación y entrega', desc: 'Pruebas de funcionamiento, inspección final y documentación técnica antes de la entrega operativa.' },
    ],
    certifications: ['ISO 9001:2015', 'AWS D1.1', 'Lloyd\'s Register', 'ABS', 'DNV-GL', 'RINA'],
  },
}

// ═══════════════════════ CONTACTO ═══════════════════════
export const contactoContent = {
  title: { line1: 'Solicita nuestro', highlight: 'servicio' },
  subtitle: 'Estamos listos para ayudarte',
  description: 'Cuéntanos sobre tu proyecto o requerimiento y nuestro equipo de ingenieros se pondrá en contacto contigo para ofrecerte la mejor solución marítima integral.',
  formTitle: 'Envíanos tu Solicitud',
  formSubtitle: 'Completa el formulario y nos pondremos en contacto contigo a la brevedad.',
  emergencyTitle: '¿Emergencia en alta mar?',
  emergencyDesc: 'Nuestro equipo de respuesta rápida y salvamento está operativo las 24 horas del día. Llame directamente a soporte.',
  interestServices: [
    'Reparación Naval',
    'Mantenimiento',
    'Pintura Naval',
    'Flete Marítimo',
    'Salvamento',
    'Limpieza',
    'Soldadura',
    'Reconstrucción',
    'Escaneo de Láminas (Ultrasonido)',
    'Provisionamiento en Alta Mar',
    'Bunkering (Reabastecimiento)',
    'Compra y Venta de Combustible',
    'Servicios Integrales a Medida',
  ],
  whyUs: [
    { iconType: 'ShieldCheck', title: 'Experiencia comprobada', desc: 'Más de 20 años ofreciendo soluciones marítimas integrales.' },
    { iconType: 'UserCheck', title: 'Equipo especializado', desc: 'Profesionales altamente capacitados y comprometidos con cada proyecto.' },
    { iconType: 'Cpu', title: 'Tecnología avanzada', desc: 'Contamos con equipos y herramientas de última generación.' },
    { iconType: 'Award', title: 'Compromiso total', desc: 'Cumplimos con los más altos estándares de seguridad, calidad y puntualidad.' },
  ],
}

// ═══════════════════════ FOOTER ═══════════════════════
export const footerContent = {
  description: 'Empresa dominicana especializada en servicios marítimos integrales con más de 20 años de experiencia en el Caribe.',
  copyright: '\u00a9 2025 Grupo Astikmar. Todos los derechos reservados.',
  socialLinks: {
    linkedin: '#',
    instagram: '#',
    youtube: '#',
  },
  legal: {
    privacy: 'Política de Privacidad',
    terms: 'Términos y Condiciones',
  },
}

// ═══════════════════════ CARRUSEL IMÁGENES PROYECTOS ═══════════════════════
export const carouselImages = [
  { src: images.petrolero, alt: 'Construcción naval de buque de carga', category: 'Construcción Naval' },
  { src: images.motors, alt: 'Overhaul de motor marino principal', category: 'Mantenimiento de Motores' },
  { src: images.obraMuerta, alt: 'Reparación estructural de casco', category: 'Reparaciones Estructurales' },
  { src: images.crane, alt: 'Instalación de grúa de cubierta', category: 'Cubierta y Grúas' },
  { src: images.tanks, alt: 'Rehabilitación de tanques de lastre', category: 'Tanques y Sistemas' },
  { src: images.tug, alt: 'Overhaul completo de remolcador', category: 'Construcción y Overhaul' },
  { src: images.fuelCompact, alt: 'Diseño de petrolero compacto', category: 'Diseño Naval' },
  { src: images.provisioning, alt: 'Servicios marítimos integrales', category: 'Servicios Integrales' },
  { src: images.remolcadores, alt: 'Flota de remolcadores portuarios', category: 'Remolcadores' },
  { src: images.fuelSmall, alt: 'Tanquero en puerto', category: 'Transporte Marítimo' },
  { src: images.towing, alt: 'Asistencia portuaria', category: 'Asistencia Portuaria' },
  { src: images.salvamento, alt: 'Operaciones de salvamento', category: 'Salvamento Marítimo' },
]

// ═══════════════════════ SERVICIOS DETALLE (categorías) ═══════════════════════
export const serviceCategories = ['Todos', 'Técnico', 'Mantenimiento', 'Logística', 'Inspección', 'Combustible', 'Emergencia']
