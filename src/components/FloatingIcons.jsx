import CompleteShipBlueprint from './Icons/CompleteShipBlueprint'
import ConceptBlueprint from './Icons/ConceptBlueprint'
import FrontBlueprint from './Icons/FrontBlueprint'
import MarineEngineBlueprint from './Icons/MarineEngineBlueprint'
import MarineLiftingHookBlueprint from './Icons/MarineLiftingHookBlueprint'
import MarinePropellerBlueprint from './Icons/MarinePropellerBlueprint'
import MarineRudderBlueprint from './Icons/MarineRudderBlueprint'
import ShipTanksBlueprint from './Icons/ShipTanksBlueprint'
import SideprofileBlueprint from './Icons/SideprofileBlueprint'

/**
 * FloatingIcons — Fondo global con todos los iconos de planos navales flotando.
 * Cubre toda la pantalla con position:fixed, opacity en rango 0.45 a 0.60,
 * tamaños notorios y distribución en matriz para que se vean en todas las páginas.
 */
const BLUEPRINT_ITEMS = [
  // ── ESQUINA SUPERIOR IZQUIERDA ──
  {
    id: 'ship-top-left',
    Component: CompleteShipBlueprint,
    style: { top: '3%', left: '-2%', width: 'clamp(180px, 20vw, 360px)', opacity: 0.55 },
    anim: 'floatGlow 18s ease-in-out 0s infinite',
  },
  // ── ESQUINA SUPERIOR DERECHA ──
  {
    id: 'rudder-top-right',
    Component: MarineRudderBlueprint,
    style: { top: '5%', right: '-2%', width: 'clamp(140px, 16vw, 300px)', opacity: 0.52 },
    anim: 'floatGlowAlt 22s ease-in-out 2s infinite',
  },
  // ── SUPERIOR CENTRO ──
  {
    id: 'concept-top-center',
    Component: ConceptBlueprint,
    style: { top: '8%', left: '42%', width: 'clamp(120px, 14vw, 240px)', opacity: 0.48 },
    anim: 'floatGlow 20s ease-in-out 4s infinite',
  },
  // ── MEDIO IZQUIERDA ──
  {
    id: 'propeller-mid-left',
    Component: MarinePropellerBlueprint,
    style: { top: '32%', left: '-3%', width: 'clamp(130px, 15vw, 270px)', opacity: 0.58 },
    anim: 'floatGlowAlt 19s ease-in-out 1s infinite',
  },
  // ── MEDIO DERECHA ──
  {
    id: 'engine-mid-right',
    Component: MarineEngineBlueprint,
    style: { top: '35%', right: '-3%', width: 'clamp(160px, 18vw, 320px)', opacity: 0.54 },
    anim: 'floatGlow 24s ease-in-out 3s infinite',
  },
  // ── CENTRO SUTIL ──
  {
    id: 'front-center',
    Component: FrontBlueprint,
    style: { top: '48%', left: '48%', transform: 'translateX(-50%)', width: 'clamp(110px, 13vw, 230px)', opacity: 0.46 },
    anim: 'floatGlowAlt 26s ease-in-out 5s infinite',
  },
  // ── INFERIOR-MEDIO IZQUIERDA ──
  {
    id: 'lifting-hook-low-left',
    Component: MarineLiftingHookBlueprint,
    style: { top: '62%', left: '-2%', width: 'clamp(120px, 14vw, 260px)', opacity: 0.56 },
    anim: 'floatGlow 21s ease-in-out 2s infinite',
  },
  // ── INFERIOR-MEDIO DERECHA ──
  {
    id: 'sideprofile-low-right',
    Component: SideprofileBlueprint,
    style: { top: '64%', right: '-1%', width: 'clamp(140px, 16vw, 290px)', opacity: 0.52 },
    anim: 'floatGlowAlt 23s ease-in-out 4s infinite',
  },
  // ── INFERIOR IZQUIERDA ──
  {
    id: 'tanks-bottom-left',
    Component: ShipTanksBlueprint,
    style: { bottom: '4%', left: '1%', width: 'clamp(130px, 15vw, 280px)', opacity: 0.50 },
    anim: 'floatGlow 20s ease-in-out 6s infinite',
  },
  // ── INFERIOR DERECHA ──
  {
    id: 'propeller-bottom-right',
    Component: MarinePropellerBlueprint,
    style: { bottom: '3%', right: '-2%', width: 'clamp(125px, 14vw, 260px)', opacity: 0.54 },
    anim: 'floatGlowAlt 18s ease-in-out 3s infinite',
  },
  // ── INFERIOR CENTRO ──
  {
    id: 'ship-bottom-center',
    Component: CompleteShipBlueprint,
    style: { bottom: '2%', left: '38%', width: 'clamp(150px, 17vw, 310px)', opacity: 0.48 },
    anim: 'floatGlow 25s ease-in-out 1s infinite',
  },
]

export default function FloatingIcons() {
  return (
    <div className="floating-icons-overlay" aria-hidden="true">
      {BLUEPRINT_ITEMS.map(({ id, Component, style, anim }) => (
        <div
          key={id}
          className="floating-icon-item"
          style={{
            ...style,
            animation: anim,
            willChange: 'transform, filter',
          }}
        >
          <Component />
        </div>
      ))}
    </div>
  )
}
