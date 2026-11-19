import React from "react";

export const WorldMapLocation: React.FC = () => {
  // Exact Geographic Coordinates: 26°36'43.7"N 83°14'54.8"E (Uttar Pradesh, India)
  // Projected on 1000x500 Equirectangular Coordinate Matrix:
  // X = ((83.248556 + 180) / 360) * 1000 ≈ 731
  // Y = ((90 - 26.612139) / 180) * 500 ≈ 176
  const targetX = 731;
  const targetY = 176;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Dark Cyber Atmosphere Backing */}
      <div className="absolute inset-0 bg-[#060914]" />

      {/* Cyber Grid & Glowing Radar Ambience (Vibrant glows) */}
      <div 
        className="absolute w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none"
        style={{ left: "60%", top: "30%", transform: "translate(-50%, -50%)" }}
      />
      <div 
        className="absolute w-64 h-64 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none"
        style={{ left: "68%", top: "38%", transform: "translate(-50%, -50%)" }}
      />

      {/* High-Contrast Scrim: Soft dark vignette around edges and bottom, keeping map visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060914] via-[#060914]/50 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#060914]/40 to-[#060914]/80 z-[1]" />

      {/* High-Tech Vector World Map Canvas (Boosted to 75% opacity) */}
      <div className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-90 transition-opacity duration-500 z-0">
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-cover scale-125 sm:scale-110 -translate-x-12 sm:-translate-x-6 translate-y-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Radar Sweep Gradient */}
            <radialGradient id="radarPingGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="mapContourGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="radarBeam" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Latitude & Longitude Coordinate Lines */}
          <g stroke="#334155" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.6">
            {/* Equator (0°) */}
            <line x1="0" y1="250" x2="1000" y2="250" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" />
            {/* Tropic of Cancer (23.5°N) */}
            <line x1="0" y1="185" x2="1000" y2="185" stroke="#10b981" strokeWidth="1" strokeOpacity="0.5" />
            {/* Tropic of Capricorn (23.5°S) */}
            <line x1="0" y1="315" x2="1000" y2="315" />
            {/* Arctic / Antarctic Circles */}
            <line x1="0" y1="65" x2="1000" y2="65" />
            <line x1="0" y1="435" x2="1000" y2="435" />

            {/* Meridians */}
            <line x1="166" y1="0" x2="166" y2="500" />
            <line x1="333" y1="0" x2="333" y2="500" />
            {/* Prime Meridian (0°) */}
            <line x1="500" y1="0" x2="500" y2="500" stroke="#06b6d4" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="666" y1="0" x2="666" y2="500" />
            {/* 80°E Meridian near Home */}
            <line x1="722" y1="0" x2="722" y2="500" stroke="#10b981" strokeWidth="1.2" strokeOpacity="0.6" />
            <line x1="833" y1="0" x2="833" y2="500" />
          </g>

          {/* World Continents Stylized Outlines */}
          <g stroke="url(#mapContourGrad)" strokeWidth="1.5" fill="#0c1d37" fillOpacity="0.8">
            {/* North America */}
            <path d="M 80,75 L 170,55 L 245,65 L 275,100 L 250,140 L 220,135 L 230,175 L 205,190 L 195,240 L 180,265 L 165,225 L 140,210 L 115,160 L 80,140 Z" />
            {/* Greenland */}
            <path d="M 285,40 L 340,30 L 375,55 L 340,95 L 300,90 Z" />
            {/* South America */}
            <path d="M 200,260 L 235,270 L 275,300 L 320,335 L 305,400 L 270,455 L 245,465 L 235,420 L 210,345 L 190,290 Z" />
            {/* Europe */}
            <path d="M 455,85 L 535,75 L 565,100 L 585,130 L 530,155 L 485,165 L 455,145 L 435,115 Z" />
            {/* Great Britain & Scandinavia */}
            <path d="M 445,95 L 460,90 L 460,115 L 445,115 Z" />
            <path d="M 505,45 L 545,50 L 540,95 L 515,90 Z" />
            {/* Africa */}
            <path d="M 455,175 L 525,165 L 575,200 L 610,240 L 585,285 L 555,385 L 525,415 L 485,370 L 445,265 L 435,205 Z" />
            {/* Madagascar */}
            <path d="M 610,350 L 625,355 L 615,400 L 600,395 Z" />
            {/* Asia & Eurasia Mainland */}
            <path d="M 565,85 L 685,60 L 800,65 L 890,95 L 895,150 L 855,175 L 840,225 L 800,245 L 755,205 L 735,220 L 710,210 L 685,225 L 615,190 L 575,135 Z" />
            
            {/* Indian Subcontinent (Prominently Highlighted with Glow) */}
            <path
              d="M 685,185 L 725,165 L 760,180 L 750,225 L 731,275 L 715,245 L 690,220 Z"
              fill="#063d52"
              fillOpacity="0.9"
              stroke="#22d3ee"
              strokeWidth="2.2"
            />
            {/* Sri Lanka */}
            <circle cx="738" cy="285" r="4" fill="#22d3ee" stroke="#38bdf8" strokeWidth="1" />

            {/* Japan */}
            <path d="M 885,145 L 905,155 L 900,195 L 880,185 Z" />
            {/* Southeast Asia */}
            <path d="M 770,225 L 820,245 L 805,305 L 775,265 Z" />
            {/* Australia */}
            <path d="M 810,345 L 885,335 L 925,375 L 905,435 L 845,445 L 805,395 Z" />
          </g>

          {/* Radar Sweep Arc originating from Target Base */}
          <g className="animate-radar-sweep" style={{ transformOrigin: `${targetX}px ${targetY}px` }}>
            <path
              d={`M ${targetX} ${targetY} L ${targetX + 170} ${targetY - 65} A 180 180 0 0 1 ${targetX + 180} ${targetY} Z`}
              fill="url(#radarBeam)"
            />
            <line x1={targetX} y1={targetY} x2={targetX + 180} y2={targetY} stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.9" />
          </g>

          {/* HOME LOCATION TARGET SYSTEM: 26°36'43.7"N 83°14'54.8"E */}
          <g>
            {/* Expanding Radar Rings (Pulse Waves) */}
            <circle
              cx={targetX}
              cy={targetY}
              r="26"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.8"
              strokeOpacity="0.9"
              className="animate-radar-pulse"
              style={{ transformOrigin: `${targetX}px ${targetY}px` }}
            />
            <circle
              cx={targetX}
              cy={targetY}
              r="52"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="1.4"
              strokeDasharray="4 4"
              strokeOpacity="0.7"
              className="animate-radar-pulse"
              style={{ animationDelay: "1.2s", transformOrigin: `${targetX}px ${targetY}px` }}
            />
            <circle
              cx={targetX}
              cy={targetY}
              r="78"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="0.8"
              strokeDasharray="3 6"
              strokeOpacity="0.4"
            />

            {/* Precision HUD Reticle / Crosshair */}
            <circle cx={targetX} cy={targetY} r="12" stroke="#10b981" strokeWidth="1.8" fill="none" />
            <line x1={targetX - 22} y1={targetY} x2={targetX - 14} y2={targetY} stroke="#10b981" strokeWidth="2" />
            <line x1={targetX + 14} y1={targetY} x2={targetX + 22} y2={targetY} stroke="#10b981" strokeWidth="2" />
            <line x1={targetX} y1={targetY - 22} x2={targetX} y2={targetY - 14} stroke="#10b981" strokeWidth="2" />
            <line x1={targetX} y1={targetY + 14} x2={targetX} y2={targetY + 22} stroke="#10b981" strokeWidth="2" />

            {/* Glowing Center Pin Dot */}
            <circle cx={targetX} cy={targetY} r="5" fill="#10b981" className="animate-pulse" />
            <circle cx={targetX} cy={targetY} r="2.2" fill="#ffffff" />

            {/* Target Callout Leader Line */}
            <polyline
              points={`${targetX},${targetY} ${targetX - 45},${targetY - 45} ${targetX - 220},${targetY - 45}`}
              stroke="#10b981"
              strokeWidth="1.8"
              fill="none"
            />
            <circle cx={targetX - 45} cy={targetY - 45} r="3" fill="#10b981" />

            {/* HUD Target Lock Info Box */}
            <g transform={`translate(${targetX - 240}, ${targetY - 95})`} className="font-mono">
              <rect
                x="0"
                y="0"
                width="190"
                height="46"
                rx="4"
                fill="#030712"
                fillOpacity="0.95"
                stroke="#10b981"
                strokeWidth="1.4"
              />
              <path d="M 0 6 L 6 0 M 190 6 L 184 0 M 0 40 L 6 46 M 190 40 L 184 46" stroke="#10b981" strokeWidth="1.5" />
              
              <text x="10" y="15" fill="#34d399" fontSize="9" fontWeight="bold" letterSpacing="0.6">
                ● TARGET LOCK: HOME BASE
              </text>
              <text x="10" y="27" fill="#ffffff" fontSize="9.5" fontWeight="bold" letterSpacing="0.4">
                26°36'43.7"N 83°14'54.8"E
              </text>
              <text x="10" y="38" fill="#cbd5e1" fontSize="7.5" letterSpacing="0.2">
                UTTAR PRADESH, INDIA // LOCAL ORIGIN
              </text>
            </g>
          </g>

          {/* Lower Matrix Status */}
          <g className="font-mono" opacity="0.8">
            <text x="30" y="475" fill="#94a3b8" fontSize="8.5" letterSpacing="1">
              GEO-RADAR GRID // WGS-84 ACTIVE
            </text>
            <text x="730" y="475" fill="#34d399" fontSize="8.5" fontWeight="bold" letterSpacing="1">
              LOC: 26.6121° N, 83.2486° E
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
