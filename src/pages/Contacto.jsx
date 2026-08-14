import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, Wrench,
  ShieldCheck, UserCheck, Cpu, Award, Upload, Calendar,
} from 'lucide-react'
import SectionBadge from '../components/SectionBadge'

const interestServices = [
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
]

const contactInfo = [
  { icon: MapPin, label: 'UBICACIÓN', lines: ['Puerto La Cruz, Anzoátegui,', 'Venezuela'] },
  { icon: Phone, label: 'TELÉFONO', lines: ['+1 (809) 123-4567'] },
  { icon: Mail, label: 'CORREO ELECTRÓNICO', lines: ['info@grupoastikmar.com'] },
  { icon: Clock, label: 'HORARIO DE ATENCIÓN', lines: ['Lunes a Viernes', '8:00 a.m. - 5:00 p.m.'] },
]

const whyUs = [
  { icon: ShieldCheck, title: 'Experiencia comprobada', desc: 'Más de 20 años ofreciendo soluciones marítimas integrales.' },
  { icon: UserCheck, title: 'Equipo especializado', desc: 'Profesionales altamente capacitados y comprometidos con cada proyecto.' },
  { icon: Cpu, title: 'Tecnología avanzada', desc: 'Contamos con equipos y herramientas de última generación.' },
  { icon: Award, title: 'Compromiso total', desc: 'Cumplimos con los más altos estándares de seguridad, calidad y puntualidad.' },
]

// Título de sección estilo "plano" alineado a la izquierda con línea divisoria a la derecha
function SectionTitleLeft({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
      <span style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#334e68', whiteSpace: 'nowrap' }}>
        {children}
      </span>
      <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)' }} />
    </div>
  )
}

// Label + input reutilizando las clases .calc-label / .calc-input ya definidas en el CSS global,
// para que el formulario use exactamente el mismo lenguaje visual que el resto del sitio.
function Field({ label, required, icon: Icon, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="calc-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {Icon && <Icon size={13} className="text-orange-500" />}
        {label}{required && ' *'}
      </label>
      {children}
    </div>
  )
}

