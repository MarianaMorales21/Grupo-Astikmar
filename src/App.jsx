import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import ServiciosDetalle from './pages/ServiciosDetalle'
import FlotaEquipos from './pages/FlotaEquipos'
import ProyectosGaleria from './pages/ProyectosGaleria'
import Contacto from './pages/Contacto'
import InfoServicios from './pages/InfoServicios'
import InfoProyecto from './pages/InfoProyectos'

import './index.css'

// Parallax blueprint overlay
function BlueprintParallax() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, -60])
  const y2 = useTransform(scrollY, [0, 1000], [0, -30])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}
    >
      {/* Floating dimension lines - top */}
      <motion.div style={{ y: y1, position: 'absolute', top: 80, left: 0, right: 0, opacity: 0.12 }}>
        <svg width="100%" height="20" viewBox="0 0 1440 20" preserveAspectRatio="none">
          <line x1="0" y1="10" x2="1440" y2="10" stroke="#1D2939" strokeWidth="0.8" strokeDasharray="8 6" />
          {[144, 288, 432, 576, 720, 864, 1008, 1152, 1296].map(x => (
            <g key={x}>
              <line x1={x} y1="4" x2={x} y2="16" stroke="#1D2939" strokeWidth="1" />
              <text x={x} y="3" fontSize="8" textAnchor="middle" fill="#1D2939" fontFamily="Rajdhani">
                {x / 144 * 10}'
              </text>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Floating dimension lines - left vertical */}
      <motion.div style={{ y: y2, position: 'absolute', top: 80, left: 8, bottom: 0, width: '20px', opacity: 0.1 }}>
        <svg width="20" height="100%" viewBox="0 0 20 800" preserveAspectRatio="none">
          <line x1="10" y1="0" x2="10" y2="800" stroke="#1D2939" strokeWidth="0.8" strokeDasharray="8 6" />
          {[100, 200, 300, 400, 500, 600, 700].map(y => (
            <g key={y}>
              <line x1="4" y1={y} x2="16" y2={y} stroke="#1D2939" strokeWidth="1" />
              <text x="2" y={y + 3} fontSize="7" fill="#1D2939" fontFamily="Rajdhani">{y / 10}'</text>
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

// Scroll to top button
function ScrollToTop() {
  return (
    <motion.button
      style={{
        position: 'fixed', bottom: '96px', right: '28px',
        width: '42px', height: '42px', borderRadius: '10px',
        background: '#1D2939', border: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 9998, boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      whileHover={{ scale: 1.05, background: '#F97316' }}
      whileTap={{ scale: 0.95 }}
      title="Volver arriba"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </motion.button>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio')
  const [contactService, setContactService] = useState('')
  // Servicio elegido en ServiciosDetalle; InfoServicios lo lee para mostrar su detalle.
  const [selectedService, setSelectedService] = useState(null)
  // Proyecto elegido en ProyectosGaleria; InfoProyecto lo lee para mostrar su detalle.
  const [selectedProject, setSelectedProject] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Home setCurrentPage={setCurrentPage} />
      case 'nosotros':
        return <Nosotros />
      case 'servicios':
        return <ServiciosDetalle setCurrentPage={setCurrentPage} setContactService={setContactService} setSelectedService={setSelectedService} />
      case 'info-servicio':
        return <InfoServicios service={selectedService} setCurrentPage={setCurrentPage} />
      case 'capacidad':
        return <FlotaEquipos />
      case 'proyectos':
        return <ProyectosGaleria setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} />
      case 'info-proyecto':
        return <InfoProyecto project={selectedProject} setCurrentPage={setCurrentPage} />
      case 'contacto':
        return <Contacto contactService={contactService} setContactService={setContactService} />
      default:
        return <Home setCurrentPage={setCurrentPage} />
    }
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <BlueprintParallax />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main style={{ minHeight: 'calc(100vh - 72px - 280px)' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer setCurrentPage={setCurrentPage} />
        <ScrollToTop />
      </div>
    </div>
  )
}