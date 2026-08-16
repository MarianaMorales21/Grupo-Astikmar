import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ServiceNodes from './ServiceNodes'
import FrontBlueprint from './Icons/FrontBlueprint'
import ConceptBlueprint from './Icons/ConceptBlueprint'
import SideProfileBlueprint from './Icons/SideprofileBlueprint'
import ShipTanksBlueprint from './Icons/ShipTanksBlueprint'

/* ============================================================
   Capas de profundidad (z-index) de todo el hero:
   1  → sketches de plano (Concept/Front/SideProfile/ShipTanks):
        van AL FONDO, pegados a las 4 esquinas.
   3  → imagen del barco (cutaway)
   4  → ServiceNodes (los círculos numerados sobre el barco)
   5  → texto, botón, contenedor general
   ============================================================ */

export default function HeroSection({ setCurrentPage }) {
  return (
    <section
      id="hero"
      className="hero-section-full blueprint-bg"
      style={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '72px',
        /* Sin paddingBottom ni marginBottom para que la ola de Servicios se una sin costura */
        paddingBottom: 0,
        marginBottom: 0,
      }}
    >
      {/* ── TOP RULER ── */}
      <div className="blueprint-ruler-top" style={{ top: 0 }}>
        {["-30'", "-20'", "-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map((m, idx) => (
          <span key={idx}>{m}</span>
        ))}
      </div>

      {/* ── LEFT VERTICAL RULER — oculto en móvil vía CSS ── */}
      <div style={{
        position: 'absolute', left: 0, top: '28px', bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderRight: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* ── RIGHT VERTICAL RULER — oculto en móvil vía CSS ── */}
      <div style={{
        position: 'absolute', right: 0, top: '28px', bottom: 0, width: '26px',
        background: 'rgba(29,41,57,0.05)', borderLeft: '1px solid rgba(29,41,57,0.15)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around',
        zIndex: 10, padding: '10px 0',
      }}>
        {["50'", "40'", "30'", "20'", "10'", "0'"].map((m, idx) => (
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* Marcas de esquina / Orillos técnicos */}
      <div style={{ position: 'absolute', top: '36px', left: '36px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace', zIndex: 10 }}>
        + SEC-00 [HERO_INGENIERIA_NAVAL]
      </div>
      <div style={{ position: 'absolute', top: '36px', right: '36px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace', zIndex: 10 }}>
        STAFF-CAD: 1440x900 +
      </div>

      {/* ── CONTENEDOR CENTRADO CON MAX-WIDTH ── */}
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        paddingLeft: 'clamp(16px, 5vw, 80px)',
        paddingRight: 'clamp(16px, 5vw, 80px)',
        paddingTop: 'clamp(60px, 8vw, 96px)',
        paddingBottom: 'clamp(20px, 4vw, 40px)',
        position: 'relative',
        zIndex: 5,
      }}>
        {/*
          Grid: 2 columnas en tablet/desktop, 1 columna en mobile.
          minmax(0,1fr) evita desbordamiento en pantallas < 400px.
        */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(260px, 38%, 420px) 1fr',
          gap: 'clamp(24px, 5vw, 72px)',
          alignItems: 'center',
        }}
          className="hero-grid"
        >
          {/* ══════════════ COL 1: TEXTO ══════════════ */}
          <div style={{ position: 'relative' }}>

            {/* ConceptBlueprint — esquina superior izquierda, AL FONDO */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '-15%',
                left: '-58%',
                width: '230px',
                height: '150px',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              <ConceptBlueprint />
            </div>

            {/* FrontBlueprint — esquina inferior izquierda, AL FONDO */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '10%',
                left: '-72%',
                width: '270px',
                height: '150px',
                zIndex: 1,
                pointerEvents: 'none',
              }}
            >
              <FrontBlueprint />
            </div>

            {/* Texto — por encima de los sketches */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ position: 'relative', zIndex: 5 }}
            >
              <h1 style={{
                fontSize: 'clamp(28px, 4.5vw, 52px)',
                fontWeight: 900,
                color: '#1D2939',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-heading)',
              }}>
                Soluciones<br />
                marítimas<br />
                <span style={{ color: '#F97316', fontStyle: 'italic', fontWeight: 800 }}>integrales,</span>
              </h1>

              <p style={{
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 600,
                color: '#334e68',
                marginTop: '14px',
                lineHeight: 1.35,
                fontFamily: 'var(--font-body)',
              }}>
                con la experiencia y el equipo<br />que su embarcación necesita.
              </p>

              <p style={{
                fontSize: 'clamp(12px, 1.4vw, 13.5px)',
                color: '#4b5563',
                marginTop: '16px',
                lineHeight: 1.7,
                maxWidth: '400px',
                fontFamily: 'var(--font-body)',
              }}>
                Grupo Astikmar S.R.L. es una empresa dominicana especializada en servicios marítimos integrales. Contamos con personal técnico calificado —ingenieros, inspectores, capitanes, marineros, soldadores y pintores— y con tecnología y equipo de nivel profesional para atender cada etapa del ciclo de vida de una embarcación.
              </p>

              <motion.button
                onClick={() => setCurrentPage('servicios')}
                className="btn-solicitar"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  marginTop: '22px',
                  background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)',
                  color: 'white',
                  padding: 'clamp(10px, 1.5vw, 13px) clamp(18px, 2.5vw, 26px)',
                  borderRadius: '24px',
                  fontSize: 'clamp(12px, 1.4vw, 14px)',
                  fontWeight: 700,
                  fontFamily: 'var(--font-body)',
                  boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                Ver todos los 12 servicios <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* ══════════════ COL 2: BARCO + NODOS ══════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '760px',
              marginLeft: 'auto',
              marginRight: '0',
              aspectRatio: '16 / 9',
            }}
          >
            {/* SideProfileBlueprint — esquina superior derecha, AL FONDO */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute',
                top: '-30%',
                right: '-35%',
                width: 'clamp(150px, 20vw, 250px)',
                height: 'clamp(130px, 18vw, 220px)',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            >
              <SideProfileBlueprint />
            </motion.div>

            {/* ShipTanksBlueprint — esquina inferior derecha, AL FONDO */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '20%',
                right: '-35%',
                width: 'clamp(170px, 22vw, 280px)',
                height: 'clamp(60px, 8vw, 100px)',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            >
              <ShipTanksBlueprint />
            </motion.div>

            {/* Imagen del buque */}
            <img
              src=""
              alt="Buque Astikmar Horizontal Cutaway Blueprint"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 25px rgba(29,41,57,0.12))',
                animation: 'float 6s ease-in-out infinite',
                zIndex: 3,
              }}
            />

            {/* Nodos numerados — primer plano */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
              <ServiceNodes />
            </div>
          </motion.div>

        </div>
      </div>

      {/*
        Estilo responsive inline: en pantallas < 768px la grid pasa a 1 columna.
        Se inyecta como <style> JSX para evitar modificar index.css con selectores
        muy específicos de este componente.
      */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}