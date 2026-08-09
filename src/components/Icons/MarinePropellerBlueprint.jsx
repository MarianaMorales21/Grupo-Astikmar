import { motion } from "framer-motion";

export default function MarinePropellerBlueprint({ className = "" }) {
    const INK = "#26333F";

    const blades = [
        { angle: 0 },
        { angle: 72 },
        { angle: 144 },
        { angle: 216 },
        { angle: 288 },
    ];

    return (
        <motion.div
            className={className}
            animate={{
                y: [-3, 3, -3],
                rotate: [-0.25, 0.25, -0.25],
                opacity: [0.45, 0.58, 0.45],
            }}
            transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox="0 0 720 520"
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                {/* =========================================================
                    DEFINICIONES
                ========================================================= */}

                <defs>

                    {/* Vibración fuerte de las líneas principales */}
                    <filter
                        id="propeller-wobble"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.04"
                            numOctaves="2"
                            seed="18"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    {/* Vibración ligera */}
                    <filter
                        id="propeller-wobble-light"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.025 0.05"
                            numOctaves="2"
                            seed="31"
                            result="noise2"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise2"
                            scale="0.55"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                </defs>


                {/* =========================================================
                    BORDE EXTERIOR
                ========================================================= */}

                <rect
                    x="18"
                    y="18"
                    width="684"
                    height="484"
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.65"
                />


                {/* =========================================================
                    RETÍCULA
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.35"
                    opacity="0.13"
                >

                    {Array.from({ length: 29 }, (_, i) => (
                        <line
                            key={`grid-v-${i}`}
                            x1={30 + i * 24}
                            y1="30"
                            x2={30 + i * 24}
                            y2="490"
                        />
                    ))}

                    {Array.from({ length: 20 }, (_, i) => (
                        <line
                            key={`grid-h-${i}`}
                            x1="30"
                            y1={30 + i * 24}
                            x2="690"
                            y2={30 + i * 24}
                        />
                    ))}

                </g>


                {/* =========================================================
                    EJES PRINCIPALES
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    strokeDasharray="7 5"
                    opacity="0.45"
                >

                    <line
                        x1="55"
                        y1="265"
                        x2="665"
                        y2="265"
                    />

                    <line
                        x1="275"
                        y1="55"
                        x2="275"
                        y2="475"
                    />

                    <line
                        x1="470"
                        y1="55"
                        x2="470"
                        y2="475"
                    />

                </g>


                {/* =========================================================
                    VISTA PRINCIPAL — HÉLICE
                ========================================================= */}

                <g
                    transform="translate(275 255)"
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#propeller-wobble)"
                >

                    {/* Circunferencia exterior */}
                    <circle
                        cx="0"
                        cy="0"
                        r="145"
                        strokeWidth="1.2"
                        opacity="0.5"
                    />

                    {/* Circunferencia interior */}
                    <circle
                        cx="0"
                        cy="0"
                        r="105"
                        strokeWidth="0.7"
                        opacity="0.42"
                    />


                    {/* =====================================================
                        PALAS DE LA HÉLICE
                    ===================================================== */}

                    {blades.map((blade, index) => (
                        <g
                            key={`blade-${index}`}
                            transform={`rotate(${blade.angle})`}
                        >

                            {/* Perfil de pala */}
                            <path
                                d="
                                    M 0 -24

                                    C 20 -48,
                                      48 -82,
                                      68 -108

                                    C 82 -126,
                                      94 -135,
                                      106 -130

                                    C 116 -125,
                                      114 -109,
                                      104 -91

                                    C 89 -64,
                                      67 -37,
                                      36 -17

                                    C 23 -9,
                                      12 -5,
                                      0 0

                                    Z
                                "
                                strokeWidth="1.5"
                                opacity="0.95"
                            />

                            {/* Línea de construcción de la pala */}
                            <path
                                d="
                                    M 9 -20
                                    C 32 -53,
                                      59 -91,
                                      91 -119
                                "
                                strokeWidth="0.6"
                                opacity="0.55"
                            />

                            {/* Línea de curvatura */}
                            <path
                                d="
                                    M 28 -23
                                    C 53 -47,
                                      73 -70,
                                      94 -101
                                "
                                strokeWidth="0.55"
                                opacity="0.45"
                            />

                        </g>
                    ))}


                    {/* =====================================================
                        CUBO CENTRAL
                    ===================================================== */}

                    <circle
                        cx="0"
                        cy="0"
                        r="43"
                        strokeWidth="1.6"
                    />

                    <circle
                        cx="0"
                        cy="0"
                        r="27"
                        strokeWidth="1"
                    />

                    <circle
                        cx="0"
                        cy="0"
                        r="11"
                        strokeWidth="1.3"
                    />

                    {/* Agujero central */}
                    <circle
                        cx="0"
                        cy="0"
                        r="5"
                        strokeWidth="1"
                    />


                    {/* Radios del cubo */}
                    <line
                        x1="-43"
                        y1="0"
                        x2="-27"
                        y2="0"
                        strokeWidth="0.8"
                    />

                    <line
                        x1="27"
                        y1="0"
                        x2="43"
                        y2="0"
                        strokeWidth="0.8"
                    />

                    <line
                        x1="0"
                        y1="-43"
                        x2="0"
                        y2="-27"
                        strokeWidth="0.8"
                    />

                    <line
                        x1="0"
                        y1="27"
                        x2="0"
                        y2="43"
                        strokeWidth="0.8"
                    />

                </g>


                {/* =========================================================
                    VISTA LATERAL — EJE + HÉLICE
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#propeller-wobble)"
                >

                    {/* Eje */}
                    <path
                        d="
                            M 470 232
                            H 620
                            L 650 245
                            L 650 285
                            L 620 298
                            H 470
                        "
                        strokeWidth="1.5"
                    />

                    {/* Eje interior */}
                    <line
                        x1="470"
                        y1="255"
                        x2="650"
                        y2="255"
                        strokeWidth="0.7"
                    />

                    {/* Cubo lateral */}
                    <path
                        d="
                            M 438 226
                            H 478
                            V 284
                            H 438
                            Z
                        "
                        strokeWidth="1.2"
                    />

                    {/* Hélice lateral */}
                    <path
                        d="
                            M 438 226
                            C 425 210 417 198 409 184
                            C 402 173 394 174 391 184
                            C 388 198 398 218 414 239

                            M 438 284
                            C 425 300 417 312 409 326
                            C 402 337 394 336 391 326
                            C 388 312 398 292 414 271
                        "
                        strokeWidth="1.2"
                    />

                    {/* Línea de centro */}
                    <line
                        x1="380"
                        y1="255"
                        x2="670"
                        y2="255"
                        strokeWidth="0.55"
                        strokeDasharray="5 4"
                        opacity="0.5"
                    />

                    {/* Brida */}
                    <rect
                        x="605"
                        y="224"
                        width="25"
                        height="62"
                        strokeWidth="1"
                    />

                    {/* Pernos */}
                    <circle
                        cx="617"
                        cy="237"
                        r="3"
                        strokeWidth="0.7"
                    />

                    <circle
                        cx="617"
                        cy="273"
                        r="3"
                        strokeWidth="0.7"
                    />

                </g>


                {/* =========================================================
                    SECCIÓN DEL CUBO
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.9"
                    filter="url(#propeller-wobble-light)"
                >

                    {/* Caja de sección */}
                    <path
                        d="
                            M 510 370
                            H 620
                            V 455
                            H 510
                            Z
                        "
                    />

                    {/* Eje */}
                    <rect
                        x="535"
                        y="394"
                        width="70"
                        height="36"
                    />

                    {/* Rodamiento */}
                    <circle
                        cx="570"
                        cy="412"
                        r="25"
                    />

                    <circle
                        cx="570"
                        cy="412"
                        r="12"
                    />

                    {/* Ranuras */}
                    <line
                        x1="545"
                        y1="387"
                        x2="595"
                        y2="387"
                    />

                    <line
                        x1="545"
                        y1="437"
                        x2="595"
                        y2="437"
                    />

                    {/* Centro */}
                    <line
                        x1="520"
                        y1="412"
                        x2="620"
                        y2="412"
                        strokeDasharray="4 4"
                        opacity="0.45"
                    />

                </g>


                {/* =========================================================
                    COTAS — DIÁMETRO DE HÉLICE
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <line
                        x1="130"
                        y1="110"
                        x2="420"
                        y2="110"
                    />

                    <line
                        x1="130"
                        y1="103"
                        x2="130"
                        y2="117"
                    />

                    <line
                        x1="420"
                        y1="103"
                        x2="420"
                        y2="117"
                    />

                    <path
                        d="M 138 106 L 130 110 L 138 114"
                    />

                    <path
                        d="M 412 106 L 420 110 L 412 114"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="9"
                    opacity="0.7"
                >

                    <text
                        x="245"
                        y="101"
                    >
                        Ø 2900
                    </text>

                </g>


                {/* =========================================================
                    COTA — LONGITUD DEL EJE
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <line
                        x1="470"
                        y1="315"
                        x2="650"
                        y2="315"
                    />

                    <line
                        x1="470"
                        y1="307"
                        x2="470"
                        y2="323"
                    />

                    <line
                        x1="650"
                        y1="307"
                        x2="650"
                        y2="323"
                    />

                    <path
                        d="M 478 311 L 470 315 L 478 319"
                    />

                    <path
                        d="M 642 311 L 650 315 L 642 319"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >

                    <text
                        x="535"
                        y="307"
                    >
                        1800
                    </text>

                </g>


                {/* =========================================================
                    COTAS VERTICALES
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.62"
                >

                    <line
                        x1="92"
                        y1="110"
                        x2="92"
                        y2="400"
                    />

                    <line
                        x1="84"
                        y1="110"
                        x2="100"
                        y2="110"
                    />

                    <line
                        x1="84"
                        y1="400"
                        x2="100"
                        y2="400"
                    />

                    <path
                        d="M 88 118 L 92 110 L 96 118"
                    />

                    <path
                        d="M 88 392 L 92 400 L 96 392"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >

                    <text
                        x="72"
                        y="275"
                        transform="rotate(-90 72 275)"
                    >
                        2900
                    </text>

                </g>


                {/* =========================================================
                    COTAS DEL CUBO
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    opacity="0.5"
                >

                    <line
                        x1="232"
                        y1="440"
                        x2="318"
                        y2="440"
                    />

                    <line
                        x1="232"
                        y1="434"
                        x2="232"
                        y2="446"
                    />

                    <line
                        x1="318"
                        y1="434"
                        x2="318"
                        y2="446"
                    />

                </g>


                <text
                    x="263"
                    y="433"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.65"
                >
                    Ø 860
                </text>


                {/* =========================================================
                    LÍNEAS DE PROYECCIÓN
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.45"
                    opacity="0.32"
                >

                    <line
                        x1="130"
                        y1="110"
                        x2="130"
                        y2="390"
                    />

                    <line
                        x1="420"
                        y1="110"
                        x2="420"
                        y2="390"
                    />

                    <line
                        x1="470"
                        y1="330"
                        x2="470"
                        y2="470"
                    />

                    <line
                        x1="650"
                        y1="330"
                        x2="650"
                        y2="470"
                    />

                </g>


                {/* =========================================================
                    CALLOUT — PALAS
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.55"
                >

                    <path
                        d="
                            M 385 165
                            L 470 125
                            H 540
                        "
                    />

                    <circle
                        cx="385"
                        cy="165"
                        r="2"
                    />

                </g>


                <text
                    x="543"
                    y="122"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    PROPELLER BLADE
                </text>


                {/* =========================================================
                    CALLOUT — HUB
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.55"
                >

                    <path
                        d="
                            M 280 255
                            L 330 340
                            H 405
                        "
                    />

                    <circle
                        cx="280"
                        cy="255"
                        r="2"
                    />

                </g>


                <text
                    x="408"
                    y="343"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    PROPELLER HUB
                </text>


                {/* =========================================================
                    SECCIÓN A-A
                ========================================================= */}

                <text
                    x="535"
                    y="365"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="9"
                    opacity="0.75"
                >
                    SECTION A-A
                </text>


                {/* =========================================================
                    NOTAS TÉCNICAS
                ========================================================= */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.72"
                >

                    <text
                        x="45"
                        y="55"
                        fontSize="9"
                    >
                        MARINE / 14
                    </text>

                    <text
                        x="45"
                        y="68"
                        fontSize="7"
                    >
                        PROPULSION SYSTEM
                    </text>

                    <text
                        x="45"
                        y="80"
                        fontSize="7"
                    >
                        FIVE BLADE PROPELLER
                    </text>

                    <text
                        x="470"
                        y="55"
                        fontSize="7"
                    >
                        FRAME 27
                    </text>

                    <text
                        x="470"
                        y="67"
                        fontSize="7"
                    >
                        REV. 02
                    </text>

                    <text
                        x="470"
                        y="79"
                        fontSize="7"
                    >
                        SCALE 1:20
                    </text>

                </g>


                {/* =========================================================
                    ESPECIFICACIONES
                ========================================================= */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.7"
                >

                    <text x="510" y="470">
                        MATERIAL: BRONZE ALLOY
                    </text>

                    <text x="510" y="480">
                        SHAFT: HIGH TENSILE STEEL
                    </text>

                </g>


                {/* =========================================================
                    PEQUEÑO PERFIL DE BARCO
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.25"
                >

                    {/* casco */}
                    <path
                        d="
                            M 55 455
                            H 210
                            L 245 470
                            H 85
                            Z
                        "
                    />

                    {/* cubierta */}
                    <path
                        d="
                            M 85 455
                            H 190
                            L 205 445
                            H 105
                            Z
                        "
                    />

                    {/* superestructura */}
                    <path
                        d="
                            M 125 445
                            V 430
                            H 165
                            V 445
                        "
                    />

                    {/* chimenea */}
                    <path
                        d="
                            M 150 430
                            V 414
                            H 160
                            V 430
                        "
                    />

                    {/* hélice */}
                    <circle
                        cx="65"
                        cy="463"
                        r="9"
                    />

                    <line
                        x1="56"
                        y1="463"
                        x2="74"
                        y2="463"
                    />

                    <line
                        x1="65"
                        y1="454"
                        x2="65"
                        y2="472"
                    />

                </g>


                <text
                    x="80"
                    y="487"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.5"
                >
                    PROPULSION LOCATION
                </text>


                {/* =========================================================
                    TITLE BLOCK
                ========================================================= */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <rect
                        x="430"
                        y="430"
                        width="260"
                        height="60"
                    />

                    <line
                        x1="430"
                        y1="448"
                        x2="690"
                        y2="448"
                    />

                    <line
                        x1="430"
                        y1="470"
                        x2="690"
                        y2="470"
                    />

                    <line
                        x1="555"
                        y1="430"
                        x2="555"
                        y2="490"
                    />

                    <line
                        x1="620"
                        y1="470"
                        x2="620"
                        y2="490"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.75"
                >

                    <text
                        x="565"
                        y="444"
                        fontSize="9"
                    >
                        SHIP PROPELLER
                    </text>

                    <text
                        x="565"
                        y="462"
                        fontSize="7"
                    >
                        GENERAL ARRANGEMENT
                    </text>

                    <text
                        x="438"
                        y="443"
                        fontSize="6"
                    >
                        NAVAL
                    </text>

                    <text
                        x="438"
                        y="456"
                        fontSize="6"
                    >
                        ENGINEERING
                    </text>

                    <text
                        x="438"
                        y="467"
                        fontSize="6"
                    >
                        DEPT.
                    </text>

                    <text
                        x="565"
                        y="484"
                        fontSize="7"
                    >
                        DWG No. 24-P-4102
                    </text>

                    <text
                        x="625"
                        y="484"
                        fontSize="7"
                    >
                        REV. A
                    </text>

                </g>


                {/* =========================================================
                    ETIQUETA FINAL
                ========================================================= */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.55"
                >

                    <text
                        x="40"
                        y="495"
                    >
                        MARINE ENGINEERING / PROPULSION
                    </text>

                    <text
                        x="620"
                        y="495"
                    >
                        P-14 / 02
                    </text>

                </g>

            </svg>
        </motion.div>
    );
}