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
        van AL FONDO, pegados a las 4 esquinas. No importa que el
        texto, el barco o los nodos queden encima — solo tienen
        que asomar y notarse en la esquina.
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
        paddingTop: '28px',
        paddingBottom: '30px',
      }}
    >
      {/* ── TOP RULER (queda como fondo del plano; el navbar flota por encima) ── */}
      <div className="blueprint-ruler-top">
        {["-30'", "-20'", "-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'"].map((m, idx) => (
          <span key={idx}>{m}</span>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
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
          <span key={idx} style={{ fontSize: '8.5px', color: 'rgba(29,41,57,0.45)', fontFamily: 'Rajdhani', fontWeight: 600 }}>
            {m}
          </span>
        ))}
      </div>

      {/* ── CONTENEDOR CENTRADO CON MAX-WIDTH ── */}
      <div style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        paddingLeft: 'clamp(32px, 5vw, 80px)',
        paddingRight: 'clamp(32px, 5vw, 80px)',
        paddingTop: '96px', // deja libre el alto del navbar flotante para que no tape las piezas del barco
        position: 'relative',
        zIndex: 5,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(340px, 420px) 1fr',
          gap: 'clamp(32px, 5vw, 72px)',
          alignItems: 'center',
        }}>

          {/* ══════════════ COL 1: TEXTO — con sus 2 esquinas de plano AL FONDO ══════════════ */}
          <div style={{ position: 'relative' }}>

            {/* ConceptBlueprint — esquina superior izquierda de la columna, AL FONDO */}
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

            {/* FrontBlueprint — esquina inferior izquierda de la columna, AL FONDO */}
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

            {/* Texto — por encima de los dos sketches de fondo */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{ position: 'relative', zIndex: 5 }}
            >
              <h1 style={{
                fontSize: '42px',
                fontWeight: 900,
                color: '#1D2939',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontFamily: 'Inter, sans-serif'
              }}>
                Soluciones<br />
                marítimas<br />
                <span style={{ color: '#F97316', fontStyle: 'italic', fontWeight: 800 }}>integrales,</span>
              </h1>

              <p style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#334e68',
                marginTop: '14px',
                lineHeight: 1.35
              }}>
                con la experiencia y el equipo<br />que su embarcación necesita.
              </p>

              <p style={{
                fontSize: '13px',
                color: '#4b5563',
                marginTop: '16px',
                lineHeight: 1.7,
                maxWidth: '400px'
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
                  padding: '13px 26px',
                  borderRadius: '24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                Ver todos los 12 servicios <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </div>

          {/* ══════════════ COL 2: BARCO + NODOS + SKETCHES AL FONDO EN LAS ESQUINAS ══════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '760px',
              marginLeft: 'auto',   // el barco "flota" hacia la derecha de su columna
              marginRight: '0',
              aspectRatio: '16 / 9', // ajusta esto a la proporción real de ship-cutaway.png
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
                width: '250px',
                height: '220px',
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
                width: '280px',
                height: '100px',
                zIndex: 4,
                pointerEvents: 'none',
              }}
            >
              <ShipTanksBlueprint />
            </motion.div>

            {/* PLACEHOLDER: reemplaza src cuando tengas la imagen final del corte del buque */}
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

            {/* Nodos numerados — por encima de todo, en primer plano */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 10 }}>
              <ServiceNodes />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}