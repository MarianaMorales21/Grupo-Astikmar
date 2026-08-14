import './WaveTop.css'

/**
 * WaveTop — Componente de olas decorativas animadas con oleaje marcado y fluido.
 * Olas cortan el fondo del Hero de forma fluida y natural sin líneas fantasma ni desbordamientos.
 *
 * Props:
 *  - fill: color de relleno de la ola frontal (default: '#0f172a')
 *  - bgColor: color de fondo (default: 'transparent' para recortar el blueprint directamente)
 *  - height: altura del SVG en px (default: 110)
 *  - style: estilos adicionales para el contenedor
 */
export default function WaveTop({ fill = '#0f172a', bgColor = 'transparent', height = 110, style = {} }) {
  return (
    <div
      className="wave-seamless-container"
      style={{
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        fontSize: 0,
        backgroundColor: bgColor,
        position: 'relative',
        display: 'block',
        marginBottom: '-1px',
        ...style,
      }}
    >
      {/* Capa trasera de la ola (translúcida, movimiento inverso) */}
      <div
        className="wave-track wave-track-back"
        style={{
          display: 'flex',
          width: '200%',
          opacity: 0.40,
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          lineHeight: 0,
          fontSize: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            width: '50%',
            height: `${height}px`,
            display: 'block',
            flexShrink: 0,
            verticalAlign: 'bottom',
            marginBottom: '-1px',
          }}
        >
          <path
            d="M0,35 C300,95 600,0 900,65 C1200,115 1350,20 1440,40 L1440,120 L0,120 Z"
            fill={fill}
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            width: '50%',
            height: `${height}px`,
            display: 'block',
            flexShrink: 0,
            verticalAlign: 'bottom',
            marginBottom: '-1px',
          }}
        >
          <path
            d="M0,35 C300,95 600,0 900,65 C1200,115 1350,20 1440,40 L1440,120 L0,120 Z"
            fill={fill}
          />
        </svg>
      </div>

      {/* Capa frontal de la ola (principal) */}
      <div
        className="wave-track wave-track-front"
        style={{
          display: 'flex',
          width: '200%',
          position: 'relative',
          zIndex: 2,
          lineHeight: 0,
          fontSize: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            width: '50%',
            height: `${height}px`,
            display: 'block',
            flexShrink: 0,
            verticalAlign: 'bottom',
            marginBottom: '-1px',
          }}
        >
          <path
            d="M0,55 C240,110 480,10 720,60 C960,110 1200,15 1440,55 L1440,120 L0,120 Z"
            fill={fill}
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{
            width: '50%',
            height: `${height}px`,
            display: 'block',
            flexShrink: 0,
            verticalAlign: 'bottom',
            marginBottom: '-1px',
          }}
        >
          <path
            d="M0,55 C240,110 480,10 720,60 C960,110 1200,15 1440,55 L1440,120 L0,120 Z"
            fill={fill}
          />
        </svg>
      </div>
    </div>
  )
}
