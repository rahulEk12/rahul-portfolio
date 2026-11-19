import React from "react";

interface LogoProps {
  className?: string;
}

// 1. Anthropic Claude Official Logo (Warm Terracotta/Coral Asterisk)
export const ClaudeAgentLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#1c1917" />
    <g transform="translate(16 16)">
      {/* 8-pointed Anthropic Claude Asterisk */}
      <line x1="0" y1="-10" x2="0" y2="10" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
      <line x1="-10" y1="0" x2="10" y2="0" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />
      <line x1="-7" y1="-7" x2="7" y2="7" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
      <line x1="-7" y1="7" x2="7" y2="-7" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="0" cy="0" r="2.5" fill="#fde68a" />
    </g>
  </svg>
);

// 2. OpenAI ChatGPT / GPT-4o Official Logo (Emerald Green Vortex/Swirl)
export const Gpt4AgentLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#042f2e" />
    {/* OpenAI Swirl geometry */}
    <g transform="translate(16 16) scale(0.65)" stroke="#10a37f" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M 0 -18 C 6 -18 10 -15 12 -12 L 12 -6 C 12 -3 10 0 8 2 L -2 8 C -5 10 -8 10 -10 9 C -12 7 -13 4 -13 1 L -13 -6 C -13 -9 -11 -12 -9 -14 Z" />
      <path d="M 15 -9 C 18 -4 18 1 16 5 L 11 11 C 9 14 6 15 3 15 L -8 15 C -11 15 -14 14 -15 11 C -16 8 -15 5 -13 3 L -7 -1 C -4 -3 -3 -6 -3 -9 Z" />
      <path d="M 15 9 C 12 14 7 17 2 17 L -4 17 C -7 17 -10 15 -12 13 L -17 7 C -19 4 -19 1 -18 -2 C -17 -5 -14 -7 -11 -7 L -4 -7 C -1 -7 2 -9 3 -12 Z" />
      <path d="M 0 18 C -6 18 -10 15 -12 12 L -12 6 C -12 3 -10 0 -8 -2 L 2 -8 C 5 -10 8 -10 10 -9 C 12 -7 13 -4 13 -1 L 13 6 C 13 9 11 12 9 14 Z" />
      <path d="M -15 9 C -18 4 -18 -1 -16 -5 L -11 -11 C -9 -14 -6 -15 -3 -15 L 8 -15 C 11 -15 14 -14 15 -11 C 16 -8 15 -5 13 -3 L 7 1 C 4 3 3 6 3 9 Z" />
      <circle cx="0" cy="0" r="3.5" fill="#10a37f" />
    </g>
  </svg>
);

// 3. Google Gemini 3.5 Official Logo (Four-Pointed Sparkle Star Gradient)
export const GeminiAgentLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="geminiGrad" x1="0" y1="0" x2="32" y2="32">
        <stop offset="0%" stopColor="#1a73e8" />
        <stop offset="35%" stopColor="#4285f4" />
        <stop offset="70%" stopColor="#9b72cb" />
        <stop offset="100%" stopColor="#d96570" />
      </linearGradient>
    </defs>
    <rect width="32" height="32" rx="8" fill="#0b1329" />
    {/* Gemini 4-Pointed Curved Sparkle */}
    <path
      d="M 16 4 C 16 10.6 10.6 16 4 16 C 10.6 16 16 21.4 16 28 C 16 21.4 21.4 16 28 16 C 21.4 16 16 10.6 16 4 Z"
      fill="url(#geminiGrad)"
    />
    <circle cx="16" cy="16" r="2.5" fill="#ffffff" />
  </svg>
);

// 4. Google Sheets Official Server Logo
export const SheetsServerLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Main Green Folded Page */}
    <path d="M 7 4 C 5.9 4 5 4.9 5 6 L 5 26 C 5 27.1 5.9 28 7 28 L 25 28 C 26.1 28 27 27.1 27 26 L 27 12 L 19 4 Z" fill="#0F9D58" />
    <path d="M 19 4 L 27 12 L 19 12 Z" fill="#87CEAC" />
    {/* White Grid Table */}
    <rect x="9" y="14" width="14" height="10" rx="1.5" fill="#ffffff" />
    <rect x="10.5" y="15.5" width="5" height="3" fill="#0F9D58" />
    <rect x="17" y="15.5" width="5" height="3" fill="#0F9D58" />
    <rect x="10.5" y="19.5" width="5" height="3" fill="#0F9D58" />
    <rect x="17" y="19.5" width="5" height="3" fill="#0F9D58" />
  </svg>
);

