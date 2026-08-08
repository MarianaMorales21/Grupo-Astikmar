import { motion } from "framer-motion";

export default function ShipTanksBlueprint({ className = "" }) {
    const ticks = Array.from({ length: 17 }, (_, i) => i);

    const tankLabels = [
        { x: 76, y: 177, text: "T-01" },
        { x: 132, y: 177, text: "T-02" },
        { x: 188, y: 177, text: "T-03" },
        { x: 244, y: 177, text: "T-04" },
    ];

    const INK = "#26333F";

    return (
        <motion.div
            className={className}
            animate={{
                y: [-4, 4, -4],
                rotate: [-0.35, 0.35, -0.35],
                opacity: [0.42, 0.56, 0.42],
            }}
            transition={{
                duration: 13,
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
                    {/* Wobble exclusivamente para el dibujo */}
                    <filter
                        id="tank-wobble"
                        x="-25%"
                        y="-25%"
                        width="150%"
                        height="150%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.045"
                            numOctaves="2"
                            seed="17"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.35"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    {/* Wobble más ligero */}
                    <filter
                        id="tank-wobble-light"
                        x="-25%"
                        y="-25%"
                        width="150%"
                        height="150%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.025 0.055"
                            numOctaves="2"
                            seed="29"
                            result="noise2"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise2"
                            scale="0.8"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>

                {/* =====================================================
                    RETÍCULA SUELTA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.4"
                    opacity="0.17"
                >
                    {Array.from({ length: 21 }, (_, i) => (
                        <line
                            key={`v-${i}`}
                            x1={24 + i * 15}
                            y1="54"
                            x2={24 + i * 15}
                            y2="218"
                        />
                    ))}

                    {Array.from({ length: 12 }, (_, i) => (
                        <line
                            key={`h-${i}`}
                            x1="24"
                            y1={54 + i * 15}
                            x2="336"
                            y2={54 + i * 15}
                        />
                    ))}
                </g>

                {/* =====================================================
                    EJES DE REFERENCIA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    strokeDasharray="5 4"
                    opacity="0.45"
                >
                    {/* Eje longitudinal */}
                    <line
                        x1="24"
                        y1="137"
                        x2="336"
                        y2="137"
                    />

                    {/* Eje central */}
                    <line
                        x1="180"
                        y1="54"
                        x2="180"
                        y2="218"
                    />
                </g>

                {/* =====================================================
                    CORTE PRINCIPAL DEL CASCO
                ===================================================== */}

                {/* Segunda pasada de grafito */}
                <g
                    stroke={INK}
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.18"
                    filter="url(#tank-wobble-light)"
                >
                    <path
                        d="
                            M43 122
                            C48 105 67 91 94 84
                            L266 84
                            C294 91 312 105 317 122
                            L317 174
                            C302 191 281 202 252 209
                            H108
                            C79 202 58 191 43 174
                            Z
                        "
                    />
                </g>

                {/* Dibujo principal */}
                <g
                    stroke={INK}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.94"
                    filter="url(#tank-wobble)"
                >
                    {/* =================================================
                        CONTORNO DEL CASCO
                    ================================================= */}

                    <path
                        d="
                            M43 122
                            C48 105 67 91 94 84
                            L266 84
                            C294 91 312 105 317 122
                            L317 174
                            C302 191 281 202 252 209
                            H108
                            C79 202 58 191 43 174
                            Z
                        "
                    />

                    {/* Cubierta superior */}
                    <path d="M67 105H293" />

                    {/* Línea interior */}
                    <path d="M54 121H306" />

                    {/* Fondo del doble casco */}
                    <path d="M72 187C115 197 245 197 288 187" />

                    {/* =================================================
                        TANQUE 1
                    ================================================= */}

                    <path
                        d="
                            M67 121
                            V170
                            C74 179 83 183 94 187
                            H112
                            C119 180 124 174 124 166
                            V121
                        "
                    />

                    {/* =================================================
                        TANQUE 2
                    ================================================= */}

                    <path
                        d="
                            M124 121
                            V166
                            C124 176 132 183 143 187
                            H163
                            C171 181 176 174 176 165
                            V121
                        "
                    />

                    {/* =================================================
                        TANQUE 3
                    ================================================= */}

                    <path
                        d="
                            M184 121
                            V165
                            C184 174 189 181 197 187
                            H217
                            C228 183 236 176 236 166
                            V121
                        "
                    />

                    {/* =================================================
                        TANQUE 4
                    ================================================= */}

                    <path
                        d="
                            M236 121
                            V166
                            C236 174 241 180 248 187
                            H266
                            C277 183 286 179 293 170
                            V121
                        "
                    />

                    {/* =================================================
                        MAMPAROS
                    ================================================= */}

                    <path d="M124 105V188" />
                    <path d="M184 105V188" />
                    <path d="M236 105V188" />

                    {/* =================================================
                        DOBLE FONDO
                    ================================================= */}

                    <path d="M78 187H282" />

                    <path
                        d="
                            M88 187
                            L88 197
                            H105
                            L105 188
                        "
                    />

                    <path
                        d="
                            M145 187
                            L145 198
                            H163
                            L163 187
                        "
                    />

                    <path
                        d="
                            M198 187
                            L198 198
                            H216
                            L216 187
                        "
                    />

                    <path
                        d="
                            M254 187
                            L254 197
                            H271
                            L271 187
                        "
                    />

                    {/* =================================================
                        TAPAS / ACCESS HATCHES
                    ================================================= */}

                    <rect x="87" y="96" width="22" height="8" />
                    <rect x="145" y="96" width="22" height="8" />
                    <rect x="198" y="96" width="22" height="8" />
                    <rect x="252" y="96" width="22" height="8" />

                    {/* Pequeños tornillos */}
                    <circle cx="91" cy="100" r="1.2" />
                    <circle cx="105" cy="100" r="1.2" />

                    <circle cx="149" cy="100" r="1.2" />
                    <circle cx="163" cy="100" r="1.2" />

                    <circle cx="202" cy="100" r="1.2" />
                    <circle cx="216" cy="100" r="1.2" />

                    <circle cx="256" cy="100" r="1.2" />
                    <circle cx="270" cy="100" r="1.2" />

                    {/* =================================================
                        TUBERÍAS
                    ================================================= */}

                    <path
                        d="
                            M96 104
                            V113
                            H145
                            V104
                        "
                    />

                    <path
                        d="
                            M155 104
                            V113
                            H204
                            V104
                        "
                    />

                    <path
                        d="
                            M212 104
                            V113
                            H263
                            V104
                        "
                    />

                    {/* Tuberías verticales */}
                    <path d="M101 113V157" />
                    <path d="M155 113V157" />
                    <path d="M210 113V157" />
                    <path d="M264 113V157" />

                    {/* Válvulas */}
                    <circle cx="101" cy="158" r="3" />
                    <circle cx="155" cy="158" r="3" />
                    <circle cx="210" cy="158" r="3" />
                    <circle cx="264" cy="158" r="3" />

                    {/* =================================================
                        BOMBAS
                    ================================================= */}

                    <circle cx="94" cy="166" r="7" />
                    <circle cx="155" cy="166" r="7" />
                    <circle cx="210" cy="166" r="7" />
                    <circle cx="266" cy="166" r="7" />

                    <path d="M89 166H99" />
                    <path d="M150 166H160" />
                    <path d="M205 166H215" />
                    <path d="M261 166H271" />

                    {/* =================================================
                        ESCALERAS
                    ================================================= */}

                    <path d="M116 124L108 151" />
                    <path d="M121 124L113 151" />

                    <path d="M246 124L254 151" />
                    <path d="M251 124L259 151" />

                    {[130, 136, 142, 148].map((y) => (
                        <line
                            key={`left-step-${y}`}
                            x1={111 - (y - 130) * 0.15}
                            y1={y}
                            x2={118 - (y - 130) * 0.15}
                            y2={y}
                        />
                    ))}

                    {[130, 136, 142, 148].map((y) => (
                        <line
                            key={`right-step-${y}`}
                            x1={249 + (y - 130) * 0.15}
                            y1={y}
                            x2={256 + (y - 130) * 0.15}
                            y2={y}
                        />
                    ))}
                </g>

                {/* =====================================================
                    LÍNEAS DE CONSTRUCCIÓN
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.34"
                    filter="url(#tank-wobble-light)"
                >
                    <path d="M67 105V214" />
                    <path d="M124 84V218" />
                    <path d="M184 84V218" />
                    <path d="M236 84V218" />
                    <path d="M293 105V214" />

                    {/* Proyección de niveles */}
                    <path d="M43 122H24" />
                    <path d="M43 174H24" />
                    <path d="M317 122H336" />
                    <path d="M317 174H336" />
                </g>

                {/* =====================================================
                    NIVEL DE LÍQUIDO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    strokeDasharray="3 3"
                    opacity="0.5"
                >
                    <path d="M68 151H123" />
                    <path d="M125 151H183" />
                    <path d="M185 151H235" />
                    <path d="M237 151H292" />
                </g>

                {/* =====================================================
                    COTA — ESLORA DE LA SECCIÓN
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >
                    <line
                        x1="43"
                        y1="230"
                        x2="317"
                        y2="230"
                    />

                    <line
                        x1="43"
                        y1="221"
                        x2="43"
                        y2="237"
                    />

                    <line
                        x1="317"
                        y1="221"
                        x2="317"
                        y2="237"
                    />

                    <path d="M51 226L43 230L51 234" />
                    <path d="M309 226L317 230L309 234" />
                </g>

                {/* =====================================================
                    COTAS INTERNAS
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.52"
                >
                    <line x1="67" y1="76" x2="124" y2="76" />
                    <line x1="67" y1="70" x2="67" y2="82" />
                    <line x1="124" y1="70" x2="124" y2="82" />

                    <line x1="124" y1="70" x2="184" y2="70" />
                    <line x1="184" y1="70" x2="236" y2="70" />
                    <line x1="236" y1="76" x2="293" y2="76" />

                    <path d="M75 73L67 76L75 79" />
                    <path d="M116 73L124 76L116 79" />

                    <path d="M132 67L124 70L132 73" />
                    <path d="M176 67L184 70L176 73" />
                </g>

                {/* =====================================================
                    TICKS SUPERIORES
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.5"
                    opacity="0.4"
                >
                    {ticks.map((i) => (
                        <line
                            key={i}
                            x1={30 + i * 18}
                            y1="54"
                            x2={30 + i * 18}
                            y2={i % 5 === 0 ? 61 : 57}
                        />
                    ))}
                </g>

                {/* =====================================================
                    ETIQUETAS DE TANQUES
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.72"
                >
                    {tankLabels.map((tank) => (
                        <text
                            key={tank.text}
                            x={tank.x}
                            y={tank.y}
                            fontSize="6"
                        >
                            {tank.text}
                        </text>
                    ))}
                </g>

                {/* =====================================================
                    NOTAS TÉCNICAS
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.74"
                >
                    <text x="25" y="68" fontSize="7">
                        NAVAL / 12
                    </text>

                    <text x="25" y="78" fontSize="6">
                        TANK ARRANGEMENT
                    </text>

                    <text x="25" y="88" fontSize="6">
                        SECTION / B-B
                    </text>

                    <text x="260" y="68" fontSize="6">
                        FRAME 06
                    </text>

                    <text x="260" y="78" fontSize="6">
                        REV. 03
                    </text>

                    <text x="260" y="88" fontSize="6">
                        SCALE 1:200
                    </text>

                    <text x="150" y="242" fontSize="7">
                        TANK GROUP 04
                    </text>
                </g>

                {/* =====================================================
                    CALLOUTS
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.48"
                >
                    {/* Tank 01 */}
                    <path d="M94 158L67 143H32" />
                    <circle cx="94" cy="158" r="2" />

                    {/* Tank 02 */}
                    <path d="M155 158L155 129H132" />
                    <circle cx="155" cy="158" r="2" />

                    {/* Tank 03 */}
                    <path d="M210 158L210 129H235" />
                    <circle cx="210" cy="158" r="2" />

                    {/* Tank 04 */}
                    <path d="M266 158L293 143H328" />
                    <circle cx="266" cy="158" r="2" />
                </g>

                {/* =====================================================
                    CÍRCULO TÉCNICO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.45"
                >
                    <circle cx="45" cy="205" r="8" />
                    <circle cx="45" cy="205" r="3" />

                    <line x1="37" y1="205" x2="53" y2="205" />
                    <line x1="45" y1="197" x2="45" y2="213" />
                </g>

                {/* =====================================================
                    ETIQUETA FINAL
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="5.5"
                    opacity="0.55"
                >
                    <text x="25" y="258">
                        MARINE ENGINEERING / TANK SECTION
                    </text>

                    <text x="270" y="258">
                        B-04 / 12
                    </text>
                </g>
            </svg>
        </motion.div>
    );
}