/**
 * SectionBadge — Badge y Subtítulo de sección unificado con borde cian neón y punto brillante.
 *
 * Props:
 *  - children: texto del badge o subtítulo
 *  - variant: 'dark' (sobre fondos oscuros/navy) | 'light' (sobre fondos claros/blueprint)
 *  - className: clases adicionales
 *  - style: estilos inline adicionales
 *  - withDivider: si es true, añade una línea técnica divisoria hacia la derecha
 */
export default function SectionBadge({
  children,
  variant = 'light',
  className = '',
  style = {},
  withDivider = false,
}) {
  const badgeContent = (
    <div
      className={`section-badge section-badge--${variant} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '5px 14px 5px 10px',
        borderRadius: '100px',
        fontFamily: "'Chakra Petch', sans-serif",
        fontSize: 'clamp(9.5px, 1.1vw, 11px)',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        transition: 'all 0.25s ease',
        ...style,
      }}
    >
      <span className="badge-dot" aria-hidden="true" />
      <span>{children}</span>
    </div>
  )

  if (!withDivider) {
    return badgeContent
  }

  const dividerGradient = variant === 'dark'
    ? 'linear-gradient(90deg, rgba(0, 240, 255, 0.4), transparent)'
    : 'linear-gradient(90deg, rgba(29, 41, 57, 0.2), transparent)'

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '24px',
        width: '100%',
      }}
    >
      {badgeContent}
      <span
        style={{
          flex: 1,
          height: '1px',
          background: dividerGradient,
        }}
      />
    </div>
  )
}
