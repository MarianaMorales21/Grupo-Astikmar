import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Phone, Mail, MapPin, Clock, Send, MessageSquare, User, Building, Wrench,
  ShieldCheck, UserCheck, Cpu, Award, Upload, Calendar,
} from 'lucide-react'
import SectionBadge from '../components/SectionBadge'
import SideProfileBlueprint from '../components/Icons/SideprofileBlueprint'
import FrontBlueprint from '../components/Icons/FrontBlueprint'
import ConceptBlueprint from '../components/Icons/ConceptBlueprint'
import MarineEngineBlueprint from '../components/Icons/MarineEngineBlueprint'
import ShipTanksBlueprint from '../components/Icons/ShipTanksBlueprint'
import { contactoContent, contactInfo } from '../data/siteConfig'

const interestServices = contactoContent.interestServices

const contactInfoList = [
  { icon: MapPin, label: 'UBICACIÓN', lines: [contactInfo.address.street, contactInfo.address.city] },
  { icon: Phone, label: 'TELÉFONO', lines: [contactInfo.phone] },
  { icon: Mail, label: 'CORREO ELECTRÓNICO', lines: [contactInfo.email] },
  { icon: Clock, label: 'HORARIO DE ATENCIÓN', lines: [contactInfo.hours.days, contactInfo.hours.time] },
]

