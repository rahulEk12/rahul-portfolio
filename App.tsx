import React, { useState, useEffect, useRef } from "react";
import { 
  Server, Cpu, Bot, Terminal, Layers, Feather, Layout, FileText, Code, Atom, 
  Table, Grid, BarChart3, Search, Palette, Camera, BookOpen, Compass, Mail, 
  Phone, MapPin, Github, ExternalLink, Send, CheckCircle, Clock, ArrowRight, 
  ChevronRight, Sparkles, Database, Sliders, X, Check, Loader2, Play
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { CONTACT_INFO, EXPERIENCES, EDUCATION, SKILLS, INTERESTS, LANGUAGES } from "./data";
import { ChatMessage, SkillItem } from "./types";
import rahulAvatar from "../assets/rahul_original.png";
import { SpaceStationQrek } from "./components/SpaceStationQrek";
import { WorldMapLocation } from "./components/WorldMapLocation";
import { McpProtocolBackground } from "./components/McpProtocolBackground";
import { AiTwinBackground } from "./components/AiTwinBackground";
import { SkillsSnapshotBackground } from "./components/SkillsSnapshotBackground";
import { getSkillRealLogo } from "./components/SkillLogos";
import { 
  ClaudeAgentLogo, 
  Gpt4AgentLogo, 
  GeminiAgentLogo, 
  SheetsServerLogo, 
  FigmaServerLogo, 
  ExcelServerLogo, 
  GithubServerLogo, 
  SqliteServerLogo, 
  McpOfficialBadge 
} from "./components/McpLogos";

interface Inquiry {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

export default function App() {
  // Navigation tabs
  const [activeTab, setActiveTab] = useState<"overview" | "mcp" | "chat" | "resume" | "contact">("overview");

  // Local clock state
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to HH:MM:SS AM/PM
      setCurrentTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- MCP PLAYGROUND STATE ---
  const [selectedAgent, setSelectedAgent] = useState<"claude" | "gpt4" | "gemini">("claude");
  const [selectedMcpServer, setSelectedMcpServer] = useState<"gsheets" | "figma" | "excel" | "github" | "sqlite">("gsheets");
  const [pipelineTask, setPipelineTask] = useState<"auto_sheets" | "figma_to_code" | "data_entry" | "code_review">("auto_sheets");
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([]);
  const [pipelineStatus, setPipelineStatus] = useState<"idle" | "running" | "success">("idle");
  const [mcpConsoleTab, setMcpConsoleTab] = useState<"logs" | "jsonrpc" | "artifact">("logs");
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Suggested matching task based on selections
  useEffect(() => {
    if (selectedMcpServer === "gsheets" || selectedMcpServer === "excel") {
      setPipelineTask("auto_sheets");
    } else if (selectedMcpServer === "figma") {
      setPipelineTask("figma_to_code");
    } else if (selectedMcpServer === "github") {
      setPipelineTask("code_review");
    } else {
      setPipelineTask("data_entry");
    }
  }, [selectedMcpServer]);

  const runMcpPipeline = () => {
    if (pipelineStatus === "running") return;
    setPipelineStatus("running");
    setPipelineLogs([]);

    const agentLabel = selectedAgent === "claude" ? "Claude 3.5 Sonnet" : selectedAgent === "gpt4" ? "GPT-4o Agent" : "Gemini 3.5 Flash";
    const serverLabel = selectedMcpServer === "gsheets" ? "Google Sheets MCP" : selectedMcpServer === "figma" ? "Figma Canvas MCP" : selectedMcpServer === "excel" ? "MS Excel MCP" : selectedMcpServer === "github" ? "GitHub Repository MCP" : "SQLite DB MCP";
    
    let steps = [
      `[🕒 ${new Date().toLocaleTimeString()}] INITIATING WORKFLOW CONNECTION PIPELINE...`,
      `[⚡ SYSTEM] Initializing endpoint link on secure port 3000...`,
      `[🤖 AGENT] Binding context properties to LLM Host: ${agentLabel}...`,
      `[🔒 SECURITY] Validating OAuth credentials & system access keys...`,
      `[🔌 MCP] Launching Model Context Protocol (MCP) server wrapper for ${serverLabel}...`,
      `[🧬 PROTOCOL] Handshake successful. Binding available tool schemas...`,
    ];

    if (pipelineTask === "auto_sheets") {
      steps = [
        ...steps,
        `[⚙️ ACTION] Task Identified: Automated Sheet Generation & Sync`,
        `[📥 FETCH] Fetching latest unstructured raw analytics payload...`,
        `[🛠️ SYSTEM] Formatting data matrix using smart Prompt heuristics...`,
        `[✏️ WRITE] Writing structured workbook matrices of 5 columns into database...`,
        `[🔗 MCP] Calling tool 'write_spreadsheet_cells' with values and metadata...`,
        `[🔄 SYNC] Synchronized 146 active rows successfully to ${serverLabel}!`
      ];
    } else if (pipelineTask === "figma_to_code") {
      steps = [
        ...steps,
        `[⚙️ ACTION] Task Identified: Convert Figma Canvas designs to CSS grid layout`,
        `[📥 FETCH] Exporting Figma visual element coordinates from frame ID 'FigmaMainCanvas'...`,
        `[🛠️ UI/UX] Structuring components with premium 'Plus Jakarta Sans' font parameters...`,
        `[🧬 AI-GEN] Generating semantic Tailwind CSS and TSX component structures...`,
        `[💻 CODE] Verified class attributes and flexbox responsive grids standard...`,
        `[🚀 EXPORT] Exposing complete code component tree structure to workspace!`
      ];
    } else if (pipelineTask === "code_review") {
      steps = [
        ...steps,
        `[⚙️ ACTION] Task Identified: Automated Repo PR Code Review`,
        `[📥 FETCH] Fetching remote branch git diffs and codebase tree structure...`,
        `[🧠 ANALYSIS] Evaluating formatting standards and static logical imports...`,
        `[📝 SUMMARY] Compiling markdown feedback explaining optimizations...`,
        `[⚡ MCP] Adding automated comment to target pull request #14...`
      ];
    } else {
      steps = [
        ...steps,
        `[⚙️ ACTION] Task Identified: Bulk Database Entry Pipeline`,
        `[🔍 EXTRACT] Accessing source document layout structure...`,
        `[✍️ INJECT] Writing vectorized tables to active SQLite instance...`,
        `[💾 DB] Committed 12 records with timestamp tracking metrics!`
      ];
    }

    steps.push(`[✅ SUCCESS] Workflow pipeline completed in ${Math.floor(Math.random() * 300) + 200}ms! System fully idle.`);

    let currentStep = 0;
    const addLogByStep = () => {
      if (currentStep < steps.length) {
        setPipelineLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
        setTimeout(addLogByStep, 350 + Math.random() * 200);
      } else {
        setPipelineStatus("success");
      }
    };

    addLogByStep();
  };

  // Auto-scroll logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [pipelineLogs]);

  // --- CHAT STATE ---
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "model",
      text: "👋 Swagat hai! I am Qrek, Rahul's AI Digital Twin. I can fetch his profile data live via MCP connections (including GitHub and LinkedIn) or answer questions about his workflow automations, UI/UX designs, and technical experience. Try selecting a query below or ask your own!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatInput, setChatInput] = useState<string>("");
  const [isChatLoading, setIsChatLoading] = useState<boolean>(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Quick preset questions
  const presetQuestions = [
    { label: "🎓 Rahul's Last Education", q: "Rahul's last education" },
    { label: "ℹ️ Tell me more about Rahul", q: "Tell me more about Rahul." },
    { label: "⚙️ What does Rahul do?", q: "What is Rahul's primary area of expertise?" },
    { label: "🔌 What is MCP?", q: "What is MCP and how does Rahul use Model Context Protocol servers?" },
    { label: "🐙 GitHub Info (via MCP)", q: "Can you query the GitHub MCP server to get Rahul's profile and repo information?" },
    { label: "🔗 LinkedIn Profile (via MCP)", q: "Can you query the LinkedIn MCP server to get Rahul's profile and networking information?" },
    { label: "📞 Get Contact Info", q: "How can I contact Rahul? Please provide his email and phone number." }
  ];

  const handleSendChatMessage = async (userMessage: string) => {
    if (!userMessage.trim() || isChatLoading) return;

    const newMessage: ChatMessage = {
      id: Math.random().toString(),
      role: "user",
      text: userMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory(prev => [...prev, newMessage]);
    setChatInput("");
    setIsChatLoading(true);

    // Auto-scroll instantly
    setTimeout(() => chatBottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: chatHistory.map(h => ({ role: h.role, text: h.text }))
        })
      });

      if (!response.ok) {
        throw new Error("API call returned an error");
      }

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        text: data.text || "I was unable to retrieve a response from my system core.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatHistory(prev => [...prev, assistantMessage]);

    } catch (err) {
      console.warn("API Error, falling back to smart client-side simulation", err);
      // Smart offline response simulation
      let simulatedReply = "";
      const q = userMessage.toLowerCase();

      if (q.includes("mcp") || q.includes("model context")) {
        simulatedReply = "Rahul is a hands-on **MCP (Model Context Protocol) Integration Specialist**. He connects LLM agents securely with external system APIs (like Google Sheets, Microsoft Excel, GitHub repositories, and system terminals). He creates secure tool declarations so AI models can execute system actions directly, improving task execution speed by up to 90%!";
      } else if (q.includes("github") || q.includes("git")) {
        simulatedReply = `[MCP Connection: Fetching GitHub profile data...]\n\nI have successfully retrieved Rahul's GitHub details via the **GitHub MCP Server**:\n- 🐙 **GitHub Profile**: https://github.com/rahulEk12\n- **Projects Focus**: Advanced Model Context Protocol (MCP) servers, custom AI agent templates, and data/sheet automation scripts.\n- **Featured Repositories**:\n  1. \`custom-mcp-servers\` (Adapters for spreadsheet sync)\n  2. \`ai-workflow-blueprints\` (Multi-agent orchestration configurations)`;
      } else if (q.includes("linkedin") || q.includes("linkd")) {
        simulatedReply = `[MCP Connection: Fetching LinkedIn profile data...]\n\nI have successfully retrieved Rahul's LinkedIn details via the **LinkedIn MCP Server**:\n- 🔗 **LinkedIn URL**: https://www.linkedin.com/in/rahul-ek\n- **Professional Status**: Open to connect with tech leads, product owners, and recruiters looking for contract, freelance, or full-time expertise in custom MCP integrations and agent pipelines.`;
      } else if (q.includes("m.sc") || q.includes("jnu") || q.includes("physics") || q.includes("education")) {
        simulatedReply = "Rahul completed his **Master of Science (M.Sc.) in Physics & Computational Physics** from the prestigious **Jawaharlal Nehru University (JNU), New Delhi** in 2019. This academic training equipped him with robust computational modeling, mathematical optimization, and logical reasoning skills that make his code clean, robust, and mathematically sound.";
      } else if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("number")) {
        simulatedReply = `Here are Rahul's direct contact details:\n- 📧 **Email**: rek696723@gmail.com\n- 📞 **Phone/WhatsApp**: +91 7752843401\n- 📍 **Location**: Mumbai, Maharashtra, India\n\nRahul is available for remote and on-site contracts or freelance assignments!`;
      } else if (q.includes("ui") || q.includes("ux") || q.includes("design") || q.includes("figma") || q.includes("specialist")) {
        simulatedReply = "Rahul worked as a **Digital Design Specialist** at Digital Solutions Ltd. (2020-2022). He created beautiful layouts using Canva and Figma, converted raw data into gorgeous visual diagrams, and streamlined profile formatting with professional, eye-catching presentations.";
      } else if (q.includes("skills") || q.includes("do") || q.includes("expert")) {
        simulatedReply = "Rahul is a multi-talented professional specializing in:\n\n1. **AI Automations & MCP**: Integrating LLM tools, prompts engineering, flow blueprints.\n2. **UI/UX Design**: Pixel-perfect layout structuring in Figma and Canva.\n3. **Web Dev**: Frontend sites with HTML5, CSS3, JavaScript (ES6+), and React.\n4. **Data Analytics**: Structuring sheets and reports with Power BI, Excel formulas, and Google Sheets.";
      } else {
        simulatedReply = "Thank you for asking! Rahul is an incredible AI Workflow & Front-end Developer. Whether you need custom GPT/Claude agent setups, connected MCP integrations, visual dashboards, or professional layouts on Figma/Canva, he possesses the skills to execute them brilliantly. Would you like to check out his custom 'MCP Workflows' tab or leave an inquiry direct?";
      }

      const assistantMessage: ChatMessage = {
        id: Math.random().toString(),
        role: "model",
        text: simulatedReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory(prev => [...prev, assistantMessage]);
    } finally {
      setIsChatLoading(false);
      setTimeout(() => chatBottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  // Auto scroll chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  // --- RESUME STATE ---
  const [skillCategoryFilter, setSkillCategoryFilter] = useState<"all" | "AI" | "Design" | "Development" | "Data">("all");

  const filteredSkills = SKILLS.filter(s => {
    if (skillCategoryFilter === "all") return true;
    return s.category === skillCategoryFilter;
  });

  const getIcon = (name: string) => {
    switch(name) {
      case "Server": return <Server className="w-5 h-5" />;
      case "Cpu": return <Cpu className="w-5 h-5" />;
      case "Bot": return <Bot className="w-5 h-5" />;
      case "Terminal": return <Terminal className="w-5 h-5" />;
      case "Layers": return <Layers className="w-5 h-5" />;
      case "Feather": return <Feather className="w-5 h-5" />;
      case "Layout": return <Layout className="w-5 h-5" />;
      case "FileText": return <FileText className="w-5 h-5" />;
      case "Code": return <Code className="w-5 h-5" />;
      case "Atom": return <Atom className="w-5 h-5" />;
      case "Table": return <Table className="w-5 h-5" />;
      case "Grid": return <Grid className="w-5 h-5" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5" />;
      case "Search": return <Search className="w-5 h-5" />;
      case "Palette": return <Palette className="w-5 h-5" />;
      case "Camera": return <Camera className="w-5 h-5" />;
      case "BookOpen": return <BookOpen className="w-5 h-5" />;
      case "Compass": return <Compass className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  // --- INQUIRY / RECRUITMENT STATE ---
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formSubject, setFormSubject] = useState("Contract Project / Job Proposal");
  const [formMessage, setFormMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<Inquiry[]>([]);

  // Load inquiries from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("rahul_portfolio_inquiries");
    if (stored) {
      try {
        setSavedInquiries(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail || !formMessage) return;

    const newInquiry: Inquiry = {
      id: Math.random().toString(),
      name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
      timestamp: new Date().toLocaleString()
    };

    const updated = [newInquiry, ...savedInquiries];
    setSavedInquiries(updated);
    localStorage.setItem("rahul_portfolio_inquiries", JSON.stringify(updated));

    setFormName("");
    setFormEmail("");
    setFormMessage("");
    setSubmitSuccess(true);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 4000);
  };

  const deleteInquiry = (id: string) => {
    const updated = savedInquiries.filter(i => i.id !== id);
    setSavedInquiries(updated);
    localStorage.setItem("rahul_portfolio_inquiries", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-[#070709] text-gray-200 font-sans antialiased relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* Dynamic Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Background Decorative Cosmic Glows */}
      <div className="absolute top-[-10%] left-[-20%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none" />

      {/* --- HEADER --- */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-800/60 bg-[#070709]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-cyan via-brand-blue to-brand-purple flex items-center justify-center font-bold text-black text-sm tracking-tighter shadow-lg shadow-cyan-500/20">
              R
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-white leading-none">Rahul EK</span>
              <span className="text-[10px] text-gray-400 font-mono tracking-wide mt-0.5 uppercase">AI Workflow Architect</span>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === "overview" ? "bg-stone-800 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab("mcp")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === "mcp" ? "bg-stone-800 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              MCP Playground
            </button>
            <button 
              onClick={() => setActiveTab("chat")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === "chat" ? "bg-stone-800 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Qrek (AI Twin)
            </button>
            <button 
              onClick={() => setActiveTab("resume")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition flex items-center gap-1.5 ${activeTab === "resume" ? "bg-stone-800 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Resumes & Skills
            </button>
            <button 
              onClick={() => setActiveTab("contact")}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${activeTab === "contact" ? "bg-stone-800 text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Inquiries
            </button>
          </nav>

          {/* Clock & Status */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 bg-stone-900/60 border border-stone-800 px-3 py-1 rounded-full text-xs font-mono text-gray-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentTime || "00:00:00 AM"}</span>
            </div>
            
            <div className="flex items-center gap-2 bg-stone-900/60 border border-stone-800/80 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-medium">Remote Active</span>
            </div>
          </div>

        </div>
      </header>

      {/* MOBILE BOTTOM NAV */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#070709]/95 border-t border-stone-800/80 backdrop-blur-lg flex items-center justify-around py-2.5">
        <button onClick={() => setActiveTab("overview")} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === "overview" ? "text-cyan-400 font-bold" : "text-gray-400"}`}>
          <Layout className="w-4 h-4" />
          <span>Home</span>
        </button>
        <button onClick={() => setActiveTab("mcp")} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === "mcp" ? "text-cyan-400 font-bold" : "text-gray-400"}`}>
          <Server className="w-4 h-4" />
          <span>Playground</span>
        </button>
        <button onClick={() => setActiveTab("chat")} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === "chat" ? "text-cyan-400 font-bold" : "text-gray-400"}`}>
          <Bot className="w-4 h-4" />
          <span>Qrek AI</span>
        </button>
        <button onClick={() => setActiveTab("resume")} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === "resume" ? "text-cyan-400 font-bold" : "text-gray-400"}`}>
          <FileText className="w-4 h-4" />
          <span>Resume</span>
        </button>
        <button onClick={() => setActiveTab("contact")} className={`flex flex-col items-center gap-1 text-[10px] ${activeTab === "contact" ? "text-cyan-400 font-bold" : "text-gray-400"}`}>
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </button>
      </div>

      {/* --- MAIN MAIN AREA --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:pb-16 min-h-[calc(100vh-100px)]">
        
        <AnimatePresence mode="wait">
          {/* OVERVIEW TAB */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Profile Bento Block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Hero / Left profile */}
                <div className="lg:col-span-8 bg-[#030611] hover:border-cyan-500/60 transition-all duration-500 border border-stone-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                  {/* Computerized AI Space Station QREK Background */}
                  <SpaceStationQrek />
                  
                  <div className="space-y-4 relative z-10 max-w-2xl lg:max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-800/50 text-cyan-400 text-xs font-mono backdrop-blur-md shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Globally Active Freelancer & Innovator</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                      Designing the Future of <br className="hidden sm:inline" />
                      <span className="bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple bg-clip-text text-transparent">AI agent automation</span>
                    </h1>

                    <p className="text-gray-200 text-base sm:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                      {CONTACT_INFO.tagline}
                    </p>

                    {/* Meta quick links */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button 
                        onClick={() => setActiveTab("mcp")}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 cursor-pointer transition"
                      >
                        <Sliders className="w-4 h-4" />
                        Test MCP Pipelines
                        <ArrowRight className="w-4 h-4 text-cyan-200" />
                      </button>
                      
                      <button 
                        onClick={() => setActiveTab("chat")}
                        className="px-5 py-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-white font-medium text-sm flex items-center gap-2 cursor-pointer transition backdrop-blur-md shadow-md"
                      >
                        <Bot className="w-4 h-4 text-purple-400" />
                        Chat with Qrek (AI Twin)
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-4 font-mono relative z-10 bg-stone-950/80 border border-stone-800/80 p-3.5 rounded-xl backdrop-blur-md shadow-lg">
                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none font-semibold">Experience</span>
                      <p className="text-xl font-bold text-white drop-shadow-sm">{CONTACT_INFO.experienceYears}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none font-semibold">Integrations</span>
                      <p className="text-xl font-bold text-white drop-shadow-sm">50+ Projects</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none font-semibold">MCP Servers</span>
                      <p className="text-xl font-bold text-white drop-shadow-sm">10+ Configs</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest leading-none font-semibold">Global Accuracy</span>
                      <p className="text-xl font-bold text-emerald-400 drop-shadow-sm">99% Active</p>
                    </div>
                  </div>

                </div>

                {/* Portrait Card */}
                <div className="lg:col-span-4 bg-[#060914] hover:border-emerald-500/60 transition-all duration-500 border border-stone-800/80 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
                  {/* Cyber World Map with Home Coordinate Target: 26°36'43.7"N 83°14'54.8"E */}
                  <WorldMapLocation />

                  <div className="space-y-4 relative z-10">
                    <div className="relative w-24 h-24 mx-auto mb-2">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan to-brand-purple rounded-full p-0.5 shadow-xl">
                        <div className="w-full h-full rounded-full bg-[#070709] flex items-center justify-center overflow-hidden">
                          <img 
                            src={rahulAvatar} 
                            alt="Rahul EK" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                      <span className="absolute bottom-0 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-stone-900 animate-pulse"></span>
                    </div>

                    <div className="text-center space-y-1">
                      <h2 className="text-xl font-bold text-white">{CONTACT_INFO.name}</h2>
                      <p className="text-xs text-gray-300 font-mono uppercase tracking-wide">Developer & Designer</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-stone-800/60 text-sm">
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-8 h-8 rounded-lg bg-stone-900/90 flex items-center justify-center text-cyan-400 border border-stone-800 backdrop-blur-sm">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="truncate">{CONTACT_INFO.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-8 h-8 rounded-lg bg-stone-900/90 flex items-center justify-center text-purple-400 border border-stone-800 backdrop-blur-sm">
                          <Phone className="w-4 h-4" />
                        </div>
                        <span>{CONTACT_INFO.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-200">
                        <div className="w-8 h-8 rounded-lg bg-stone-900/90 flex items-center justify-center text-blue-400 border border-stone-800 backdrop-blur-sm">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span className="truncate">{CONTACT_INFO.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-stone-800/60 flex items-center justify-around relative z-10 bg-stone-950/60 rounded-xl p-2.5 backdrop-blur-xs">
                    <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition">
                      <Github className="w-5 h-5 cursor-pointer" />
                    </a>
                    <span className="h-4 w-[1px] bg-stone-800" />
                    <button onClick={() => setActiveTab("contact")} className="text-xs font-medium text-cyan-400 hover:text-cyan-300 transition cursor-pointer">
                      Create Custom Offer &rarr;
                    </button>
                  </div>
                </div>

              </div>

              {/* Bento Row Two */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* 1. Custom MCP Configurator Preview card */}
                <div className="bg-[#060914] hover:border-cyan-500/60 transition-all duration-500 border border-stone-800/80 rounded-2xl p-6 relative group overflow-hidden flex flex-col justify-between shadow-xl">
                  {/* MCP Data-flow & Protocol Bus Background */}
                  <McpProtocolBackground />

                  <div className="space-y-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shadow-md backdrop-blur-sm">
                      <Server className="w-5 h-5 animate-pulse" />
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-sm">Model Context Protocol</h3>
                    <p className="text-gray-300 text-sm leading-relaxed drop-shadow-sm">
                      Specialized pipeline designed to allow AI models to perform bulk data syncs, automated formatting layouts, and file conversions natively.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("mcp")}
                    className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition group-hover:translate-x-1 duration-200 relative z-10 cursor-pointer"
                  >
                    Open Simulator Dashboard <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 2. AI twin bento */}
                <div className="bg-[#080516] hover:border-purple-500/60 transition-all duration-500 border border-stone-800/80 rounded-2xl p-6 relative group overflow-hidden flex flex-col justify-between shadow-xl">
                  {/* Neural Synapse & Voice AI Background */}
                  <AiTwinBackground />

                  <div className="space-y-3 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/70 border border-purple-800/50 flex items-center justify-center text-purple-400 shadow-md backdrop-blur-sm">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white drop-shadow-sm">Qrek (Rahul's AI Twin)</h3>
                    <p className="text-gray-300 text-sm leading-relaxed drop-shadow-sm">
                      Chat in real-time with Qrek, Rahul's AI Representative. Qrek can fetch live data (like GitHub and LinkedIn info) via MCP integrations.
                    </p>
                  </div>
                  <button 
                    onClick={() => setActiveTab("chat")}
                    className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition group-hover:translate-x-1 duration-200 relative z-10 cursor-pointer"
                  >
                    Initiate Live Conversation <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 3. Achievements / Skills quick grid */}
                <div className="bg-[#060818] hover:border-blue-500/60 transition-all duration-500 border border-stone-800/80 rounded-2xl p-6 flex flex-col justify-between relative group overflow-hidden shadow-xl">
                  {/* Technical Benchmark & Radar Metric Matrix Background */}
                  <SkillsSnapshotBackground />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold drop-shadow-sm">Skills Snapshot</h4>
                      <button onClick={() => setActiveTab("resume")} className="text-xs text-stone-400 hover:text-white transition cursor-pointer">View All</button>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-stone-200 font-medium">AI Automation</span>
                          <span className="text-cyan-400 font-bold">95%</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-900/90 rounded-full overflow-hidden border border-stone-800/60">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-stone-200 font-medium">Canva / Figma Layouts</span>
                          <span className="text-purple-400 font-bold">90%</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-900/90 rounded-full overflow-hidden border border-stone-800/60">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-stone-200 font-medium">Front-End Developer</span>
                          <span className="text-blue-400 font-bold">85%</span>
                        </div>
                        <div className="w-full h-1.5 bg-stone-900/90 rounded-full overflow-hidden border border-stone-800/60">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-800/60 text-xs font-mono text-stone-300 flex items-center gap-1.5 relative z-10">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Linguistic skill standard: Bhojpuri, Hindi, English</span>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {/* MCP PLAYGROUND TAB */}
          {activeTab === "mcp" && (
            <motion.div
              key="mcp"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Info introductory bar */}
              <div className="bg-gradient-to-r from-stone-900/60 via-stone-900/30 to-stone-900/60 border border-stone-800 p-6 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="max-w-3xl space-y-2 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Active Pipeline Simulator & Protocol Hub</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Model Context Protocol (MCP) Workflows Explorer</h2>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Test how Rahul integrates modern LLMs directly with local and cloud-based data hosts. Choose an AI Client Agent, select a target MCP server, and trigger an automated live pipeline execution.
                  </p>
                </div>
              </div>

              {/* Main Configuration grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Left controls column */}
                <div className="lg:col-span-4 bg-stone-950/70 border border-stone-800/80 rounded-2xl p-6 space-y-6 shadow-xl backdrop-blur-sm">
                  
                  {/* Step 1: LLM Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">1. Select AI Client Agent</label>
                      <span className="text-[10px] font-mono text-stone-500">LLM HOST</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {/* Claude 3.5 */}
                      <button 
                        onClick={() => setSelectedAgent("claude")}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition text-center cursor-pointer group ${selectedAgent === "claude" ? "bg-amber-950/30 border-amber-500/80 text-amber-300 font-bold shadow-lg shadow-amber-500/10" : "bg-stone-900/50 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-stone-950 p-1 border border-stone-800 flex items-center justify-center group-hover:scale-105 transition">
                          <ClaudeAgentLogo className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono font-bold leading-tight">Claude 3.5</span>
                          <span className="text-[9px] text-stone-500 font-mono">Anthropic</span>
                        </div>
                      </button>
                      
                      {/* GPT-4o */}
                      <button 
                        onClick={() => setSelectedAgent("gpt4")}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition text-center cursor-pointer group ${selectedAgent === "gpt4" ? "bg-emerald-950/30 border-emerald-500/80 text-emerald-300 font-bold shadow-lg shadow-emerald-500/10" : "bg-stone-900/50 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-stone-950 p-1 border border-stone-800 flex items-center justify-center group-hover:scale-105 transition">
                          <Gpt4AgentLogo className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono font-bold leading-tight">GPT-4o</span>
                          <span className="text-[9px] text-stone-500 font-mono">OpenAI</span>
                        </div>
                      </button>

                      {/* Gemini 3.5 */}
                      <button 
                        onClick={() => setSelectedAgent("gemini")}
                        className={`p-3 rounded-xl border flex flex-col items-center gap-2 transition text-center cursor-pointer group ${selectedAgent === "gemini" ? "bg-blue-950/30 border-blue-500/80 text-blue-300 font-bold shadow-lg shadow-blue-500/10" : "bg-stone-900/50 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="w-9 h-9 rounded-xl bg-stone-950 p-1 border border-stone-800 flex items-center justify-center group-hover:scale-105 transition">
                          <GeminiAgentLogo className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-mono font-bold leading-tight">Gemini 3.5</span>
                          <span className="text-[9px] text-stone-500 font-mono">Google</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Step 2: MCP Server wrapper */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">2. Select Target MCP Server</label>
                      <span className="text-[10px] font-mono text-stone-500">TOOL HOST</span>
                    </div>
                    <div className="space-y-2">
                      {/* Google Sheets Server */}
                      <button 
                        onClick={() => setSelectedMcpServer("gsheets")}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${selectedMcpServer === "gsheets" ? "bg-emerald-950/40 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-500/10" : "bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-950 p-1 border border-stone-800 flex items-center justify-center">
                            <SheetsServerLogo className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">Google Sheets Server</span>
                            <span className="text-[10px] font-mono text-emerald-400">tools/write_spreadsheet_matrix</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-1.5 py-0.5 rounded">SSE</span>
                          {selectedMcpServer === "gsheets" && <Check className="w-4 h-4 text-emerald-400" />}
                        </div>
                      </button>

                      {/* Figma Canvas Server */}
                      <button 
                        onClick={() => setSelectedMcpServer("figma")}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${selectedMcpServer === "figma" ? "bg-purple-950/40 border-purple-500 text-purple-300 shadow-md shadow-purple-500/10" : "bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-950 p-1 border border-stone-800 flex items-center justify-center">
                            <FigmaServerLogo className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">Figma Canvas Server</span>
                            <span className="text-[10px] font-mono text-purple-400">tools/get_design_context</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-purple-950 text-purple-400 border border-purple-800/60 px-1.5 py-0.5 rounded">REST</span>
                          {selectedMcpServer === "figma" && <Check className="w-4 h-4 text-purple-400" />}
                        </div>
                      </button>

                      {/* MS Excel Server */}
                      <button 
                        onClick={() => setSelectedMcpServer("excel")}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${selectedMcpServer === "excel" ? "bg-green-950/40 border-green-500 text-green-300 shadow-md shadow-green-500/10" : "bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-950 p-1 border border-stone-800 flex items-center justify-center">
                            <ExcelServerLogo className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">MS Excel Server</span>
                            <span className="text-[10px] font-mono text-green-400">tools/calculate_workbook_formula</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-green-950 text-green-400 border border-green-800/60 px-1.5 py-0.5 rounded">STDIO</span>
                          {selectedMcpServer === "excel" && <Check className="w-4 h-4 text-green-400" />}
                        </div>
                      </button>

                      {/* GitHub Repository Server */}
                      <button 
                        onClick={() => setSelectedMcpServer("github")}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${selectedMcpServer === "github" ? "bg-neutral-900 border-neutral-400 text-white shadow-md shadow-white/5" : "bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-950 p-1 border border-stone-800 flex items-center justify-center">
                            <GithubServerLogo className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">GitHub Repository Server</span>
                            <span className="text-[10px] font-mono text-cyan-300">tools/review_pull_request</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-stone-800 text-stone-300 border border-stone-700 px-1.5 py-0.5 rounded">OCTOKIT</span>
                          {selectedMcpServer === "github" && <Check className="w-4 h-4 text-white" />}
                        </div>
                      </button>

                      {/* SQLite DB Server */}
                      <button 
                        onClick={() => setSelectedMcpServer("sqlite")}
                        className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition cursor-pointer ${selectedMcpServer === "sqlite" ? "bg-blue-950/40 border-blue-500 text-blue-300 shadow-md shadow-blue-500/10" : "bg-stone-900/40 border-stone-800 text-stone-400 hover:text-white hover:border-stone-700"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-950 p-1 border border-stone-800 flex items-center justify-center">
                            <SqliteServerLogo className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-white block">SQLite DB Server</span>
                            <span className="text-[10px] font-mono text-blue-400">tools/execute_sql_query</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-mono uppercase bg-blue-950 text-blue-400 border border-blue-800/60 px-1.5 py-0.5 rounded">LOCAL</span>
                          {selectedMcpServer === "sqlite" && <Check className="w-4 h-4 text-blue-400" />}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Run controls */}
                  <div className="pt-2 border-t border-stone-800/80">
                    <button
                      onClick={runMcpPipeline}
                      disabled={pipelineStatus === "running"}
                      className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm tracking-wide text-center flex items-center justify-center gap-2.5 transition cursor-pointer shadow-lg ${pipelineStatus === "running" ? "bg-stone-800 text-gray-500 border border-stone-700" : "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-cyan-500/20 active:scale-[0.99]"}`}
                    >
                      {pipelineStatus === "running" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                          <span>Executing Pipeline Handshake...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current text-white" />
                          <span>Execute Integrated Pipeline</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>

                {/* Right Interactive Diagram & Multi-Tab Workbench */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                  
                  {/* Visual Node Connection Diagram (Upgraded Architecture Graph) */}
                  <div className="bg-stone-950/80 border border-stone-800/90 p-6 sm:p-7 rounded-2xl flex flex-col justify-center items-center relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-radial from-transparent via-[#050711]/50 to-[#050711]/90 pointer-events-none" />
                    
                    {/* Background circuit grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                    <div className="flex flex-col sm:flex-row items-center justify-around gap-6 relative z-10 w-full">
                      
                      {/* Node A: AI Client Agent */}
                      <div className="flex flex-col items-center gap-2.5 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-stone-900 border-2 border-stone-700 flex items-center justify-center shadow-xl relative p-2 group-hover:border-cyan-400 transition">
                          <div className={`absolute inset-0 rounded-2xl ${selectedAgent === "claude" ? "bg-amber-500/20" : selectedAgent === "gpt4" ? "bg-emerald-500/20" : "bg-blue-500/20"} blur-md animate-pulse`} />
                          <div className="relative z-10">
                            {selectedAgent === "claude" && <ClaudeAgentLogo className="w-9 h-9" />}
                            {selectedAgent === "gpt4" && <Gpt4AgentLogo className="w-9 h-9" />}
                            {selectedAgent === "gemini" && <GeminiAgentLogo className="w-9 h-9" />}
                          </div>
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-stone-950 animate-ping" />
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-stone-950" />
                        </div>
                        <div>
                          <span className="text-xs font-bold font-mono text-white block">
                            {selectedAgent === "claude" ? "Claude 3.5 Sonnet" : selectedAgent === "gpt4" ? "OpenAI GPT-4o" : "Google Gemini 3.5"}
                          </span>
                          <span className="text-[10px] font-mono text-stone-400">Client Agent Host</span>
                        </div>
                      </div>

                      {/* Interconnect Bridge A (Agent <-> MCP Gateway) */}
                      <div className="w-full max-w-[110px] flex flex-col items-center justify-center relative">
                        <div className="h-1 w-full bg-stone-800 rounded-full relative overflow-hidden">
                          {pipelineStatus === "running" && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full animate-[scan-line_1s_linear_infinite]" />
                          )}
                        </div>
                        <span className="mt-1.5 px-2 py-0.5 rounded bg-stone-900 border border-cyan-800/60 text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          JSON-RPC 2.0
                        </span>
                      </div>

                      {/* Node B: Official MCP Router / Protocol Core */}
                      <div className="flex flex-col items-center gap-2.5 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-cyan-950/60 border-2 border-cyan-500/80 flex items-center justify-center shadow-xl shadow-cyan-500/15 relative p-2">
                          <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-md animate-pulse" />
                          <McpOfficialBadge className="w-9 h-9 relative z-10" />
                        </div>
                        <div>
                          <span className="text-xs font-bold font-mono text-cyan-400 block">MCP Protocol</span>
                          <span className="text-[10px] font-mono text-emerald-400 font-semibold">Router Gateway</span>
                        </div>
                      </div>

                      {/* Interconnect Bridge B (MCP Gateway <-> Server) */}
                      <div className="w-full max-w-[110px] flex flex-col items-center justify-center relative">
                        <div className="h-1 w-full bg-stone-800 rounded-full relative overflow-hidden">
                          {pipelineStatus === "running" && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent w-full animate-[scan-line_1s_linear_infinite]" />
                          )}
                        </div>
                        <span className="mt-1.5 px-2 py-0.5 rounded bg-stone-900 border border-purple-800/60 text-[9px] font-mono text-purple-400 font-bold uppercase tracking-wider">
                          Secure Tools API
                        </span>
                      </div>

                      {/* Node C: The Data Host Server */}
                      <div className="flex flex-col items-center gap-2.5 text-center">
                        <div className="w-16 h-16 rounded-2xl bg-stone-900 border-2 border-stone-700 flex items-center justify-center shadow-xl relative p-2">
                          <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-md animate-pulse" />
                          <div className="relative z-10">
                            {selectedMcpServer === "gsheets" && <SheetsServerLogo className="w-9 h-9" />}
                            {selectedMcpServer === "figma" && <FigmaServerLogo className="w-9 h-9" />}
                            {selectedMcpServer === "excel" && <ExcelServerLogo className="w-9 h-9" />}
                            {selectedMcpServer === "github" && <GithubServerLogo className="w-9 h-9" />}
                            {selectedMcpServer === "sqlite" && <SqliteServerLogo className="w-9 h-9" />}
                          </div>
                        </div>
                        <div>
                          <span className="text-xs font-bold font-mono text-white block">
                            {selectedMcpServer === "gsheets" ? "Google Sheets" : selectedMcpServer === "figma" ? "Figma Canvas" : selectedMcpServer === "excel" ? "MS Excel Matrix" : selectedMcpServer === "github" ? "GitHub Repository" : "SQLite DB"}
                          </span>
                          <span className="text-[10px] font-mono text-stone-400">Target Host</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Multi-Tab Simulator Workbench (Console, JSON-RPC, Live Output) */}
                  <div className="bg-stone-950 border border-stone-800/90 rounded-2xl flex flex-col h-[350px] overflow-hidden shadow-2xl">
                    
                    {/* Workbench Tab Navigation Header */}
                    <div className="bg-stone-900/90 px-4 py-2.5 flex items-center justify-between border-b border-stone-800">
                      <div className="flex items-center gap-2">
                        {/* Tab 1: Console Logs */}
                        <button
                          onClick={() => setMcpConsoleTab("logs")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition flex items-center gap-1.5 cursor-pointer ${mcpConsoleTab === "logs" ? "bg-stone-800 text-cyan-400 border border-cyan-800/50" : "text-stone-400 hover:text-white"}`}
                        >
                          <Terminal className="w-3.5 h-3.5" />
                          <span>Console Logs</span>
                        </button>

                        {/* Tab 2: JSON-RPC Payload Inspector */}
                        <button
                          onClick={() => setMcpConsoleTab("jsonrpc")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition flex items-center gap-1.5 cursor-pointer ${mcpConsoleTab === "jsonrpc" ? "bg-stone-800 text-purple-400 border border-purple-800/50" : "text-stone-400 hover:text-white"}`}
                        >
                          <Code className="w-3.5 h-3.5" />
                          <span>JSON-RPC 2.0</span>
                        </button>

                        {/* Tab 3: Live Output Artifact */}
                        <button
                          onClick={() => setMcpConsoleTab("artifact")}
                          className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold transition flex items-center gap-1.5 cursor-pointer ${mcpConsoleTab === "artifact" ? "bg-stone-800 text-emerald-400 border border-emerald-800/50" : "text-stone-400 hover:text-white"}`}
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>Output Artifact</span>
                        </button>
                      </div>

                      {/* Status indicator pills */}
                      <div className="flex items-center gap-2 font-mono text-[10px]">
                        <span className={`px-2 py-0.5 rounded-full font-bold uppercase ${pipelineStatus === "success" ? "bg-emerald-950/80 text-emerald-400 border border-emerald-800/60" : pipelineStatus === "running" ? "bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 animate-pulse" : "bg-stone-800 text-stone-400"}`}>
                          ● {pipelineStatus.toUpperCase()}
                        </span>
                        {pipelineLogs.length > 0 && (
                          <button
                            onClick={() => { setPipelineLogs([]); setPipelineStatus("idle"); }}
                            className="text-stone-400 hover:text-white underline cursor-pointer"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Workbench Content Area */}
                    <div className="flex-1 overflow-hidden relative">
                      
                      {/* VIEW 1: CONSOLE LOGS */}
                      {mcpConsoleTab === "logs" && (
                        <div 
                          ref={logContainerRef}
                          className="p-4 h-full overflow-y-auto font-mono text-xs space-y-1.5 text-gray-300 scrollbar-thin scrollbar-thumb-stone-800"
                        >
                          {pipelineLogs.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-stone-500 space-y-2">
                              <Terminal className="w-8 h-8 text-cyan-400/40 animate-pulse" />
                              <p className="text-stone-400 font-mono text-xs">Interactive Terminal Ready. Click "Execute Integrated Pipeline" to run.</p>
                            </div>
                          ) : (
                            pipelineLogs.map((log, index) => {
                              let colorClass = "text-stone-300";
                              if (log.includes("[✅ SUCCESS]")) colorClass = "text-emerald-400 font-bold bg-emerald-950/20 p-1 rounded border border-emerald-800/30";
                              else if (log.includes("[🤖 AGENT]") || log.includes("[⚡ SYSTEM]")) colorClass = "text-cyan-400 font-medium";
                              else if (log.includes("[🔌 MCP]")) colorClass = "text-amber-400 font-semibold";
                              else if (log.includes("[⚙️ ACTION]")) colorClass = "text-purple-400 font-medium";
                              
                              return (
                                <div key={index} className={`${colorClass} leading-relaxed`}>
                                  {log}
                                </div>
                              );
                            })
                          )}
                        </div>
                      )}

                      {/* VIEW 2: JSON-RPC 2.0 PROTOCOL INSPECTOR */}
                      {mcpConsoleTab === "jsonrpc" && (
                        <div className="p-4 h-full overflow-y-auto font-mono text-xs space-y-4 text-stone-300 bg-[#070709] scrollbar-thin scrollbar-thumb-stone-800">
                          <div>
                            <div className="flex items-center justify-between text-[11px] text-cyan-400 font-bold mb-1">
                              <span>// JSON-RPC 2.0 REQUEST (Client &rarr; Server)</span>
                              <span className="text-[10px] text-stone-500">method: "tools/call"</span>
                            </div>
                            <pre className="bg-stone-900/60 p-3 rounded-xl border border-stone-800/80 text-[11px] text-cyan-300 leading-relaxed overflow-x-auto">
{JSON.stringify({
  jsonrpc: "2.0",
  id: "call_mcp_0982",
  method: "tools/call",
  params: {
    name: selectedMcpServer === "gsheets" 
      ? "write_spreadsheet_cells" 
      : selectedMcpServer === "figma" 
      ? "get_design_context" 
      : selectedMcpServer === "excel" 
      ? "calculate_excel_matrix" 
      : selectedMcpServer === "github" 
      ? "create_pull_request_review" 
      : "execute_sql_query",
    arguments: selectedMcpServer === "gsheets" 
      ? { spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", range: "Sheet1!A1:E10" }
      : selectedMcpServer === "figma"
      ? { fileKey: "xL829aBvM9", nodeId: "14:892", targetFormat: "react-tailwind" }
      : selectedMcpServer === "github"
      ? { owner: "rahulEk12", repo: "custom-mcp-servers", pullNumber: 14, event: "APPROVE" }
      : selectedMcpServer === "excel"
      ? { workbook: "./analytics/models.xlsx", formula: "=XLOOKUP(A2, Master!A:A, Master!D:D)" }
      : { sql: "INSERT INTO telemetry (agent, status) VALUES ('Qrek', 'OK');" }
  }
}, null, 2)}
                            </pre>
                          </div>

                          <div>
                            <div className="flex items-center justify-between text-[11px] text-emerald-400 font-bold mb-1">
                              <span>// JSON-RPC 2.0 RESPONSE (Server &rarr; Client)</span>
                              <span className="text-[10px] text-stone-500">result: 200 OK</span>
                            </div>
                            <pre className="bg-stone-900/60 p-3 rounded-xl border border-stone-800/80 text-[11px] text-emerald-300 leading-relaxed overflow-x-auto">
{JSON.stringify({
  jsonrpc: "2.0",
  id: "call_mcp_0982",
  result: {
    status: "success",
    timestamp: new Date().toISOString(),
    server: selectedMcpServer,
    payloadSize: "1.4 KB",
    executionDurationMs: 248
  }
}, null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}

                      {/* VIEW 3: LIVE OUTPUT ARTIFACT */}
                      {mcpConsoleTab === "artifact" && (
                        <div className="p-4 h-full overflow-y-auto font-mono text-xs bg-[#070709] scrollbar-thin scrollbar-thumb-stone-800 flex flex-col justify-center">
                          {selectedMcpServer === "gsheets" || selectedMcpServer === "excel" ? (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white flex items-center gap-2">
                                  <SheetsServerLogo className="w-4 h-4" />
                                  Synced Spreadsheet Matrix Preview (Sheet1)
                                </span>
                                <span className="text-[10px] text-emerald-400 font-mono">146 Active Rows Synced</span>
                              </div>
                              <div className="border border-stone-800 rounded-xl overflow-hidden text-[11px]">
                                <table className="w-full text-left">
                                  <thead className="bg-emerald-950/40 text-emerald-400 border-b border-stone-800">
                                    <tr>
                                      <th className="p-2">Row</th>
                                      <th className="p-2">Client Agent</th>
                                      <th className="p-2">Protocol Action</th>
                                      <th className="p-2">Status</th>
                                      <th className="p-2">Latency</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-stone-800/60 text-stone-300">
                                    <tr className="bg-stone-900/30">
                                      <td className="p-2 font-bold text-stone-500">#01</td>
                                      <td className="p-2 text-cyan-400">{selectedAgent.toUpperCase()}</td>
                                      <td className="p-2">Sync Workbook Cells</td>
                                      <td className="p-2 text-emerald-400 font-bold">200 OK</td>
                                      <td className="p-2 font-mono">248ms</td>
                                    </tr>
                                    <tr className="bg-stone-900/10">
                                      <td className="p-2 font-bold text-stone-500">#02</td>
                                      <td className="p-2 text-cyan-400">{selectedAgent.toUpperCase()}</td>
                                      <td className="p-2">Format Formula Rules</td>
                                      <td className="p-2 text-emerald-400 font-bold">200 OK</td>
                                      <td className="p-2 font-mono">190ms</td>
                                    </tr>
                                    <tr className="bg-stone-900/30">
                                      <td className="p-2 font-bold text-stone-500">#03</td>
                                      <td className="p-2 text-cyan-400">{selectedAgent.toUpperCase()}</td>
                                      <td className="p-2">Commit Batch Changes</td>
                                      <td className="p-2 text-emerald-400 font-bold">200 OK</td>
                                      <td className="p-2 font-mono">215ms</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ) : selectedMcpServer === "figma" ? (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white flex items-center gap-2">
                                  <FigmaServerLogo className="w-4 h-4" />
                                  Generated Component Code (React + Tailwind)
                                </span>
                                <span className="text-[10px] text-purple-400 font-mono">Design-to-Code Ready</span>
                              </div>
                              <pre className="bg-stone-900/80 p-3 rounded-xl border border-stone-800 text-[11px] text-purple-300 overflow-x-auto leading-relaxed">
{`export function OverviewCard({ title, metrics }: CardProps) {
  return (
    <div className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 backdrop-blur-md">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <div className="mt-4 flex items-center gap-3">
        <span className="text-cyan-400 font-mono text-xl">{metrics}</span>
      </div>
    </div>
  );
}`}
                              </pre>
                            </div>
                          ) : selectedMcpServer === "github" ? (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white flex items-center gap-2">
                                  <GithubServerLogo className="w-4 h-4" />
                                  Pull Request Review Output (#14)
                                </span>
                                <span className="text-[10px] text-emerald-400 font-bold font-mono">APPROVED</span>
                              </div>
                              <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800 space-y-2">
                                <div className="flex items-center gap-2 text-xs">
                                  <span className="text-emerald-400 font-bold">✓ Approved</span>
                                  <span className="text-stone-400">by Rahul's AI Agent ({selectedAgent.toUpperCase()})</span>
                                </div>
                                <p className="text-stone-300 text-xs">
                                  "Automated inspection complete: Verified Model Context Protocol schema definitions and OAuth connection tokens. Ready for merge into <code className="text-cyan-400">main</code> branch."
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-white flex items-center gap-2">
                                  <SqliteServerLogo className="w-4 h-4" />
                                  SQLite Telemetry Logs (12 Records)
                                </span>
                                <span className="text-[10px] text-blue-400 font-mono">Query: SELECT * FROM telemetry</span>
                              </div>
                              <div className="bg-stone-900/40 p-3 rounded-xl border border-stone-800 text-stone-300 text-xs font-mono space-y-1">
                                <div>[ROW #1] id: 1048 | agent: {selectedAgent} | status: COMMITTED | latency: 248ms</div>
                                <div>[ROW #2] id: 1049 | agent: {selectedAgent} | status: INDEXED   | latency: 190ms</div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* AI DIGITAL TWIN TAB */}
          {activeTab === "chat" && (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Left quick panel for queries details */}
                <div className="lg:col-span-4 bg-stone-900/20 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest">Qrek (AI Twin)</span>
                    <h2 className="text-xl font-extrabold text-white">Chat with Qrek, Rahul's AI Twin</h2>
                    <p className="text-stone-400 text-xs leading-relaxed">
                      This chat environment runs a Gemini 3.5 Flash server framework natively holding full details of Rahul's resume. Choose a quick-starter preset to test his qualifications.
                    </p>

                    <div className="space-y-2 pt-2">
                      <label className="text-[10px] font-bold uppercase text-stone-500 font-mono tracking-wider">Suggested Questions</label>
                      <div className="flex flex-col gap-2">
                        {presetQuestions.map((p, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendChatMessage(p.q)}
                            disabled={isChatLoading}
                            className="text-left w-full p-2.5 rounded-xl border border-stone-800 bg-stone-950/40 hover:bg-stone-900 text-xs text-gray-300 font-medium transition cursor-pointer hover:border-purple-500/40 hover:text-purple-300"
                          >
                            {p.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-stone-950/50 border border-stone-850 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-gray-400">Gemini 3.5 Flash host online & active</span>
                  </div>
                </div>

                {/* Right Chatbot box */}
                <div className="lg:col-span-8 bg-stone-900/10 border border-stone-800 rounded-2xl flex flex-col h-[525px] overflow-hidden shadow-2xl relative">
                  
                  {/* Chat window top header */}
                  <div className="bg-stone-900 px-4 py-3 flex items-center justify-between border-b border-stone-800/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center font-bold text-white text-xs">
                        Q🤖
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white leading-none">Qrek (AI Twin)</span>
                        <span className="text-[9px] text-emerald-400 font-mono tracking-tight mt-0.5 font-medium">● Dynamic Agent Twin ready</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setChatHistory([{
                        id: "welcome",
                        role: "model",
                        text: "👋 Swagat hai! I am Qrek, Rahul's AI Digital Twin. I can fetch his profile data live via MCP connections (including GitHub and LinkedIn) or answer questions about his workflow automations, UI/UX designs, and technical experience. Try selecting a query below or ask your own!",
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      }])}
                      className="text-[10px] text-stone-400 hover:text-white underline font-mono cursor-pointer"
                    >
                      Clear History
                    </button>
                  </div>

                  {/* Messages container */}
                  <div className="p-4 flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-stone-800 bg-[#070709]/50">
                    {chatHistory.map((msg) => {
                      const isModel = msg.role === "model";
                      return (
                        <div key={msg.id} className={`flex ${isModel ? "justify-start" : "justify-end"} animate-fade`}>
                          <div className={`max-w-[85%] rounded-2xl p-3.5 space-y-1 ${isModel ? "bg-stone-900/80 border border-stone-800 text-gray-200" : "bg-gradient-to-r from-cyan-600/90 to-blue-600/90 border border-cyan-800 text-white"}`}>
                            <div className="text-xs uppercase font-mono tracking-wider text-[10px] font-bold text-stone-400">
                              {isModel ? "Model Agent" : "You (Visitor)"}
                            </div>
                            <p className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">
                              {msg.text}
                            </p>
                            <div className="text-[9px] font-mono text-stone-500 text-right">
                              {msg.timestamp}
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    {isChatLoading && (
                      <div className="flex justify-start">
                        <div className="bg-stone-900/80 border border-stone-800 rounded-2xl p-4 flex items-center gap-2.5">
                          <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                          <span className="text-xs text-stone-400 font-mono">Generative reasoning logic loading...</span>
                        </div>
                      </div>
                    )}
                    <div ref={chatBottomRef} />
                  </div>

                  {/* Chat input form */}
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendChatMessage(chatInput);
                    }}
                    className="p-3 border-t border-stone-800/80 bg-stone-950/80 flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask me anything: 'Tell me about Rahul's MCP automations'..."
                      className="flex-1 bg-stone-900/50 border border-stone-800/80 text-gray-100 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-purple-500 transition leading-snug"
                    />
                    <button 
                      type="submit"
                      disabled={!chatInput.trim() || isChatLoading}
                      className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 text-white transition disabled:scale-100 disabled:opacity-50 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>

                </div>

              </div>
            </motion.div>
          )}

          {/* RESUMES & SKILLS TAB */}
          {activeTab === "resume" && (
            <motion.div
              key="resume"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              {/* Filter controls column */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-stone-900/20 border border-stone-800 p-4 rounded-2xl">
                <span className="font-mono text-xs uppercase text-stone-400 font-bold">Skills Inventory Matrix</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {(["all", "AI", "Design", "Development", "Data"] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSkillCategoryFilter(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition uppercase font-semibold cursor-pointer ${skillCategoryFilter === cat ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold" : "text-stone-400 hover:text-white"}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid of skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredSkills.map((skill, idx) => (
                  <div 
                    key={idx} 
                    className="bg-stone-900/50 hover:bg-stone-900/80 border border-stone-800/80 hover:border-cyan-500/40 transition-all duration-300 p-4 rounded-xl space-y-3 group shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      {/* Real Tech / Brand Logo */}
                      <div className="w-10 h-10 rounded-xl bg-stone-950 p-1.5 border border-stone-800 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-cyan-500/30 transition duration-300">
                        {getSkillRealLogo(skill.name, skill.iconName)}
                      </div>
                      <span className="text-[10px] font-mono uppercase bg-stone-800/90 text-stone-300 border border-stone-700/60 px-2 py-0.5 rounded font-semibold">
                        {skill.category}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition duration-200 truncate">{skill.name}</h4>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex-1 h-1.5 bg-stone-950 rounded-full overflow-hidden border border-stone-800/50">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              skill.category === "AI" 
                                ? "bg-gradient-to-r from-cyan-500 to-blue-500" 
                                : skill.category === "Design" 
                                ? "bg-gradient-to-r from-purple-500 to-pink-500" 
                                : skill.category === "Development" 
                                ? "bg-gradient-to-r from-blue-500 to-indigo-500" 
                                : "bg-gradient-to-r from-emerald-500 to-teal-400"
                            }`} 
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono text-gray-300 font-bold">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline Experience */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
                
                {/* Experiences timeline */}
                <div className="lg:col-span-8 space-y-6">
                  <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-cyan-400" />
                    Professional Chronology
                  </h2>

                  <div className="space-y-6 relative before:absolute before:top-4 before:bottom-4 before:left-3 before:w-[1px] before:bg-stone-800">
                    {EXPERIENCES.map((exp, idx) => (
                      <div key={idx} className="relative pl-8 group">
                        
                        {/* Bullet point indicator */}
                        <div className="absolute top-1.5 left-1.5 w-3 h-3 rounded-full bg-[#070709] border-2 border-stone-700 group-hover:border-cyan-400 transition duration-300 z-10" />

                        <div className="bg-stone-900/30 p-5 rounded-2xl border border-stone-800/80 space-y-3 group-hover:bg-stone-900/40 transition">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <h3 className="text-sm font-bold text-white uppercase tracking-wide">{exp.role}</h3>
                            <span className="text-xs font-mono text-cyan-400">{exp.duration}</span>
                          </div>

                          <div className="flex items-center gap-3 text-stone-400 text-xs font-mono">
                            <span>{exp.company}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>

                          <ul className="space-y-1.5 pt-1 text-xs text-gray-300 leading-relaxed list-disc list-inside">
                            {exp.points.map((pt, pIdx) => (
                              <li key={pIdx} className="marker:text-stone-600">{pt}</li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Educations, Hobbies & Languages columns */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Education block */}
                  <div className="space-y-4">
                    <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                      Academic Training
                    </h2>
                    <div className="space-y-4">
                      {EDUCATION.map((edu, idx) => (
                        <div key={idx} className="bg-stone-905/40 border border-stone-850 p-4 rounded-xl space-y-2 hover:bg-stone-900/30 transition">
                          <h3 className="text-xs font-bold text-white uppercase">{edu.degree}</h3>
                          <p className="text-[11px] font-mono text-purple-400">{edu.institution} | {edu.duration}</p>
                          <p className="text-xs text-stone-400 leading-relaxed">{edu.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages Block */}
                  <div className="space-y-4 pt-4">
                    <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                      <Palette className="w-5 h-5 text-blue-400" />
                      Linguistic Proficiency
                    </h2>
                    <div className="bg-stone-905/40 border border-stone-850 p-4 rounded-xl space-y-3">
                      {LANGUAGES.map((lang, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-stone-300">{lang.name}</span>
                            <span className="text-cyan-400 font-bold">{lang.level}</span>
                          </div>
                          <div className="w-full h-1 bg-stone-950 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: `${lang.percentage}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* CONTACT & INQUIRY INBOX TAB */}
          {activeTab === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                
                {/* Message inquiry form submission */}
                <div className="lg:col-span-5 bg-stone-900/20 border border-stone-800 rounded-2xl p-6 h-fit space-y-6">
                  <div>
                    <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-widest">Inquiry Pipeline Host</span>
                    <h2 className="text-xl font-extrabold text-white">Send Rahul a Direct Proposal</h2>
                    <p className="text-stone-400 text-xs leading-relaxed mt-1">
                      Whether you are extending a contract invitation or looking to setup automated MCP connections, submit your brief message details below.
                    </p>
                  </div>

                  {submitSuccess && (
                    <div className="p-3.5 bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <span className="font-bold">Inquiry Sent!</span> Saved locally. You can trace its delivery status in the adjacent inbox instantly.
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono uppercase text-stone-400">Visitor Name</label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g., Recruiters Name / Client Company"
                        className="w-full bg-stone-950/50 border border-stone-850 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-cyan-400 text-white transition leading-snug"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono uppercase text-stone-400">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g., mail@company.com"
                        className="w-full bg-stone-950/50 border border-stone-850 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-cyan-400 text-white transition leading-snug"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono uppercase text-stone-400">Inquiry Target Subject</label>
                      <select
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className="w-full bg-stone-950/50 border border-stone-850 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-cyan-400 text-gray-300 transition"
                      >
                        <option value="Contract Project / Job Proposal">Contract Project / Job Proposal</option>
                        <option value="AI Workflow / MCP Consulting">AI Workflow / MCP Consulting</option>
                        <option value="Figma UI/UX layouts creation">Figma UI/UX layouts creation</option>
                        <option value="General Greetings & Connection">General Greetings & Connection</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold font-mono uppercase text-stone-400">Brief Message Payload</label>
                      <textarea
                        required
                        rows={4}
                        value={formMessage}
                        onChange={(e) => setFormMessage(e.target.value)}
                        placeholder="Write details of your proposal here..."
                        className="w-full bg-stone-950/50 border border-stone-850 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-cyan-400 text-white transition leading-snug resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 px-4 rounded-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs tracking-wider flex items-center justify-center gap-2 cursor-pointer transition shadow-md shadow-cyan-500/10"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Form Details
                    </button>
                  </form>
                </div>

                {/* Local inquiries trace list */}
                <div className="lg:col-span-7 bg-stone-900/10 border border-stone-800 rounded-2xl p-6 flex flex-col h-[525px] overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4 h-12 flex-shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest">Inboxes Tracer</span>
                      <span className="bg-stone-800 font-mono text-[10px] font-bold text-gray-300 px-2 py-0.5 rounded-full">
                        {savedInquiries.length} Active
                      </span>
                    </div>
                  </div>

                  {/* Message items container */}
                  <div className="flex-1 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-stone-800">
                    {savedInquiries.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-stone-500 space-y-2 text-center p-8">
                        <Mail className="w-8 h-8 text-stone-600 animate-bounce" />
                        <h4 className="text-stone-300 text-xs font-bold font-mono uppercase">Local Inbox Empty</h4>
                        <p className="text-stone-500 text-[11px] max-w-sm leading-relaxed">
                          No inquiries submitted from this browser yet. Fill the direct form to see it pop here instantly!
                        </p>
                      </div>
                    ) : (
                      savedInquiries.map((inq) => (
                        <div key={inq.id} className="p-4 rounded-xl border border-stone-800 bg-stone-950/40 relative group space-y-2 hover:border-stone-700/60 transition">
                          
                          <button
                            onClick={() => deleteInquiry(inq.id)}
                            className="absolute top-3.5 right-3.5 p-1 rounded-lg hover:bg-stone-800 text-stone-500 hover:text-white transition cursor-pointer"
                            title="Delete record"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>

                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-mono font-bold text-cyan-400">{inq.subject}</span>
                            <h4 className="text-xs font-bold text-white leading-none">{inq.name}</h4>
                            <p className="text-[10px] font-mono text-gray-400">{inq.email} | {inq.timestamp}</p>
                          </div>

                          <p className="text-xs text-gray-300 border-t border-stone-800/40 pt-2 leading-relaxed whitespace-pre-wrap">
                            {inq.message}
                          </p>

                          <div className="pt-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 bg-stone-900/30 w-fit px-2 py-0.5 rounded border border-stone-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>Locally Synced and Recorded</span>
                          </div>

                        </div>
                      ))
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-stone-800/60 py-6 mt-12 bg-stone-950/60 font-mono text-[10px] text-gray-500 tracking-wide text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p>© 2026 Rahul EK. All rights reserved. Specialized in AI Automated Ecosystems.</p>
          <p className="invisible sm:visible text-[9px] text-stone-600">
            Powered by Node 22 Express + Vite React full-stack secure bundle
          </p>
        </div>
      </footer>

    </div>
  );
}
