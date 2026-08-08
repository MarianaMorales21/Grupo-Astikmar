import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, CheckCircle, Shield } from 'lucide-react'

const certificates = [
  {
    title: 'Licencia Operativa Portuaria APORDOM',
    authority: 'Autoridad Portuaria Dominicana',
    id: 'AP-OP-2024-893',
    desc: 'Permiso habilitante para realizar reparaciones navales, soldadura estructural y servicios a bordo en muelles comerciales dominicanos.',
    fileSize: '2.4 MB',
    type: 'PDF Licencia',
  },
  {
    title: 'Certificación de Soldadores Homologados AWS',
    authority: 'American Welding Society',
    id: 'AWS-D1.1-2025',
    desc: 'Homologación de procedimientos y soldadores especializados para corte y unión de planchas de acero naval clase A.',
    fileSize: '4.1 MB',
    type: 'PDF Dossier',
  },
  {
    title: 'Permiso Ambiental para Sandblasting y Pintura',
    authority: 'Ministerio de Medio Ambiente y Recursos Naturales R.D.',
    id: 'MA-PR-2024-1102',
    desc: 'Licencia especial para la contención de residuos y aplicación regulada de pinturas marinas y sandblasting en puerto.',
    fileSize: '1.8 MB',
    type: 'PDF Permiso',
  },
  {
    title: 'Certificación de Equipos de Ultrasonido',
    authority: 'Servicios de Calibración Industrial R.D.',
    id: 'CAL-US-2025-055',
    desc: 'Certificado de calibración y exactitud de equipos Olympus utilizados para medición de espesores de láminas de casco.',
    fileSize: '1.2 MB',
    type: 'PDF Certificado',
  },
]

export default function Certificaciones({ isSection = false }) {
  const [downloading, setDownloading] = useState(null)

  const handleDownload = (idx) => {
    setDownloading(idx)
    setTimeout(() => {
      setDownloading(null)
      alert('Descarga completada (archivo simulado para demostración).')
    }, 1800)
  }

  const renderContent = () => (
    <div className="container-astikmar" style={{ paddingLeft: isSection ? '0px' : '52px', marginTop: isSection ? '0px' : '30px' }}>
      {/* Title */}
      <div style={{ textAlign: 'center', marginBottom: '44px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '20px', padding: '6px 16px', marginBottom: '16px' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#F97316', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Acreditación
          </span>
        </div>
        <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#1D2939' }}>
          Certificaciones y Seguridad
        </h2>
        <p style={{ fontSize: '15px', color: '#6b7280', maxWidth: '600px', margin: '0 auto', marginTop: '6px' }}>
          Licencias, permisos portuarios y certificaciones habilitantes para operar en cumplimiento con armadores y aseguradoras.
        </p>
      </div>

      {/* Security pledge */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '32px', marginBottom: '40px' }}>
        <motion.div
          className="service-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ padding: '28px', background: '#1D2939', color: 'white', border: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <Shield size={44} color="#F97316" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>Compromiso de Seguridad</h3>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
            Priorizamos la seguridad operacional y la protección ambiental en cada maniobra portuaria y de alta mar, cumpliendo estrictamente con convenios internacionales MARPOL y SOLAS.
          </p>
        </motion.div>

        <motion.div
          className="service-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1D2939', marginBottom: '12px' }}>Dossier de Seguridad Corporativo</h3>
          <p style={{ fontSize: '13.5px', color: '#4b5563', lineHeight: 1.7, marginBottom: '16px' }}>
            Ponemos a disposición de armadores, agentes aduanales, navieras y aseguradoras internacionales nuestro dossier de permisos vigentes emitidos por las autoridades de República Dominicana y auditores de clase.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1D2939', fontWeight: 600 }}>
              <CheckCircle size={16} color="#F97316" /> Permisos APORDOM al día
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: '#1D2939', fontWeight: 600 }}>
              <CheckCircle size={16} color="#F97316" /> Soldadores AWS homologados
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certs List */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.id}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}
          >
            <div style={{
              width: '46px', height: '46px', borderRadius: '10px',
              background: 'rgba(29,41,57,0.04)', border: '1px solid rgba(29,41,57,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
            }}>
              <FileText size={22} color="#1D2939" />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                <h3 className="card-title" style={{ fontSize: '15.5px', marginBottom: '2px' }}>{cert.title}</h3>
                <span style={{ fontSize: '10px', color: '#9ca3af', fontFamily: 'Rajdhani', fontWeight: 600 }}>ID: {cert.id}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#F97316', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                {cert.authority}
              </div>
              <p className="card-desc" style={{ fontSize: '12.5px', color: '#6b7280', lineHeight: 1.5, marginBottom: '14px' }}>
                {cert.desc}
              </p>

              {/* Download button */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(29,41,57,0.06)', paddingTop: '12px' }}>
                <span style={{ fontSize: '11.5px', color: '#9ca3af', fontFamily: 'Rajdhani' }}>
                  {cert.type} • {cert.fileSize}
                </span>
                <button
                  onClick={() => handleDownload(idx)}
                  disabled={downloading !== null}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    background: downloading === idx ? '#1D2939' : 'linear-gradient(135deg, #F97316, #ea580c)',
                    color: 'white', border: 'none', borderRadius: '6px',
                    padding: '6px 12px', fontSize: '12px', fontWeight: 600,
                    cursor: 'pointer', transition: 'all 0.2s ease',
                  }}
                >
                  <Download size={12} />
                  {downloading === idx ? 'Descargando...' : 'Descargar PDF'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )

  if (isSection) {
    return <section className="services-section" style={{ background: 'transparent', padding: '60px 0 20px' }}>{renderContent()}</section>
  }

  return (
    <div className="blueprint-bg min-h-screen pt-24 pb-16">
      <div className="blueprint-ruler-top">
        {["-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map(m => (
          <span key={m}>{m}</span>
        ))}
      </div>
      {renderContent()}
    </div>
  )
}
