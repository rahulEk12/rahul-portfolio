export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  location: string;
  points: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: "AI" | "Design" | "Development" | "Data";
  iconName: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface InterestItem {
  name: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}
