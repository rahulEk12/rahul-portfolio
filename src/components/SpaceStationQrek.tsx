import React from "react";

export const SpaceStationQrek: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Deep Cosmos Backdrop */}
      <div className="absolute inset-0 bg-[#030611]" />

      {/* Vibrant Nebula Dust Cloud (Deep space cyan & ultraviolet haze) */}
      <div className="absolute -top-24 right-0 w-[580px] h-[480px] bg-gradient-to-bl from-cyan-500/25 via-indigo-700/25 to-transparent rounded-full blur-[80px]" />
      <div className="absolute top-1/4 -right-10 w-[460px] h-[380px] bg-gradient-to-tl from-purple-600/22 via-blue-700/20 to-transparent rounded-full blur-[85px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-48 bg-cyan-600/18 rounded-full blur-[70px]" />

      {/* High-Contrast Scrim Gradient: Keeps text on the left readable while letting the station shine on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030611]/95 via-[#030611]/75 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030611]/85 via-transparent to-transparent z-[1]" />

      {/* Photorealistic Starfield Canvas (Micro stars, color temperatures & twinkle) */}
      <svg className="absolute inset-0 w-full h-full opacity-85 z-0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Faint distant cosmic star dust */}
        <circle cx="8%" cy="25%" r="0.8" fill="#93c5fd" opacity="0.6" />
        <circle cx="16%" cy="14%" r="0.9" fill="#ffffff" opacity="0.8" />
        <circle cx="24%" cy="40%" r="0.7" fill="#fde68a" opacity="0.7" />
        <circle cx="35%" cy="18%" r="1" fill="#ffffff" opacity="0.85" />
        <circle cx="48%" cy="10%" r="0.8" fill="#67e8f9" opacity="0.7" />
        <circle cx="56%" cy="28%" r="1" fill="#ffffff" opacity="0.8" />
        <circle cx="63%" cy="12%" r="1.3" fill="#bae6fd" opacity="0.9" />
        <circle cx="70%" cy="35%" r="0.8" fill="#ffffff" opacity="0.7" />
        <circle cx="77%" cy="8%" r="1.6" fill="#ffffff" opacity="0.95" filter="url(#starGlow)" />
        <circle cx="84%" cy="22%" r="0.9" fill="#fbcfe8" opacity="0.8" />
        <circle cx="91%" cy="15%" r="1.4" fill="#67e8f9" opacity="0.95" filter="url(#starGlow)" />
        <circle cx="96%" cy="32%" r="0.8" fill="#ffffff" opacity="0.6" />
        <circle cx="68%" cy="48%" r="0.9" fill="#fef08a" opacity="0.7" />
        <circle cx="88%" cy="52%" r="1.5" fill="#ffffff" opacity="0.95" filter="url(#starGlow)" />
        <circle cx="74%" cy="62%" r="0.7" fill="#93c5fd" opacity="0.6" />
        <circle cx="82%" cy="70%" r="1" fill="#ffffff" opacity="0.8" />
        <circle cx="62%" cy="75%" r="0.9" fill="#ffffff" opacity="0.7" />
        <circle cx="53%" cy="85%" r="0.8" fill="#67e8f9" opacity="0.7" />

        {/* Major navigation reference star with diffraction spikes */}
        <g transform="translate(480, 45)" opacity="0.85">
          <line x1="-10" y1="0" x2="10" y2="0" stroke="#bae6fd" strokeWidth="0.9" />
          <line x1="0" y1="-10" x2="0" y2="10" stroke="#bae6fd" strokeWidth="0.9" />
          <circle cx="0" cy="0" r="1.8" fill="#ffffff" />
        </g>
      </svg>

      {/* Realistic Curved Earth Horizon with Glowing Rayleigh Atmosphere (Bottom Right) */}
      <svg
        className="absolute -bottom-24 -right-16 w-[620px] sm:w-[720px] h-[380px] z-0 opacity-75 group-hover:opacity-90 transition duration-700"
        viewBox="0 0 720 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="earthLimbGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="25%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#1e3a8a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#030712" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="earthOceanNight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0a254e" />
            <stop offset="60%" stopColor="#04122c" />
            <stop offset="100%" stopColor="#020713" />
          </linearGradient>

          <filter id="atmosphereBlur" x="-15%" y="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Earth Planet Silhouette Body */}
        <path
          d="M 40 380 Q 320 110 720 70 L 720 380 Z"
          fill="url(#earthOceanNight)"
          stroke="#0284c7"
          strokeWidth="1.2"
          strokeOpacity="0.6"
        />

        {/* Realistic Rayleigh Atmospheric Scattering Halo */}
        <path
          d="M 35 380 Q 315 105 720 65"
          fill="none"
          stroke="url(#earthLimbGlow)"
          strokeWidth="8"
          filter="url(#atmosphereBlur)"
        />
        <path
          d="M 38 380 Q 318 108 720 68"
          fill="none"
          stroke="#e0f2fe"
          strokeWidth="1.8"
          strokeOpacity="0.9"
        />

        {/* Realistic Cloud Formations over Earth Horizon */}
        <path
          d="M 280 230 C 340 200, 390 220, 440 190 C 490 160, 540 170, 600 130"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="16"
          strokeOpacity="0.14"
          strokeLinecap="round"
          filter="blur(5px)"
        />
        <path
          d="M 360 260 C 420 230, 480 240, 560 180 C 620 140, 670 145, 710 110"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="20"
          strokeOpacity="0.12"
          strokeLinecap="round"
          filter="blur(8px)"
        />

        {/* Night-Side City Lights (Warm golden clusters) */}
        <g opacity="0.85">
          <circle cx="360" cy="235" r="1.8" fill="#fef08a" />
          <circle cx="370" cy="242" r="1.2" fill="#fef08a" opacity="0.8" />
          <circle cx="415" cy="205" r="2.2" fill="#fde047" />
          <circle cx="425" cy="212" r="1.5" fill="#fef08a" opacity="0.9" />
          <circle cx="435" cy="198" r="1.7" fill="#fde047" />
          <circle cx="485" cy="175" r="2.2" fill="#fde047" />
          <circle cx="520" cy="155" r="1.5" fill="#fef08a" />
          <circle cx="560" cy="142" r="2.4" fill="#fde047" />
          <circle cx="575" cy="148" r="1.2" fill="#fef08a" />
          <circle cx="620" cy="122" r="2" fill="#fef08a" />
          <circle cx="660" cy="105" r="1.6" fill="#fde047" />
        </g>
      </svg>

      {/* Realistic AI Space Station "QREK" (Crisply visible in orbit) */}
      <div className="absolute top-1 right-2 sm:right-6 md:right-10 w-[380px] sm:w-[480px] md:w-[540px] h-[340px] sm:h-[370px] z-0 animate-float-station opacity-90 group-hover:opacity-100 transition-opacity duration-500">
        <svg
          viewBox="0 0 540 370"
          className="w-full h-full drop-shadow-[0_10px_35px_rgba(6,182,212,0.3)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Realistic Titanium / Aluminum Module Shading */}
            <linearGradient id="metalModule" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e2e8f0" />
              <stop offset="65%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* Aerospace Gold MLI Thermal Foil (Gold Foil Blankets) */}
            <linearGradient id="goldMLIFoil" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#92400e" />
            </linearGradient>

            {/* Deep Blue Silicon Photovoltaic Array with Anti-Reflective Coating */}
            <linearGradient id="solarCellSilicon" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0369a1" />
              <stop offset="20%" stopColor="#0ea5e9" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="80%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#075985" />
            </linearGradient>

            {/* AI Quantum Supercomputing Core Glow */}
            <radialGradient id="aiQuantumCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="30%" stopColor="#38bdf8" />
              <stop offset="70%" stopColor="#0284c7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
            </radialGradient>

            {/* Observation Cupola Interior Warm Glow */}
            <radialGradient id="cupolaWarmth" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="70%" stopColor="#eab308" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.3" />
            </radialGradient>

            <filter id="coreGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* MAIN SOLAR POWER ARRAYS (Accurately detailed aerospace solar wings) */}
          <g transform="translate(270 170) rotate(-14)">
            {/* Central Main Structural Truss Backbone */}
            <rect x="-190" y="-4" width="380" height="8" rx="2" fill="#334155" stroke="#cbd5e1" strokeWidth="1" />
            {/* Hexagonal Cross-truss structure markings */}
            <line x1="-160" y1="-9" x2="-160" y2="9" stroke="#ffffff" strokeWidth="1.4" />
            <line x1="-80" y1="-9" x2="-80" y2="9" stroke="#ffffff" strokeWidth="1.4" />
            <line x1="80" y1="-9" x2="80" y2="9" stroke="#ffffff" strokeWidth="1.4" />
            <line x1="160" y1="-9" x2="160" y2="9" stroke="#ffffff" strokeWidth="1.4" />

            {/* Thermal Radiator Panels */}
            <g transform="translate(-115 -44)">
              <rect x="0" y="0" width="36" height="40" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
              <line x1="12" y1="0" x2="12" y2="40" stroke="#cbd5e1" strokeWidth="0.8" />
              <line x1="24" y1="0" x2="24" y2="40" stroke="#cbd5e1" strokeWidth="0.8" />
            </g>
            <g transform="translate(85 -44)">
              <rect x="0" y="0" width="36" height="40" rx="2" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
              <line x1="12" y1="0" x2="12" y2="40" stroke="#cbd5e1" strokeWidth="0.8" />
              <line x1="24" y1="0" x2="24" y2="40" stroke="#cbd5e1" strokeWidth="0.8" />
            </g>

            {/* LEFT SOLAR WING PAIR */}
            <g transform="translate(-185 -55)">
              <rect x="0" y="0" width="60" height="50" rx="2" fill="url(#solarCellSilicon)" stroke="#38bdf8" strokeWidth="1.2" />
              <rect x="60" y="20" width="9" height="10" rx="1.5" fill="url(#goldMLIFoil)" stroke="#78350f" strokeWidth="0.5" />
              <line x1="15" y1="0" x2="15" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="30" y1="0" x2="30" y2="50" stroke="#f59e0b" strokeWidth="1.2" />
              <line x1="45" y1="0" x2="45" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="0" y1="12" x2="60" y2="12" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="25" x2="60" y2="25" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="37" x2="60" y2="37" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
            </g>

            <g transform="translate(-185 6)">
              <rect x="0" y="0" width="60" height="50" rx="2" fill="url(#solarCellSilicon)" stroke="#38bdf8" strokeWidth="1.2" />
              <rect x="60" y="20" width="9" height="10" rx="1.5" fill="url(#goldMLIFoil)" stroke="#78350f" strokeWidth="0.5" />
              <line x1="15" y1="0" x2="15" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="30" y1="0" x2="30" y2="50" stroke="#f59e0b" strokeWidth="1.2" />
              <line x1="45" y1="0" x2="45" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="0" y1="12" x2="60" y2="12" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="25" x2="60" y2="25" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="37" x2="60" y2="37" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
            </g>

            {/* RIGHT SOLAR WING PAIR */}
            <g transform="translate(125 -55)">
              <rect x="0" y="0" width="60" height="50" rx="2" fill="url(#solarCellSilicon)" stroke="#38bdf8" strokeWidth="1.2" />
              <rect x="-9" y="20" width="9" height="10" rx="1.5" fill="url(#goldMLIFoil)" stroke="#78350f" strokeWidth="0.5" />
              <line x1="15" y1="0" x2="15" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="30" y1="0" x2="30" y2="50" stroke="#f59e0b" strokeWidth="1.2" />
              <line x1="45" y1="0" x2="45" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="0" y1="12" x2="60" y2="12" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="25" x2="60" y2="25" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="37" x2="60" y2="37" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
            </g>

            <g transform="translate(125 6)">
              <rect x="0" y="0" width="60" height="50" rx="2" fill="url(#solarCellSilicon)" stroke="#38bdf8" strokeWidth="1.2" />
              <rect x="-9" y="20" width="9" height="10" rx="1.5" fill="url(#goldMLIFoil)" stroke="#78350f" strokeWidth="0.5" />
              <line x1="15" y1="0" x2="15" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="30" y1="0" x2="30" y2="50" stroke="#f59e0b" strokeWidth="1.2" />
              <line x1="45" y1="0" x2="45" y2="50" stroke="#38bdf8" strokeWidth="0.7" strokeOpacity="0.8" />
              <line x1="0" y1="12" x2="60" y2="12" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="25" x2="60" y2="25" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
              <line x1="0" y1="37" x2="60" y2="37" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.7" />
            </g>
          </g>

          {/* ROTATING ARTIFICIAL GRAVITY CENTRIFUGE HABITAT */}
          <g transform="translate(270 170) rotate(-14)">
            {/* Counter-rotating Gyroscopic Ring */}
            <ellipse
              cx="0"
              cy="0"
              rx="78"
              ry="32"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeDasharray="8 12 24 12"
              strokeOpacity="0.7"
              className="animate-spin-slow origin-center"
              style={{ transformOrigin: "0px 0px" }}
            />

            {/* Heavy Composite Habitat Ring */}
            <ellipse
              cx="0"
              cy="0"
              rx="66"
              ry="26"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="6"
            />
            <ellipse
              cx="0"
              cy="0"
              rx="66"
              ry="26"
              fill="none"
              stroke="#0f172a"
              strokeWidth="3"
            />
            {/* Glowing Windows on Ring */}
            <circle cx="-66" cy="0" r="2.2" fill="#fef08a" />
            <circle cx="66" cy="0" r="2.2" fill="#fef08a" />
            <circle cx="0" cy="-26" r="2.2" fill="#38bdf8" />
            <circle cx="0" cy="26" r="2.2" fill="#38bdf8" />

            {/* Structural Connecting Spokes */}
            <line x1="-63" y1="0" x2="63" y2="0" stroke="#cbd5e1" strokeWidth="2.2" />
            <line x1="0" y1="-24" x2="0" y2="24" stroke="#cbd5e1" strokeWidth="2.2" />
          </g>

          {/* CENTRAL PRESSURIZED MODULES & AI CORE */}
          <g transform="translate(270 170) rotate(-14)">
            <rect
              x="-19"
              y="-44"
              width="38"
              height="88"
              rx="12"
              fill="url(#metalModule)"
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
            {/* Gold foil wrapped collars */}
            <rect x="-18" y="-23" width="36" height="13" fill="url(#goldMLIFoil)" stroke="#b45309" strokeWidth="0.8" />
            <rect x="-18" y="10" width="36" height="13" fill="url(#goldMLIFoil)" stroke="#b45309" strokeWidth="0.8" />

            {/* AI QUANTUM SUPERCOMPUTING CORE (Center of Qrek) */}
            <circle cx="0" cy="0" r="15" fill="#030712" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="0" cy="0" r="12" fill="url(#aiQuantumCore)" filter="url(#coreGlowFilter)" className="animate-pulse" />
            <circle cx="0" cy="0" r="5" fill="#ffffff" />

            {/* Observation Cupola Dome */}
            <path d="M -9 44 A 9 9 0 0 0 9 44 Z" fill="url(#cupolaWarmth)" stroke="#38bdf8" strokeWidth="1.2" />

            {/* Visiting Crew / AI Automated Pod */}
            <g transform="translate(0 49)">
              <rect x="-8" y="0" width="16" height="13" rx="3" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
              <circle cx="0" cy="6" r="2.5" fill="#0ea5e9" />
              <line x1="-10" y1="4" x2="-8" y2="4" stroke="#f59e0b" strokeWidth="1.2" />
              <line x1="8" y1="4" x2="10" y2="4" stroke="#f59e0b" strokeWidth="1.2" />
            </g>

            {/* High-Gain Parabolic Communications Dish & Sensor Tower */}
            <g transform="translate(0 -44)">
              <line x1="0" y1="0" x2="0" y2="-46" stroke="#f8fafc" strokeWidth="2.5" />
              <path d="M -18 -38 Q 0 -30 18 -38" fill="none" stroke="#f8fafc" strokeWidth="3" />
              <line x1="0" y1="-34" x2="0" y2="-44" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="0" cy="-46" r="3" fill="#38bdf8" />
              <circle cx="0" cy="-46" r="7" fill="#38bdf8" opacity="0.6" className="animate-ping" />
            </g>

            {/* Port & Starboard Navigation Lights */}
            <circle cx="-188" cy="0" r="2.5" fill="#ef4444" className="animate-pulse" />
            <circle cx="188" cy="0" r="2.5" fill="#10b981" className="animate-pulse" />
          </g>

          {/* TELEMETRY & HUD TRACKING OVERLAY */}
          <g className="font-mono select-none">
            <path d="M 230 115 L 215 115 L 215 130" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <path d="M 310 115 L 325 115 L 325 130" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <path d="M 230 225 L 215 225 L 215 210" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
            <path d="M 310 225 L 325 225 L 325 210" stroke="#06b6d4" strokeWidth="1.5" fill="none" />

            <polyline
              points="270,126 310,95 440,95"
              stroke="#06b6d4"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              fill="none"
            />
            <circle cx="270" cy="126" r="3" fill="#38bdf8" />

            <g transform="translate(320, 68)">
              <rect
                x="0"
                y="0"
                width="180"
                height="28"
                rx="4"
                fill="#030712"
                fillOpacity="0.9"
                stroke="#06b6d4"
                strokeWidth="1"
              />
              <circle cx="12" cy="14" r="3.5" fill="#10b981" className="animate-pulse" />
              <text x="22" y="14" fill="#38bdf8" fontSize="8.5" fontWeight="bold" letterSpacing="0.6" dominantBaseline="middle">
                AI STATION // QREK
              </text>
              <text x="120" y="14" fill="#cbd5e1" fontSize="7" dominantBaseline="middle">
                LEO • 418 KM
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Subtle CRT line structure */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#030611]/60 pointer-events-none" />
    </div>
  );
};
