import { motion } from "framer-motion";

export default function CompleteShipBlueprint({ className = "" }) {
    const INK = "#26333F";

    return (
        <motion.div
            className={className}
            animate={{
                y: [-2, 2, -2],
                opacity: [0.46, 0.58, 0.46],
            }}
            transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox="0 0 1100 700"
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    {/* =================================================
                        EFECTO DE PLANO DIBUJADO A MANO
                    ================================================= */}

                    <filter
                        id="ship-wobble"
                        x="-10%"
                        y="-10%"
                        width="120%"
                        height="120%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.012 0.028"
                            numOctaves="2"
                            seed="18"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="0.9"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    <filter
                        id="ship-wobble-light"
                        x="-10%"
                        y="-10%"
                        width="120%"
                        height="120%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.035"
                            numOctaves="2"
                            seed="33"
                            result="noise2"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise2"
                            scale="0.45"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                </defs>


                {/* =====================================================
                    MARCO
                ===================================================== */}

                <rect
                    x="18"
                    y="18"
                    width="1064"
                    height="664"
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.65"
                />


                {/* =====================================================
                    RETÍCULA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.3"
                    opacity="0.12"
                >

                    {Array.from({ length: 46 }, (_, i) => (
                        <line
                            key={`v-${i}`}
                            x1={30 + i * 23}
                            y1="30"
                            x2={30 + i * 23}
                            y2="670"
                        />
                    ))}

                    {Array.from({ length: 28 }, (_, i) => (
                        <line
                            key={`h-${i}`}
                            x1="30"
                            y1={30 + i * 23}
                            x2="1070"
                            y2={30 + i * 23}
                        />
                    ))}

                </g>


                {/* =====================================================
                    EJES PRINCIPALES
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.5"
                    strokeDasharray="8 6"
                    opacity="0.38"
                >

                    <line
                        x1="55"
                        y1="285"
                        x2="1035"
                        y2="285"
                    />

                    <line
                        x1="550"
                        y1="50"
                        x2="550"
                        y2="570"
                    />

                </g>


                {/* =====================================================
                    TÍTULO
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.72"
                >

                    <text
                        x="42"
                        y="50"
                        fontSize="10"
                    >
                        MARINE / 01
                    </text>

                    <text
                        x="42"
                        y="64"
                        fontSize="7"
                    >
                        GENERAL ARRANGEMENT
                    </text>

                    <text
                        x="42"
                        y="76"
                        fontSize="7"
                    >
                        CARGO / WORKING VESSEL
                    </text>

                    <text
                        x="880"
                        y="50"
                        fontSize="7"
                    >
                        SCALE 1:100
                    </text>

                    <text
                        x="880"
                        y="63"
                        fontSize="7"
                    >
                        REV. A
                    </text>

                </g>


                {/* =====================================================
                    VISTA PRINCIPAL DEL BARCO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#ship-wobble)"
                >

                    {/* =================================================
                        CASCO EXTERIOR
                    ================================================= */}

                    <path
                        d="
                            M80 310

                            L115 345
                            L165 370

                            C225 392 300 405 385 410

                            H815

                            C875 407 925 392 967 368

                            L1010 337

                            L1030 310

                            H80
                        "
                        strokeWidth="1.8"
                    />


                    {/* Línea superior del casco */}
                    <path
                        d="
                            M80 310
                            H1030
                        "
                        strokeWidth="1"
                    />


                    {/* Línea de flotación */}
                    <path
                        d="
                            M90 350
                            C260 356 410 359 550 359
                            C710 359 860 355 1018 345
                        "
                        strokeWidth="0.8"
                        strokeDasharray="7 5"
                    />


                    {/* Quilla */}
                    <path
                        d="
                            M165 370
                            C300 430 690 438 850 398
                            C910 385 965 360 1010 337
                        "
                        strokeWidth="1.1"
                    />


                    {/* =================================================
                        PROA
                    ================================================= */}

                    <path
                        d="
                            M80 310
                            L115 345
                            L165 370
                        "
                        strokeWidth="1.5"
                    />

                    <path
                        d="
                            M80 310
                            L65 330
                            L105 330
                        "
                        strokeWidth="0.8"
                    />


                    {/* =================================================
                        POPA
                    ================================================= */}

                    <path
                        d="
                            M850 398
                            C920 382 975 353 1010 337
                        "
                        strokeWidth="1.4"
                    />

                    <path
                        d="
                            M1010 337
                            L1030 310
                        "
                        strokeWidth="1.4"
                    />


                    {/* =================================================
                        CUBIERTA PRINCIPAL
                    ================================================= */}

                    <line
                        x1="120"
                        y1="302"
                        x2="1000"
                        y2="302"
                        strokeWidth="1.2"
                    />

                    <line
                        x1="155"
                        y1="294"
                        x2="965"
                        y2="294"
                        strokeWidth="0.7"
                    />


                    {/* =================================================
                        BODEGAS DE CARGA
                    ================================================= */}

                    <path
                        d="
                            M245 302
                            V258
                            H390
                            V302
                        "
                        strokeWidth="1"
                    />

                    <path
                        d="
                            M430 302
                            V258
                            H575
                            V302
                        "
                        strokeWidth="1"
                    />

                    <path
                        d="
                            M615 302
                            V258
                            H760
                            V302
                        "
                        strokeWidth="1"
                    />


                    {/* Tapas de bodega */}
                    <line
                        x1="255"
                        y1="268"
                        x2="380"
                        y2="268"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="440"
                        y1="268"
                        x2="565"
                        y2="268"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="625"
                        y1="268"
                        x2="750"
                        y2="268"
                        strokeWidth="0.7"
                    />


                    {/* =================================================
                        PUENTE
                    ================================================= */}

                    <path
                        d="
                            M800 302
                            V220
                            H950
                            V302
                        "
                        strokeWidth="1.3"
                    />

                    {/* Piso superior */}
                    <line
                        x1="815"
                        y1="220"
                        x2="938"
                        y2="220"
                        strokeWidth="1"
                    />

                    {/* Ventanas */}
                    {[0, 1, 2, 3, 4].map((i) => (
                        <rect
                            key={`window-${i}`}
                            x={820 + i * 23}
                            y="235"
                            width="17"
                            height="24"
                            strokeWidth="0.7"
                        />
                    ))}


                    {/* =================================================
                        PUENTE SUPERIOR
                    ================================================= */}

                    <path
                        d="
                            M825 220
                            V195
                            H925
                            V220
                        "
                        strokeWidth="1"
                    />

                    {/* Ventanas superiores */}
                    {[0, 1, 2].map((i) => (
                        <rect
                            key={`upper-window-${i}`}
                            x={840 + i * 25}
                            y="202"
                            width="17"
                            height="13"
                            strokeWidth="0.65"
                        />
                    ))}


                    {/* =================================================
                        CHIMENEA
                    ================================================= */}

                    <path
                        d="
                            M875 195
                            V145
                            H925
                            V195
                        "
                        strokeWidth="1.2"
                    />

                    <path
                        d="
                            M867 145
                            H933
                            L925 132
                            H875
                            Z
                        "
                        strokeWidth="1"
                    />

                    {/* Bandas de chimenea */}
                    <line
                        x1="875"
                        y1="157"
                        x2="925"
                        y2="157"
                        strokeWidth="0.6"
                    />

                    <line
                        x1="875"
                        y1="168"
                        x2="925"
                        y2="168"
                        strokeWidth="0.6"
                    />


                    {/* =================================================
                        MÁSTIL PRINCIPAL
                    ================================================= */}

                    <line
                        x1="735"
                        y1="295"
                        x2="735"
                        y2="135"
                        strokeWidth="1.2"
                    />

                    <line
                        x1="735"
                        y1="135"
                        x2="790"
                        y2="135"
                        strokeWidth="0.8"
                    />

                    {/* Antena */}
                    <line
                        x1="760"
                        y1="135"
                        x2="760"
                        y2="105"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="748"
                        y1="112"
                        x2="772"
                        y2="112"
                        strokeWidth="0.6"
                    />

                    {/* Cables */}
                    <line
                        x1="735"
                        y1="145"
                        x2="680"
                        y2="285"
                        strokeWidth="0.55"
                    />

                    <line
                        x1="735"
                        y1="145"
                        x2="795"
                        y2="285"
                        strokeWidth="0.55"
                    />


                    {/* =================================================
                        GRÚA DE CARGA
                    ================================================= */}

                    <line
                        x1="330"
                        y1="255"
                        x2="330"
                        y2="145"
                        strokeWidth="1"
                    />

                    <line
                        x1="330"
                        y1="145"
                        x2="455"
                        y2="145"
                        strokeWidth="1"
                    />

                    <line
                        x1="455"
                        y1="145"
                        x2="485"
                        y2="285"
                        strokeWidth="1"
                    />

                    {/* Cable de grúa */}
                    <line
                        x1="455"
                        y1="145"
                        x2="455"
                        y2="245"
                        strokeWidth="0.65"
                    />

                    {/* Gancho */}
                    <path
                        d="
                            M455 245
                            C442 253 444 270 455 273
                            C467 273 470 259 462 253
                        "
                        strokeWidth="0.9"
                    />

                    {/* Polea */}
                    <circle
                        cx="455"
                        cy="145"
                        r="8"
                        strokeWidth="0.7"
                    />


                    {/* =================================================
                        GRÚA DE PROA
                    ================================================= */}

                    <line
                        x1="175"
                        y1="300"
                        x2="175"
                        y2="190"
                        strokeWidth="0.9"
                    />

                    <line
                        x1="175"
                        y1="190"
                        x2="235"
                        y2="155"
                        strokeWidth="0.9"
                    />

                    <line
                        x1="235"
                        y1="155"
                        x2="235"
                        y2="285"
                        strokeWidth="0.6"
                    />

                    <circle
                        cx="235"
                        cy="155"
                        r="7"
                        strokeWidth="0.6"
                    />


                    {/* =================================================
                        BARANDILLA
                    ================================================= */}

                    <path
                        d="
                            M120 285
                            V275
                            M150 285
                            V275
                            M180 285
                            V275
                            M210 285
                            V275
                            M780 285
                            V275
                            M810 285
                            V275
                            M965 285
                            V275
                        "
                        strokeWidth="0.5"
                    />

                    <line
                        x1="120"
                        y1="275"
                        x2="210"
                        y2="275"
                        strokeWidth="0.5"
                    />

                    <line
                        x1="780"
                        y1="275"
                        x2="965"
                        y2="275"
                        strokeWidth="0.5"
                    />


                    {/* =================================================
                        ESCALERAS
                    ================================================= */}

                    <path
                        d="
                            M785 300
                            L800 270
                            H825
                        "
                        strokeWidth="0.6"
                    />

                    <path
                        d="
                            M800 270
                            L815 300
                        "
                        strokeWidth="0.6"
                    />


                    {/* =================================================
                        HÉLICE Y EJE
                    ================================================= */}

                    <line
                        x1="980"
                        y1="365"
                        x2="1035"
                        y2="400"
                        strokeWidth="1"
                    />

                    <circle
                        cx="1038"
                        cy="402"
                        r="9"
                        strokeWidth="0.7"
                    />

                    {/* Palas de hélice */}
                    <path
                        d="
                            M1038 402
                            C1015 386 1017 374 1030 382
                            C1038 388 1040 396 1038 402
                        "
                        strokeWidth="0.8"
                    />

                    <path
                        d="
                            M1038 402
                            C1058 379 1068 384 1060 397
                            C1054 406 1045 408 1038 402
                        "
                        strokeWidth="0.8"
                    />

                    <path
                        d="
                            M1038 402
                            C1050 425 1042 434 1033 422
                            C1028 414 1031 406 1038 402
                        "
                        strokeWidth="0.8"
                    />


                    {/* =================================================
                        TIMÓN
                    ================================================= */}

                    <line
                        x1="970"
                        y1="345"
                        x2="970"
                        y2="430"
                        strokeWidth="0.9"
                    />

                    <path
                        d="
                            M970 385
                            C950 395 950 420 970 435
                            C988 420 988 395 970 385
                        "
                        strokeWidth="0.9"
                    />


                    {/* =================================================
                        ANCLA DE PROA
                    ================================================= */}

                    <path
                        d="
                            M90 310
                            V350
                            M75 350
                            H105
                        "
                        strokeWidth="0.7"
                    />

                    <path
                        d="
                            M75 350
                            C65 365 72 375 82 370
                            L90 350
                        "
                        strokeWidth="0.7"
                    />

                    <path
                        d="
                            M105 350
                            C115 365 108 375 98 370
                            L90 350
                        "
                        strokeWidth="0.7"
                    />

                </g>


                {/* =====================================================
                    VISTA SUPERIOR
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#ship-wobble-light)"
                >

                    {/* Casco superior */}
                    <path
                        d="
                            M80 535
                            C120 500 200 480 330 475
                            H775
                            C895 480 975 500 1025 535

                            C975 570 895 590 775 595
                            H330

                            C200 590 120 570 80 535
                            Z
                        "
                        strokeWidth="1.3"
                    />


                    {/* Línea central */}
                    <line
                        x1="70"
                        y1="535"
                        x2="1035"
                        y2="535"
                        strokeWidth="0.5"
                        strokeDasharray="7 5"
                    />


                    {/* Bodegas */}
                    <rect
                        x="250"
                        y="495"
                        width="140"
                        height="80"
                        strokeWidth="0.9"
                    />

                    <rect
                        x="420"
                        y="495"
                        width="140"
                        height="80"
                        strokeWidth="0.9"
                    />

                    <rect
                        x="590"
                        y="495"
                        width="140"
                        height="80"
                        strokeWidth="0.9"
                    />


                    {/* Puente */}
                    <rect
                        x="800"
                        y="505"
                        width="120"
                        height="60"
                        strokeWidth="1"
                    />

                    {/* Mástil */}
                    <circle
                        cx="735"
                        cy="535"
                        r="15"
                        strokeWidth="0.7"
                    />

                    <circle
                        cx="735"
                        cy="535"
                        r="5"
                        strokeWidth="0.6"
                    />


                    {/* Grúas */}
                    <line
                        x1="330"
                        y1="535"
                        x2="330"
                        y2="465"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="455"
                        y1="535"
                        x2="455"
                        y2="465"
                        strokeWidth="0.7"
                    />

                    <line
                        x1="175"
                        y1="535"
                        x2="175"
                        y2="480"
                        strokeWidth="0.7"
                    />

                </g>


                {/* =====================================================
                    COTAS DEL BARCO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.65"
                >

                    {/* Longitud */}
                    <line
                        x1="80"
                        y1="425"
                        x2="1030"
                        y2="425"
                    />

                    <line
                        x1="80"
                        y1="418"
                        x2="80"
                        y2="432"
                    />

                    <line
                        x1="1030"
                        y1="418"
                        x2="1030"
                        y2="432"
                    />

                    <path
                        d="M88 421 L80 425 L88 429"
                    />

                    <path
                        d="M1022 421 L1030 425 L1022 429"
                    />

                </g>

                <text
                    x="525"
                    y="417"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.72"
                >
                    LOA 9600
                </text>


                {/* =====================================================
                    COTA ALTURA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.62"
                >

                    <line
                        x1="1045"
                        y1="145"
                        x2="1045"
                        y2="398"
                    />

                    <line
                        x1="1038"
                        y1="145"
                        x2="1052"
                        y2="145"
                    />

                    <line
                        x1="1038"
                        y1="398"
                        x2="1052"
                        y2="398"
                    />

                    <path
                        d="M1041 153 L1045 145 L1049 153"
                    />

                    <path
                        d="M1041 390 L1045 398 L1049 390"
                    />

                </g>

                <text
                    x="1035"
                    y="285"
                    transform="rotate(-90 1035 285)"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    2850
                </text>


                {/* =====================================================
                    CALLOUTS
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.55"
                >

                    {/* Puente */}
                    <path
                        d="
                            M875 235
                            L990 190
                            H1040
                        "
                    />

                    <circle
                        cx="875"
                        cy="235"
                        r="2"
                    />


                    {/* Grúa */}
                    <path
                        d="
                            M455 145
                            L455 105
                            H535
                        "
                    />

                    <circle
                        cx="455"
                        cy="145"
                        r="2"
                    />


                    {/* Bodega */}
                    <path
                        d="
                            M505 258
                            L505 220
                            H580
                        "
                    />

                    <circle
                        cx="505"
                        cy="258"
                        r="2"
                    />


                    {/* Propulsión */}
                    <path
                        d="
                            M1038 402
                            L1000 455
                            H930
                        "
                    />

                    <circle
                        cx="1038"
                        cy="402"
                        r="2"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >

                    <text
                        x="1044"
                        y="192"
                    >
                        NAVIGATION BRIDGE
                    </text>

                    <text
                        x="539"
                        y="107"
                    >
                        CARGO CRANE
                    </text>

                    <text
                        x="584"
                        y="222"
                    >
                        CARGO HOLD
                    </text>

                    <text
                        x="934"
                        y="457"
                    >
                        PROPELLER
                    </text>

                </g>


                {/* =====================================================
                    ETIQUETAS DE PARTES
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.62"
                >

                    <text x="92" y="303">
                        BOW
                    </text>

                    <text x="990" y="303">
                        STERN
                    </text>

                    <text x="430" y="250">
                        CARGO DECK
                    </text>

                    <text x="840" y="290">
                        SUPERSTRUCTURE
                    </text>

                    <text x="690" y="130">
                        MAST
                    </text>

                    <text x="855" y="125">
                        FUNNEL
                    </text>

                </g>


                {/* =====================================================
                    BLOQUE DE INFORMACIÓN
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <rect
                        x="700"
                        y="615"
                        width="365"
                        height="48"
                    />

                    <line
                        x1="700"
                        y1="638"
                        x2="1065"
                        y2="638"
                    />

                    <line
                        x1="850"
                        y1="615"
                        x2="850"
                        y2="663"
                    />

                    <line
                        x1="960"
                        y1="638"
                        x2="960"
                        y2="663"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.75"
                >

                    <text
                        x="862"
                        y="631"
                        fontSize="9"
                    >
                        CARGO VESSEL
                    </text>

                    <text
                        x="710"
                        y="631"
                        fontSize="6"
                    >
                        MARINE
                    </text>

                    <text
                        x="710"
                        y="643"
                        fontSize="6"
                    >
                        ENGINEERING
                    </text>

                    <text
                        x="862"
                        y="654"
                        fontSize="7"
                    >
                        DWG 01-CV-2401
                    </text>

                    <text
                        x="970"
                        y="654"
                        fontSize="7"
                    >
                        REV. A
                    </text>

                </g>


                {/* =====================================================
                    ESPECIFICACIONES
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.68"
                >

                    <text x="45" y="625">
                        LENGTH OVERALL : 96.00 M
                    </text>

                    <text x="45" y="638">
                        BEAM            : 18.40 M
                    </text>

                    <text x="45" y="651">
                        DRAFT           : 6.20 M
                    </text>

                    <text x="45" y="664">
                        PROPULSION      : MARINE DIESEL
                    </text>

                </g>


                {/* =====================================================
                    MARCA DE APROBACIÓN
                ===================================================== */}

                <g
                    transform="rotate(-12 600 100)"
                    opacity="0.16"
                >

                    <rect
                        x="520"
                        y="78"
                        width="160"
                        height="55"
                        stroke={INK}
                        strokeWidth="2"
                    />

                    <text
                        x="535"
                        y="101"
                        fill={INK}
                        fontFamily="monospace"
                        fontSize="13"
                    >
                        APPROVED
                    </text>

                    <text
                        x="545"
                        y="117"
                        fill={INK}
                        fontFamily="monospace"
                        fontSize="9"
                    >
                        FOR CONSTRUCTION
                    </text>

                </g>


                {/* =====================================================
                    TEXTO FINAL
                ===================================================== */}

                <text
                    x="42"
                    y="680"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.52"
                >
                    GENERAL ARRANGEMENT / MARINE ENGINEERING / CARGO VESSEL
                </text>

                <text
                    x="950"
                    y="680"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="6"
                    opacity="0.52"
                >
                    CV-01 / A
                </text>

            </svg>
        </motion.div>
    );
}