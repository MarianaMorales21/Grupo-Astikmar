import { motion } from "framer-motion";

export default function MarineLiftingHookBlueprint({ className = "" }) {
    const INK = "#26333F";

    return (
        <motion.div
            className={className}
            animate={{
                y: [-3, 3, -3],
                rotate: [-0.18, 0.18, -0.18],
                opacity: [0.44, 0.57, 0.44],
            }}
            transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <svg
                viewBox="0 0 780 540"
                width="100%"
                height="100%"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >

                <defs>

                    {/* =====================================================
                        EFECTO DE TRAZO IMPERFECTO
                    ===================================================== */}

                    <filter
                        id="hook-wobble"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.018 0.042"
                            numOctaves="2"
                            seed="24"
                            result="noise"
                        />

                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="noise"
                            scale="1.05"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    <filter
                        id="hook-wobble-light"
                        x="-15%"
                        y="-15%"
                        width="130%"
                        height="130%"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.026 0.052"
                            numOctaves="2"
                            seed="41"
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
                    BORDE DEL PLANO
                ===================================================== */}

                <rect
                    x="18"
                    y="18"
                    width="744"
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

                    {Array.from({ length: 32 }, (_, i) => (
                        <line
                            key={`grid-v-${i}`}
                            x1={30 + i * 23}
                            y1="30"
                            x2={30 + i * 23}
                            y2="510"
                        />
                    ))}

                    {Array.from({ length: 21 }, (_, i) => (
                        <line
                            key={`grid-h-${i}`}
                            x1="30"
                            y1={30 + i * 23}
                            x2="750"
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
                        y1="265"
                        x2="735"
                        y2="265"
                    />

                    <line
                        x1="270"
                        y1="55"
                        x2="270"
                        y2="490"
                    />

                    <line
                        x1="520"
                        y1="55"
                        x2="520"
                        y2="490"
                    />

                </g>


                {/* =====================================================
                    VISTA PRINCIPAL
                    GANCHO DE IZADO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#hook-wobble)"
                >

                    {/* =================================================
                        OJO SUPERIOR
                    ================================================= */}

                    <path
                        d="
                            M225 82
                            H315

                            C329 82 338 93 338 107

                            V132

                            C338 146 329 155 315 155

                            H225

                            C211 155 202 146 202 132

                            V107

                            C202 93 211 82 225 82

                            Z
                        "
                        strokeWidth="1.6"
                    />

                    {/* Interior del ojo */}
                    <path
                        d="
                            M232 101
                            H308

                            C315 101 319 106 319 113

                            V124

                            C319 131 315 136 308 136

                            H232

                            C225 136 221 131 221 124

                            V113

                            C221 106 225 101 232 101

                            Z
                        "
                        strokeWidth="1"
                    />

                    {/* Agujero central */}
                    <ellipse
                        cx="270"
                        cy="119"
                        rx="30"
                        ry="12"
                        strokeWidth="0.8"
                    />


                    {/* =================================================
                        CUELLO DEL GANCHO
                    ================================================= */}

                    <path
                        d="
                            M232 155

                            C230 180 228 197 220 215

                            C214 229 206 240 195 251
                        "
                        strokeWidth="1.6"
                    />

                    <path
                        d="
                            M308 155

                            C310 180 312 197 320 215

                            C326 229 334 240 345 251
                        "
                        strokeWidth="1.6"
                    />


                    {/* =================================================
                        CUERPO DEL GANCHO
                    ================================================= */}

                    <path
                        d="
                            M195 251

                            C164 282 148 319 151 358

                            C154 399 177 430 213 447

                            C248 464 294 461 324 440

                            C351 421 367 392 365 361

                            C363 332 350 311 329 295
                        "
                        strokeWidth="2"
                    />

                    {/* Perfil interior */}
                    <path
                        d="
                            M217 270

                            C193 294 181 321 183 351

                            C185 382 203 405 230 417

                            C257 429 290 426 311 408

                            C329 392 337 372 334 351

                            C332 331 321 316 304 306
                        "
                        strokeWidth="1.2"
                    />


                    {/* =================================================
                        PUNTA DEL GANCHO
                    ================================================= */}

                    <path
                        d="
                            M329 295

                            C350 305 369 321 378 341

                            C387 360 386 379 377 394

                            C368 408 354 416 339 418

                            C326 420 315 413 310 403
                        "
                        strokeWidth="1.7"
                    />

                    {/* Punta interior */}
                    <path
                        d="
                            M304 306

                            C322 315 337 330 344 346

                            C351 361 350 375 343 386

                            C338 394 329 399 319 398
                        "
                        strokeWidth="0.9"
                    />


                    {/* =================================================
                        SEGURO DEL GANCHO
                    ================================================= */}

                    <path
                        d="
                            M303 300
                            L338 283
                            L349 297
                            L315 316
                            Z
                        "
                        strokeWidth="1.2"
                    />

                    {/* Pasador del seguro */}
                    <circle
                        cx="320"
                        cy="299"
                        r="7"
                        strokeWidth="0.9"
                    />

                    <circle
                        cx="320"
                        cy="299"
                        r="2.5"
                        strokeWidth="0.7"
                    />

                    {/* Brazo del seguro */}
                    <path
                        d="
                            M338 283
                            L354 274
                            L363 288
                            L349 297
                        "
                        strokeWidth="1"
                    />


                    {/* =================================================
                        REFUERZOS
                    ================================================= */}

                    <path
                        d="
                            M203 253
                            C185 275 172 297 166 322
                        "
                        strokeWidth="0.6"
                        opacity="0.55"
                    />

                    <path
                        d="
                            M335 296
                            C350 311 359 328 363 345
                        "
                        strokeWidth="0.6"
                        opacity="0.55"
                    />


                    {/* =================================================
                        LÍNEA CENTRAL
                    ================================================= */}

                    <line
                        x1="270"
                        y1="55"
                        x2="270"
                        y2="470"
                        strokeWidth="0.45"
                        strokeDasharray="4 4"
                        opacity="0.4"
                    />

                </g>


                {/* =====================================================
                    VISTA LATERAL / SECCIÓN DEL OJO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#hook-wobble-light)"
                >

                    {/* Ojo lateral */}
                    <path
                        d="
                            M490 85
                            H550
                            C561 85 568 94 568 105
                            V135
                            C568 146 561 155 550 155
                            H490
                            C479 155 472 146 472 135
                            V105
                            C472 94 479 85 490 85
                            Z
                        "
                        strokeWidth="1.2"
                    />

                    {/* Agujero */}
                    <ellipse
                        cx="520"
                        cy="120"
                        rx="25"
                        ry="13"
                        strokeWidth="0.9"
                    />

                    {/* Espesor */}
                    <path
                        d="
                            M472 105
                            H488
                            M552 105
                            H568
                        "
                        strokeWidth="0.7"
                    />


                    {/* =================================================
                        SECCIÓN DEL CUERPO
                    ================================================= */}

                    <path
                        d="
                            M488 155
                            C484 220 478 275 487 330
                            C492 365 508 390 520 408

                            M552 155
                            C556 220 562 275 553 330
                            C548 365 532 390 520 408
                        "
                        strokeWidth="1.1"
                    />

                    {/* Centro */}
                    <line
                        x1="520"
                        y1="65"
                        x2="520"
                        y2="425"
                        strokeWidth="0.45"
                        strokeDasharray="5 4"
                    />

                </g>


                {/* =====================================================
                    VISTA DEL OJO SUPERIOR
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="1"
                    opacity="0.9"
                    filter="url(#hook-wobble-light)"
                >

                    <circle
                        cx="635"
                        cy="120"
                        r="55"
                    />

                    <circle
                        cx="635"
                        cy="120"
                        r="38"
                    />

                    <ellipse
                        cx="635"
                        cy="120"
                        rx="27"
                        ry="16"
                    />

                    <line
                        x1="575"
                        y1="120"
                        x2="695"
                        y2="120"
                        strokeDasharray="5 4"
                    />

                    <line
                        x1="635"
                        y1="60"
                        x2="635"
                        y2="180"
                        strokeDasharray="5 4"
                    />

                </g>


                {/* =====================================================
                    COTA ALTURA TOTAL
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.7"
                    opacity="0.65"
                >

                    <line
                        x1="105"
                        y1="82"
                        x2="105"
                        y2="461"
                    />

                    <line
                        x1="97"
                        y1="82"
                        x2="113"
                        y2="82"
                    />

                    <line
                        x1="97"
                        y1="461"
                        x2="113"
                        y2="461"
                    />

                    <path
                        d="M101 90 L105 82 L109 90"
                    />

                    <path
                        d="M101 453 L105 461 L109 453"
                    />

                </g>


                <text
                    x="94"
                    y="300"
                    transform="rotate(-90 94 300)"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    3790
                </text>


                {/* =====================================================
                    COTA ANCHO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.62"
                >

                    <line
                        x1="150"
                        y1="485"
                        x2="365"
                        y2="485"
                    />

                    <line
                        x1="150"
                        y1="478"
                        x2="150"
                        y2="492"
                    />

                    <line
                        x1="365"
                        y1="478"
                        x2="365"
                        y2="492"
                    />

                    <path
                        d="M158 481 L150 485 L158 489"
                    />

                    <path
                        d="M357 481 L365 485 L357 489"
                    />

                </g>


                <text
                    x="247"
                    y="477"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    2150
                </text>


                {/* =====================================================
                    COTA OJO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.6"
                >

                    <line
                        x1="202"
                        y1="55"
                        x2="338"
                        y2="55"
                    />

                    <line
                        x1="202"
                        y1="48"
                        x2="202"
                        y2="62"
                    />

                    <line
                        x1="338"
                        y1="48"
                        x2="338"
                        y2="62"
                    />

                    <path
                        d="M210 51 L202 55 L210 59"
                    />

                    <path
                        d="M330 51 L338 55 L330 59"
                    />

                </g>


                <text
                    x="250"
                    y="47"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    1360
                </text>


                {/* =====================================================
                    COTA DIÁMETRO DEL OJO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.58"
                >

                    <line
                        x1="600"
                        y1="195"
                        x2="670"
                        y2="195"
                    />

                    <line
                        x1="600"
                        y1="188"
                        x2="600"
                        y2="202"
                    />

                    <line
                        x1="670"
                        y1="188"
                        x2="670"
                        y2="202"
                    />

                </g>

                <text
                    x="614"
                    y="187"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    Ø 820
                </text>


                {/* =====================================================
                    CALLOUT — SEGURO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.55"
                >

                    <path
                        d="
                            M350 284
                            L405 245
                            H475
                        "
                    />

                    <circle
                        cx="350"
                        cy="284"
                        r="2"
                    />

                </g>

                <text
                    x="479"
                    y="247"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    SAFETY LATCH
                </text>


                {/* =====================================================
                    CALLOUT — OJO
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.55"
                >

                    <path
                        d="
                            M302 119
                            L385 90
                            H450
                        "
                    />

                    <circle
                        cx="302"
                        cy="119"
                        r="2"
                    />

                </g>

                <text
                    x="454"
                    y="92"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    LIFTING EYE
                </text>


                {/* =====================================================
                    CALLOUT — PUNTA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.6"
                    opacity="0.55"
                >

                    <path
                        d="
                            M375 360
                            L415 385
                            H480
                        "
                    />

                    <circle
                        cx="375"
                        cy="360"
                        r="2"
                    />

                </g>

                <text
                    x="484"
                    y="388"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="8"
                    opacity="0.7"
                >
                    HOOK TIP
                </text>


                {/* =====================================================
                    MATERIAL / CARGA
                ===================================================== */}

                <g
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.7"
                >

                    <text
                        x="470"
                        y="425"
                    >
                        MATERIAL: FORGED STEEL
                    </text>

                    <text
                        x="470"
                        y="437"
                    >
                        SAFETY LATCH: ALLOY STEEL
                    </text>

                    <text
                        x="470"
                        y="449"
                    >
                        WORKING LOAD: 25 TON
                    </text>

                </g>


                {/* =====================================================
                    PEQUEÑO DIAGRAMA DE GRÚA
                ===================================================== */}

                <g
                    stroke={INK}
                    strokeWidth="0.65"
                    opacity="0.23"
                >

                    {/* Pluma */}
                    <line
                        x1="55"
                        y1="415"
                        x2="165"
                        y2="355"
                    />

                    {/* Torre */}
                    <line
                        x1="105"
                        y1="385"
                        x2="105"
                        y2="445"
                    />

                    <line
                        x1="85"
                        y1="445"
                        x2="125"
                        y2="445"
                    />

                    {/* Cable */}
                    <line
                        x1="165"
                        y1="355"
                        x2="165"
                        y2="400"
                    />

                    {/* Gancho pequeño */}
                    <path
                        d="
                            M165 400
                            C154 408 158 421 166 423
                            C175 423 180 414 174 407
                        "
                    />

                    {/* Carga */}
                    <rect
                        x="145"
                        y="423"
                        width="40"
                        height="22"
                    />

                </g>


                <text
                    x="52"
                    y="470"
                    fill={INK}
                    fontFamily="monospace"
                    fontSize="7"
                    opacity="0.5"
                >
                    DECK CRANE / LIFTING POINT
                </text>


                {/* =====================================================
                    NOTAS SUPERIORES
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
                        MARINE / 31
                    </text>

                    <text
                        x="42"
                        y="66"
                        fontSize="7"
                    >
                        CARGO HANDLING
                    </text>

                    <text
                        x="42"
                        y="78"
                        fontSize="7"
                    >
                        LIFTING HOOK ASSEMBLY
                    </text>


                    <text
                        x="520"
                        y="53"
                        fontSize="7"
                    >
                        DECK EQUIPMENT
                    </text>

                    <text
                        x="520"
                        y="65"
                        fontSize="7"
                    >
                        REV. 04
                    </text>

                    <text
                        x="520"
                        y="77"
                        fontSize="7"
                    >
                        SCALE 1:12
                    </text>

                </g>


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
                        y="465"
                        width="350"
                        height="40"
                    />

                    <line
                        x1="365"
                        y1="482"
                        x2="715"
                        y2="482"
                    />

                    <line
                        x1="510"
                        y1="465"
                        x2="510"
                        y2="505"
                    />

                    <line
                        x1="625"
                        y1="482"
                        x2="625"
                        y2="505"
                    />

                </g>


                <g
                    fill={INK}
                    fontFamily="monospace"
                    opacity="0.75"
                >

                    <text
                        x="520"
                        y="478"
                        fontSize="8"
                    >
                        MARINE LIFTING HOOK
                    </text>

                    <text
                        x="374"
                        y="478"
                        fontSize="6"
                    >
                        NAVAL
                    </text>

                    <text
                        x="374"
                        y="490"
                        fontSize="6"
                    >
                        ENGINEERING
                    </text>

                    <text
                        x="520"
                        y="498"
                        fontSize="7"
                    >
                        DWG No. 24-LH-3108
                    </text>

                    <text
                        x="632"
                        y="498"
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
                        MARINE ENGINEERING / CARGO HANDLING
                    </text>

                    <text
                        x="650"
                        y="510"
                    >
                        LH-31 / 04
                    </text>

                </g>

            </svg>
        </motion.div>
    );
}