import { motion } from "framer-motion";

export default function MarineEngineBlueprint({ className = "" }) {
    const INK = "#26333F";

    const cylinders = [92, 120, 148, 176, 204, 232];

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
                    {/* Wobble fuerte: solamente piezas dibujadas */}
                    <filter
                        id="engine-wobble"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.045"
                            numOctaves="2"
                            seed="21"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.3"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    {/* Wobble ligero */}
                    <filter
                        id="engine-wobble-light"
                        x="-20%"
                        y="-20%"
                        width="140%"
                        height="140%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.025 0.055"
                            numOctaves="2"
                            seed="32"
                            result="noise2"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise2"
                            scale="0.75"
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
                            y1="48"
                            x2={24 + i * 15}
                            y2="222"
                        />
                    ))}

                    {Array.from({ length: 12 }, (_, i) => (
                        <line
                            key={`h-${i}`}
                            x1="24"
                            y1={48 + i * 15}
                            x2="336"
                            y2={48 + i * 15}
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
                    opacity="0.42"
                >
                    <line
                        x1="24"
                        y1="142"
                        x2="336"
                        y2="142"
                    />

                    <line
                        x1="60"
                        y1="48"
                        x2="60"
                        y2="222"
                    />

                    <line
                        x1="300"
                        y1="48"
                        x2="300"
                        y2="222"
                    />
                </g>

                {/* =====================================================
                    MOTOR — SOMBRA DE GRAFITO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.18"
                    filter="url(#engine-wobble-light)"
                >
                    <path
                        d="
                            M58 158
                            L58 112
                            L72 112
                            L72 91
                            L258 91
                            L258 106
                            L281 106
                            L281 158
                            Z
                        "
                    />
                </g>

                {/* =====================================================
                    MOTOR PRINCIPAL
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.95"
                    filter="url(#engine-wobble)"
                >
                    {/* Bloque */}
                    <path
                        d="
                            M58 158
                            L58 112
                            L72 112
                            L72 91
                            L258 91
                            L258 106
                            L281 106
                            L281 158
                            Z
                        "
                    />

                    {/* Base */}
                    <path d="M48 158H292" />
                    <path d="M56 158V176H72V158" />
                    <path d="M268 158V176H284V158" />

                    {/* Cárter inferior */}
                    <path
                        d="
                            M72 158
                            L80 184
                            H258
                            L268 158
                        "
                    />

                    {/* =================================================
                        CULATAS / CILINDROS
                    ================================================= */}

                    {cylinders.map((x, index) => (
                        <g key={x}>
                            {/* Cabeza */}
                            <rect
                                x={x - 9}
                                y="83"
                                width="18"
                                height="30"
                                rx="2"
                            />

                            {/* Tapa */}
                            <path
                                d={`
                                    M${x - 8} 83
                                    L${x - 5} 75
                                    H${x + 5}
                                    L${x + 8} 83
                                `}
                            />

                            {/* Cilindro */}
                            <path
                                d={`
                                    M${x - 7} 113
                                    V147
                                    H${x + 7}
                                    V113
                                `}
                            />

                            {/* Pistón */}
                            <line
                                x1={x - 5}
                                y1="130"
                                x2={x + 5}
                                y2="130"
                            />

                            {/* Biela */}
                            <line
                                x1={x}
                                y1="130"
                                x2={x}
                                y2="160"
                            />

                            {/* Válvula */}
                            <line
                                x1={x - 5}
                                y1="78"
                                x2={x - 5}
                                y2="68"
                            />

                            <line
                                x1={x + 5}
                                y1="78"
                                x2={x + 5}
                                y2="68"
                            />
                        </g>
                    ))}

                    {/* =================================================
                        ÁRBOL DE LEVAS
                    ================================================= */}

                    <line
                        x1="76"
                        y1="65"
                        x2="246"
                        y2="65"
                    />

                    {cylinders.map((x) => (
                        <circle
                            key={`cam-${x}`}
                            cx={x}
                            cy="65"
                            r="5"
                        />
                    ))}

                    {/* =================================================
                        INYECTORES
                    ================================================= */}

                    {cylinders.map((x) => (
                        <g key={`injector-${x}`}>
                            <line
                                x1={x}
                                y1="75"
                                x2={x}
                                y2="83"
                            />
                            <circle
                                cx={x}
                                cy="72"
                                r="2"
                            />
                        </g>
                    ))}

                    {/* =================================================
                        COLECTOR DE ESCAPE
                    ================================================= */}

                    <path
                        d="
                            M74 112
                            C96 118 116 118 138 112
                            C160 118 180 118 202 112
                            C224 118 244 118 260 112
                        "
                    />

                    <path
                        d="
                            M78 119
                            C100 125 119 125 139 119
                            C161 125 181 125 202 119
                            C224 125 244 125 257 119
                        "
                    />

                    {/* =================================================
                        TURBO / TURBOCOMPRESOR
                    ================================================= */}

                    <circle
                        cx="284"
                        cy="82"
                        r="20"
                    />

                    <circle
                        cx="284"
                        cy="82"
                        r="11"
                    />

                    <circle
                        cx="284"
                        cy="82"
                        r="3"
                    />

                    {/* Carcasa turbo */}
                    <path
                        d="
                            M269 67
                            C281 57 298 61 304 73
                            C310 86 302 99 288 102
                        "
                    />

                    {/* Conducto */}
                    <path
                        d="
                            M258 91
                            C270 94 280 96 291 103
                        "
                    />

                    {/* =================================================
                        ESCAPE SUPERIOR
                    ================================================= */}

                    <path
                        d="
                            M281 106
                            V62
                            H300
                            V106
                        "
                    />

                    <path
                        d="M282 62H299"
                    />

                    {/* =================================================
                        BOMBA / AUXILIAR
                    ================================================= */}

                    <circle
                        cx="285"
                        cy="143"
                        r="12"
                    />

                    <circle
                        cx="285"
                        cy="143"
                        r="5"
                    />

                    <path d="M297 143H313" />

                    {/* =================================================
                        VOLANTE
                    ================================================= */}

                    <circle
                        cx="48"
                        cy="142"
                        r="20"
                    />

                    <circle
                        cx="48"
                        cy="142"
                        r="7"
                    />

                    <path d="M48 122V162" />
                    <path d="M28 142H68" />

                    {/* =================================================
                        TUBERÍAS
                    ================================================= */}

                    <path d="M73 105H45V88H31" />

                    <path d="M250 105H315V118H329" />

                    <path d="M73 150H40V166H29" />

                    {/* Válvulas */}
                    <circle cx="45" cy="88" r="4" />
                    <circle cx="315" cy="118" r="4" />
                    <circle cx="40" cy="166" r="4" />
                </g>

                {/* =====================================================
                    LÍNEAS DE CONSTRUCCIÓN
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.35"
                    filter="url(#engine-wobble-light)"
                >
                    {cylinders.map((x) => (
                        <line
                            key={`projection-${x}`}
                            x1={x}
                            y1="55"
                            x2={x}
                            y2="205"
                        />
                    ))}

                    <path d="M48 184H292" />
                    <path d="M48 194H292" />
                    <path d="M58 205H282" />
                </g>

                {/* =====================================================
                    COTA — LARGO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >
                    <line
                        x1="48"
                        y1="222"
                        x2="292"
                        y2="222"
                    />

                    <line
                        x1="48"
                        y1="214"
                        x2="48"
                        y2="230"
                    />

                    <line
                        x1="292"
                        y1="214"
                        x2="292"
                        y2="230"
                    />

                    <path d="M56 218L48 222L56 226" />
                    <path d="M284 218L292 222L284 226" />
                </g>

                {/* =====================================================
                    COTA — ALTURA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >
                    <line
                        x1="330"
                        y1="65"
                        x2="330"
                        y2="184"
                    />

                    <line
                        x1="322"
                        y1="65"
                        x2="338"
                        y2="65"
                    />

                    <line
                        x1="322"
                        y1="184"
                        x2="338"
                        y2="184"
                    />

                    <path d="M326 73L330 65L334 73" />
                    <path d="M326 176L330 184L334 176" />
                </g>

                {/* =====================================================
                    COTAS ENTRE CILINDROS
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.48"
                >
                    <line x1="92" y1="48" x2="120" y2="48" />
                    <line x1="120" y1="48" x2="148" y2="48" />
                    <line x1="148" y1="48" x2="176" y2="48" />
                    <line x1="176" y1="48" x2="204" y2="48" />
                    <line x1="204" y1="48" x2="232" y2="48" />

                    <line x1="92" y1="44" x2="92" y2="52" />
                    <line x1="120" y1="44" x2="120" y2="52" />
                    <line x1="148" y1="44" x2="148" y2="52" />
                    <line x1="176" y1="44" x2="176" y2="52" />
                    <line x1="204" y1="44" x2="204" y2="52" />
                    <line x1="232" y1="44" x2="232" y2="52" />
                </g>

                {/* =====================================================
                    TICKS SUPERIORES
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.5"
                    opacity="0.4"
                >
                    {Array.from({ length: 17 }, (_, i) => (
                        <line
                            key={i}
                            x1={30 + i * 18}
                            y1="48"
                            x2={30 + i * 18}
                            y2={i % 5 === 0 ? 55 : 51}
                        />
                    ))}
                </g>

                {/* =====================================================
                    ETIQUETAS DE CILINDROS
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="5.5"
                    opacity="0.65"
                >
                    {cylinders.map((x, index) => (
                        <text
                            key={`cylinder-label-${x}`}
                            x={x - 5}
                            y="126"
                        >
                            C{index + 1}
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
                    <text x="25" y="64" fontSize="7">
                        MARINE / 09
                    </text>

                    <text x="25" y="74" fontSize="6">
                        ENGINE SECTION
                    </text>

                    <text x="25" y="84" fontSize="6">
                        DIESEL / 6 CYL
                    </text>

                    <text x="235" y="64" fontSize="6">
                        FRAME 11
                    </text>

                    <text x="235" y="74" fontSize="6">
                        REV. 05
                    </text>

                    <text x="235" y="84" fontSize="6">
                        SCALE 1:100
                    </text>

                    <text x="136" y="238" fontSize="7">
                        MAIN PROPULSION UNIT
                    </text>
                </g>

                {/* =====================================================
                    CALLOUT — TURBO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.5"
                >
                    <path d="M291 68L316 51H342" />
                    <circle cx="291" cy="68" r="2" />
                </g>

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.65"
                >
                    <text x="315" y="47">
                        TURBO
                    </text>
                </g>

                {/* =====================================================
                    CALLOUT — INJECTION
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.5"
                >
                    <path d="M148 72L128 58H103" />
                    <circle cx="148" cy="72" r="2" />
                </g>

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.65"
                >
                    <text x="76" y="56">
                        INJECTION
                    </text>
                </g>

                {/* =====================================================
                    CALLOUT — CRANKSHAFT
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.5"
                >
                    <path d="M176 161L176 204H112" />
                    <circle cx="176" cy="161" r="2" />
                </g>

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.65"
                >
                    <text x="76" y="207">
                        CRANKSHAFT
                    </text>
                </g>

                {/* =====================================================
                    PEQUEÑO DIAGRAMA TÉCNICO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.42"
                >
                    <circle cx="48" cy="205" r="8" />
                    <circle cx="48" cy="205" r="3" />
                    <line x1="40" y1="205" x2="56" y2="205" />
                    <line x1="48" y1="197" x2="48" y2="213" />
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
                        MARINE ENGINEERING / PROPULSION
                    </text>

                    <text x="276" y="258">
                        E-09 / 11
                    </text>
                </g>
            </svg>
        </motion.div>
    );
}