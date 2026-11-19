import React from "react";

interface LogoProps {
  className?: string;
}

// 1. Model Context Protocol (MCP) Official Network Symbol
export const McpLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#04202c" stroke="#06b6d4" strokeWidth="1.5" />
    <circle cx="16" cy="9" r="3" fill="#22d3ee" />
    <circle cx="9" cy="21" r="3" fill="#38bdf8" />
    <circle cx="23" cy="21" r="3" fill="#10b981" />
    <line x1="16" y1="9" x2="9" y2="21" stroke="#06b6d4" strokeWidth="1.6" />
    <line x1="16" y1="9" x2="23" y2="21" stroke="#06b6d4" strokeWidth="1.6" />
    <line x1="9" y1="21" x2="23" y2="21" stroke="#06b6d4" strokeWidth="1.6" />
    <circle cx="16" cy="15" r="1.5" fill="#ffffff" />
  </svg>
);

// 2. AI Workflow Automation (Neural Workflow Nodes)
export const AiWorkflowLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#0f172a" />
    <path
      d="M 8 16 L 14 10 L 20 16 L 26 10 M 14 22 L 20 16 L 26 22"
      stroke="#38bdf8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="16" r="2.5" fill="#06b6d4" />
    <circle cx="14" cy="10" r="2.5" fill="#818cf8" />
    <circle cx="20" cy="16" r="3" fill="#f43f5e" />
    <circle cx="26" cy="10" r="2.5" fill="#10b981" />
    <circle cx="14" cy="22" r="2.5" fill="#a855f7" />
    <circle cx="26" cy="22" r="2.5" fill="#fbbf24" />
  </svg>
);

// 3. Claude & ChatGPT SDKs (Anthropic Sunburst & OpenAI Spiral)
export const ClaudeChatGptLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#111827" />
    {/* OpenAI Green swirl accent */}
    <circle cx="12" cy="16" r="7" stroke="#10a37f" strokeWidth="2" strokeDasharray="6 3" />
    <circle cx="12" cy="16" r="2" fill="#10a37f" />
    {/* Claude Coral Sparkle */}
    <path
      d="M 22 10 L 22 22 M 16 16 L 28 16 M 18 12 L 26 20 M 18 20 L 26 12"
      stroke="#d97706"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="22" cy="16" r="1.5" fill="#fbbf24" />
  </svg>
);

// 4. Prompt Engineering (Terminal AI Console)
export const PromptEngineeringLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="7" fill="#030712" stroke="#374151" strokeWidth="1" />
    <rect x="0" y="0" width="32" height="8" rx="7" fill="#1f2937" />
    <circle cx="5" cy="4" r="1.5" fill="#ef4444" />
    <circle cx="9" cy="4" r="1.5" fill="#f59e0b" />
    <circle cx="13" cy="4" r="1.5" fill="#10b981" />
    {/* Prompt Arrow & Cursor */}
    <path d="M 6 15 L 11 19 L 6 23" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="14" y1="23" x2="21" y2="23" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="24" cy="15" r="1.5" fill="#fbbf24" />
  </svg>
);

// 5. Cursor & Windsurf Labs (Cursor Isometric Cube & Windsurf Wave)
export const CursorWindsurfLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#0f172a" />
    {/* Isometric Cube (Cursor) */}
    <path d="M 16 6 L 25 11 L 16 16 L 7 11 Z" fill="#93c5fd" />
    <path d="M 7 11 L 16 16 L 16 26 L 7 21 Z" fill="#3b82f6" />
    <path d="M 16 16 L 25 11 L 25 21 L 16 26 Z" fill="#1d4ed8" />
    <line x1="16" y1="16" x2="16" y2="26" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.5" />
    {/* Windsurf cyan ripple */}
    <path d="M 11 27 Q 16 24 21 27" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 6. Figma Official Logo (5 Iconic Color Blocks)
