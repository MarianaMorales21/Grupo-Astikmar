import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageSquare, Clipboard, User, Building, Wrench } from 'lucide-react'
import { Button, Card, Badge, Input, Textarea } from '../components/ui'

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

export default function Contacto({ contactService, setContactService }) {
  const [nombre, setNombre] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [telefono, setTelefono] = useState('')
  const [correo, setCorreo] = useState('')
  const [servicio, setServicio] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (contactService) {
      setServicio(contactService)
    }
  }, [contactService])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombre || !correo || !servicio || !mensaje) {
      setStatus({ type: 'error', text: 'Por favor complete todos los campos requeridos (*).' })
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
      if (setContactService) {
        setContactService('')
      }
    }, 1800)
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container-astikmar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="orange" dot className="mb-3">
            Módulo de Cotización & Asistencia
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1D2939] tracking-tight">
            Contacto & Atención Técnica
          </h1>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Estamos listos para atender su próximo proyecto. Escríbanos y recibirá soporte técnico especializado inmediato.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card hover={false} className="p-6 sm:p-8 bg-white border-slate-200">
              <h3 className="text-2xl font-bold text-[#1D2939] mb-1">
                Formulario de Requerimiento
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Complete el formulario a continuación para recibir una propuesta formal.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Nombre Completo *"
                    placeholder="Ej: Ing. Carlos Pérez"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                    icon={User}
                    required
                  />
                  <Input
                    label="Nombre de la Empresa"
                    placeholder="Ej: Naviera del Caribe S.A."
                    value={empresa}
                    onChange={e => setEmpresa(e.target.value)}
                    icon={Building}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Teléfono / WhatsApp"
                    type="tel"
                    placeholder="Ej: +1 809 123 4567"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                    icon={Phone}
                  />
                  <Input
                    label="Correo Electrónico *"
                    type="email"
                    placeholder="Ej: cperez@empresa.com"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
                    icon={Mail}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-orange-500" /> Servicio de Interés *
                  </label>
                  <select
                    className="w-full h-11 px-3.5 text-sm bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
                    value={servicio}
                    onChange={e => setServicio(e.target.value)}
                    required
                  >
                    <option value="">Seleccione el servicio que requiere...</option>
                    {interestServices.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <Textarea
                  label="Mensaje o Detalle Técnico *"
                  placeholder="Describa el requerimiento, dimensiones de la embarcación, ubicación actual, fecha esperada del servicio..."
                  value={mensaje}
                  onChange={e => setMensaje(e.target.value)}
                  required
                />

                {status && (
                  <div className={`p-4 rounded-xl text-sm font-semibold border ${
                    status.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                    status.type === 'sending' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                    'bg-red-50 text-red-800 border-red-200'
                  }`}>
                    {status.text}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={Send}
                  iconPosition="left"
                  className="w-full mt-2"
                >
                  Enviar requerimiento técnico
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card hover={false} className="p-6 bg-white border-slate-200 space-y-5">
                <h3 className="text-xl font-bold text-[#1D2939] pb-3 border-b border-slate-100">
                  Datos Corporativos
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <Clipboard className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">RAZÓN SOCIAL</span>
                      <span className="text-sm font-bold text-[#1D2939]">Grupo Astikmar S.R.L.</span>
                      <span className="text-xs text-slate-500 block">RNC: 1-33-50750-1</span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">DIRECCIÓN PRINCIPAL</span>
                      <span className="text-sm font-bold text-[#1D2939] leading-snug block">
                        Av. López de Vega No. 13, Plaza Progreso, Piso 8, Naco.
                      </span>
                      <span className="text-xs text-slate-500 block">Santo Domingo, República Dominicana.</span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">TELÉFONOS / WHATSAPP</span>
                      <span className="text-sm font-bold text-[#1D2939] block">+1 849 513 9090</span>
                      <span className="text-sm font-bold text-[#1D2939] block">+57 312 773 9088</span>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">CORREOS DE ATENCIÓN</span>
                      <a href="mailto:carlos.m@grupoastikmar.com" className="text-sm font-bold text-[#1D2939] hover:text-orange-500 block transition-colors">
                        carlos.m@grupoastikmar.com
                      </a>
                      <a href="mailto:casiquejoseg@grupoastikmar.com" className="text-sm font-bold text-[#1D2939] hover:text-orange-500 block transition-colors">
                        casiquejoseg@grupoastikmar.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Emergency card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-5 bg-orange-500/10 border-orange-500/30 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D2939]">¿Emergencia en alta mar?</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">
                    Nuestro equipo de respuesta rápida y salvamento está operativo las 24 horas del día. Llame directamente a soporte.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
