import { motion } from "framer-motion";

/* ============================================================
   SideProfileBlueprint — "lápiz sobre plano", vista de perfil
   ============================================================
   Mismo lenguaje visual que FrontBlueprint (grafito oscuro,
   wobble solo en lo que se dibuja a pulso, cotas y retícula
   rectas), pero SIN marco exterior ni marcadores de esquina —
   la cuadrícula y el barco quedan "sueltos" sobre el fondo,
   como un recorte de plano, no una lámina completa.
   ============================================================ */

export default function SideProfileBlueprint({ className = "" }) {
    const upperWindows = [98, 110, 122, 134, 146, 158, 170, 182];
    const portholes = [70, 84, 98, 112, 210, 224, 238, 252, 266];
    const ticks = Array.from({ length: 17 }, (_, i) => i);

    const INK = "#26333F";

    return (
        <motion.div
            className={className}
            animate={{
                y: [-5, 5, -5],
                rotate: [-0.5, 0.5, -0.5],
                opacity: [0.42, 0.56, 0.42],
            }}
            transition={{
                duration: 12,
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
                    <filter id="sp-wobble-1" x="-25%" y="-25%" width="150%" height="150%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.02 0.045" numOctaves="2" seed="8" result="n1" />
                        <feDisplacementMap in="SourceGraphic" in2="n1" scale="1.7" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                    <filter id="sp-wobble-2" x="-25%" y="-25%" width="150%" height="150%">
                        <feTurbulence type="fractalNoise" baseFrequency="0.025 0.06" numOctaves="2" seed="14" result="n2" />
                        <feDisplacementMap in="SourceGraphic" in2="n2" scale="1.1" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>

                {/* GRID — suelta, sin marco que la delimite */}
                <g stroke={INK} strokeWidth="0.4" opacity="0.18">
                    {Array.from({ length: 21 }, (_, i) => (
                        <line key={`v-${i}`} x1={24 + i * 15} y1="60" x2={24 + i * 15} y2="210" />
                    ))}
                    {Array.from({ length: 11 }, (_, i) => (
                        <line key={`h-${i}`} x1="24" y1={60 + i * 15} x2="336" y2={60 + i * 15} />
                    ))}
                </g>

                {/* Línea de flotación — eje horizontal de referencia */}
                <g stroke={INK} strokeWidth="0.65" strokeDasharray="5 4" opacity="0.5">
                    <line x1="24" y1="165" x2="336" y2="165" />
                </g>

                {/* =====================================================
            CASCO — repaso de fondo (acumulación de grafito)
        ===================================================== */}
                <g stroke={INK} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.22" filter="url(#sp-wobble-2)">
                    <path d="M40 165 C44 148 58 138 82 133 L272 133 C296 136 312 146 320 158 C316 172 300 182 276 187 L86 187 C60 184 46 176 40 165 Z" />
                </g>

                <g stroke={INK} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" filter="url(#sp-wobble-1)">
                    {/* Contorno de casco, cubierta y roda/popa */}
                    <path d="M40 165 C44 148 58 138 82 133 L272 133 C296 136 312 146 320 158 C316 172 300 182 276 187 L86 187 C60 184 46 176 40 165 Z" />

                    {/* Segunda línea de cubierta / pasillo */}
                    <path d="M52 140 L262 140" />

                    {/* Quilla */}
                    <path d="M70 187 C110 197 220 197 258 187" />

                    {/* Puente de mando */}
                    <path d="M118 133 L118 100 L128 90 L172 90 L182 100 L182 133" />
                    <path d="M126 90 L133 80 H167 L174 90" />

                    {/* Ventanas del puente */}
                    {upperWindows.map((x) => (
                        <rect key={x} x={x} y="104" width="8" height="6" rx="0.5" />
                    ))}

                    {/* Chimenea */}
                    <path d="M198 133 V104 H222 V133" />
                    <path d="M199 104 H221" />
                    <line x1="203" y1="104" x2="200" y2="92" />
                    <line x1="217" y1="104" x2="220" y2="92" />

                    {/* Mástil / antena de proa */}
                    <line x1="88" y1="133" x2="88" y2="102" />
                    <path d="M80 106 H96" />

                    {/* Grúa de cubierta (elemento característico de carga) */}
                    <path d="M240 133 L240 108 L262 133" />
                    <path d="M240 111 L233 118" />

                    {/* Ojos de buey a lo largo del costado */}
                    {portholes.map((x) => (
                        <circle key={x} cx={x} cy="160" r="3.4" />
                    ))}

                    {/* Roda (proa) reforzada */}
                    <path d="M320 158 C324 152 322 145 314 141" />
                    {/* Espejo de popa */}
                    <path d="M40 165 C36 172 37 179 44 184" />
                </g>

                {/* =====================================================
            LÍNEAS DE PROYECCIÓN — también a pulso, tenues
        ===================================================== */}
                <g stroke={INK} strokeWidth="0.65" opacity="0.38" filter="url(#sp-wobble-2)">
                    <path d="M88 133 V196" />
                    <path d="M172 90 V204" />
                    <path d="M222 133 V196" />
                    <path d="M262 133 V196" />
                </g>

                {/* =====================================================
            COTA — ESLORA (largo total, recta)
        ===================================================== */}
                <g stroke={INK} strokeWidth="0.7" opacity="0.65">
                    <line x1="40" y1="222" x2="320" y2="222" />
                    <line x1="40" y1="213" x2="40" y2="229" />
                    <line x1="320" y1="213" x2="320" y2="229" />
                    <path d="M48 218L40 222L48 226" />
                    <path d="M312 218L320 222L312 226" />
                </g>

                {/* =====================================================
            COTA — PUNTAL (alto, recto)
        ===================================================== */}
                <g stroke={INK} strokeWidth="0.7" opacity="0.65">
                    <line x1="345" y1="80" x2="345" y2="187" />
                    <line x1="337" y1="80" x2="353" y2="80" />
                    <line x1="337" y1="187" x2="353" y2="187" />
                    <path d="M341 88L345 80L349 88" />
                    <path d="M341 179L345 187L349 179" />
                </g>

                {/* =====================================================
            TICKS DE MEDICIÓN (borde superior, sueltos)
        ===================================================== */}
                <g stroke={INK} strokeWidth="0.5" opacity="0.4">
                    {ticks.map((i) => (
                        <line key={i} x1={30 + i * 18} y1="60" x2={30 + i * 18} y2={i % 5 === 0 ? 66 : 63} />
                    ))}
                </g>

                {/* =====================================================
            NOTAS TÉCNICAS
        ===================================================== */}
                <g fill={INK} fontFamily="monospace" opacity="0.75">
                    <text x="26" y="76" fontSize="7">NAVAL / 07</text>
                    <text x="26" y="86" fontSize="6">SIDE ELEVATION</text>
                    <text x="26" y="96" fontSize="6">SCALE 1:250</text>

                    <text x="262" y="76" fontSize="6">FRAME 02</text>
                    <text x="262" y="86" fontSize="6">REV. 04</text>

                    <text x="168" y="200" fontSize="6">CL</text>
                    <text x="150" y="234" fontSize="7">LOA 118.6</text>
                    <text x="349" y="140" fontSize="7" transform="rotate(90 349 140)">DRAFT 9.4</text>
                </g>

                {/* =====================================================
            CÍRCULOS TÉCNICOS SUELTOS
        ===================================================== */}
                <g stroke={INK} strokeWidth="0.55" opacity="0.45">
                    <circle cx="42" cy="205" r="7" />
                    <circle cx="42" cy="205" r="3" />
                </g>

                {/* =====================================================
            ETIQUETA SUELTA
        ===================================================== */}
                <g fill={INK} fontFamily="monospace" fontSize="5.5" opacity="0.55">
                    <text x="26" y="250">SHIP DESIGN / SIDE PROFILE</text>
                    <text x="270" y="250">A-02 / 07</text>
                </g>
            </svg>
        </motion.div>
    );
}