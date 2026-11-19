import React from "react";

export const SkillsSnapshotBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Dark Ambient Backing */}
      <div className="absolute inset-0 bg-[#060818]" />

      {/* Cybernetic Tech Blueprint Glow */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-600/22 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-cyan-600/20 rounded-full blur-2xl" />

      {/* Subtle Scrim: Keeps progress bars and text clear */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060818] via-[#060818]/65 to-[#060818]/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060818]/85 via-[#060818]/40 to-transparent z-[1]" />

      {/* Engineering Diagnostic Benchmark Canvas (Boosted to 75% opacity) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-90 transition-opacity duration-500 z-0"
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="techGaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <radialGradient id="matrixHubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Blueprint Engineering Coordinates Grid */}
        <g stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.6">
          <line x1="0" y1="60" x2="400" y2="60" />
          <line x1="0" y1="120" x2="400" y2="120" />
          <line x1="0" y1="180" x2="400" y2="180" />
          <line x1="80" y1="0" x2="80" y2="280" />
          <line x1="180" y1="0" x2="180" y2="280" />
          <line x1="280" y1="0" x2="280" y2="280" />
        </g>

        {/* Diagnostic Radar / Spider Skill Matrix (Upper Right) */}
        <g transform="translate(320, 85)">
          {/* Hexagonal Radar Framework */}
          <polygon
            points="0,-50 43,-25 43,25 0,50 -43,25 -43,-25"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="1.2"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
          />
          <polygon
            points="0,-32 28,-16 28,16 0,32 -28,16 -28,-16"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <polygon
            points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8"
            fill="none"
            stroke="#93c5fd"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Skill Performance Polygon (Crisply highlighted) */}
          <polygon
            points="0,-46 40,-12 36,22 0,42 -38,18 -36,-22"
            fill="url(#matrixHubGlow)"
            fillOpacity="0.35"
            stroke="#38bdf8"
            strokeWidth="1.8"
            className="animate-pulse"
          />

          {/* Radar Spokes */}
          <line x1="0" y1="-50" x2="0" y2="50" stroke="#475569" strokeWidth="1" />
          <line x1="-43" y1="-25" x2="43" y2="25" stroke="#475569" strokeWidth="1" />
          <line x1="-43" y1="25" x2="43" y2="-25" stroke="#475569" strokeWidth="1" />

          {/* Apex Metrics Data Points */}
          <circle cx="0" cy="-46" r="3.5" fill="#38bdf8" />
          <circle cx="40" cy="-12" r="3.5" fill="#c084fc" />
          <circle cx="36" cy="22" r="3.5" fill="#60a5fa" />
          <circle cx="0" cy="42" r="3.5" fill="#38bdf8" />
          <circle cx="-38" cy="18" r="3.5" fill="#10b981" />
          <circle cx="-36" cy="-22" r="3.5" fill="#f43f5e" />
        </g>

        {/* Micro Calibration Ruler Tick Marks (Left Background) */}
        <g stroke="#64748b" strokeWidth="1.2" opacity="0.8">
          <line x1="20" y1="40" x2="38" y2="40" />
          <line x1="20" y1="50" x2="30" y2="50" />
          <line x1="20" y1="60" x2="30" y2="60" />
          <line x1="20" y1="70" x2="30" y2="70" />
          <line x1="20" y1="80" x2="38" y2="80" />
          <line x1="20" y1="90" x2="30" y2="90" />
          <line x1="20" y1="100" x2="38" y2="100" />
          <line x1="20" y1="110" x2="30" y2="110" />
          <line x1="20" y1="120" x2="38" y2="120" />
        </g>

        {/* Technical Proficiency Spectrum Gauge (Lower Center) */}
        <g transform="translate(140, 200)" stroke="url(#techGaugeGrad)" strokeWidth="1.8" opacity="0.75">
          <circle cx="0" cy="0" r="30" fill="none" strokeDasharray="120 180" className="animate-spin-slow" />
          <circle cx="0" cy="0" r="20" fill="none" strokeDasharray="60 90" className="animate-reverse-spin-slow" />
        </g>

        {/* Engineering Status Telemetry Watermark */}
        <g className="font-mono" opacity="0.65">
          <text x="20" y="240" fill="#38bdf8" fontSize="8" fontWeight="bold" letterSpacing="0.5">
            {"BENCHMARK // EFFICIENCY: 95.8%"}
          </text>
          <text x="20" y="255" fill="#818cf8" fontSize="8" fontWeight="bold" letterSpacing="0.5">
            {"STACK: REACT • TAILWIND • TS • PYTHON • MCP"}
          </text>
        </g>
      </svg>
    </div>
  );
};