export default function Contacto({ contactService, setContactService, setCurrentPage }) {
  const [nombre, setNombre] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [servicio, setServicio] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [fecha, setFecha] = useState('')
  const [archivo, setArchivo] = useState(null)
  const [aceptaPolitica, setAceptaPolitica] = useState(false)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (contactService) {
      setServicio(contactService)
    }
  }, [contactService])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !correo || !telefono || !servicio || !mensaje || !aceptaPolitica) {
      setStatus({ type: 'error', text: 'Por favor complete todos los campos obligatorios (*) y acepte la Política de Privacidad.' })
      return
    }
    setStatus({ type: 'sending', text: 'Enviando requerimiento técnico...' })

    setTimeout(() => {
      setStatus({ type: 'success', text: '¡Requerimiento enviado con éxito! Un ingeniero de soporte se contactará a la brevedad.' })
      setNombre('')
      setEmpresa('')
      setTelefono('')
      setCorreo('')
      setServicio('')
      setMensaje('')
      setFecha('')
      setArchivo(null)
      setAceptaPolitica(false)
      if (setContactService) {
        setContactService('')
      }
    }, 1800)
  }

  return (
    <div className="blueprint-bg min-h-screen pb-16" style={{ position: 'relative' }}>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* paddingTop unificado para alineación visual exacta */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '108px', position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage?.('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Solicitar servicio</span>
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(420px, 1.2fr) 1fr', gap: '48px', alignItems: 'start' }}>

          {/* ══════════ COLUMNA IZQUIERDA ══════════ */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div style={{ marginBottom: '12px' }}>
                <SectionBadge variant="light">Atención & Asesoría</SectionBadge>
              </div>
              <h1 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 900, color: '#1D2939', lineHeight: 1.1, letterSpacing: '-0.01em', fontFamily: 'var(--font-heading)' }}>
                Solicita nuestro servicio
              </h1>
              <p style={{ fontSize: '19px', fontWeight: 600, color: '#334e68', marginTop: '6px' }}>
                Estamos listos para <span style={{ color: '#F97316', fontStyle: 'italic' }}>ayudarte</span>
              </p>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '14px', maxWidth: '460px' }}>
                Cuéntanos sobre tu proyecto o requerimiento y nuestro equipo se pondrá en contacto contigo para ofrecerte la mejor solución marítima integral.
              </p>
            </motion.div>

            <div style={{ height: '1px', background: 'rgba(29,41,57,0.1)', margin: '28px 0 36px' }} />

            {/* Información de contacto + ¿Por qué elegirnos? */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '36px' }}>
              <div>
                <SectionBadge variant="light" withDivider>Información de Contacto</SectionBadge>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {contactInfo.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                        border: '1.5px solid rgba(29,41,57,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <item.icon size={16} className="text-orange-500" />
                      </div>
                      <div>
                        <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.06em', display: 'block' }}>
                          {item.label}
                        </span>
                        {item.lines.map((line, li) => (
                          <span key={li} style={{ fontSize: '13.5px', fontWeight: 700, color: '#1D2939', display: 'block', lineHeight: 1.4 }}>
                            {line}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <SectionBadge variant="light" withDivider>¿Por Qué Elegirnos?</SectionBadge>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {whyUs.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.06 }}
                      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <div style={{
                        width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                        background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <item.icon size={16} className="text-orange-500" />
                      </div>
                      <div>
                        <h5 style={{ fontSize: '13.5px', fontWeight: 700, color: '#1D2939', marginBottom: '3px' }}>{item.title}</h5>
                        <p style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.55 }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Aviso de emergencia — mismo lenguaje visual plano, con acento naranja */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                border: '1px solid rgba(249,115,22,0.25)', borderRadius: '12px',
                background: 'rgba(249,115,22,0.05)', padding: '18px 20px', marginTop: '40px',
              }}
            >
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MessageSquare size={17} color="white" />
              </div>
              <div>
                <h4 style={{ fontSize: '13.5px', fontWeight: 800, color: '#1D2939' }}>¿Emergencia en alta mar?</h4>
                <p style={{ fontSize: '12.5px', color: '#4b5563', lineHeight: 1.6, marginTop: '4px' }}>
                  Nuestro equipo de respuesta rápida y salvamento está operativo las 24 horas del día. Llame directamente a soporte.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ══════════ COLUMNA DERECHA: FORMULARIO (mismo estilo plano del resto del sitio) ══════════ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ border: '1px solid rgba(29,41,57,0.08)', borderRadius: '16px', background: 'white', padding: '32px' }}
          >
            <SectionTitleLeft>Envíanos tu Solicitud</SectionTitleLeft>
            <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '-8px', marginBottom: '24px' }}>
              Completa el formulario y nos pondremos en contacto contigo a la brevedad.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Field label="Nombre Completo" required icon={User}>
                  <input className="calc-input" placeholder="Escribe tu nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} required />
                </Field>
                <Field label="Empresa" icon={Building}>
                  <input className="calc-input" placeholder="Nombre de la empresa" value={empresa} onChange={e => setEmpresa(e.target.value)} />
                </Field>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Field label="Correo Electrónico" required icon={Mail}>
                  <input className="calc-input" type="email" placeholder="ejemplo@empresa.com" value={correo} onChange={e => setCorreo(e.target.value)} required />
                </Field>
                <Field label="Teléfono" required icon={Phone}>
                  <input className="calc-input" type="tel" placeholder="+1 809 123-4567" value={telefono} onChange={e => setTelefono(e.target.value)} required />
                </Field>
              </div>

              <Field label="Asunto" required icon={Wrench}>
                <select className="calc-select" value={servicio} onChange={e => setServicio(e.target.value)} required>
                  <option value="">Selecciona el tipo de servicio</option>
                  {interestServices.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </Field>

              <Field label="Descripción del Servicio o Proyecto" required>
                <textarea
                  className="calc-input"
                  style={{ minHeight: '110px', resize: 'vertical' }}
                  placeholder="Cuéntanos sobre tu proyecto, requerimientos, alcance, fecha estimada, etc."
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  required
                />
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <Field label="Adjuntar Archivos (opcional)">
                  <label
                    htmlFor="contacto-archivo"
                    style={{
                      border: '1.5px dashed rgba(29,41,57,0.22)', borderRadius: '10px',
                      padding: '14px 12px', textAlign: 'center', cursor: 'pointer',
                      background: 'rgba(29,41,57,0.015)', display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: '4px', minHeight: '78px', justifyContent: 'center',
                    }}
                  >
                    <Upload size={16} className="text-orange-500" />
                    <span style={{ fontSize: '11.5px', fontWeight: 600, color: '#334e68' }}>
                      {archivo ? archivo.name : 'Arrastra tus archivos o selecciona'}
                    </span>
                    <span style={{ fontSize: '10px', color: '#9ca3af' }}>PDF, DOC, JPG, PNG (Máx. 10MB)</span>
                    <input id="contacto-archivo" type="file" style={{ display: 'none' }} onChange={e => setArchivo(e.target.files?.[0] || null)} />
                  </label>
                </Field>

                <Field label="¿Cuándo te gustaría iniciar?" icon={Calendar}>
                  <input className="calc-input" type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
                </Field>
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px', color: '#4b5563', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={aceptaPolitica}
                  onChange={e => setAceptaPolitica(e.target.checked)}
                  style={{ marginTop: '3px' }}
                />
                Acepto la Política de Privacidad y los Términos y Condiciones.
              </label>

              {status && (
                <div style={{
                  padding: '14px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 600,
                  border: '1px solid',
                  ...(status.type === 'success'
                    ? { background: 'rgba(16,185,129,0.08)', color: '#047857', borderColor: 'rgba(16,185,129,0.25)' }
                    : status.type === 'sending'
                      ? { background: 'rgba(59,130,246,0.08)', color: '#1d4ed8', borderColor: 'rgba(59,130,246,0.25)' }
                      : { background: 'rgba(239,68,68,0.08)', color: '#b91c1c', borderColor: 'rgba(239,68,68,0.25)' }),
                }}>
                  {status.text}
                </div>
              )}

              <button type="submit" className="btn-calc" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Send size={16} />
                Enviar solicitud
              </button>

              <p style={{ fontSize: '11.5px', color: '#9ca3af' }}>* Campos obligatorios</p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}