export const FigmaLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Top Left: Red */}
    <path d="M 11 5 C 8.24 5 6 7.24 6 10 C 6 12.76 8.24 15 11 15 L 16 15 L 16 5 Z" fill="#F24E1E" />
    {/* Top Right: Orange */}
    <path d="M 21 5 C 18.24 5 16 5 16 5 L 16 15 L 21 15 C 23.76 15 26 12.76 26 10 C 26 7.24 23.76 5 21 5 Z" fill="#FF7262" />
    {/* Middle Left: Purple */}
    <path d="M 11 15 C 8.24 15 6 17.24 6 20 C 6 22.76 8.24 25 11 25 L 16 25 L 16 15 Z" fill="#A259FF" />
    {/* Center Circle: Blue */}
    <circle cx="21" cy="20" r="5" fill="#1ABCFE" />
    {/* Bottom Left: Green */}
    <path d="M 11 25 C 8.24 25 6 27.24 6 30 C 6 32.76 8.24 35 11 35 L 11 25 Z" fill="#0ACF83" transform="scale(0.85) translate(2, -2)" />
    <path d="M 11 25 C 8.24 25 6 27.24 6 30 C 6 32 8.24 32 11 32 C 13.76 32 16 29.76 16 27 L 16 25 Z" fill="#0ACF83" />
  </svg>
);

// 7. Canva Official Logo (Gradient Circle with Canva Script 'C')
export const CanvaLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="canvaGrad" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#00c4cc" />
        <stop offset="60%" stopColor="#2b6cb0" />
        <stop offset="100%" stopColor="#7d2ae8" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="16" fill="url(#canvaGrad)" />
    {/* Canva Ribbon 'C' */}
    <path
      d="M 23 12 C 21 9 17 9 14 11 C 10 13.5 9 19 12 22 C 14.5 24.5 19 23.5 21 21 C 21.5 20.3 22.5 21 21.8 21.8 C 19 25 13 25.5 10 22.5 C 6.5 19 8 12 12.5 9 C 16.5 6.5 21.5 7 23.8 10.5 C 24.3 11.2 23.5 12 23 12 Z"
      fill="#ffffff"
    />
  </svg>
);

// 8. Digital Content Mapping (Flowchart / Sitemap Wireframe)
export const ContentMappingLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#1e1b4b" />
    {/* Top Root Node */}
    <rect x="11" y="5" width="10" height="6" rx="2" fill="#818cf8" />
    {/* Connector Lines */}
    <line x1="16" y1="11" x2="16" y2="16" stroke="#c7d2fe" strokeWidth="1.5" />
    <line x1="8" y1="16" x2="24" y2="16" stroke="#c7d2fe" strokeWidth="1.5" />
    <line x1="8" y1="16" x2="8" y2="20" stroke="#c7d2fe" strokeWidth="1.5" />
    <line x1="24" y1="16" x2="24" y2="20" stroke="#c7d2fe" strokeWidth="1.5" />
    {/* Leaf Nodes */}
    <rect x="4" y="20" width="8" height="6" rx="2" fill="#38bdf8" />
    <rect x="20" y="20" width="8" height="6" rx="2" fill="#ec4899" />
  </svg>
);

// 9. Profile & Doc Layouts (Notion / Editorial Document Layout)
export const DocLayoutLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="4" width="20" height="24" rx="3" fill="#ffffff" />
    <path d="M 21 4 L 26 9 L 21 9 Z" fill="#94a3b8" />
    {/* Heading line */}
    <rect x="10" y="11" width="10" height="2.5" rx="1" fill="#4f46e5" />
    {/* Body lines */}
    <rect x="10" y="16" width="12" height="1.8" rx="0.9" fill="#94a3b8" />
    <rect x="10" y="20" width="9" height="1.8" rx="0.9" fill="#cbd5e1" />
    <rect x="10" y="24" width="11" height="1.8" rx="0.9" fill="#cbd5e1" />
  </svg>
);

// 10. HTML & CSS3 Official Shields
export const HtmlCssLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* HTML5 Orange Shield */}
    <path d="M 3 5 L 5 25 L 14 28 L 16 27 L 16 5 Z" fill="#E34F26" />
    <path d="M 16 5 L 16 27 L 14 27.5 L 6 25 L 4.5 7 L 16 7 Z" fill="#F16529" />
    <text x="7" y="19" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">H</text>
    {/* CSS3 Blue Shield */}
    <path d="M 16 5 L 16 27 L 23 25 L 25 7 Z" fill="#1572B6" />
    <path d="M 16 5 L 27 5 L 25 25 L 16 27 Z" fill="#33A9DC" />
    <text x="18" y="19" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">C</text>
  </svg>
);

