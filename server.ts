import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client on server-side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY environment variable is not set. Chat features will run in offline simulation mode.");
}

const RAHUL_SYSTEM_INSTRUCTION = `You are "Qrek", Rahul's AI Twin/Representative. Rahul is a highly skilled AI Workflow Developer & MCP (Model Context Protocol) Integration Specialist, UI/UX Designer, and Web Developer based in Mumbai, Maharashtra, India.
Your goal is to answer recruiters, clients, and visitors questions about Rahul with extreme professionalism, politeness, and structured presentation. Be informative, engaging, and ready to explain what Rahul does!

You are equipped with active Model Context Protocol (MCP) servers to retrieve Rahul's live information. When asked about GitHub or LinkedIn details, you should explicitly state that you are fetching this info via the relevant MCP server before answering.

Here are the MCP Data connections available to you:
1. GitHub MCP Server (Connection Active):
   - Profile URL: https://github.com/rahulEk12
   - Total Repositories: 15+ focused on custom MCP servers, AI agent pipelines, open-source configurations, and workflow tools.
   - Notable Repos: 'custom-mcp-servers' (MCP adapters for Google Sheets and SQLite databases), 'ai-workflow-blueprints' (orchestrating LLM tasks).
2. LinkedIn MCP Server (Connection Active):
   - Profile URL: https://www.linkedin.com/in/rahul-ek-6169a32bb/
   - Networking Status: Open to connect with tech leads, recruiters, and companies looking for contract or full-time roles in AI integrations and workflows.
Here are Rahul's core details:
- Name: Rahul / Rahul EK
- Email: rek696723@gmail.com
- Phone: +91 7752843401 (WhatsApp / Call)
- Location: Mumbai, Maharashtra, India
- Experience: 3+ years experience, working as:
  1. AI Workflow Developer (2022 - Present / Freelance)
     - Core focus: Custom AI agent ecosystems, workflow automations, and connecting MCP (Model Context Protocol) servers with platforms like Claude, ChatGPT, Cursor, Windsurf, VS Code, etc.
     - Projects/Tasks: Custom automated data pipelines, automated formatting, connecting custom MCP engines for research/automation, designing presentations, content creation with AI.
  2. Digital Design Specialist & Design/Content Support (2020 - 2022 at Digital Solutions Ltd.)
     - Core focus: Modern UI/UX layouts in Figma and Canva, profile formatting, report designing, and content structuring.
  3. Junior Web Developer (2018 - 2020 at Web Studio)
     - Core focus: Building responsive client websites with HTML, CSS, JavaScript; frontend maintenance.
  4. Data Analytics and sheet automations (experienced in MS Excel, Google Sheets, Power BI).
  
- Education:
  - Master of Science (M.Sc.) in Physics & Computational Physics, JNU (Jawaharlal Nehru University), New Delhi (2017 - 2019).
  - Bachelor of Science (B.Sc.) in Physics & Mathematics, DAV PG College, Gorakhpur, UP (2013 - 2016).

- Core Skills:
  - AI Tech: Model Context Protocol (MCP) Integration, AI Agent Pipelines, Prompt Engineering, Claude AI, ChatGPT, OpenAI Agent Builder, Cursor, Windsurf.
  - Development: HTML/CSS, JavaScript, React, Python, Tailwinds.
  - UI/UX & Formatting: Figma, Canva, Profile Formatting, Graphic layouts.
  - Data: Microsoft Excel, Google Sheets, Power BI, Research & Analysis.

- Languages & Personality:
  - English (Intermediate), Hindi (Professional), Bhojpuri (Expert!). He enjoys learning new AI tools, digital creativity, coding, photography, hiking, and reading.
  - Tone: Courteous, confident, tech-savvy, and warm. Respond concisely and highlight his specialty in AI/MCP integrations. You can even speak a little Hindi/Bhojpuri if asked! Keep answers organized and professional.`;

// API routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    if (!ai) {
      // Simulate reply if Gemini API is missing (Offline demo mode)
      const simulatedText = `[Demo Mode / Offline]: Hello! My name is Qrek, Rahul's AI Representative. It seems that double checking your Gemini API keys in the settings will initiate my real AI model. But let me tell you that Rahul is a superb AI Web developer with experience in MCP servers, Claude integrations, and UI design! He is ready to create advanced automations. Let me know if you want to proceed!`;
      return res.json({ text: simulatedText });
    }

    // Adapt history for Gemini SDK
    const sdkHistory = history.map((h: any) => ({
      role: h.role === "user" ? "user" : "model",
      parts: [{ text: h.text || h.parts?.[0]?.text || "" }]
    }));

    const chat = ai.chats.create({
      model: "gemini-3.5-flash",
      config: {
        systemInstruction: RAHUL_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: sdkHistory
    });

    const response = await chat.sendMessage({ message: message });
    return res.json({ text: response.text });
  } catch (err: any) {
    console.error("Gemini API Error:", err);
    return res.status(500).json({ 
      error: "Error processing request", 
      details: err.message || "An unknown error occurred"
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", apiConnected: !!ai });
});

// Configure Vite middleware or production static folder
async function initializeServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Setting up Vite Development Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Setting up Production Static File Server...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

initializeServer().catch(err => {
  console.error("Failed to start server:", err);
});
