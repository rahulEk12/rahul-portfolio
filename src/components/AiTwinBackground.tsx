import React from "react";

export const AiTwinBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Dark Ambient Backing */}
      <div className="absolute inset-0 bg-[#080516]" />

      {/* Cyber AI Twin Hologram Glow (Vibrant violet/magenta) */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-purple-600/25 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-pink-600/20 rounded-full blur-2xl" />

      {/* Subtle Scrim: Keeps text readable while showcasing the AI visualizer */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080516] via-[#080516]/65 to-[#080516]/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080516]/85 via-[#080516]/40 to-transparent z-[1]" />

      {/* Neural AI Network & Voice Waveform Canvas (Boosted to 75% opacity) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-90 transition-opacity duration-500 z-0"
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neuralSynapseGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          <linearGradient id="voiceBarGrad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>

          <radialGradient id="aiAvatarAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e879f9" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6b21a8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Dynamic Holographic AI Avatar Ring (Right Side) */}
        <g transform="translate(310, 110)">
          {/* Rotating Outer Gyro Ring */}
          <circle
            cx="0"
            cy="0"
            r="65"
            stroke="#a855f7"
            strokeWidth="1.2"
            strokeDasharray="6 8 18 8"
            strokeOpacity="0.7"
            className="animate-spin-slow origin-center"
            style={{ transformOrigin: "0px 0px" }}
          />
          {/* Inner Counter Ring */}
          <circle
            cx="0"
            cy="0"
            r="48"
            stroke="#ec4899"
            strokeWidth="1.2"
            strokeDasharray="14 14"
            strokeOpacity="0.65"
            className="animate-reverse-spin-slow origin-center"
            style={{ transformOrigin: "0px 0px" }}
          />

          {/* Central AI Mind Core */}
          <circle cx="0" cy="0" r="32" fill="url(#aiAvatarAura)" className="animate-pulse" />
          <circle cx="0" cy="0" r="18" fill="#1e113a" stroke="#c084fc" strokeWidth="1.8" />
          <circle cx="0" cy="0" r="7" fill="#ffffff" />

          {/* AI Neural Mesh Vertices */}
          <g stroke="url(#neuralSynapseGrad)" strokeWidth="1.2" opacity="0.85">
            <line x1="-35" y1="-25" x2="0" y2="0" />
            <line x1="35" y1="-25" x2="0" y2="0" />
            <line x1="-25" y1="35" x2="0" y2="0" />
            <line x1="25" y1="35" x2="0" y2="0" />
            <line x1="-35" y1="-25" x2="-25" y2="35" />
            <line x1="35" y1="-25" x2="25" y2="35" />
          </g>
          <circle cx="-35" cy="-25" r="3.5" fill="#f472b6" className="animate-pulse" />
          <circle cx="35" cy="-25" r="3.5" fill="#c084fc" className="animate-pulse" />
          <circle cx="-25" cy="35" r="3.5" fill="#38bdf8" className="animate-pulse" />
          <circle cx="25" cy="35" r="3.5" fill="#f472b6" className="animate-pulse" />
        </g>

        {/* Conversational Voice / Audio Frequency Waves (Left/Center Background) */}
        <g transform="translate(60, 160)">
          <rect x="0" y="-14" width="4.5" height="28" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="10" y="-24" width="4.5" height="48" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="20" y="-38" width="4.5" height="76" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="30" y="-20" width="4.5" height="40" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="40" y="-45" width="4.5" height="90" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="50" y="-30" width="4.5" height="60" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="60" y="-16" width="4.5" height="32" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="70" y="-34" width="4.5" height="68" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="80" y="-22" width="4.5" height="44" rx="2" fill="url(#voiceBarGrad)" />
          <rect x="90" y="-10" width="4.5" height="20" rx="2" fill="url(#voiceBarGrad)" />
        </g>

        {/* Ambient Neural Wave Lines */}
        <path
          d="M 20 80 Q 90 40 160 80 T 300 80"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
        />
        <path
          d="M 20 100 Q 90 140 160 100 T 300 100"
          fill="none"
          stroke="#ec4899"
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />

        {/* AI Representative Telemetry Watermark */}
        <g className="font-mono" opacity="0.6">
          <text x="20" y="240" fill="#c084fc" fontSize="8" fontWeight="bold" letterSpacing="0.5">
            {"AI_TWIN: QREK-v2.5 // SYNAPSE ACTIVE"}
          </text>
          <text x="20" y="255" fill="#f472b6" fontSize="8" fontWeight="bold" letterSpacing="0.5">
            {"TRAINED: RESUME • PROJECTS • CERTIFICATIONS"}
          </text>
        </g>
      </svg>
    </div>
  );
};
