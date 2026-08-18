import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { createPortal } from 'react-dom'

// ─────────────────────────────────────────────
// Íconos estilo "boceto de plano" (línea fina, trazo a mano, navy + acento naranja)
// ─────────────────────────────────────────────
function IconDiseno() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      {/* casco del buque, trazo de boceto */}
      <path d="M6 22 Q6 27 12 28 L30 28 Q35 27 36 21 L30 16 L12 16 Q7 18 6 22 Z" stroke="#1D2939" strokeWidth="1.1" fill="none" />
      <line x1="20" y1="16" x2="20" y2="9" stroke="#1D2939" strokeWidth="1" />
      <path d="M20 9 L26 15 L20 15 Z" stroke="#F97316" strokeWidth="0.9" fill="rgba(249,115,22,0.08)" />
      {/* medida */}
      <line x1="6" y1="32" x2="36" y2="32" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
      <line x1="6" y1="30" x2="6" y2="34" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" />
      <line x1="36" y1="30" x2="36" y2="34" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" />
    </svg>
  )
}

function IconMotores() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="10" stroke="#1D2939" strokeWidth="1.1" fill="none" />
      <circle cx="20" cy="20" r="4" stroke="#F97316" strokeWidth="1" fill="rgba(249,115,22,0.08)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1={20 + 10 * Math.cos((a * Math.PI) / 180)}
          y1={20 + 10 * Math.sin((a * Math.PI) / 180)}
          x2={20 + 13 * Math.cos((a * Math.PI) / 180)}
          y2={20 + 13 * Math.sin((a * Math.PI) / 180)}
          stroke="#1D2939"
          strokeWidth="1"
        />
      ))}
      <text x="20" y="37" fontSize="5.5" fill="rgba(29,41,57,0.4)" fontFamily="Rajdhani" textAnchor="middle">⌀20</text>
    </svg>
  )
}

function IconEstructural() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <rect x="8" y="12" width="24" height="16" rx="1" stroke="#1D2939" strokeWidth="1.1" fill="none" />
      <line x1="8" y1="20" x2="32" y2="20" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" strokeDasharray="1.5 1.5" />
      {[12, 20, 28].map((x) => (
        <circle key={x} cx={x} cy="12" r="1.3" stroke="#F97316" strokeWidth="0.8" fill="none" />
      ))}
      {[12, 20, 28].map((x) => (
        <circle key={x + 'b'} cx={x} cy="28" r="1.3" stroke="#F97316" strokeWidth="0.8" fill="none" />
      ))}
      <line x1="6" y1="12" x2="6" y2="28" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" />
      <line x1="4" y1="12" x2="8" y2="12" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" />
      <line x1="4" y1="28" x2="8" y2="28" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" />
    </svg>
  )
}

function IconCubierta() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
      <line x1="14" y1="32" x2="14" y2="10" stroke="#1D2939" strokeWidth="1.1" />
      <path d="M14 12 L30 18" stroke="#1D2939" strokeWidth="1.1" />
      <line x1="30" y1="18" x2="30" y2="26" stroke="#F97316" strokeWidth="1" strokeDasharray="1.5 1.5" />
      <path d="M27 26 L33 26 L30 30 Z" stroke="#1D2939" strokeWidth="0.9" fill="rgba(249,115,22,0.08)" />
      <line x1="8" y1="32" x2="20" y2="32" stroke="#1D2939" strokeWidth="1" />
      <line x1="7" y1="30" x2="7" y2="34" stroke="rgba(29,41,57,0.4)" strokeWidth="0.6" />
    </svg>
  )
}

const nodes = [
  {
    id: 1,
    number: '1',
    label: 'DISEÑO Y CONSTRUCCIÓN NAVAL',
    desc: 'Diseño de embarcaciones de carga y pasajeros con ingeniería de alto nivel.',
    position: { top: '18%', left: '18%' },
    tooltipPos: 'bottom',
    Icon: IconDiseno,
    floatDelay: 0,
  },
  {
    id: 2,
    number: '2',
    label: 'MANTENIMIENTO DE MOTORES',
    desc: 'Servicio completo de motores principales y auxiliares en sala de máquinas.',
    position: { top: '62%', left: '28%' },
    tooltipPos: 'right',
    Icon: IconMotores,
    floatDelay: 0.6,
  },
  {
    id: 3,
    number: '3',
    label: 'REPARACIONES ESTRUCTURALES',
    desc: 'Reparación y refuerzo de cascos, mamparos y estructuras de acero naval.',
    position: { top: '55%', left: '62%' },
    tooltipPos: 'left',
    Icon: IconEstructural,
    floatDelay: 1.1,
  },
  {
    id: 4,
    number: '4',
    label: 'EQUIPOS DE CUBIERTA Y GRÚAS',
    desc: 'Mantenimiento, reparación e instalación de grúas y equipos de maniobra.',
    position: { top: '12%', left: '50%' },
    tooltipPos: 'bottom',
    Icon: IconCubierta,
    floatDelay: 1.6,
  },
]

