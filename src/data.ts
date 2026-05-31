import { ExperienceItem, SkillItem, EducationItem, InterestItem } from "./types";

export const CONTACT_INFO = {
  name: "Rahul EK",
  title: "AI Workflow Developer | MCP Integration Specialist",
  tagline: "Bridging intelligence and workflows by engineering custom MCP servers, AI agent pipelines, and high-performance digital automation ecosystems.",
  email: "rek696723@gmail.com",
  phone: "+91 7752843401",
  location: "Mumbai, Maharashtra, India",
  experienceYears: "3+ Years",
  github: "https://github.com/RahulEK", // inferred from file
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "AI Workflow Developer",
    company: "Freelance / Tech Innovations Inc.",
    duration: "2022 - Present",
    location: "Mumbai, India",
    points: [
      "Designed and integrated custom AI-assisted workflow systems for research, professional formatting, and task automation.",
      "Hands-on specialist in connecting Model Context Protocol (MCP) servers across Claude, ChatGPT, Cursor, Windsurf, and VS Code ecosystems.",
      "Engineered workflows on OpenAI Agent Builder to design robust, self-executing agent processes and custom instructions.",
      "Experienced in generating visually clean, structured digital layouts, presentation assets, and high-quality prompt manuals.",
      "Optimized operational cycle times by up to 95% via custom-tailored LLM context bindings and automated data formatting tools."
    ]
  },
  {
    role: "Digital Design Specialist",
    company: "Digital Solutions Ltd.",
    duration: "2020 - 2022",
    location: "Mumbai, India",
    points: [
      "Built beautiful, state-of-the-art UI/UX layouts utilizing Figma and Canva, ensuring rich visual contrast and pixel-perfect aesthetics.",
      "Transformed raw, unstructured information into modern, presentable, and highly readable professional materials.",
      "Improved workflow speed and layout design efficiency by up to 80% through deep integration of AI design prompts and custom presets.",
      "Managed client profile formatting, professional documentation, and interactive mockup layouts."
    ]
  },
  {
    role: "Junior Web Developer",
    company: "Web Studio",
    duration: "2018 - 2020",
    location: "Mumbai, India",
    points: [
      "Developed fast, highly responsive, mobile-optimised client websites using HTML, CSS, JavaScript, and asset optimization techniques.",
      "Maintained core frontend codebases, refactoring static systems into reusable visual components and layout systems.",
      "Participated actively in agile team processes, executing fast mock sprints and responsive design quality checks."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science (M.Sc.)",
    institution: "Jawaharlal Nehru University (JNU), New Delhi",
    duration: "2017 - 2019",
    details: "Specialization in Physics & Computational Physics. Explored numerical modelling, algorithm development, and physics-based computation."
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    institution: "DAV PG College, Gorakhpur, Uttar Pradesh",
    duration: "2013 - 2016",
    details: "Graduate studies in Physics and Mathematics. Developed solid foundational skills in matrix algebra, analytics, and differential models."
  }
];

export const SKILLS: SkillItem[] = [
  // AI & MCP
  { name: "MCP Integration", level: 90, category: "AI", iconName: "Server" },
  { name: "AI Workflow Automation", level: 95, category: "AI", iconName: "Cpu" },
  { name: "Claude & ChatGPT SDKs", level: 85, category: "AI", iconName: "Bot" },
  { name: "Prompt Engineering", level: 95, category: "AI", iconName: "Terminal" },
  { name: "Cursor & Windsurf Labs", level: 90, category: "AI", iconName: "Layers" },

  // Design
  { name: "Figma UI/UX Layouts", level: 88, category: "Design", iconName: "Figma" },
  { name: "Canva Pro Assets", level: 92, category: "Design", iconName: "Feather" },
  { name: "Digital Content Mapping", level: 85, category: "Design", iconName: "Layout" },
  { name: "Profile & Doc Layouts", level: 90, category: "Design", iconName: "FileText" },

  // Development
  { name: "HTML & CSS3", level: 95, category: "Development", iconName: "Html5" },
  { name: "JavaScript (ES6+)", level: 88, category: "Development", iconName: "Code" },
  { name: "React & Tailwinds", level: 80, category: "Development", iconName: "Atom" },
  { name: "Python Scripting", level: 75, category: "Development", iconName: "FileCode" },

  // Data & Tools
  { name: "Microsoft Excel Formulas", level: 95, category: "Data", iconName: "Table" },
  { name: "Google Sheets Scripting", level: 90, category: "Data", iconName: "Grid" },
  { name: "Power BI Dashboards", level: 85, category: "Data", iconName: "BarChart3" },
  { name: "Research & Analysis", level: 88, category: "Data", iconName: "Search" }
];

export const INTERESTS: InterestItem[] = [
  { name: "Learning AI Tools", icon: "Bot" },
  { name: "Digital Creativity", icon: "Palette" },
  { name: "Coding", icon: "Code" },
  { name: "Photography", icon: "Camera" },
  { name: "Reading", icon: "BookOpen" },
  { name: "Hiking", icon: "Compass" }
];

export const LANGUAGES = [
  { name: "Bhojpuri", level: "Expert", percentage: 100 },
  { name: "Hindi", level: "Professional", percentage: 95 },
  { name: "English", level: "Intermediate", percentage: 75 }
];