// 11. JavaScript Official Yellow Logo (JS Badge)
export const JavaScriptLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="4" fill="#F7DF1E" />
    {/* 'JS' typography */}
    <path
      d="M 10 16 L 14 16 L 14 23 C 14 25 12 25.5 10 25 L 10 22 C 11 22.5 12 22 12 21 L 12 16 Z"
      fill="#000000"
    />
    <path
      d="M 16 22 C 17.5 22.5 19 23 20.5 22 C 21.5 21 21.5 19.5 20 18.5 C 18 17.5 16 16.5 16.5 14.5 C 17 12.5 19.5 12.5 21 13 L 20.5 15.5 C 19.5 15 18 14.8 18 16 C 18 17 19.5 17.5 21 18.5 C 23 19.8 23 22 21.5 23.5 C 19.5 25.2 16.5 24.5 15 23.5 Z"
      fill="#000000"
    />
  </svg>
);

// 12. React & Tailwind CSS (Cyan Atom + Tailwind Wave)
export const ReactTailwindLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#082f49" />
    {/* React Core Nucleus */}
    <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
    {/* React Orbital Rings */}
    <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" />
    <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 16 16)" />
    <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 16 16)" />
    {/* Tailwind Wave Badge at bottom */}
    <path
      d="M 11 24 C 12.5 22 14.5 22 16 23.5 C 17.5 25 19.5 25 21 23"
      stroke="#38bdf8"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 13. Python Official Logo (Blue & Yellow Interlocking Snakes)
export const PythonLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Blue Upper Snake */}
    <path
      d="M 15.8 4 C 10 4 10.5 6.5 10.5 6.5 L 10.5 9.2 L 16 9.2 L 16 10 L 8 10 C 6 10 4.5 11.5 4.5 14.5 C 4.5 17.5 6 18 6 18 L 7.5 18 L 7.5 15.5 C 7.5 13.5 9 12 11 12 L 16 12 C 17.5 12 18.8 10.8 18.8 9.2 L 18.8 6.5 C 18.8 4.8 17.5 4 15.8 4 Z"
      fill="#3776AB"
    />
    <circle cx="12.5" cy="6.5" r="1" fill="#ffffff" />
    {/* Yellow Lower Snake */}
    <path
      d="M 16.2 28 C 22 28 21.5 25.5 21.5 25.5 L 21.5 22.8 L 16 22.8 L 16 22 L 24 22 C 26 22 27.5 20.5 27.5 17.5 C 27.5 14.5 26 14 26 14 L 24.5 14 L 24.5 16.5 C 24.5 18.5 23 20 21 20 L 16 20 C 14.5 20 13.2 21.2 13.2 22.8 L 13.2 25.5 C 13.2 27.2 14.5 28 16.2 28 Z"
      fill="#FFD438"
    />
    <circle cx="19.5" cy="25.5" r="1" fill="#3776AB" />
  </svg>
);

// 14. Microsoft Excel Official Logo (Green Square with 'X' Grid)
export const ExcelLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Excel Background Book */}
    <rect x="8" y="5" width="19" height="22" rx="3" fill="#107C41" />
    {/* Grid Lines on Book */}
    <rect x="13" y="10" width="11" height="12" rx="1" fill="#21A366" />
    <line x1="13" y1="14" x2="24" y2="14" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
    <line x1="13" y1="18" x2="24" y2="18" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
    <line x1="18.5" y1="10" x2="18.5" y2="22" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
    {/* Front 'X' Tile */}
    <rect x="5" y="8" width="13" height="16" rx="2" fill="#185C37" />
    <path
      d="M 8.5 12 L 10.5 16 L 8.5 20 M 14.5 12 L 12.5 16 L 14.5 20"
      stroke="#ffffff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 15. Google Sheets Official Logo (Folded Green Grid Page)
export const GoogleSheetsLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Main Green Folded Page */}
    <path d="M 7 4 C 5.9 4 5 4.9 5 6 L 5 26 C 5 27.1 5.9 28 7 28 L 25 28 C 26.1 28 27 27.1 27 26 L 27 12 L 19 4 Z" fill="#0F9D58" />
    {/* Page Fold Corner */}
    <path d="M 19 4 L 27 12 L 19 12 Z" fill="#87CEAC" />
    {/* White Grid Table */}
    <rect x="9" y="14" width="14" height="10" rx="1.5" fill="#ffffff" />
    <rect x="10.5" y="15.5" width="5" height="3" fill="#0F9D58" />
    <rect x="17" y="15.5" width="5" height="3" fill="#0F9D58" />
    <rect x="10.5" y="19.5" width="5" height="3" fill="#0F9D58" />
    <rect x="17" y="19.5" width="5" height="3" fill="#0F9D58" />
  </svg>
);

