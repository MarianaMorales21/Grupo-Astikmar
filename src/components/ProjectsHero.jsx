import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Ship, Users, Award, Anchor } from 'lucide-react'
import { projectsSectionContent, carouselImages as carouselImagesConfig, defaultStats, images } from '../data/siteConfig'
import { useSiteData } from '../hooks/useSiteData'

import './ProjectsCarousel.css'

const iconMap = { Ship, Users, Award, Anchor }

const carouselImages = carouselImagesConfig

const duplicated = [...carouselImages, ...carouselImages]

export default function ProjectsHero() {
  const [isPaused, setIsPaused] = useState(false)
  const { stats: siteStats } = useSiteData()

  const stats = [
    { icon: <Ship size={22} color="white" />, value: siteStats.projects?.value || '47+', label: 'Proyectos completados' },
    { icon: <Users size={22} color="white" />, value: siteStats.experience?.value || '20+', label: 'Años de experiencia' },
    { icon: <Award size={22} color="white" />, value: siteStats.quality?.value || '100%', label: 'Calidad garantizada' },
    { icon: <Anchor size={22} color="white" />, value: siteStats.vessels?.value || '15+', label: 'Embarcaciones construidas' },
  ]

  return (
    <section
      className="blueprint-bg"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: 'clamp(40px, 6vw, 80px) 0 0',
        overflow: 'hidden',
      }}
    >
      {/* ── Regla de Plano Técnico Superior ── */}
      <div className="blueprint-ruler-top">
        {["-20'", "-10'", "0'", "10'", "20'", "30'", "40'", "50'", "60'", "70'", "80'", "90'", "100'"].map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>

      {/* ── LEFT VERTICAL RULER ── */}
      <div className="blueprint-ruler-vertical" style={{
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
      <div className="blueprint-ruler-vertical" style={{
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

      {/* Marcas de esquina */}
      <div className="cad-corner-marker" style={{ position: 'absolute', top: '10px', left: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace', zIndex: 1 }}>
        + SEC-03 [PROYECTOS_NAVALES]
      </div>
      <div className="cad-corner-marker" style={{ position: 'absolute', top: '10px', right: '16px', fontSize: '11px', fontWeight: 800, color: 'rgba(29,41,57,0.45)', fontFamily: 'monospace', zIndex: 1 }}>
        CAD-REF: 1440x800 +
      </div>

      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 52px)' }}>

        {/* ══════════ HERO: Texto + Métricas lado a lado ══════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px', alignItems: 'start', marginBottom: '48px' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 900,
                color: '#101c2c',
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                fontFamily: 'var(--font-heading)',
              }}
            >
              {projectsSectionContent.title.line1} <span style={{ color: '#F97316', fontStyle: 'italic' }}>{projectsSectionContent.title.highlight}</span>
            </h2>
            <p style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', fontWeight: 600, color: '#334e68', marginTop: '8px' }}>
              {projectsSectionContent.subtitle}
            </p>
            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.75, marginTop: '12px', maxWidth: '520px' }}>
              {projectsSectionContent.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  borderRadius: '14px',
                  padding: '18px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid rgba(249,115,22,0.15)',
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: 'rgba(249,115,22,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {stat.icon}
                </div>
                <div>
                  <p style={{ fontSize: '22px', fontWeight: 900, color: '#F97316', lineHeight: 1, fontFamily: 'var(--font-heading)' }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ══════════ TIPOS DE PROYECTOS ══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            padding: '32px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(249,115,22,0.15)',
          }}
        >
          <h3 style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 900,
            color: '#ffffff',
            marginBottom: '16px',
            fontFamily: 'var(--font-heading)',
          }}>
            {projectsSectionContent.projectTypesTitle}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '18px' }}>
            {projectsSectionContent.projectTypes.map((item, i) => (
              <div key={i}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#F97316', marginBottom: '5px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ═══ Carrusel de imágenes ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75, delay: 0.15 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          overflow: 'hidden',
          padding: '40px 0 20px',
          zIndex: 2,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '90px',
            background: 'linear-gradient(90deg, var(--steel) 0%, transparent 100%)',
            zIndex: 10, pointerEvents: 'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '90px',
            background: 'linear-gradient(270deg, var(--steel) 0%, transparent 100%)',
            zIndex: 10, pointerEvents: 'none',
          }}
        />

        <div
          className={`projects-marquee-track ${isPaused ? 'paused' : ''}`}
          style={{
            display: 'flex',
            gap: '20px',
            width: 'max-content',
            paddingLeft: '20px',
          }}
        >
          {duplicated.map((img, idx) => (
            <div
              key={`${img.src}-${idx}`}
              className="projects-carousel-card"
              style={{
                width: 'clamp(300px, 70vw, 420px)',
                height: 'clamp(260px, 50vw, 340px)',
                flexShrink: 0,
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease, filter 0.4s ease',
                }}
              />
              <div
                className="projects-card-overlay"
                aria-hidden="true"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(180deg, rgba(15,23,42,0.15) 0%, rgba(15,23,42,0.25) 50%, rgba(15,23,42,0.85) 100%)',
                  transition: 'background 0.4s ease',
                }}
              />
              <div
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '24px', zIndex: 3,
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%',
                }}
              >
                <span
                  style={{
                    fontSize: '10px', fontWeight: 800, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: '#ffffff',
                    background: '#F97316', padding: '4px 12px', borderRadius: '20px',
                    boxShadow: '0 2px 10px rgba(249,115,22,0.4)',
                    alignSelf: 'flex-start', marginBottom: '10px',
                  }}
                >
                  {img.category}
                </span>
                <p
                  style={{
                    fontSize: '14px', fontWeight: 600,
                    color: 'rgba(255,255,255,0.9)', lineHeight: 1.5,
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                >
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
