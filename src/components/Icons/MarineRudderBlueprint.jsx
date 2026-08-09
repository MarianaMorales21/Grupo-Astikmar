import { motion } from "framer-motion";

export default function MarineRudderBlueprint({ className = "" }) {
    const INK = "#26333F";

    return (
        <motion.div
            className={className}
            animate={{
                y: [-3, 3, -3],
                rotate: [-0.2, 0.2, -0.2],
                opacity: [0.44, 0.56, 0.44],
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox="0 0 760 540"
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    {/* =====================================================
                        EFECTO DE DIBUJO MANUAL
                    ===================================================== */}

                    <filter
                        id="rudder-wobble"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.04"
                            numOctaves="2"
                            seed="17"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.1"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    <filter
                        id="rudder-wobble-light"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.025 0.05"
                            numOctaves="2"
                            seed="29"
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


                {/* =====================================================
                    BORDE
                ===================================================== */}

                <rect
                    x="18"
                    y="18"
                    width="724"
                    height="504"
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.65"
                />


                {/* =====================================================
                    RETÍCULA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.35"
                    opacity="0.13"
                >

                    {Array.from({ length: 31 }, (_, i) => (
                        <line
                            key={`v-${i}`}
                            x1={30 + i * 23}
                            y1="30"
                            x2={30 + i * 23}
                            y2="510"
                        />
                    ))}

                    {Array.from({ length: 21 }, (_, i) => (
                        <line
                            key={`h-${i}`}
                            x1="30"
                            y1={30 + i * 23}
                            x2="730"
                            y2={30 + i * 23}
                        />
                    ))}

                </g>


                {/* =====================================================
                    EJES
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.55"
                    strokeDasharray="7 5"
                    opacity="0.42"
                >

                    <line
                        x1="55"
                        y1="270"
                        x2="710"
                        y2="270"
                    />

                    <line
                        x1="255"
                        y1="55"
                        x2="255"
                        y2="490"
                    />

                    <line
                        x1="505"
                        y1="55"
                        x2="505"
                        y2="490"
                    />

                </g>


                {/* =====================================================
                    VISTA PRINCIPAL — TIMÓN
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#rudder-wobble)"
                >

                    {/* =================================================
                        EJE DEL TIMÓN
                    ================================================= */}

                    <rect
                        x="232"
                        y="75"
                        width="46"
                        height="68"
                        rx="4"
                        strokeWidth="1.4"
                    />

                    <rect
                        x="241"
                        y="88"
                        width="28"
                        height="55"
                        strokeWidth="0.8"
                    />

                    {/* Parte superior del eje */}
                    <path
                        d="
                            M232 75
                            L225 62
                            H285
                            L278 75
                        "
                        strokeWidth="1.2"
                    />

                    {/* Pernos superiores */}
                    <circle
                        cx="238"
                        cy="69"
                        r="3"
                        strokeWidth="0.8"
                    />

                    <circle
                        cx="272"
                        cy="69"
                        r="3"
                        strokeWidth="0.8"
                    />


                    {/* =================================================
                        CUELLO DEL TIMÓN
                    ================================================= */}

                    <path
                        d="
                            M235 143
                            H275
                            L287 161
                            H223
                            Z
                        "
                        strokeWidth="1.2"
                    />

                    <line
                        x1="232"
                        y1="151"
                        x2="278"
                        y2="151"
                        strokeWidth="0.6"
                    />


                    {/* =================================================
                        PALA DEL TIMÓN
                    ================================================= */}

                    <path
                        d="
                            M223 160

                            C210 181,
                              198 215,
                              191 250

                            C183 291,
                              182 339,
                              189 379

                            C195 414,
                              210 439,
                              231 455

                            L255 468

                            L278 455

                            C300 438,
                              315 413,
                              322 378

                            C330 338,
                              328 291,
                              320 250

                            C313 213,
                              301 180,
                              287 160

                            Z
                        "
                        strokeWidth="1.6"
                        opacity="0.96"
                    />


                    {/* Perfil interior */}
                    <path
                        d="
                            M235 173
                            C219 214,
                              209 260,
                              207 306

                            C205 357,
                              213 405,
                              239 440
                        "
                        strokeWidth="0.65"
                        opacity="0.5"
                    />

                    <path
                        d="
                            M275 173
                            C291 214,
                              301 260,
                              303 306

                            C305 357,
                              297 405,
                              271 440
                        "
                        strokeWidth="0.65"
                        opacity="0.5"
                    />


                    {/* =================================================
                        NERVIOS ESTRUCTURALES
                    ================================================= */}

                    <line
                        x1="190"
                        y1="250"
                        x2="320"
                        y2="250"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="184"
                        y1="310"
                        x2="326"
                        y2="310"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="188"
                        y1="370"
                        x2="322"
                        y2="370"
                        strokeWidth="0.7"
                    />


                    {/* =================================================
                        PERNOS LATERALES
                    ================================================= */}

                    {[205, 265, 325, 385].map((y, i) => (
                        <g key={`bolt-${i}`}>

                            <circle
                                cx="198"
                                cy={y}
                                r="4"
                                strokeWidth="0.8"
                            />

                            <circle
                                cx="312"
                                cy={y}
                                r="4"
                                strokeWidth="0.8"
                            />

                        </g>
                    ))}


                    {/* =================================================
                        BORDE DE ATAQUE
                    ================================================= */}

                    <path
                        d="
                            M223 160
                            C205 205,
                              192 250,
                              188 300

                            C185 350,
                              191 407,
                              231 455
                        "
                        strokeWidth="1.1"
                    />


                    {/* =================================================
                        BORDE DE SALIDA
                    ================================================= */}

                    <path
                        d="
                            M287 160
                            C305 205,
                              318 250,
                              322 300

                            C325 350,
                              319 407,
                              278 455
                        "
                        strokeWidth="1.1"
                    />

                </g>


                {/* =====================================================
                    VISTA LATERAL
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#rudder-wobble)"
                >

                    {/* Eje */}
                    <line
                        x1="505"
                        y1="90"
                        x2="505"
                        y2="438"
                        strokeWidth="1.4"
                    />

                    {/* Eje interior */}
                    <line
                        x1="512"
                        y1="90"
                        x2="512"
                        y2="438"
                        strokeWidth="0.55"
                    />


                    {/* Pala lateral */}
                    <path
                        d="
                            M505 160
                            C535 177,
                              550 205,
                              551 250

                            C552 300,
                              540 354,
                              510 432

                            C507 440,
                              503 440,
                              500 432

                            C470 354,
                              458 300,
                              459 250

                            C460 205,
                              475 177,
                              505 160
                            Z
                        "
                        strokeWidth="1.2"
                    />


                    {/* Soporte superior */}
                    <path
                        d="
                            M475 90
                            H535
                            V115
                            H475
                            Z
                        "
                        strokeWidth="1.2"
                    />

                    {/* Cojinete */}
                    <rect
                        x="483"
                        y="115"
                        width="44"
                        height="45"
                        strokeWidth="1"
                    />

                    <circle
                        cx="505"
                        cy="137"
                        r="13"
                        strokeWidth="0.8"
                    />

                    <circle
                        cx="505"
                        cy="137"
                        r="5"
                        strokeWidth="0.8"
                    />


                    {/* Línea de referencia */}
                    <line
                        x1="430"
                        y1="250"
                        x2="580"
                        y2="250"
                        strokeWidth="0.5"
                        strokeDasharray="5 4"
                        opacity="0.5"
                    />

                </g>


                {/* =====================================================
                    SECCIÓN B-B — COJINETE
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.9"
                    filter="url(#rudder-wobble-light)"
                >

                    <rect
                        x="590"
                        y="100"
                        width="105"
                        height="105"
                    />

                    {/* Carcasa */}
                    <path
                        d="
                            M610 125
                            H675
                            V180
                            H610
                            Z
                        "
                    />

                    {/* Rodamiento */}
                    <circle
                        cx="642"
                        cy="152"
                        r="27"
                    />

                    <circle
                        cx="642"
                        cy="152"
                        r="13"
                    />

                    {/* Eje */}
                    <rect
                        x="630"
                        y="137"
                        width="24"
                        height="30"
                    />

                    {/* Líneas de sección */}
                    <line
                        x1="595"
                        y1="115"
                        x2="610"
                        y2="130"
                    />

                    <line
                        x1="595"
                        y1="140"
                        x2="610"
                        y2="155"
                    />

                    <line
                        x1="595"
                        y1="165"
                        x2="610"
                        y2="180"
                    />

                    <line
                        x1="675"
                        y1="125"
                        x2="690"
                        y2="140"
                    />

                    <line
                        x1="675"
                        y1="150"
                        x2="690"
                        y2="165"
                    />

                    <line
                        x1="675"
                        y1="175"
                        x2="690"
                        y2="190"
                    />

                </g>


                <text
                    x="607"
                    y="220"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    SECTION B-B
                </text>


                {/* =====================================================
                    VISTA SUPERIOR DEL SOPORTE
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.9"
                    filter="url(#rudder-wobble-light)"
                >

                    <circle
                        cx="645"
                        cy="290"
                        r="55"
                    />

                    <circle
                        cx="645"
                        cy="290"
                        r="38"
                    />

                    <circle
                        cx="645"
                        cy="290"
                        r="15"
                    />

                    {/* Pernos */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                        const rad = (angle * Math.PI) / 180;
                        const x = 645 + Math.cos(rad) * 45;
                        const y = 290 + Math.sin(rad) * 45;

                        return (
                            <circle
                                key={`mount-${i}`}
                                cx={x}
                                cy={y}
                                r="4"
                            />
                        );
                    })}

                    {/* Ejes */}
                    <line
                        x1="585"
                        y1="290"
                        x2="705"
                        y2="290"
                        strokeDasharray="5 4"
                    />

                    <line
                        x1="645"
                        y1="230"
                        x2="645"
                        y2="350"
                        strokeDasharray="5 4"
                    />

                </g>


                {/* =====================================================
                    COTA DIÁMETRO SOPORTE
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.62"
                >

                    <line
                        x1="590"
                        y1="365"
                        x2="700"
                        y2="365"
                    />

                    <line
                        x1="590"
                        y1="357"
                        x2="590"
                        y2="373"
                    />

                    <line
                        x1="700"
                        y1="357"
                        x2="700"
                        y2="373"
                    />

                    <path
                        d="M598 361 L590 365 L598 369"
                    />

                    <path
                        d="M692 361 L700 365 L692 369"
                    />

                </g>


                <text
                    x="625"
                    y="357"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    Ø 420
                </text>


                {/* =====================================================
                    COTA ALTURA DEL TIMÓN
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <line
                        x1="150"
                        y1="75"
                        x2="150"
                        y2="468"
                    />

                    <line
                        x1="142"
                        y1="75"
                        x2="158"
                        y2="75"
                    />

                    <line
                        x1="142"
                        y1="468"
                        x2="158"
                        y2="468"
                    />

                    <path
                        d="M146 83 L150 75 L154 83"
                    />

                    <path
                        d="M146 460 L150 468 L154 460"
                    />

                </g>


                <text
                    x="138"
                    y="315"
                    transform="rotate(-90 138 315)"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    3920
                </text>


                {/* =====================================================
                    COTA ANCHO PALA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.6"
                >

                    <line
                        x1="188"
                        y1="480"
                        x2="322"
                        y2="480"
                    />

                    <line
                        x1="188"
                        y1="473"
                        x2="188"
                        y2="487"
                    />

                    <line
                        x1="322"
                        y1="473"
                        x2="322"
                        y2="487"
                    />

                    <path
                        d="M196 476 L188 480 L196 484"
                    />

                    <path
                        d="M314 476 L322 480 L314 484"
                    />

                </g>


                <text
                    x="237"
                    y="472"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    1340
                </text>


                {/* =====================================================
                    CALLOUT — EJE
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.52"
                >

                    <path
                        d="
                            M265 92
                            L330 55
                            H410
                        "
                    />

                    <circle
                        cx="265"
                        cy="92"
                        r="2"
                    />

                </g>

                <text
                    x="414"
                    y="57"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    RUDDER STOCK
                </text>


                {/* =====================================================
                    CALLOUT — PALA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.52"
                >

                    <path
                        d="
                            M205 305
                            L350 350
                            H425
                        "
                    />

                    <circle
                        cx="205"
                        cy="305"
                        r="2"
                    />

                </g>

                <text
                    x="429"
                    y="353"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    RUDDER BLADE
                </text>


                {/* =====================================================
                    CALLOUT — BEARING
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.52"
                >

                    <path
                        d="
                            M505 137
                            L555 110
                            H575
                        "
                    />

                    <circle
                        cx="505"
                        cy="137"
                        r="2"
                    />

                </g>

                <text
                    x="578"
                    y="112"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    BRONZE BEARING
                </text>


                {/* =====================================================
                    NOTAS TÉCNICAS
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.72"
                >

                    <text
                        x="42"
                        y="53"
                        fontSize="9"
                    >
                        MARINE / 21
                    </text>

                    <text
                        x="42"
                        y="66"
                        fontSize="7"
                    >
                        STEERING SYSTEM
                    </text>

                    <text
                        x="42"
                        y="78"
                        fontSize="7"
                    >
                        RUDDER ASSEMBLY
                    </text>


                    <text
                        x="535"
                        y="53"
                        fontSize="7"
                    >
                        FRAME 42
                    </text>

                    <text
                        x="535"
                        y="65"
                        fontSize="7"
                    >
                        REV. 03
                    </text>

                    <text
                        x="535"
                        y="77"
                        fontSize="7"
                    >
                        SCALE 1:15
                    </text>

                </g>


                {/* =====================================================
                    MATERIALES
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.68"
                >

                    <text
                        x="590"
                        y="395"
                    >
                        STOCK: HIGH TENSILE STEEL
                    </text>

                    <text
                        x="590"
                        y="407"
                    >
                        BEARING: BRONZE ALLOY
                    </text>

                    <text
                        x="590"
                        y="419"
                    >
                        BLADE: MILD STEEL
                    </text>

                </g>


                {/* =====================================================
                    PEQUEÑO DIAGRAMA DEL BARCO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.23"
                >

                    {/* Casco */}
                    <path
                        d="
                            M50 420
                            H185
                            L215 445
                            H80
                            Z
                        "
                    />

                    {/* Cubierta */}
                    <path
                        d="
                            M80 420
                            H165
                            L180 410
                            H100
                            Z
                        "
                    />

                    {/* Cabina */}
                    <path
                        d="
                            M112 410
                            V398
                            H145
                            V410
                        "
                    />

                    {/* Chimenea */}
                    <path
                        d="
                            M125 398
                            V386
                            H134
                            V398
                        "
                    />

                    {/* Eje hacia popa */}
                    <line
                        x1="80"
                        y1="438"
                        x2="45"
                        y2="438"
                    />

                    {/* Timón */}
                    <path
                        d="
                            M47 427
                            C40 432 40 444 47 449
                            C54 444 54 432 47 427
                        "
                    />

                </g>


                <text
                    x="70"
                    y="465"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.5"
                >
                    RUDDER LOCATION
                </text>


                {/* =====================================================
                    TITLE BLOCK
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <rect
                        x="365"
                        y="440"
                        width="350"
                        height="62"
                    />

                    <line
                        x1="365"
                        y1="460"
                        x2="715"
                        y2="460"
                    />

                    <line
                        x1="365"
                        y1="481"
                        x2="715"
                        y2="481"
                    />

                    <line
                        x1="510"
                        y1="440"
                        x2="510"
                        y2="502"
                    />

                    <line
                        x1="625"
                        y1="481"
                        x2="625"
                        y2="502"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.75"
                >

                    <text
                        x="520"
                        y="454"
                        fontSize="9"
                    >
                        SHIP RUDDER
                    </text>

                    <text
                        x="520"
                        y="475"
                        fontSize="7"
                    >
                        STEERING ASSEMBLY
                    </text>

                    <text
                        x="374"
                        y="453"
                        fontSize="6"
                    >
                        NAVAL
                    </text>

                    <text
                        x="374"
                        y="464"
                        fontSize="6"
                    >
                        ARCHITECTURE
                    </text>

                    <text
                        x="520"
                        y="496"
                        fontSize="7"
                    >
                        DWG No. 24-R-3204
                    </text>

                    <text
                        x="632"
                        y="496"
                        fontSize="7"
                    >
                        REV. A
                    </text>

                </g>


                {/* =====================================================
                    TEXTO FINAL
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.55"
                >

                    <text
                        x="40"
                        y="510"
                    >
                        MARINE ENGINEERING / STEERING
                    </text>

                    <text
                        x="645"
                        y="510"
                    >
                        R-21 / 03
                    </text>

                </g>

            </svg>
        </motion.div>
    );
}