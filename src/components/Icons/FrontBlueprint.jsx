import { motion } from "framer-motion";

/* ============================================================
   FrontBlueprint — v2 "lápiz sobre plano"
   ============================================================
   Cambios respecto al original:
   1. Color base: de un azul-gris muy claro (#7E93A8, opacidades
      0.12–0.58) a un grafito oscuro (#26333F) con opacidades
      mucho más altas → el plano ya no se ve "lavado", se ve
      como grafito real sobre papel.
   2. Filtros `fb-wobble-1/2` (feTurbulence + feDisplacementMap):
      se aplican SOLO a los trazos "a mano alzada" (casco, puente,
      líneas de construcción) — la retícula, el marco técnico y
      las cotas se quedan rectas, como si estuvieran hechas con
      regla/escuadra sobre el mismo plano (así se lee como un
      dibujo técnico real: reglas rectas + casco a pulso).
   3. El contorno principal del casco se dibuja DOS veces (trazo
      base + repaso) para que se note la acumulación de grafito
      en el contorno, que es lo primero que el ojo detecta como
      "dibujado a mano" en vez de vectorial.
   4. Textura de grano de papel muy sutil detrás de todo, con
      mezcla "multiply" para que no lave el trazo oscuro.
   ============================================================ */

export default function FrontBlueprint({ className = "" }) {
    const windows = [91, 99, 107, 115, 123, 131, 139];
    const ticks = Array.from({ length: 17 }, (_, i) => i);

    const INK = "#26333F"; // grafito oscuro, en vez del azul-gris claro original

    return (
        <motion.div
            className={className}
            animate={{
                y: [-5, 5, -5],
                rotate: [-0.6, 0.6, -0.6],
                opacity: [0.42, 0.56, 0.42],
            }}
            transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox="0 0 360 280"
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter id="fb-wobble-1" x="-25%" y="-25%" width="150%" height="150%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.045" numOctaves="2" seed="5" result="n1" />
                        <feDisplacementMap in="SourceGraphic" in2="n1" scale="1.7" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="fb-wobble-2" x="-25%" y="-25%" width="150%" height="150%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.025 0.06" numOctaves="2" seed="11" result="n2" />
                        <feDisplacementMap in="SourceGraphic" in2="n2" scale="1.1" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>

                {/* =====================================================
            BLUEPRINT GRID — recto, "de regla", más visible
            (sin marco exterior: la cuadrícula queda "suelta")
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.4" opacity="0.18">
                    {Array.from({ length: 19 }, (_, i) => (
                        <line key={`v-${i}`} x1={30 + i * 15} y1="28" x2={30 + i * 15} y2="235" />
                    ))}
                    {Array.from({ length: 15 }, (_, i) => (
                        <line key={`h-${i}`} x1="30" y1={28 + i * 15} x2="315" y2={28 + i * 15} />
                    ))}
                </g>

                {/* =====================================================
            CENTER AXIS
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.65" strokeDasharray="5 4" opacity="0.55">
                    <line x1="172.5" y1="28" x2="172.5" y2="235" />
                    <line x1="30" y1="137" x2="315" y2="137" />
                </g>

                {/* =====================================================
            MAIN SHIP — trazo a pulso (wobble + repaso doble en el casco)
        ===================================================== */}

                {/* Repaso de fondo del casco: da la acumulación de grafito */}
                <g stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.25" filter="url(#fb-wobble-2)">
                    <path d="M94 171 C106 158 124 151 143 148 C154 146 164 145 172.5 145 C181 145 191 146 202 148 C221 151 239 158 251 171 C238 184 218 194 195 199 C187 201 179 203 172.5 203 C166 203 158 201 150 199 C127 194 107 184 94 171 Z" />
                </g>

                <g
                    stroke={INK}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                    filter="url(#fb-wobble-1)"
                >
                    {/* Main hull */}
                    <path
                        d="
              M94 171
              C106 158 124 151 143 148
              C154 146 164 145 172.5 145
              C181 145 191 146 202 148
              C221 151 239 158 251 171
              C238 184 218 194 195 199
              C187 201 179 203 172.5 203
              C166 203 158 201 150 199
              C127 194 107 184 94 171
              Z
            "
                    />

                    {/* Secondary hull */}
                    <path
                        d="
              M101 173
              C121 183 145 188 172.5 189
              C200 188 224 183 244 173
            "
                    />

                    {/* Waterline */}
                    <path d="M82 178C111 185 141 188 172.5 188C204 188 234 185 263 178" />

                    {/* Keel */}
                    <path
                        d="
              M128 190
              C143 199 158 205 172.5 207
              C187 205 202 199 217 190
            "
                    />

                    {/* Bridge */}
                    <path
                        d="
              M130 147
              L130 116
              L141 106
              L204 106
              L215 116
              L215 147
            "
                    />

                    {/* Bridge upper deck */}
                    <path d="M140 106L148 95H196L204 106" />

                    {/* Bridge windows */}
                    {windows.map((x) => (
                        <circle key={x} cx={x + 5} cy="118" r="1.8" />
                    ))}

                    {/* Lower windows */}
                    {[137, 149, 161, 173, 185, 197, 209].map((x) => (
                        <circle key={x} cx={x} cy="136" r="1.5" />
                    ))}

                    {/* Mast */}
                    <line x1="172.5" y1="95" x2="172.5" y2="56" />

                    {/* Radar */}
                    <path d="M151 57H194" />
                    <path d="M158 52H187" />
                    <path d="M165 47H180" />

                    {/* Radar arms */}
                    <line x1="172.5" y1="56" x2="154" y2="49" />
                    <line x1="172.5" y1="56" x2="191" y2="49" />

                    {/* Chimneys */}
                    <path d="M146 105V88H158V105" />
                    <path d="M187 105V88H199V105" />
                    <path d="M147 88H157" />
                    <path d="M188 88H198" />

                    {/* Antennas */}
                    <line x1="152" y1="88" x2="148" y2="77" />
                    <line x1="193" y1="88" x2="197" y2="77" />

                    {/* Bow details */}
                    <path d="M130 154L113 164" />
                    <path d="M215 154L232 164" />

                    {/* Bow lights */}
                    <circle cx="116" cy="164" r="2" />
                    <circle cx="229" cy="164" r="2" />

                    {/* Portholes */}
                    <circle cx="126" cy="174" r="4" />
                    <circle cx="219" cy="174" r="4" />

                    {/* Structural ribs */}
                    <path d="M116 169C132 178 151 182 172.5 183" />
                    <path d="M229 169C213 178 194 182 172.5 183" />
                </g>

                {/* =====================================================
            CONSTRUCTION LINES — también a pulso, más tenues
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.7" opacity="0.42" filter="url(#fb-wobble-2)">
                    <path d="M72 158H273" />
                    <path d="M82 166H263" />
                    <path d="M87 174H258" />
                    <path d="M94 182H251" />

                    <path d="M112 110L95 171" />
                    <path d="M132 95L118 178" />
                    <path d="M152 80L145 184" />
                    <path d="M172.5 60V204" />
                    <path d="M193 80L200 184" />
                    <path d="M213 95L227 178" />
                    <path d="M233 110L250 171" />
                </g>

                {/* =====================================================
            DIMENSION — WIDTH (regla recta, sin wobble)
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.7" opacity="0.65">
                    <line x1="94" y1="220" x2="251" y2="220" />
                    <line x1="94" y1="211" x2="94" y2="227" />
                    <line x1="251" y1="211" x2="251" y2="227" />
                    <path d="M102 216L94 220L102 224" />
                    <path d="M243 216L251 220L243 224" />
                </g>

                {/* =====================================================
            DIMENSION — HEIGHT
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.7" opacity="0.65">
                    <line x1="286" y1="47" x2="286" y2="203" />
                    <line x1="278" y1="47" x2="294" y2="47" />
                    <line x1="278" y1="203" x2="294" y2="203" />
                    <path d="M282 55L286 47L290 55" />
                    <path d="M282 195L286 203L290 195" />
                </g>

                {/* =====================================================
            DIMENSION — CENTER
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.6" opacity="0.5">
                    <line x1="172.5" y1="215" x2="172.5" y2="225" />
                    <line x1="168" y1="220" x2="177" y2="220" />
                </g>

                {/* =====================================================
            MEASUREMENT TICKS
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.55" opacity="0.5">
                    {ticks.map((i) => (
                        <line key={i} x1={42 + i * 15} y1="28" x2={42 + i * 15} y2={i % 5 === 0 ? 34 : 31} />
                    ))}
                </g>

                {/* =====================================================
            TECHNICAL NOTES
        ===================================================== */}

                <g fill={INK} fontFamily="monospace" opacity="0.75">
                    <text x="39" y="48" fontSize="7">NAVAL / 04</text>
                    <text x="39" y="58" fontSize="6">FRONT ELEVATION</text>
                    <text x="39" y="68" fontSize="6">SCALE 1:250</text>
                    <text x="245" y="48" fontSize="6">FRAME 01</text>
                    <text x="245" y="58" fontSize="6">REV. 04</text>
                    <text x="245" y="68" fontSize="6">2024</text>
                    <text x="103" y="230" fontSize="7">BEAM 42.8</text>
                    <text x="292" y="128" fontSize="7">82.4</text>
                    <text x="178" y="76" fontSize="6">CL</text>
                    <text x="219" y="160" fontSize="6">BOW</text>
                    <text x="116" y="160" fontSize="6">BOW</text>
                </g>

                {/* =====================================================
            SMALL TECHNICAL CIRCLES
        ===================================================== */}

                <g stroke={INK} strokeWidth="0.55" opacity="0.5">
                    <circle cx="48" cy="211" r="7" />
                    <circle cx="48" cy="211" r="3" />
                    <circle cx="297" cy="211" r="7" />
                    <circle cx="297" cy="211" r="3" />
                </g>

                {/* =====================================================
            LABELS
        ===================================================== */}

                <g fill={INK} fontFamily="monospace" fontSize="5.5" opacity="0.6">
                    <text x="35" y="246">SHIP DESIGN / FRONT SECTION</text>
                    <text x="225" y="246">A-01 / 04</text>
                </g>
            </svg>
        </motion.div>
    );
}