const whyUs = contactoContent.whyUs.map(item => {
  const iconMap = { ShieldCheck, UserCheck, Cpu, Award }
  return { ...item, icon: iconMap[item.iconType] || ShieldCheck }
})

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

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!nombre || !correo || !telefono || !servicio || !mensaje || !aceptaPolitica) {
      setStatus({ type: 'error', text: 'Por favor complete todos los campos obligatorios (*) y acepte la Política de Privacidad.' })
      return
    }

    setStatus({ type: 'sending', text: 'Enviando requerimiento técnico...' })

    try {
      const res = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          correo,
          telefono,
          empresa,
          servicio,
          mensaje,
          fecha,
        }),
      })

      const data = await res.json()

      if (data.success) {
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
      } else {
        throw new Error(data.error || 'Error al enviar')
      }
    } catch (err) {
      console.error('Email send error:', err)
      setStatus({ type: 'error', text: 'Error al enviar el formulario. Por favor intente de nuevo o contáctenos directamente.' })
    }
  }

  return (
    <div className="blueprint-bg min-h-screen pb-16" style={{ position: 'relative', paddingTop: '110px' }}>
      {/* Regla pegada al borde superior real de la página */}
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      {/* ── LEFT VERTICAL RULER ── */}
      <div
        className="blueprint-ruler-vertical"
        style={{
          position: 'absolute', left: 0, top: 28, bottom: 0, width: '26px',
          background: 'rgba(29,41,57,0.05)', borderRight: '1px solid rgba(29,41,57,0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
          zIndex: 10, padding: '10px 0',
        }}
      >
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* ── RIGHT VERTICAL RULER ── */}
      <div
        className="blueprint-ruler-vertical"
        style={{
          position: 'absolute', right: 0, top: 28, bottom: 0, width: '26px',
          background: 'rgba(29,41,57,0.05)', borderLeft: '1px solid rgba(29,41,57,0.15)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
          zIndex: 10, padding: '10px 0',
        }}
      >
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>{m}</span>
        ))}
      </div>

      {/* Bocetos de plano decorativos de fondo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -20 }}
        whileInView={{ opacity: 0.4, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease: 'out' }}
        style={{ position: 'absolute', top: '3%', right: '1%', width: 'min(310px, 40vw)', pointerEvents: 'none', zIndex: 0 }}
      >
        <SideProfileBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.4, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, ease: 'out', delay: 0.1 }}
        style={{ position: 'absolute', top: '5%', left: '1%', width: 'min(270px, 35vw)', pointerEvents: 'none', zIndex: 0 }}
      >
        <FrontBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -30 }}
        whileInView={{ opacity: 0.35, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.85, delay: 0.1 }}
        style={{ position: 'absolute', top: '45%', left: '-2%', width: 'min(260px, 35vw)', pointerEvents: 'none', zIndex: 0 }}
      >
        <ConceptBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 30 }}
        whileInView={{ opacity: 0.35, scale: 1, x: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.9, delay: 0.15 }}
        style={{ position: 'absolute', bottom: '4%', right: '-2%', width: 'min(300px, 38vw)', pointerEvents: 'none', zIndex: 0 }}
      >
        <MarineEngineBlueprint />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        whileInView={{ opacity: 0.4, scale: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.95, ease: 'out', delay: 0.25 }}
        style={{ position: 'absolute', bottom: '2%', left: '1%', width: 'min(340px, 40vw)', pointerEvents: 'none', zIndex: 0 }}
      >
        <ShipTanksBlueprint />
      </motion.div>

      {/* Contenedor principal responsive */}
      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '20px', position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage?.('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Solicitar servicio</span>
        </p>

        {/* Layout principal responsive: 2 columnas en desktop, 1 columna fluida en móvil */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: 'clamp(28px, 4vw, 48px)', alignItems: 'start' }}>

          {/* ══════════ COLUMNA IZQUIERDA: INFORMACIÓN Y BENEFICIOS ══════════ */}
          <div>
            <motion.div initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#1D2939', lineHeight: 1.15, letterSpacing: '-0.01em', fontFamily: 'var(--font-heading)' }}>
                {contactoContent.title.line1} <span style={{ color: '#F97316', fontStyle: 'italic' }}>{contactoContent.title.highlight}</span>
              </h1>
              <p style={{ fontSize: 'clamp(16px, 2.5vw, 19px)', fontWeight: 600, color: '#334e68', marginTop: '6px' }}>
                {contactoContent.subtitle}
              </p>
              <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.7, marginTop: '12px', maxWidth: '480px' }}>
                {contactoContent.description}
              </p>
            </motion.div>

            <div style={{ height: '1px', background: 'rgba(29,41,57,0.1)', margin: '22px 0 28px' }} />

            {/* Información de contacto + ¿Por qué elegirnos? */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))', gap: '28px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <h6
                    style={{
                      fontSize: 'clamp(12px, 1.5vw, 14px)',
                      fontWeight: 900,
                      color: '#000000',
                      letterSpacing: '0.08em',
                      lineHeight: 1.2,
                      fontFamily: 'var(--font-heading)',
                      textTransform: 'uppercase',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                  >
                    Información{' '}
                    <span style={{ color: '#F97316', fontStyle: 'italic' }}>
                      de Contacto
                    </span>
                  </h6>
                  <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {contactInfoList.map((item, i) => (
                    <div
                      key={item.label}
                      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '50%', flexShrink: 0,
                        border: '1.5px solid rgba(29,41,57,0.12)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <item.icon size={15} className="text-orange-500" />
                      </div>
                      <div>
                        <span style={{ fontSize: '10px', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.06em', display: 'block' }}>
                          {item.label}
                        </span>
                        {item.lines.map((line, li) => (
                          <span key={li} style={{ fontSize: '13px', fontWeight: 700, color: '#1D2939', display: 'block', lineHeight: 1.35 }}>
                            {line}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <h6
                    style={{
                      fontSize: 'clamp(12px, 1.5vw, 14px)',
                      fontWeight: 900,
                      color: '#000000',
                      letterSpacing: '0.08em',
                      lineHeight: 1.2,
                      fontFamily: 'var(--font-heading)',
                      textTransform: 'uppercase',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                  >
                    ¿Por Qué{' '}
                    <span style={{ color: '#F97316', fontStyle: 'italic' }}>
                      Elegirnos?
                    </span>
                  </h6>
                  <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(29,41,57,0.2), transparent)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {whyUs.map((item, i) => (
                    <div
                      key={item.title}
                      style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                    >
                      <div style={{
                        width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                        background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <item.icon size={15} className="text-orange-500" />
                      </div>
                      <div>
                        <h5 style={{ fontSize: '13px', fontWeight: 700, color: '#1D2939', marginBottom: '2px' }}>{item.title}</h5>
                        <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Aviso de emergencia */}
            <div
              style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                border: '1px solid rgba(249,115,22,0.25)', borderRadius: '12px',
                background: 'rgba(249,115,22,0.05)', padding: '16px 18px', marginTop: '28px',
              }}
            >
              <div style={{
                width: '36px', height: '36px', borderRadius: '10px', flexShrink: 0,
                background: '#F97316', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <MessageSquare size={16} color="white" />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 800, color: '#1D2939' }}>{contactoContent.emergencyTitle}</h4>
                <p style={{ fontSize: '12px', color: '#4b5563', lineHeight: 1.55, marginTop: '3px' }}>
                  {contactoContent.emergencyDesc}
                </p>
              </div>
            </div>
          </div>

          {/* ══════════ COLUMNA DERECHA: FORMULARIO RESPONSIVE ══════════ */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{
              border: '1px solid rgba(29,41,57,0.1)',
              borderRadius: '16px',
              background: 'white',
              padding: 'clamp(20px, 4vw, 32px)',
              boxShadow: '0 8px 30px rgba(0,0,0,0.05)',
              width: '100%',
            }}
          >
            <SectionTitleLeft>{contactoContent.formTitle}</SectionTitleLeft>
            <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '-10px', marginBottom: '20px' }}>
              {contactoContent.formSubtitle}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: '14px' }}>
                <Field label="Nombre Completo" required icon={User}>
                  <input className="calc-input" placeholder="Escribe tu nombre completo" value={nombre} onChange={e => setNombre(e.target.value)} required />
                </Field>
                <Field label="Empresa" icon={Building}>
                  <input className="calc-input" placeholder="Nombre de la empresa" value={empresa} onChange={e => setEmpresa(e.target.value)} />
                </Field>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: '14px' }}>
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
                  style={{ minHeight: '100px', resize: 'vertical' }}
                  placeholder="Cuéntanos sobre tu proyecto, requerimientos, alcance, fecha estimada, etc."
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  required
                />
              </Field>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))', gap: '14px' }}>
                <Field label="Adjuntar Archivos (opcional)">
                  <label
                    htmlFor="contacto-archivo"
                    style={{
                      border: '1.5px dashed rgba(29,41,57,0.22)', borderRadius: '10px',
                      padding: '12px 10px', textAlign: 'center', cursor: 'pointer',
                      background: 'rgba(29,41,57,0.015)', display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: '4px', minHeight: '74px', justifyContent: 'center',
                    }}
                  >
                    <Upload size={15} className="text-orange-500" />
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#334e68' }}>
                      {archivo ? archivo.name : 'Arrastra tus archivos o selecciona'}
                    </span>
                    <span style={{ fontSize: '9.5px', color: '#9ca3af' }}>PDF, DOC, JPG, PNG (Máx. 10MB)</span>
                    <input id="contacto-archivo" type="file" style={{ display: 'none' }} onChange={e => setArchivo(e.target.files?.[0] || null)} />
                  </label>
                </Field>

                <Field label="¿Cuándo te gustaría iniciar?" icon={Calendar}>
                  <input className="calc-input" type="date" value={fecha} onChange={e => setFecha(e.target.value)} />
                </Field>
              </div>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#4b5563', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={aceptaPolitica}
                  onChange={e => setAceptaPolitica(e.target.checked)}
                  style={{ marginTop: '2px' }}
                />
                <span>Acepto la Política de Privacidad y los Términos y Condiciones.</span>
              </label>

              {status && (
                <div style={{
                  padding: '12px 14px', borderRadius: '10px', fontSize: '12.5px', fontWeight: 600,
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

              <button type="submit" className="btn-calc" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
                <Send size={15} />
                Enviar solicitud
              </button>

              <p style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>* Campos obligatorios</p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}