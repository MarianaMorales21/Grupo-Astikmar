import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18 Q4 20 7 21 L17 21 Q20 20 21 18 L20 12 Q19 8 17 7 L7 7 Q5 8 4 12 Z"/>
        <rect x="10" y="4" width="6" height="5" rx="1"/>
        <line x1="6" y1="7" x2="6" y2="3"/>
        <line x1="4" y1="3" x2="8" y2="3"/>
        <line x1="3" y1="14" x2="21" y2="14"/>
      </svg>
    ),
    number: '20+',
    label: 'Años de experiencia',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    number: '120+',
    label: 'Proyectos realizados',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    number: '85+',
    label: 'Profesionales especializados',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18 Q3 21 7 22 L17 22 Q21 21 22 18 L21 10 Q20 5 17 4 L7 4 Q4 5 3 10 Z"/>
        <line x1="3" y1="14" x2="21" y2="14"/>
        <line x1="12" y1="4" x2="12" y2="14"/>
        <path d="M8 4v2M16 4v2"/>
      </svg>
    ),
    number: '15+',
    label: 'Embarcaciones construidas',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="5"/>
        <path d="M12 3 L13.5 6.5 L17 7 L14.5 9.5 L15 13 L12 11.5 L9 13 L9.5 9.5 L7 7 L10.5 6.5 Z" fill="rgba(249,115,22,0.7)" stroke="none"/>
        <path d="M5 13 L4 21 L12 17 L20 21 L19 13"/>
      </svg>
    ),
    number: '100%',
    label: 'Comprometidos con la calidad',
  },
]

function CountUp({ target, duration = 1800 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <span ref={ref} className="metric-number">
      {isInView ? target : '0'}
    </span>
  )
}

export default function MetricsBar() {
  return (
    <section className="metrics-bar" id="metricas">
      <div className="container-astikmar">
        <div style={{ display: 'flex', alignItems: 'stretch', flexWrap: 'wrap' }}>
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              className="metric-item"
              style={{ flex: '1 1 180px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="metric-icon-box">
                {metric.icon}
              </div>
              <div>
                <CountUp target={metric.number} />
                <div className="metric-label">{metric.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