// 5. Figma Canvas Official Server Logo (5 Iconic Color Blocks)
export const FigmaServerLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M 11 5 C 8.24 5 6 7.24 6 10 C 6 12.76 8.24 15 11 15 L 16 15 L 16 5 Z" fill="#F24E1E" />
    <path d="M 21 5 C 18.24 5 16 5 16 5 L 16 15 L 21 15 C 23.76 15 26 12.76 26 10 C 26 7.24 23.76 5 21 5 Z" fill="#FF7262" />
    <path d="M 11 15 C 8.24 15 6 17.24 6 20 C 6 22.76 8.24 25 11 25 L 16 25 L 16 15 Z" fill="#A259FF" />
    <circle cx="21" cy="20" r="5" fill="#1ABCFE" />
    <path d="M 11 25 C 8.24 25 6 27.24 6 30 C 6 32 8.24 32 11 32 C 13.76 32 16 29.76 16 27 L 16 25 Z" fill="#0ACF83" />
  </svg>
);

// 6. Microsoft Excel Official Server Logo
export const ExcelServerLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="5" width="19" height="22" rx="3" fill="#107C41" />
    <rect x="13" y="10" width="11" height="12" rx="1" fill="#21A366" />
    <line x1="13" y1="14" x2="24" y2="14" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
    <line x1="13" y1="18" x2="24" y2="18" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
    <line x1="18.5" y1="10" x2="18.5" y2="22" stroke="#ffffff" strokeWidth="0.8" strokeOpacity="0.8" />
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

// 7. GitHub Repository Official Server Logo
export const GithubServerLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#18181b" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M 16 6 C 10.48 6 6 10.48 6 16 C 6 20.42 8.87 24.17 12.84 25.49 C 13.34 25.58 13.52 25.27 13.52 25 C 13.52 24.77 13.51 24.14 13.51 23.33 C 10.73 23.94 10.14 22 10.14 22 C 9.68 20.85 9.03 20.54 9.03 20.54 C 8.12 19.92 9.1 19.93 9.1 19.93 C 10.1 20 10.63 20.96 10.63 20.96 C 11.53 22.5 12.98 22.06 13.55 21.8 C 13.64 21.15 13.9 20.71 14.19 20.46 C 11.97 20.21 9.64 19.35 9.64 15.53 C 9.64 14.44 10.03 13.55 10.67 12.85 C 10.57 12.6 10.23 11.58 10.77 10.22 C 10.77 10.22 11.61 9.95 13.52 11.24 C 14.32 11.02 15.16 10.91 16 10.9 C 16.84 10.91 17.68 11.02 18.48 11.24 C 20.39 9.95 21.23 10.22 21.23 10.22 C 21.77 11.58 21.43 12.6 21.33 12.85 C 21.97 13.55 22.36 14.44 22.36 15.53 C 22.36 19.36 20.02 20.2 17.79 20.45 C 18.15 20.76 18.47 21.38 18.47 22.32 C 18.47 23.68 18.46 24.77 18.46 25 C 18.46 25.28 18.64 25.59 19.15 25.49 C 23.12 24.16 26 20.42 26 16 C 26 10.48 21.52 6 16 6 Z"
      fill="#ffffff"
    />
  </svg>
);

// 8. SQLite Database Official Server Logo (Feather & Database Stack)
export const SqliteServerLogo: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#082f49" />
    {/* Database Cylinders */}
    <ellipse cx="16" cy="10" rx="9" ry="3.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
    <path d="M 7 10 L 7 17 C 7 19 11 20.5 16 20.5 C 21 20.5 25 19 25 17 L 25 10" fill="#0369a1" stroke="#0284c7" strokeWidth="1" />
    <ellipse cx="16" cy="17" rx="9" ry="3.5" fill="none" stroke="#38bdf8" strokeWidth="0.8" />
    <path d="M 7 17 L 7 24 C 7 26 11 27.5 16 27.5 C 21 27.5 25 26 25 24 L 25 17" fill="#075985" stroke="#0284c7" strokeWidth="1" />
    {/* Feather Quill Accent */}
    <path d="M 22 5 C 19 9 14 15 13 22" stroke="#fde047" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 9. Model Context Protocol (Anthropic MCP Official Logo Badge)
export const McpOfficialBadge: React.FC<LogoProps> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#04202c" stroke="#06b6d4" strokeWidth="1.2" />
    <circle cx="16" cy="9" r="3.2" fill="#22d3ee" />
    <circle cx="9" cy="22" r="3.2" fill="#38bdf8" />
    <circle cx="23" cy="22" r="3.2" fill="#10b981" />
    <line x1="16" y1="9" x2="9" y2="22" stroke="#06b6d4" strokeWidth="1.8" />
    <line x1="16" y1="9" x2="23" y2="22" stroke="#06b6d4" strokeWidth="1.8" />
    <line x1="9" y1="22" x2="23" y2="22" stroke="#06b6d4" strokeWidth="1.8" />
    <circle cx="16" cy="16" r="2" fill="#ffffff" />
  </svg>
);
