import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, RefreshCw, BarChart3, Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Info } from 'lucide-react'
import { useAdminData } from '../hooks/useSiteData'
import { isSupabaseConfigured } from '../config/supabase'

const statsLabels = {
  experience: 'Experiencia',
  projects: 'Proyectos',
  team: 'Equipo',
  vessels: 'Embarcaciones',
  commitment: 'Compromiso',
}

export default function AdminPage({ setCurrentPage }) {
  const { stats, contactRaw, loading, saving, message, saveStats, saveContact } = useAdminData()
  const [editStats, setEditStats] = useState({})
  const [editContact, setEditContact] = useState({})
  const [activeTab, setActiveTab] = useState('stats')

  useEffect(() => {
    setEditStats({ ...stats })
  }, [stats])

  useEffect(() => {
    setEditContact({ ...contactRaw })
  }, [contactRaw])

  const handleStatsChange = (key, field, value) => {
    setEditStats(prev => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }))
  }

  const handleContactChange = (field, value) => {
    setEditContact(prev => ({ ...prev, [field]: value }))
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    borderRadius: '10px',
    border: '1.5px solid rgba(29,41,57,0.15)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    background: 'white',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontSize: '12px',
    fontWeight: 700,
    color: '#334e68',
    letterSpacing: '0.04em',
    marginBottom: '4px',
    display: 'block',
  }

  if (loading) {
    return (
      <div className="blueprint-bg min-h-screen flex items-center justify-center" style={{ paddingTop: '110px' }}>
        <p style={{ color: '#6b7280', fontSize: '16px' }}>Cargando panel de administración...</p>
      </div>
    )
  }

  return (
    <div className="blueprint-bg min-h-screen pb-16" style={{ position: 'relative', paddingTop: '110px' }}>
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="container-astikmar" style={{ paddingLeft: 'clamp(20px, 4vw, 52px)', paddingRight: 'clamp(20px, 4vw, 52px)', paddingTop: '20px', position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button onClick={() => setCurrentPage?.('inicio')} style={{ background: 'none', border: 0, cursor: 'pointer', color: '#9ca3af', fontSize: '13px', padding: 0 }}>Inicio</button>
          <span>›</span>
          <span style={{ color: '#F97316', fontWeight: 600 }}>Administración</span>
        </p>

        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, color: '#1D2939', fontFamily: 'var(--font-heading)', marginBottom: '8px' }}>
            Panel de <span style={{ color: '#F97316', fontStyle: 'italic' }}>Administración</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
            Gestiona las métricas del sitio y la información de contacto.
          </p>
        </motion.div>


        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '28px' }}>
          {[
            { key: 'stats', label: 'Métricas', icon: <BarChart3 size={16} /> },
            { key: 'contact', label: 'Contacto', icon: <Phone size={16} /> },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '10px 20px', borderRadius: '10px', fontSize: '14px', fontWeight: 700,
                border: activeTab === tab.key ? '2px solid #F97316' : '1.5px solid rgba(29,41,57,0.12)',
                background: activeTab === tab.key ? 'rgba(249,115,22,0.08)' : 'white',
                color: activeTab === tab.key ? '#F97316' : '#334e68',
                cursor: 'pointer',
              }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              padding: '12px 16px', borderRadius: '10px', marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 600,
              border: '1px solid',
              ...(message.type === 'success'
                ? { background: 'rgba(16,185,129,0.08)', color: '#047857', borderColor: 'rgba(16,185,129,0.25)' }
                : message.type === 'error'
                  ? { background: 'rgba(239,68,68,0.08)', color: '#b91c1c', borderColor: 'rgba(239,68,68,0.25)' }
                  : { background: 'rgba(59,130,246,0.08)', color: '#1d4ed8', borderColor: 'rgba(59,130,246,0.25)' }),
            }}
          >
            {message.text}
          </motion.div>
        )}

        {/* ═══ STATS TAB ═══ */}
        {activeTab === 'stats' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: 'white', borderRadius: '16px', padding: 'clamp(20px, 4vw, 32px)',
              border: '1px solid rgba(29,41,57,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <BarChart3 size={20} className="text-orange-500" />
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#1D2939' }}>Métricas del Sitio</h2>
            </div>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>
              Estos valores se muestran en la sección de proyectos y capacidad técnica.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              {Object.entries(editStats).map(([key, val]) => (
                <div key={key} style={{ padding: '16px', borderRadius: '12px', border: '1px solid rgba(29,41,57,0.08)', background: 'rgba(29,41,57,0.015)' }}>
                  <label style={labelStyle}>{statsLabels[key] || key}</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '10px', marginTop: '8px' }}>
                    <div>
                      <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 600 }}>VALOR</span>
                      <input
                        style={inputStyle}
                        value={val.value}
                        onChange={e => handleStatsChange(key, 'value', e.target.value)}
                        placeholder="47+"
                      />
                    </div>
                    <div>
                      <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: 600 }}>ETIQUETA</span>
                      <input
                        style={inputStyle}
                        value={val.label}
                        onChange={e => handleStatsChange(key, 'label', e.target.value)}
                        placeholder="Proyectos completados"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => saveStats(editStats)}
                disabled={saving}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #F97316, #ea580c)',
                  color: 'white', fontSize: '14px', fontWeight: 700,
                  border: 'none', cursor: saving ? 'not-allowed' : 'pointer',
                  opacity: saving ? 0.6 : 1,
                  boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
                }}
              >
                {saving ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
                {saving ? 'Guardando...' : 'Guardar métricas'}
              </button>
            </div>
          </motion.div>
        )}

        {/* ═══ CONTACT TAB ═══ */}
        {activeTab === 'contact' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              background: 'white', borderRadius: '16px', padding: 'clamp(20px, 4vw, 32px)',
              border: '1px solid rgba(29,41,57,0.08)', boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Phone size={20} className="text-orange-500" />
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#1D2939' }}>Información de Contacto</h2>
            </div>
            <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>
              Datos que aparecen en el footer y la página de contacto.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
              <div>
                <label style={labelStyle}><Phone size={12} style={{ display: 'inline', marginRight: '4px' }} /> Teléfono</label>
                <input style={inputStyle} value={editContact.phone || ''} onChange={e => handleContactChange('phone', e.target.value)} placeholder="+1 (849) 513-9090" />
              </div>
              <div>
                <label style={labelStyle}><Phone size={12} style={{ display: 'inline', marginRight: '4px' }} /> Teléfono (sin formato)</label>
                <input style={inputStyle} value={editContact.phone_raw || ''} onChange={e => handleContactChange('phone_raw', e.target.value)} placeholder="+18495139090" />
              </div>
              <div>
                <label style={labelStyle}><Mail size={12} style={{ display: 'inline', marginRight: '4px' }} /> Correo Electrónico</label>
                <input style={inputStyle} type="email" value={editContact.email || ''} onChange={e => handleContactChange('email', e.target.value)} placeholder="carlos.m@grupoastikmar.com" />
              </div>
              <div>
                <label style={labelStyle}><MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} /> Dirección</label>
                <input style={inputStyle} value={editContact.address_street || ''} onChange={e => handleContactChange('address_street', e.target.value)} placeholder="Av. López de Vega No. 13..." />
              </div>
              <div>
                <label style={labelStyle}><MapPin size={12} style={{ display: 'inline', marginRight: '4px' }} /> Ciudad / País</label>
                <input style={inputStyle} value={editContact.address_city || ''} onChange={e => handleContactChange('address_city', e.target.value)} placeholder="Santo Domingo, República Dominicana" />
              </div>
              <div>
                <label style={labelStyle}><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} /> Días de atención</label>
                <input style={inputStyle} value={editContact.hours_days || ''} onChange={e => handleContactChange('hours_days', e.target.value)} placeholder="Lunes a Viernes" />
              </div>
              <div>
                <label style={labelStyle}><Clock size={12} style={{ display: 'inline', marginRight: '4px' }} /> Horario</label>
                <input style={inputStyle} value={editContact.hours_time || ''} onChange={e => handleContactChange('hours_time', e.target.value)} placeholder="8:00 a.m. - 5:00 p.m." />
              </div>
              <div>
                <label style={labelStyle}>WhatsApp URL</label>
                <input style={inputStyle} value={editContact.whatsapp || ''} onChange={e => handleContactChange('whatsapp', e.target.value)} placeholder="https://wa.me/18495139090" />
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => saveContact(editContact)}
                disabled={saving}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '12px 28px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #F97316, #ea580c)',
                  color: 'white', fontSize: '14px', fontWeight: 700,
                  border: 'none', cursor: saving ? 'not-allowed' : 'pointer',
                  opacity: saving ? 0.6 : 1,
                  boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
                }}
              >
                {saving ? <RefreshCw size={16} className="animate-spin" /> : <Save size={16} />}
                {saving ? 'Guardando...' : 'Guardar contacto'}
              </button>
            </div>
          </motion.div>
        )}


      </div>
    </div>
  )
}