// 16. Power BI Official Logo (Ascending Golden Bars)
export const PowerBiLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#18181b" />
    {/* Bar 1 (Shortest - Left) */}
    <rect x="7" y="17" width="4.5" height="10" rx="2" fill="#EAA300" />
    {/* Bar 2 (Medium - Center) */}
    <rect x="13.5" y="11" width="4.5" height="16" rx="2" fill="#F2C811" />
    {/* Bar 3 (Tallest - Right) */}
    <rect x="20" y="5" width="4.5" height="22" rx="2" fill="#F9E267" />
  </svg>
);

// 17. Research & Data Analysis (Analytical Radar & Trend Graph)
export const ResearchAnalysisLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#0f172a" />
    {/* Magnifier Glass Circle */}
    <circle cx="14" cy="14" r="8" stroke="#38bdf8" strokeWidth="2" fill="#082f49" />
    {/* Glass Handle */}
    <line x1="20" y1="20" x2="26" y2="26" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" />
    {/* Trend Line inside lens */}
    <path d="M 9 17 L 12 14 L 15 16 L 19 10" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="19" cy="10" r="1.5" fill="#34d399" />
  </svg>
);

// Helper function to return the real logo for any of the 17 skills
export const getSkillRealLogo = (skillName: string, iconFallback?: string) => {
  const norm = skillName.toLowerCase();

  // 1. MCP Integration
  if (norm.includes("mcp")) {
    return <McpLogo className="w-6 h-6" />;
  }
  // 2. AI Workflow Automation
  if (norm.includes("workflow") || norm.includes("automation")) {
    return <AiWorkflowLogo className="w-6 h-6" />;
  }
  // 3. Claude & ChatGPT SDKs
  if (norm.includes("claude") || norm.includes("chatgpt")) {
    return <ClaudeChatGptLogo className="w-6 h-6" />;
  }
  // 4. Prompt Engineering
  if (norm.includes("prompt")) {
    return <PromptEngineeringLogo className="w-6 h-6" />;
  }
  // 5. Cursor & Windsurf Labs
  if (norm.includes("cursor") || norm.includes("windsurf")) {
    return <CursorWindsurfLogo className="w-6 h-6" />;
  }
  // 6. Figma UI/UX Layouts
  if (norm.includes("figma")) {
    return <FigmaLogo className="w-6 h-6" />;
  }
  // 7. Canva Pro Assets
  if (norm.includes("canva")) {
    return <CanvaLogo className="w-6 h-6" />;
  }
  // 8. Digital Content Mapping
  if (norm.includes("content mapping")) {
    return <ContentMappingLogo className="w-6 h-6" />;
  }
  // 9. Profile & Doc Layouts
  if (norm.includes("profile & doc") || norm.includes("doc layout")) {
    return <DocLayoutLogo className="w-6 h-6" />;
  }
  // 10. HTML & CSS3
  if (norm.includes("html") || norm.includes("css")) {
    return <HtmlCssLogo className="w-6 h-6" />;
  }
  // 11. JavaScript (ES6+)
  if (norm.includes("javascript") || norm.includes("js")) {
    return <JavaScriptLogo className="w-6 h-6" />;
  }
  // 12. React & Tailwinds
  if (norm.includes("react") || norm.includes("tailwind")) {
    return <ReactTailwindLogo className="w-6 h-6" />;
  }
  // 13. Python Scripting
  if (norm.includes("python")) {
    return <PythonLogo className="w-6 h-6" />;
  }
  // 14. Microsoft Excel Formulas
  if (norm.includes("excel")) {
    return <ExcelLogo className="w-6 h-6" />;
  }
  // 15. Google Sheets Scripting
  if (norm.includes("sheets")) {
    return <GoogleSheetsLogo className="w-6 h-6" />;
  }
  // 16. Power BI Dashboards
  if (norm.includes("power bi")) {
    return <PowerBiLogo className="w-6 h-6" />;
  }
  // 17. Research & Analysis
  if (norm.includes("research") || norm.includes("analysis")) {
    return <ResearchAnalysisLogo className="w-6 h-6" />;
  }

  // Fallback
  return <AiWorkflowLogo className="w-6 h-6" />;
};
