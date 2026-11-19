import React from "react";

export const McpProtocolBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Dark Ambient Backing */}
      <div className="absolute inset-0 bg-[#060914]" />

      {/* Cybernetic MCP Data Bus Gradient */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-cyan-500/22 rounded-full blur-3xl" />
      <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-emerald-500/18 rounded-full blur-2xl" />

      {/* Subtle Scrim: Keeps text readable without drowning the artwork */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060914] via-[#060914]/65 to-[#060914]/30 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060914]/85 via-[#060914]/40 to-transparent z-[1]" />

      {/* MCP Architectural Circuit & Data Flow Canvas (Boosted to 75% opacity) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-75 group-hover:opacity-90 transition-opacity duration-500 z-0"
        viewBox="0 0 400 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="busPipelineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
          </linearGradient>

          <radialGradient id="packetGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background Grid Pattern */}
        <g stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3 6" opacity="0.6">
          <line x1="0" y1="70" x2="400" y2="70" />
          <line x1="0" y1="140" x2="400" y2="140" />
          <line x1="0" y1="210" x2="400" y2="210" />
          <line x1="100" y1="0" x2="100" y2="280" />
          <line x1="200" y1="0" x2="200" y2="280" />
          <line x1="300" y1="0" x2="300" y2="280" />
        </g>

        {/* MCP PROTOCOL SCHEMATIC: AI Client <---> MCP Server Bridges */}
        {/* Right Side: Host Server Endpoints (Sheets, Files, DB, GitHub) */}
        <g transform="translate(250, 42)" className="font-mono">
          {/* Server Node 1: Google Sheets / Data */}
          <rect x="50" y="10" width="75" height="28" rx="5" fill="#021f1d" stroke="#10b981" strokeWidth="1.4" />
          <circle cx="62" cy="24" r="3.5" fill="#10b981" className="animate-pulse" />
          <text x="70" y="27" fill="#6ee7b7" fontSize="7.5" fontWeight="bold">SHEETS_MCP</text>

          {/* Server Node 2: System Tools / API */}
          <rect x="50" y="60" width="75" height="28" rx="5" fill="#04212e" stroke="#06b6d4" strokeWidth="1.4" />
          <circle cx="62" cy="74" r="3.5" fill="#06b6d4" className="animate-pulse" />
          <text x="70" y="77" fill="#67e8f9" fontSize="7.5" fontWeight="bold">TOOLS_HOST</text>

          {/* Server Node 3: GitHub / Repos */}
          <rect x="50" y="110" width="75" height="28" rx="5" fill="#1e1136" stroke="#c084fc" strokeWidth="1.4" />
          <circle cx="62" cy="124" r="3.5" fill="#c084fc" className="animate-pulse" />
          <text x="70" y="127" fill="#e9d5ff" fontSize="7.5" fontWeight="bold">GITHUB_MCP</text>
        </g>

        {/* Central Interconnect Pipelines & Traces */}
        <g stroke="url(#busPipelineGrad)" strokeWidth="2.2" strokeLinecap="round" fill="none">
          <path d="M 120 120 L 210 120 L 250 66 L 300 66" />
          <path d="M 120 120 L 230 120 L 300 116" />
          <path d="M 120 120 L 210 120 L 250 166 L 300 166" />
        </g>

        {/* Pulsing Data Packets moving through Pipelines */}
        <circle cx="210" cy="120" r="4.5" fill="url(#packetGlow)" className="animate-ping" />
        <circle cx="250" cy="66" r="4" fill="#38bdf8" className="animate-pulse" />
        <circle cx="270" cy="116" r="4" fill="#10b981" className="animate-pulse" />
        <circle cx="250" cy="166" r="4" fill="#c084fc" className="animate-pulse" />

        {/* Left Side: MCP Client AI Hub Node */}
        <g transform="translate(35, 95)" className="font-mono">
          <rect x="0" y="0" width="85" height="52" rx="8" fill="#040c1e" stroke="#06b6d4" strokeWidth="1.8" />
          <circle cx="22" cy="26" r="9" fill="#083344" stroke="#22d3ee" strokeWidth="1.2" />
          <circle cx="22" cy="26" r="4.5" fill="#38bdf8" className="animate-pulse" />
          <text x="38" y="22" fill="#38bdf8" fontSize="8.5" fontWeight="bold">MCP_CORE</text>
          <text x="38" y="34" fill="#94a3b8" fontSize="7">JSON-RPC 2.0</text>
        </g>

        {/* Protocol Method Watermark */}
        <g className="font-mono" opacity="0.6">
          <text x="20" y="240" fill="#06b6d4" fontSize="8" fontWeight="bold" letterSpacing="0.5">
            {"-> method: \"tools/call\" { agent: \"active\" }"}
          </text>
          <text x="20" y="255" fill="#10b981" fontSize="8" fontWeight="bold" letterSpacing="0.5">
            {"<- result: \"200 OK\" // stream: pipe-connected"}
          </text>
        </g>

        {/* Protocol Flow Arrow Accents */}
        <polygon points="280,62 290,66 280,70" fill="#10b981" />
        <polygon points="280,112 290,116 280,120" fill="#06b6d4" />
        <polygon points="280,162 290,166 280,170" fill="#c084fc" />
      </svg>
    </div>
  );
};
