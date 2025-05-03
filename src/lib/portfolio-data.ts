import fs from 'fs';
import path from 'path';
import type { Icon as LucideIcon } from 'lucide-react';
import { Github, Linkedin, Rss } from 'lucide-react'; // Keep icon imports here for mapping

// --- Data Structure Interfaces ---

interface Metadata {
  title: string;
  description: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface HeaderData {
  logoText: string;
  navItems: NavItem[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string; // Store icon name as string
}

export interface LanyardData {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  imageAiHint: string;
  description: string;
  skills: string[]; // Store skill names as strings
  socialLinks: SocialLink[];
}

export interface ExperienceItem {
  company: string;
  logoUrl: string;
  logoAlt: string;
  aiHint: string;
  title: string;
  duration: string;
  description: string;
  techStack: string[]; // Store tech names as strings
}

export interface ExperienceData {
  title: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  imageUrl: string;
  aiHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ProjectsData {
  title: string;
  items: ProjectItem[];
}

export interface TestimonialItem {
  name: string;
  handle: string;
  avatarUrl: string;
  aiHint: string;
  text: string;
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export interface ContactData {
  title: string;
  cardTitle: string;
  description: string;
  formLabels: {
    name: string;
    email: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    message: string;
  };
  buttonText: string;
  submittingText: string;
}

interface FooterData {
  copyright: string;
  builtWith: string;
}

export interface PortfolioData {
  metadata: Metadata;
  header: HeaderData;
  lanyard: LanyardData;
  experience: ExperienceData;
  projects: ProjectsData;
  testimonials: TestimonialsData;
  contact: ContactData;
  footer: FooterData;
}

// --- Icon Mapping ---
// Keep the mapping of icon names (from JSON) to actual components here
export const socialIconMap: { [key: string]: LucideIcon } = {
  Github: Github,
  Linkedin: Linkedin,
  Rss: Rss,
  // Add other icons if needed
};

// --- Data Loading Function ---

let cachedData: PortfolioData | null = null;

export function getPortfolioData(): PortfolioData {
  // Simple in-memory cache for server environments
  if (cachedData) {
    return cachedData;
  }

  try {
    const jsonPath = path.resolve(process.cwd(), 'src/data/portfolio-data.json');
    const jsonData = fs.readFileSync(jsonPath, 'utf-8');
    cachedData = JSON.parse(jsonData) as PortfolioData;
    return cachedData;
  } catch (error) {
    console.error("Error reading portfolio data:", error);
    // Provide default fallback data or re-throw error
    throw new Error("Could not load portfolio data.");
  }
}