const modalData = {
  1: {
    title: 'Diseño y Construcción Naval',
    icon: '⚓',
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
    icon: '⚙️',
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
    icon: '🔧',
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
    icon: '🏗️',
    items: [
      'Mantenimiento de grúas de cubierta',
      'Sistemas de anclas y molinetes',
      'Equipos de salvamento y seguridad',
      'Escotillas y tapas de bodega',
      'Sistemas de amarre y remolque',
    ],
  },
}

// ─────────────────────────────────────────────
// Modal montado via portal en document.body
// Se mantiene fuera del árbol del hero para
// garantizar z-index y visibilidad correctos.
// ─────────────────────────────────────────────
function NodeModal({ modalNode, onClose }) {
  const data = modalData[modalNode]
  if (!data) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ zIndex: 999999 }}
      >
        <motion.div
          key={`modal-${modalNode}`}
          className="modal-box"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cerrar X */}
          <button
            className="modal-close"
            onClick={onClose}
            type="button"
          >
            <X size={16} />
          </button>

          {/* Icono */}
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>
            {data.icon}
          </div>

          {/* Título */}
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#1D2939', marginBottom: '8px' }}>
            {data.title}
          </h3>

          {/* Descripción */}
          <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '20px' }}>
            Servicios especializados disponibles para su embarcación.
          </p>

          {/* Lista */}
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 }}>
            {data.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}
              >
                <span
                  style={{
                    width: '20px', height: '20px', minWidth: '20px',
                    background: 'rgba(249,115,22,0.12)',
                    border: '1px solid rgba(249,115,22,0.25)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', color: '#F97316', fontWeight: 700,
                  }}
                >
                  {i + 1}
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {/* Botones */}
          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <a
              href="#contacto"
              className="btn-ver-servicios"
              style={{ marginTop: 0, flex: 1, justifyContent: 'center' }}
              onClick={onClose}
            >
              Solicitar este servicio
              <ArrowRight size={16} />
            </a>

            <button
              type="button"
              onClick={onClose}
              style={{
                padding: '0 16px', borderRadius: '8px',
                border: '1px solid rgba(29,41,57,0.12)',
                background: 'white', color: '#6b7280',
                cursor: 'pointer', fontSize: '13px',
              }}
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

export default function ServiceNodes() {
  const [activeNode, setActiveNode] = useState(null)
  const [modalNode, setModalNode] = useState(null)

  return (
    <>
      {nodes.map((node) => {
        const isActive = activeNode === node.id
        const Icon = node.Icon
        return (
          <motion.div
            key={node.id}
            style={{ position: 'absolute', top: node.position.top, left: node.position.left, zIndex: 11, cursor: 'pointer' }}
            onMouseEnter={() => setActiveNode(node.id)}
            onMouseLeave={() => setActiveNode(null)}
            onClick={() => setModalNode(node.id)}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: node.floatDelay }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                ...(node.tooltipPos === 'right'
                  ? { flexDirection: 'row' }
                  : node.tooltipPos === 'left'
                    ? { flexDirection: 'row-reverse' }
                    : { flexDirection: 'column', alignItems: 'center' }),
              }}
            >
              {/* Ícono boceto */}
              <motion.div
                animate={isActive ? { scale: 1.12 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                style={{
                  width: '46px', height: '46px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.82)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(29,41,57,0.16)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                  boxShadow: isActive ? '0 4px 16px rgba(249,115,22,0.25)' : '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.25s ease',
                  flexShrink: 0,
                }}
              >
                <Icon />
                {/* numerito de referencia */}
                <span style={{
                  position: 'absolute', top: '-6px', right: '-6px',
                  width: '16px', height: '16px', borderRadius: '50%',
                  background: '#F97316', color: 'white',
                  fontSize: '9px', fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid white',
                }}>
                  {node.number}
                </span>
              </motion.div>

              {/* Etiqueta */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + node.id * 0.15 }}
                style={{
                  whiteSpace: 'nowrap',
                  textAlign: node.tooltipPos === 'bottom' ? 'center' : 'left',
                }}
              >
                <div style={{
                  fontSize: '9.5px', fontWeight: 700, color: '#1D2939',
                  textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1.25,
                  textShadow: '0 1px 3px rgba(255,255,255,0.9), 0 1px 6px rgba(255,255,255,0.7)',
                }}>
                  {node.label}
                </div>
                <span style={{
                  fontSize: '10px', fontStyle: 'italic', fontFamily: 'cursive, sans-serif',
                  color: '#F97316', display: 'inline-flex', alignItems: 'center', gap: '3px',
                }}>
                  Ver más <ArrowRight size={9} />
                </span>
              </motion.div>
            </div>
          </motion.div>
        )
      })}

      {/* Portal Modal — siempre montado en document.body para z-index correcto */}
      {modalNode !== null && (
        <NodeModal
          modalNode={modalNode}
          onClose={() => setModalNode(null)}
        />
      )}
    </>
  )
}