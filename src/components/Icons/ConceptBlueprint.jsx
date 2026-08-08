import { motion } from "framer-motion";

/* ============================================================
   ConceptBlueprint — v2 "lápiz sobre plano"
   ============================================================
   Mismo lenguaje que FrontBlueprint / SideProfileBlueprint:
   - Grafito oscuro (#26333F) en vez del azul-gris claro original.
   - Wobble (feTurbulence + feDisplacementMap) SOLO en lo dibujado
     a pulso: casco grande, cubierta, superestructura, curvas de
     construcción del casco. La cuadrícula, cotas, callouts y
     marcas de esquina se quedan rectas (regla/escuadra).
   - Repaso doble en el contorno principal del casco.
   - Sin marco exterior ni marcas de esquina (pieza "suelta").
   - Sin rect de fondo — el fondo queda 100% transparente, nada
     de cajas oscuras detrás del dibujo.
   ============================================================ */

export default function ConceptBlueprint({ className = "" }) {
  const INK = "#26333F";

  return (
    <motion.div
      className={className}
      animate={{
        y: [-6, 4, -6],
        x: [0, 2, 0],
        rotate: [-0.4, 0.4, -0.4],
        opacity: [0.42, 0.56, 0.42],
      }}
      transition={{
        duration: 13,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        viewBox="0 0 500 300"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="cb-wobble-1" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.04" numOctaves="2" seed="17" result="n1" />
            <feDisplacementMap in="SourceGraphic" in2="n1" scale="1.8" xChannelSelector="R" yChannelSelector="G" />
          </filter>
          <filter id="cb-wobble-2" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.022 0.055" numOctaves="2" seed="23" result="n2" />
            <feDisplacementMap in="SourceGraphic" in2="n2" scale="1.15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* =====================================================
            CONSTRUCTION GRID — suelta, sin marco
        ===================================================== */}

        <g stroke={INK} strokeWidth="0.4" opacity="0.16">
          {Array.from({ length: 26 }, (_, i) => (
            <line key={`v-${i}`} x1={20 + i * 18} y1="25" x2={20 + i * 18} y2="260" />
          ))}
          {Array.from({ length: 14 }, (_, i) => (
            <line key={`h-${i}`} x1="20" y1={25 + i * 18} x2="470" y2={25 + i * 18} />
          ))}
        </g>

        {/* =====================================================
            MAIN CONSTRUCTION AXIS
        ===================================================== */}

        <g stroke={INK} strokeWidth="0.7" strokeDasharray="7 5" opacity="0.5">
          <line x1="38" y1="164" x2="455" y2="164" />
          <line x1="90" y1="72" x2="90" y2="225" />
        </g>

        {/* =====================================================
            LARGE CONCEPTUAL HULL — repaso de fondo (grafito acumulado)
        ===================================================== */}

        <g stroke={INK} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity="0.22" filter="url(#cb-wobble-2)">
          <path
            d="
              M68 160
              C91 151 119 143 153 137
              C202 128 256 119 311 113
              C354 109 394 112 426 124
              L455 143
              L427 158
              C392 170 348 179 300 184
              C237 191 171 190 119 181
              C96 177 78 169 68 160
              Z
            "
          />
        </g>

        {/* =====================================================
            LARGE CONCEPTUAL HULL — trazo principal, a pulso
        ===================================================== */}

        <g
          stroke={INK}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
          filter="url(#cb-wobble-1)"
        >
          {/* Main upper silhouette */}
          <path
            d="
              M68 160
              C91 151 119 143 153 137
              C202 128 256 119 311 113
              C354 109 394 112 426 124
              L455 143
              L427 158
              C392 170 348 179 300 184
              C237 191 171 190 119 181
              C96 177 78 169 68 160
              Z
            "
          />

          {/* Lower hull */}
          <path
            d="
              M72 162
              C100 184 144 199 204 205
              C267 211 337 204 397 187
              C420 181 439 170 455 156
            "
          />

          {/* Keel */}
          <path
            d="
              M93 181
              C132 209 190 221 254 222
              C323 222 386 207 426 183
            "
          />

          {/* DECK */}
          <path
            d="
              M112 142
              L142 122
              L280 104
              L365 107
              L411 124
              L426 137
            "
          />

          {/* Bow deck */}
          <path
            d="
              M365 107
              L391 92
              L425 113
              L426 137
            "
          />

          {/* SUPERSTRUCTURE */}
          <path
            d="
              M158 137
              L171 91
              L264 78
              L299 103
              L299 119
            "
          />

          {/* Upper bridge */}
          <path
            d="
              M174 91
              L192 70
              L250 65
              L274 79
            "
          />

          {/* Bridge windows */}
          <path d="M180 93L260 82" />
          <path d="M185 101L266 90" />

          {/* Individual windows */}
          {[190, 204, 218, 232, 246].map((x) => (
            <line key={x} x1={x} y1="91" x2={x + 1} y2="97" />
          ))}

          {/* FUNNEL */}
          <path d="M275 103V73H295V102" />
          <path d="M272 73H298" />

          {/* Smoke/vent lines */}
          <path d="M278 67C281 61 279 56 283 51" />
          <path d="M288 67C292 61 290 57 294 53" />

          {/* MAST */}
          <line x1="220" y1="70" x2="220" y2="38" />
          <line x1="220" y1="48" x2="244" y2="55" />
          <line x1="220" y1="48" x2="199" y2="56" />

          {/* Radar */}
          <ellipse cx="220" cy="38" rx="20" ry="4" />

          {/* BOW DETAILS */}
          <path d="M411 124L445 143" />
          <path d="M421 130L450 145" />

          {/* Anchor */}
          <circle cx="424" cy="148" r="5" />
          <path d="M424 143V153" />

          {/* STERN DETAILS */}
          <path d="M68 160L52 169L76 177" />
          <path d="M74 166L52 169" />

          {/* Propeller shaft */}
          <line x1="82" y1="178" x2="48" y2="190" />

          {/* Propeller */}
          <ellipse cx="43" cy="192" rx="8" ry="3" />
          <path d="M43 189C35 183 35 179 39 176" />
          <path d="M43 195C35 200 35 204 40 207" />
        </g>

        {/* =====================================================
            CONSTRUCTION CURVES — a pulso, más tenues
        ===================================================== */}

        <g stroke={INK} strokeWidth="0.7" opacity="0.4" filter="url(#cb-wobble-2)">
          <path d="M80 153C170 129 286 111 399 122" />
          <path d="M83 158C180 139 292 124 416 133" />
          <path d="M87 169C177 166 286 158 429 150" />
          <path d="M92 178C188 191 313 185 418 163" />

          {/* Hull section curves */}
          <path d="M120 144C136 159 136 177 120 190" />
          <path d="M160 136C177 156 177 185 160 201" />
          <path d="M205 129C218 154 218 197 205 216" />
          <path d="M252 121C260 151 260 201 252 222" />
          <path d="M300 116C306 145 307 198 300 217" />
          <path d="M350 113C358 142 361 188 350 205" />
          <path d="M394 117C406 140 412 174 397 190" />
        </g>

        {/* =====================================================
            DIMENSION LINES — rectas
        ===================================================== */}

        <g stroke={INK} strokeWidth="0.7" opacity="0.62">
          {/* Overall length */}
          <line x1="52" y1="244" x2="455" y2="244" />
          <line x1="52" y1="235" x2="52" y2="251" />
          <line x1="455" y1="235" x2="455" y2="251" />
          <path d="M62 240L52 244L62 248" />
          <path d="M445 240L455 244L445 248" />

          {/* Height */}
          <line x1="462" y1="38" x2="462" y2="222" />
          <line x1="454" y1="38" x2="470" y2="38" />
          <line x1="454" y1="222" x2="470" y2="222" />
          <path d="M458 48L462 38L466 48" />
          <path d="M458 212L462 222L466 212" />
        </g>

        {/* =====================================================
            TECHNICAL LABELS
        ===================================================== */}

        <g fill={INK} fontFamily="monospace" opacity="0.75">
          <text x="30" y="18" fontSize="7">CONCEPT / HULL STUDY</text>
          <text x="386" y="18" fontSize="6">REV. 02</text>
          <text x="382" y="235" fontSize="6">127.4 M</text>
          <text x="470" y="134" fontSize="6">42 M</text>
          <text x="275" y="68" fontSize="6">EXHAUST</text>
          <text x="181" y="60" fontSize="6">RADAR</text>
          <text x="395" y="102" fontSize="6">BOW</text>
          <text x="45" y="213" fontSize="6">PROPULSION</text>
          <text x="30" y="275" fontSize="6">MARINE ARCHITECTURE / PRELIMINARY DESIGN</text>
          <text x="385" y="275" fontSize="6">A-07</text>
        </g>

        {/* =====================================================
            CALLOUT LINES — rectas, apuntan a detalles a pulso
        ===================================================== */}

        <g stroke={INK} strokeWidth="0.6" opacity="0.55">
          {/* Bridge callout */}
          <path d="M205 87L130 52H84" />
          <circle cx="205" cy="87" r="2" />

          {/* Propulsion callout */}
          <path d="M78 185L58 222H35" />
          <circle cx="78" cy="185" r="2" />

          {/* Bow callout */}
          <path d="M423 128L442 91H470" />
          <circle cx="423" cy="128" r="2" />
        </g>
      </svg>
    </motion.div>
  );
}