import { Phone, Mail, MapPin } from 'lucide-react'
import WaveTop from './WaveTop'

// Social icons as SVGs
function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}

export default function Footer({ setCurrentPage }) {
  const handleNavClick = (id) => {
    if (setCurrentPage) {
      setCurrentPage(id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div style={{ position: 'relative', zIndex: 10, marginTop: '-60px' }}>
      <WaveTop fill="#1D2939" bgColor="transparent" height={115} style={{ display: 'block' }} />
      <footer className="footer" id="contacto" style={{ marginTop: '-2px' }}>




        <div className="container-astikmar">
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '40px', paddingBottom: '48px' }}>

            {/* Brand column */}
            <div>
              <button
                onClick={() => handleNavClick('inicio')}
                className="nav-logo footer-logo bg-transparent border-0 text-left cursor-pointer"
                style={{ marginBottom: '16px', display: 'inline-flex' }}
              >
                <div className="nav-logo-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="rgba(255,255,255,0.1)"/>
                    <polygon points="20,6 34,30 6,30" fill="none" stroke="#F97316" strokeWidth="2.5"/>
                    <circle cx="20" cy="20" r="4" fill="#F97316"/>
                    <line x1="20" y1="6" x2="20" y2="16" stroke="#F97316" strokeWidth="1.5"/>
                    <circle cx="20" cy="6" r="2" fill="white"/>
                    <circle cx="6" cy="30" r="2" fill="white"/>
                    <circle cx="34" cy="30" r="2" fill="white"/>
                  </svg>
                </div>
                <div className="nav-logo-text">
                  <span className="brand-name" style={{ color: 'white' }}>GRUPO</span>
                  <span className="brand-name" style={{ marginTop: '-4px', color: '#F97316' }}>ASTIKMAR</span>
                </div>
              </button>
              <p className="footer-text" style={{ marginTop: '12px', maxWidth: '260px' }}>
                Empresa dominicana especializada en servicios marítimos integrales con más de 20 años de experiencia en el Caribe.
              </p>
              <p className="footer-text" style={{ marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                © 2025 Grupo Astikmar. Todos los derechos reservados.
              </p>
            </div>

            {/* Contact */}
            <div>
              <div className="footer-heading">Contáctanos</div>
              <a href="tel:+18495139090" className="footer-link">
                <Phone size={14} />
                +1 (849) 513-9090
              </a>
              <a href="mailto:carlos.m@grupoastikmar.com" className="footer-link">
                <Mail size={14} />
                carlos.m@grupoastikmar.com
              </a>
            </div>

            {/* Location */}
            <div>
              <div className="footer-heading">Ubicación</div>
              <div className="footer-link" style={{ cursor: 'default' }}>
                <MapPin size={14} />
                <div>
                  <div>Santo Domingo,</div>
                  <div>República Dominicana</div>
                </div>
              </div>
              <div className="footer-link" style={{ cursor: 'default', marginTop: '6px' }}>
                <MapPin size={14} style={{ opacity: 0.5 }} />
                <div style={{ opacity: 0.6 }}>
                  <div>Puerto La Cruz,</div>
                  <div>Anzoátegui, Venezuela</div>
                </div>
              </div>
            </div>

            {/* Social + Legal */}
            <div>
              <div className="footer-heading">Síguenos</div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                <a href="#" className="social-btn" aria-label="LinkedIn"><LinkedInIcon /></a>
                <a href="#" className="social-btn" aria-label="Instagram"><InstagramIcon /></a>
                <a href="#" className="social-btn" aria-label="YouTube"><YouTubeIcon /></a>
              </div>

              <div className="footer-heading" style={{ marginTop: '16px' }}>Legal</div>
              <button onClick={() => handleNavClick('contacto')} className="footer-link bg-transparent border-0 cursor-pointer" style={{ fontSize: '12px', padding: 0 }}>Política de Privacidad</button>
              <button onClick={() => handleNavClick('contacto')} className="footer-link bg-transparent border-0 cursor-pointer" style={{ fontSize: '12px', padding: 0, marginTop: '4px' }}>Términos y Condiciones</button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <div className="container-astikmar">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
                © 2025 Grupo Astikmar. Todos los derechos reservados.
              </span>
              <div style={{ display: 'flex', gap: '16px' }}>
                <button onClick={() => handleNavClick('contacto')} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', background: 'transparent', border: 0, cursor: 'pointer' }}>Política de Privacidad</button>
                <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                <button onClick={() => handleNavClick('contacto')} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', background: 'transparent', border: 0, cursor: 'pointer' }}>Términos y Condiciones</button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/18495139090"
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

