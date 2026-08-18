import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Menu, X } from 'lucide-react'

export const navLinks = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Nosotros', id: 'nosotros' },
  { label: 'Servicios', id: 'servicios' },
  { label: 'Proyectos', id: 'proyectos' },
  { label: 'Capacidad Técnica', id: 'capacidad' },
]

export default function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setCurrentPage(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          padding: scrolled ? '14px 16px' : '20px 16px',
          transition: 'padding 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <nav
          className={`navbar-astikmar ${scrolled ? 'scrolled' : ''}`}
          style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1220px',
            borderRadius: '999px',
            background: scrolled ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(29,41,57,0.08)',
            boxShadow: scrolled
              ? '0 8px 30px rgba(29,41,57,0.12)'
              : '0 4px 18px rgba(29,41,57,0.06)',
            transition: 'background 0.3s ease, box-shadow 0.3s ease, height 0.3s ease',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              alignItems: 'center',
              gap: '24px',
              height: scrolled ? '72px' : '82px',
              paddingLeft: '28px',
              paddingRight: '18px',
              transition: 'height 0.3s ease',
            }}
          >
            {/* Logo */}
            <button onClick={() => handleNavClick('inicio')} className="nav-logo flex-shrink-0 border-0 bg-transparent text-left cursor-pointer focus:outline-none">
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.png"
                  alt="Grupo Astikmar"
                  style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            </button>

            {/* Navigation links — solo en pantallas grandes (lg+); centrados en la columna del medio */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  className={`nav-link bg-transparent border-0 cursor-pointer ${currentPage === link.id ? 'active' : ''}`}
                  style={{ fontSize: '15px', whiteSpace: 'nowrap' }}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
            {/* Placeholder para mantener el grid de 3 columnas cuando los links están ocultos en mobile */}
            <div className="lg:hidden" />

            {/* Right side: CTA (desktop) + hamburguesa (solo mobile/tablet, < lg) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contacto')}
                className="btn-solicitar border-0 hidden lg:inline-flex"
                style={{ fontSize: '14px', padding: '12px 24px', whiteSpace: 'nowrap' }}
              >
                <Send size={15} />
                Solicitar servicio
              </button>
              <button
                className="btn-hamburger flex items-center justify-center lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menú"
              >
                {menuOpen ? <X size={20} color="#1D2939" /> : <Menu size={20} color="#1D2939" />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu — aparece junto con la hamburguesa por debajo de lg */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden"
            style={{
              position: 'fixed',
              top: scrolled ? '92px' : '108px',
              left: '16px',
              right: '16px',
              zIndex: 999,
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(29,41,57,0.08)',
              boxShadow: '0 8px 30px rgba(29,41,57,0.12)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '10px 22px 22px' }}>
              {navLinks.map((link, i) => (
                <button
                  key={link.id}
                  className={`w-full text-left bg-transparent border-0 cursor-pointer ${currentPage === link.id ? 'active' : ''}`}
                  style={{
                    display: 'block',
                    padding: '13px 4px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: currentPage === link.id ? '#F97316' : '#334e68',
                    borderBottom: i < navLinks.length - 1 ? '1px solid rgba(29,41,57,0.07)' : 'none',
                  }}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick('contacto')}
                className="border-0"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                  marginTop: '20px',
                  marginRight: 0,
                  background: 'linear-gradient(135deg, var(--orange-500), var(--orange-600))',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: 600,
                  padding: '14px 20px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(249,115,22,0.3)',
                }}
              >
                <Send size={15} />
                Solicitar servicio
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}