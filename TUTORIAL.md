
# Building Your MapleLeafDev Portfolio: A Step-by-Step Guide

This tutorial will guide you through recreating the MapleLeafDev portfolio website from scratch using Next.js, TypeScript, Tailwind CSS, and ShadCN UI.

## Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js:** (v18 or later recommended) [https://nodejs.org/](https://nodejs.org/)
*   **npm** or **yarn:** (Comes bundled with Node.js)

## Step 1: Project Setup

1.  **Create a new Next.js App:**
    Open your terminal and run the following command. Choose TypeScript, ESLint, Tailwind CSS, `src/` directory, and App Router when prompted.

    ```bash
    npx create-next-app@latest mapleleafdev-portfolio --typescript --eslint --tailwind --src-dir --app --import-alias "@/*"
    cd mapleleafdev-portfolio
    ```

2.  **Install Dependencies:**
    We'll need some additional libraries for icons, date formatting, forms, and animations.

    ```bash
    npm install lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate @hookform/resolvers zod react-hook-form date-fns react-day-picker embla-carousel-react
    ```
    *   `lucide-react`: For icons.
    *   `class-variance-authority`, `clsx`, `tailwind-merge`: Utilities for managing CSS classes.
    *   `tailwindcss-animate`: Tailwind plugin for animations.
    *   `@hookform/resolvers`, `zod`, `react-hook-form`: For form handling and validation.
    *   `date-fns`, `react-day-picker`: Used by ShadCN Calendar component (though not directly used in the final portfolio, good to have if adding date features later).
    *   `embla-carousel-react`: For the testimonial carousel.

## Step 2: Initialize ShadCN UI

ShadCN UI provides beautifully designed components that you can copy and paste into your apps.

1.  **Initialize ShadCN UI:**
    Run the CLI command to set up ShadCN in your project. Select the default options (style: default, base color: neutral, CSS variables: yes).

    ```bash
    npx shadcn-ui@latest init
    ```
    This will create `components.json`, update `tailwind.config.ts` and `globals.css`, and set up component aliasing.

2.  **Install Required ShadCN Components:**
    Add the components used in the portfolio.

    ```bash
    npx shadcn-ui@latest add button card avatar sheet input textarea label toast carousel separator
    ```

## Step 3: Theme, Styling, and Fonts

1.  **Configure Tailwind:**
    Ensure your `tailwind.config.ts` includes the `tailwindcss-animate` plugin and necessary content paths. It should look similar to this after ShadCN initialization:

    ```typescript
    // tailwind.config.ts
    import type { Config } from "tailwindcss";

    export default {
        darkMode: ["class"],
        content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
        container: { // Added container settings from ShadCN setup
          center: true,
          padding: "2rem",
          screens: {
            "2xl": "1400px",
          },
        },
        extend: {
          colors: {
            // Colors defined by ShadCN via CSS variables
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))'
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))'
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))'
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))'
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))'
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))'
            },
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))'
            },
             chart: { // Keep chart colors if needed elsewhere
              '1': 'hsl(var(--chart-1))',
              '2': 'hsl(var(--chart-2))',
              '3': 'hsl(var(--chart-3))',
              '4': 'hsl(var(--chart-4))',
              '5': 'hsl(var(--chart-5))'
            },
            sidebar: { // Keep sidebar colors if needed elsewhere
              DEFAULT: 'hsl(var(--sidebar-background))',
              foreground: 'hsl(var(--sidebar-foreground))',
              primary: 'hsl(var(--sidebar-primary))',
              'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
              accent: 'hsl(var(--sidebar-accent))',
              'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
              border: 'hsl(var(--sidebar-border))',
              ring: 'hsl(var(--sidebar-ring))'
            }
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
          },
          fontFamily: { // Added font family definition
            sans: ['var(--font-geist-sans)'],
            mono: ['var(--font-geist-mono)'],
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' }
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' }
            },
             'pulsate': { // Added pulsate keyframes
              '0%, 100%': { transform: 'scale(1)', opacity: '1' },
              '50%': { transform: 'scale(1.2)', opacity: '0.7' },
            }
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
             'pulsate': 'pulsate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Added pulsate animation
          }
        }
      },
      plugins: [require("tailwindcss-animate")],
    } satisfies Config;
    ```

2.  **Install Geist Font:**
    The portfolio uses the Geist font for both sans-serif and monospace styles.

    ```bash
    npm install geist
    ```

3.  **Configure Global CSS:**
    Update `src/app/globals.css` to define the dark theme variables and apply the base styles.

    ```css
    /* src/app/globals.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      :root {
         /* Define light theme variables (optional, but good practice) */
        --background: 210 40% 98%;
        --foreground: 224 71% 10%;
        --card: 0 0% 100%;
        --card-foreground: 224 71% 10%;
        --popover: 0 0% 100%;
        --popover-foreground: 224 71% 10%;
        --primary: 220 9% 46%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96.1%;
        --secondary-foreground: 224 71% 10%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215 20% 65.1%;
        --accent: 210 40% 90%;
        --accent-foreground: 224 71% 10%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 220 9% 46%;
        --radius: 0.5rem;
        /* Chart/Sidebar/Gradient colors can be kept or removed if not used */
      }

      .dark {
        /* Dark Theme - Neutral Palette */
        --background: 224 71% 4%; /* Very dark blue */
        --foreground: 210 40% 98%; /* Light cool gray */

        --card: 224 71% 10%; /* Slightly lighter dark blue */
        --card-foreground: 210 40% 98%;

        --popover: 224 71% 8%; /* Even darker blue */
        --popover-foreground: 210 40% 98%;

        --primary: 210 40% 80%; /* Lighter Gray-Blue */
        --primary-foreground: 224 71% 4%; /* Very dark blue for contrast */

        --secondary: 224 71% 12%; /* Dark Blue-Gray */
        --secondary-foreground: 210 40% 98%; /* Light cool gray */

        --muted: 224 71% 15%; /* Darker blue-gray */
        --muted-foreground: 215 20% 65.1%; /* Medium gray */

        --accent: 224 71% 18%; /* Darker Accent */
        --accent-foreground: 210 40% 98%; /* Light cool gray */

        --destructive: 0 62.8% 30.6%; /* Default dark red */
        --destructive-foreground: 0 0% 98%;

        --border: 217.2 32.6% 17.5%; /* Darker gray border */
        --input: 217.2 32.6% 17.5%; /* Darker gray input background */
        --ring: 210 40% 80%; /* Lighter Gray-Blue for focus rings */
         /* Chart/Sidebar/Gradient colors can be kept or removed if not used */

         /* Define other variables like --radius if needed */
        --radius: 0.5rem;
      }
    }

    @layer base {
      * {
        @apply border-border;
      }
      /* Remove scroll-smooth from html if causing issues */
      /* html {
        @apply scroll-smooth;
      } */
      body {
        @apply bg-background text-foreground font-mono antialiased overflow-x-hidden; /* Apply monospace font, prevent horizontal scroll */
      }
    }
    ```

## Step 4: Layout and Background

1.  **Create Animated Background:**
    Create the component for the animated code symbols background.

    ```typescript
    // src/components/layout/animated-code-background.tsx
    "use client";

    import React, { useState, useEffect, useRef, useCallback } from 'react';
    import { cn } from "@/lib/utils";

    interface SymbolData {
      id: number;
      char: string;
      x: number;
      y: number;
      opacity: number;
      fontSize: number;
      vy: number; // Vertical velocity
    }

    // Combine code symbols and tech stack terms
    const symbolsList = [
      '<>', '{}', '()', '[]', '=>', '!=', '===', '&&', '||', ';', ':', '#', '$', '%', '*', '+', '-', '/', '<', '>',
      'React', 'Angular', 'Node', 'TypeScript', 'Next.js', 'CSS', 'HTML', 'State', 'Props', 'Hook', 'Effect', 'Reducer',
      'Component', 'Module', 'Build', 'Deploy', 'Test', 'API', 'JSON', 'JSX', 'NgRx', 'Tailwind', 'Firebase', 'GraphQL', 'Docker'
    ];

    // Number of symbols to render
    const SYMBOL_COUNT = 60; // Increased count slightly

    export function AnimatedCodeBackground({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
      const [symbols, setSymbols] = useState<SymbolData[]>([]);
      const containerRef = useRef<HTMLDivElement>(null);
      const animationFrameRef = useRef<number>();

      const initializeSymbols = useCallback(() => {
        if (!containerRef.current) return;
        const { offsetWidth: width, offsetHeight: height } = containerRef.current;
        const newSymbols: SymbolData[] = [];
        for (let i = 0; i < SYMBOL_COUNT; i++) {
          newSymbols.push({
            id: i,
            char: symbolsList[Math.floor(Math.random() * symbolsList.length)], // Use combined list
            x: Math.random() * width,
            y: Math.random() * height,
            opacity: Math.random() * 0.5 + 0.2, // Adjusted opacity range (0.2 to 0.7)
            fontSize: Math.random() * 12 + 10, // Font size between 10px and 22px
            vy: Math.random() * 0.4 + 0.1, // Slightly slower drift speed
          });
        }
        setSymbols(newSymbols);
      }, []);


      const animateSymbols = useCallback(() => {
          if (!containerRef.current) return;
          const { offsetHeight: height } = containerRef.current;

          setSymbols(prevSymbols =>
            prevSymbols.map(symbol => {
              let newY = symbol.y + symbol.vy;
              // Reset symbol to top if it goes off screen
              if (newY > height + symbol.fontSize) {
                newY = -symbol.fontSize; // Start just above the screen
              }
              // Slightly adjust opacity over time for a subtle pulsing effect
              let newOpacity = symbol.opacity + (Math.random() - 0.5) * 0.02;
              // Clamp opacity within the desired range (e.g., 0.2 to 0.8)
              newOpacity = Math.max(0.2, Math.min(0.8, newOpacity));

              return {
                ...symbol,
                y: newY,
                opacity: newOpacity,
              };
            })
          );

          animationFrameRef.current = requestAnimationFrame(animateSymbols);
        }, []);


      useEffect(() => {
        // Initialize symbols only on the client after mount
        initializeSymbols();

        // Set up resize listener
        const handleResize = () => {
            // Re-initialize symbols on resize to fit new dimensions
            initializeSymbols();
        };
        window.addEventListener('resize', handleResize);


        // Start animation loop
         animationFrameRef.current = requestAnimationFrame(animateSymbols);

        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
           if (animationFrameRef.current) {
             cancelAnimationFrame(animationFrameRef.current);
           }
        };
      }, [initializeSymbols, animateSymbols]); // Add dependencies

      return (
        <div
          ref={containerRef}
          className={cn(
            "fixed inset-0 -z-10 overflow-hidden pointer-events-none", // Ensure it's behind everything and non-interactive
            className
          )}
          {...props}
        >
          {symbols.map(symbol => (
            <span
              key={symbol.id}
              // Use a more prominent muted color, adjust transparency via opacity style
              className="absolute text-muted-foreground/70" // Increased opacity via class
              style={{
                left: `${symbol.x}px`,
                top: `${symbol.y}px`,
                fontSize: `${symbol.fontSize}px`,
                opacity: symbol.opacity, // Opacity controlled by state
                 transform: `translateY(0)`,
                 willChange: 'transform, opacity',
                 textShadow: '0 0 6px hsl(var(--foreground) / 0.4)', // Slightly stronger glow
              }}
            >
              {symbol.char}
            </span>
          ))}
        </div>
      );
    }
    ```

2.  **Create Data Structure and Loader:**
    Define the structure for your portfolio data in a JSON file and create a TypeScript file to load and type it.

    ```json
    // src/data/portfolio-data.json
    {
      "metadata": {
        "title": "MapleLeafDev Portfolio",
        "description": "Portfolio of a seasoned front-end developer"
      },
      "header": {
        "logoText": "MapleLeafDev",
        "navItems": [
          { "label": "About", "href": "#about" },
          { "label": "Experience", "href": "#experience" },
          { "label": "Projects", "href": "#projects" },
          { "label": "Testimonials", "href": "#testimonials" },
          { "label": "Contact", "href": "#contact" }
        ]
      },
      "lanyard": {
        "name": "Harikrishnan K",
        "title": "Senior Frontend Developer",
        "company": "Tata Consultancy Services",
        "imageUrl": "https://picsum.photos/150/150",
        "imageAiHint": "professional developer portrait",
        "description": "Passionate and experienced front-end developer with a knack for building beautiful, performant, and user-friendly web applications. Specializing in modern JavaScript frameworks and dedicated to writing clean, maintainable code. Always eager to learn and explore new technologies. Based in Canada, eh! 🍁",
        "skills": [
          "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Firebase", "GraphQL", "Docker"
        ],
        "socialLinks": [
          { "name": "GitHub", "url": "https://github.com/harikrishkk", "icon": "Github" },
          { "name": "LinkedIn", "url": "https://linkedin.com/in/harikrishkk", "icon": "Linkedin" },
          { "name": "Blog", "url": "https://blog.example.com", "icon": "Rss" }
        ]
      },
      "experience": {
        "title": "Work Experience",
        "items": [
           {
            "company": "Tata Consultancy Services",
            "logoUrl": "https://picsum.photos/40/40?random=tcs",
            "logoAlt": "TCS Logo",
            "aiHint": "tcs company logo",
            "title": "Senior Frontend Developer",
            "duration": "Sep 2018 - Present",
            "description": "Leading front-end development for key client projects, focusing on React, Angular, and performance optimization. Mentoring junior developers and contributing to internal framework development.",
            "techStack": ["React", "Angular", "TypeScript", "NgRx", "JavaScript", "Node.js", "CSS3", "HTML5"]
          },
          {
            "company": "Infosys",
            "logoUrl": "https://picsum.photos/40/40?random=infy",
            "logoAlt": "Infosys Logo",
            "aiHint": "infosys company logo",
            "title": "Technology Analyst",
            "duration": "Nov 2015 - Sep 2018",
            "description": "Developed and maintained web applications for various clients using technologies like Angular.js and Java. Collaborated in Agile teams to deliver features and resolve bugs.",
            "techStack": ["Angular.js", "Java", "JavaScript", "HTML", "CSS", "Spring", "Hibernate"]
          },
          {
            "company": "Cognizant",
            "logoUrl": "https://picsum.photos/40/40?random=cts",
            "logoAlt": "Cognizant Logo",
            "aiHint": "cognizant company logo",
            "title": "Programmer Analyst",
            "duration": "Sep 2013 - Nov 2015",
            "description": "Worked on developing and testing software applications. Gained experience in the software development lifecycle and various testing methodologies.",
            "techStack": ["Java", "SQL", "JavaScript", "HTML", "Selenium"]
          }
        ]
      },
      "projects": {
        "title": "Projects",
        "items": [
          {
            "title": "Project Maple",
            "description": "A comprehensive web application built with Next.js and Tailwind CSS, showcasing interactive data visualizations.",
            "imageUrl": "https://picsum.photos/600/400?random=4",
            "aiHint": "web application screenshot dashboard",
            "tags": ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
            "liveUrl": "#",
            "repoUrl": "#"
          },
          {
            "title": "Portfolio v2",
            "description": "The very portfolio you are looking at! Designed with a Canadian theme and built for performance.",
            "imageUrl": "https://picsum.photos/600/400?random=5",
            "aiHint": "portfolio website design code",
            "tags": ["Next.js", "ShadCN UI", "Tailwind CSS", "Framer Motion"],
            "repoUrl": "#"
          },
          {
            "title": "Blog Platform",
            "description": "A full-stack blogging platform featuring markdown support, user authentication, and a clean interface.",
            "imageUrl": "https://picsum.photos/600/400?random=6",
            "aiHint": "blog website interface article",
            "tags": ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
            "liveUrl": "#"
          }
        ]
      },
      "testimonials": {
         "title": "Here's what others are saying",
         "subtitle": "They think my work is cool, maybe you will too!",
         "items": [
            {
              "name": "Maurício Pradella",
              "handle": "@mpradella",
              "avatarUrl": "https://picsum.photos/48/48?random=10",
              "aiHint": "developer portrait",
              "text": "Working with MapleLeafDev was a fantastic experience. Professional, skilled, and delivered beyond expectations!"
            },
            {
              "name": "Fernando",
              "handle": "@Fernando_Her85",
              "avatarUrl": "https://picsum.photos/48/48?random=11",
              "aiHint": "man portrait",
              "text": "Para los que trabajan en React, ¡tírenle un ojo a este recurso! Muy impresionado con la calidad del código."
            },
            {
              "name": "Tracy",
              "handle": "@Traccey001",
              "avatarUrl": "https://picsum.photos/48/48?random=12",
              "aiHint": "woman smiling",
              "text": "This front-end work is absolutely amazing!!! So clean and performant."
            },
            {
              "name": "Gibson",
              "handle": "@GibsonSMurray",
              "avatarUrl": "https://picsum.photos/48/48?random=13",
              "aiHint": "person thinking",
              "text": "mapleleafdev.ca has got to be the most artistic UI component lib I've seen in a while 🤔"
            },
            {
              "name": "Virag",
              "handle": "@Virag_Dev",
              "avatarUrl": "https://picsum.photos/48/48?random=14",
              "aiHint": "woman coding",
              "text": "This is so cool! The way the components come together is just *chef's kiss*."
            },
            {
              "name": "Alex Chen",
              "handle": "@alex_frontend",
              "avatarUrl": "https://picsum.photos/48/48?random=15",
              "aiHint": "developer headshot",
              "text": "Highly recommend MapleLeafDev for any complex UI challenges. True problem solver."
            }
          ]
      },
      "contact": {
        "title": "Get In Touch",
        "cardTitle": "Contact Me",
        "description": "Have a question or want to collaborate? Send me a message!",
        "formLabels": {
          "name": "Name",
          "email": "Email",
          "message": "Message"
        },
        "placeholders": {
          "name": "Your Name",
          "email": "your.email@example.com",
          "message": "Your message here..."
        },
        "buttonText": "Send Message",
        "submittingText": "Sending..."
      },
      "footer": {
        "copyright": "MapleLeafDev. All rights reserved.",
        "builtWith": "Built with Next.js and Tailwind CSS."
      }
    }
    ```

    ```typescript
    // src/lib/portfolio-data.ts
    import fs from 'fs';
    import path from 'path';
    import type { Icon as LucideIcon } from 'lucide-react';
    import {
      Github,
      Linkedin,
      Rss,
      Code,
      Atom,
      Globe,
      FileCode,
      Paintbrush,
      Server,
      Database,
      Network,
      Container
    } from 'lucide-react'; // Keep icon imports here for mapping

    // --- Data Structure Interfaces ---

    interface Metadata {
      title: string;
      description: string;
    }

    interface NavItem {
      label: string;
      href: string;
    }

    export interface HeaderData {
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

    export interface FooterData {
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

    // Mapping for skill names to Lucide icons
    export const skillIconMap: { [key: string]: LucideIcon } = {
      React: Atom,
      'Next.js': Globe,
      TypeScript: FileCode,
      'Tailwind CSS': Paintbrush,
      'Node.js': Server,
      Firebase: Database, // Using Database icon for Firebase
      GraphQL: Network,
      Docker: Container,
      Angular: Code, // Placeholder, could use Atom or specific Angular icon if available
      'Angular.js': Code, // Placeholder
      NgRx: Code, // Placeholder
      JavaScript: Code, // Generic code icon
      Java: Code, // Generic code icon
      HTML: Code,
      HTML5: Code,
      CSS: Code,
      CSS3: Code,
      Spring: Code, // Placeholder
      Hibernate: Code, // Placeholder
      SQL: Database,
      Selenium: Code, // Placeholder for testing tool
      // Add more mappings as needed
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
    ```

3.  **Update Root Layout:**
    Modify `src/app/layout.tsx` to use the Geist fonts, apply the dark theme globally, include the animated background, and load metadata dynamically.

    ```typescript
    // src/app/layout.tsx
    import type { Metadata } from 'next';
    import { GeistSans } from 'geist/font/sans';
    import { GeistMono } from 'geist/font/mono';
    import './globals.css';
    import { Toaster } from "@/components/ui/toaster";
    import { AnimatedCodeBackground } from '@/components/layout/animated-code-background'; // Import the background
    import { getPortfolioData } from '@/lib/portfolio-data'; // Import the data loading function

    const geistSans = GeistSans;
    const geistMono = GeistMono;

    // Load metadata dynamically
    const portfolioData = getPortfolioData();
    export const metadata: Metadata = {
      title: portfolioData.metadata.title,
      description: portfolioData.metadata.description,
    };

    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        // Apply dark theme globally and font variables
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
          {/* Ensure body uses monospace font via variable and has relative positioning for z-index stacking */}
          <body className={`font-mono antialiased relative`}>
            {/* The animated background component */}
            <AnimatedCodeBackground />
            {/* Content container with higher z-index to appear above the background */}
            <div className="relative z-10">
              <main>{children}</main>
            </div>
            {/* Toaster for notifications */}
            <Toaster />
          </body>
        </html>
      );
    }
    ```

4.  **Create Header and Footer Components:**
    Build reusable layout components.

    ```typescript
    // src/components/layout/header.tsx
    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
    import { Menu, Code } from 'lucide-react';
    import type { HeaderData } from '@/lib/portfolio-data'; // Import the type

    interface HeaderProps {
      data: HeaderData;
    }

    export function Header({ data }: HeaderProps) {
      const { logoText, navItems } = data;

      return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center px-4 md:px-6">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6" />
              <span className="font-bold">{logoText}</span>
            </Link>
            <nav className="hidden flex-1 items-center justify-end space-x-6 text-sm font-medium md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-1 items-center justify-end md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                   {/* Added SheetHeader and SheetTitle for accessibility */}
                  <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      href="/"
                      className="mb-4 flex items-center space-x-2 border-b pb-4"
                    >
                      <Code className="h-6 w-6" />
                      <span className="font-bold">{logoText}</span>
                    </Link>
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="transition-colors hover:text-foreground/80"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      );
    }
    ```

    ```typescript
    // src/components/layout/footer.tsx
    import type { FooterData } from '@/lib/portfolio-data'; // Import the type

    interface FooterProps {
      data: FooterData;
    }

    export function Footer({ data }: FooterProps) {
      const { copyright, builtWith } = data;
      const currentYear = new Date().getFullYear();

      return (
        <footer className="border-t bg-muted py-6">
          <div className="container flex flex-col items-center justify-center px-4 text-center text-sm text-muted-foreground md:px-6">
            <p>&copy; {currentYear} {copyright}</p>
            <p>{builtWith}</p>
          </div>
        </footer>
      );
    }
    ```

## Step 5: Build Portfolio Sections

Create components for each section of the portfolio, fetching data from the `portfolio-data.json` file via the `getPortfolioData` function.

1.  **Lanyard/About Section:**
    Create the Lanyard Card components and the section component.

    ```typescript
    // src/components/ui/lanyard.tsx
    // src/components/ui/lanyard.tsx
    import * as React from 'react';
    import Image from 'next/image';
    import { cn } from '@/lib/utils';

    // --- LanyardCard ---
    interface LanyardCardProps extends React.HTMLAttributes<HTMLDivElement> {}

    const LanyardCard = React.forwardRef<HTMLDivElement, LanyardCardProps>(
      ({ className, children, ...props }, ref) => (
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden rounded-xl border border-border/30 bg-card/60 shadow-lg backdrop-blur-sm',
            // Add a subtle grid pattern overlay
            'before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_center,_var(--color-dots)_1px,_transparent_1px)] before:[background-size:16px_16px] before:opacity-10',
            className
          )}
          style={{ '--color-dots': 'hsl(var(--muted-foreground))' } as React.CSSProperties}
          {...props}
        >
          {children}
        </div>
      )
    );
    LanyardCard.displayName = 'LanyardCard';

    // --- LanyardIdCard ---
    interface LanyardIdCardProps extends React.HTMLAttributes<HTMLDivElement> {
      imageUrl: string;
      imageAlt: string;
      imageAiHint?: string;
      name: string;
      title: string;
      company?: string;
    }

    const LanyardIdCard = React.forwardRef<HTMLDivElement, LanyardIdCardProps>(
      (
        {
          className,
          imageUrl,
          imageAlt,
          imageAiHint,
          name,
          title,
          company,
          ...props
        },
        ref
      ) => (
        <div
          ref={ref}
          className={cn(
            'relative flex flex-col items-center gap-4 bg-card/40 p-6 backdrop-blur-sm sm:flex-row sm:gap-6 md:p-8',
            // Add a border below this section
            'border-b border-border/30',
             // Add the grid pattern specific to this inner card if desired
            'before:absolute before:inset-0 before:-z-10 before:bg-[radial-gradient(circle_at_center,_var(--color-dots)_1px,_transparent_1px)] before:[background-size:16px_16px] before:opacity-5', // Reduced opacity for inner card
            className
          )}
           style={{ '--color-dots': 'hsl(var(--muted-foreground))' } as React.CSSProperties} // Apply dot color variable
          {...props}
        >
          {/* Slot Punch Hole - purely visual */}
          <div className="absolute top-4 left-1/2 h-2 w-12 -translate-x-1/2 rounded-full bg-background opacity-50 ring-1 ring-border/50"></div>

          <Image
            src={imageUrl}
            alt={imageAlt}
            width={100}
            height={100}
            className="h-24 w-24 flex-shrink-0 rounded-full border-4 border-border/40 object-cover shadow-md md:h-28 md:w-28"
            data-ai-hint={imageAiHint}
          />
          <div className="flex-grow text-center sm:text-left">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              {name}
            </h1>
            <p className="text-lg text-primary">{title}</p>
            {company && (
              <p className="text-md text-muted-foreground">{company}</p>
            )}
          </div>
        </div>
      )
    );
    LanyardIdCard.displayName = 'LanyardIdCard';

    export { LanyardCard, LanyardIdCard };
    ```

    ```typescript
    // src/components/sections/lanyard-section.tsx
    import Image from 'next/image';
    import Link from 'next/link';
    import { Button } from '@/components/ui/button';
    import type { Icon as LucideIcon } from 'lucide-react';
    import { LanyardCard, LanyardIdCard } from '@/components/ui/lanyard';
    import type { LanyardData } from '@/lib/portfolio-data'; // Import the type
    import { socialIconMap, skillIconMap } from '@/lib/portfolio-data'; // Import the icon maps
    import { Code } from 'lucide-react'; // Import a default icon

    interface LanyardSectionProps {
      data: LanyardData;
    }

    export function LanyardSection({ data }: LanyardSectionProps) {
      const { name, title, company, imageUrl, imageAiHint, description, skills, socialLinks } = data;

      return (
        <section id="about" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
          <LanyardCard className="mx-auto max-w-5xl"> {/* Apply max-width here */}
            <LanyardIdCard
              name={name}
              title={title}
              company={company}
              imageUrl={imageUrl}
              imageAlt={`${name}'s profile picture`}
              imageAiHint={imageAiHint}
            />
            <div className="p-6 md:p-8">
              <p className="mb-6 text-foreground/90">{description}</p>

              <h3 className="mb-3 text-xl font-semibold text-foreground">Skills</h3>
              <div className="mb-6 flex flex-wrap gap-3">
                {skills.map((skillName) => {
                  const IconComponent = skillIconMap[skillName] || Code; // Use mapped skill icon or default Code
                  return (
                    <span
                      key={skillName}
                      className="inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-medium text-secondary-foreground backdrop-blur-sm border border-border/30"
                    >
                      <IconComponent className="h-4 w-4 text-primary" /> {/* Use dynamic icon */}
                      {skillName}
                    </span>
                  );
                })}
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">Connect</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const IconComponent = socialIconMap[link.icon] || Code; // Use mapped social icon or default
                  return (
                    <Button key={link.name} variant="outline" size="sm" asChild>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <IconComponent className="mr-2 h-4 w-4" />
                        {link.name}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </LanyardCard>
        </section>
      );
    }
    ```

2.  **Experience Section:**

    ```typescript
    // src/components/sections/experience-section.tsx
    import Image from 'next/image';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Code } from 'lucide-react'; // Keep Code icon for default tech
    import type { ExperienceData } from '@/lib/portfolio-data'; // Import the type
    import { skillIconMap } from '@/lib/portfolio-data'; // Import skill icon map

    interface ExperienceSectionProps {
      data: ExperienceData;
    }

    export function ExperienceSection({ data }: ExperienceSectionProps) {
      const { title, items: experiences } = data;

      return (
        <section id="experience" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {experiences.map((exp, index) => {
              return (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-px transform md:left-1/2 md:-translate-x-1/2">
                  {/* Pulsating dot */}
                  <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-background animate-pulsate">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                </div>

                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-md transition-all duration-300 hover:scale-[1.02] hover:skew-x-1 hover:shadow-xl bg-card/80 backdrop-blur-sm">
                  <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                    <Image
                      src={exp.logoUrl}
                      alt={exp.logoAlt}
                      width={40}
                      height={40}
                      className="rounded-md border border-border"
                      data-ai-hint={exp.aiHint}
                    />
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">{exp.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {exp.company} <span>({exp.duration})</span>
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-foreground/80">{exp.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.techStack.map((techName) => {
                         const IconComponent = skillIconMap[techName] || Code; // Get icon or default
                         return (
                            <span
                              key={techName}
                              className="inline-flex items-center gap-1.5 rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm"
                            >
                              <IconComponent className="h-3 w-3 text-primary" /> {/* Use icon */}
                              {techName}
                            </span>
                         );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
              )
            })}
          </div>
        </section>
      );
    }
    ```

3.  **Projects Section:**

    ```typescript
    // src/components/sections/projects-section.tsx
    import Image from 'next/image';
    import Link from 'next/link';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Github, ExternalLink } from 'lucide-react';
    import type { ProjectsData } from '@/lib/portfolio-data'; // Import the type

    interface ProjectsSectionProps {
      data: ProjectsData;
    }

    export function ProjectsSection({ data }: ProjectsSectionProps) {
      const { title, items: projects } = data;

      return (
        <section id="projects" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
             {title}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:skew-x-1 hover:shadow-xl bg-card/80 backdrop-blur-sm">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} Screenshot`}
                    fill
                    style={{objectFit: "cover"}}
                    className="bg-muted"
                     data-ai-hint={project.aiHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                  <CardDescription className="h-10 overflow-hidden text-ellipsis text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-secondary/30 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t border-border/50 pt-4">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.repoUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-4 w-4" /> Repository
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      );
    }
    ```

4.  **Testimonials Section:**

    ```typescript
    // src/components/sections/testimonials-section.tsx
    'use client';

    import Image from 'next/image';
    import { Card, CardContent } from '@/components/ui/card';
    import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from '@/components/ui/carousel';
    import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
    import type { TestimonialsData } from '@/lib/portfolio-data'; // Import the type

    interface TestimonialsSectionProps {
      data: TestimonialsData;
    }

    export function TestimonialsSection({ data }: TestimonialsSectionProps) {
      const { title, subtitle, items: testimonials } = data;

      return (
        <section id="testimonials" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mb-12 text-center text-lg text-muted-foreground">
            {subtitle}
          </p>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="relative w-full max-w-4xl mx-auto" // Centered and wider
          >
            {/* Gradient overlays for fade effect */}
            <div
              className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none"
              aria-hidden="true"
            />

            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  {/* Animation container */}
                   <div className={`p-1 h-full transition-transform duration-300 ease-out hover:scale-105 ${
                      index % 2 === 0 ? 'hover:-rotate-3' : 'hover:rotate-3' // Alternate rotation on hover
                    }`}>
                    <Card
                       className={`flex h-full flex-col justify-between bg-card/70 backdrop-blur-sm border border-border/40 shadow-md ${
                        index % 2 === 0 ? '-rotate-2' : 'rotate-2' // Initial slight rotation
                      }`}
                      style={{ maxWidth: '300px' }} // Smaller card width
                     >
                      <CardContent className="flex flex-col items-start gap-3 p-4"> {/* Reduced padding */}
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border-2 border-border/50"> {/* Smaller avatar */}
                            <AvatarImage
                              src={testimonial.avatarUrl}
                              alt={testimonial.name}
                              data-ai-hint={testimonial.aiHint}
                             />
                            <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground text-sm">{testimonial.name}</p> {/* Smaller name */}
                            <p className="text-xs text-muted-foreground">{testimonial.handle}</p> {/* Smaller handle */}
                          </div>
                        </div>
                        <p className="text-sm text-foreground/90">"{testimonial.text}"</p> {/* Smaller text */}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex" />
          </Carousel>
        </section>
      );
    }
    ```

5.  **Contact Section:**
    Implement the contact form. Note: This example uses `console.log` for submission. You'll need to integrate an actual email sending service or backend API for a functional form.

    ```typescript
    // src/components/sections/contact-section.tsx
    "use client";

    import { useState, type FormEvent } from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Label } from '@/components/ui/label';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Button } from '@/components/ui/button';
    import { useToast } from "@/hooks/use-toast"; // Import useToast hook
    import { Send } from 'lucide-react';
    import type { ContactData } from '@/lib/portfolio-data'; // Import the type

    interface ContactSectionProps {
      data: ContactData;
    }

    export function ContactSection({ data }: ContactSectionProps) {
      const { title, cardTitle, description, formLabels, placeholders, buttonText, submittingText } = data;
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');
      const [isSubmitting, setIsSubmitting] = useState(false);
      const { toast } = useToast(); // Initialize useToast

      const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!name || !email || !message) {
          toast({
            title: "Validation Error",
            description: "Please fill in all fields.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }

        // --- Replace with your actual form submission logic ---
        console.log('Simulating form submission:', { name, email, message });
        // Example: Call an API route
        // try {
        //   const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message }),
        //   });
        //   if (!response.ok) throw new Error('Submission failed');
        //   toast({ title: "Message Sent!", description: "Thanks for reaching out." });
        //   setName(''); setEmail(''); setMessage('');
        // } catch (error) {
        //   console.error("Form submission error:", error);
        //   toast({ title: "Error", description: "Could not send message.", variant: "destructive" });
        // } finally {
        //   setIsSubmitting(false);
        // }
        // --- End of replacement section ---

        // Simulate API call delay for demo
        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });

        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitting(false);
      };

      return (
        <section id="contact" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
             {title}
          </h2>
          <Card className="mx-auto max-w-2xl shadow-lg bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-foreground">{cardTitle}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/90">{formLabels.name}</Label>
                  <Input
                    id="name"
                    placeholder={placeholders.name}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="bg-input/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/90">{formLabels.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={placeholders.email}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                     className="bg-input/80"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/90">{formLabels.message}</Label>
                  <Textarea
                    id="message"
                    placeholder={placeholders.message}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    disabled={isSubmitting}
                     className="bg-input/80"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? submittingText : buttonText}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      );
    }
    ```

6.  **Create `useToast` Hook:**
    ShadCN's `toast` component relies on a custom hook.

    ```typescript
    // src/hooks/use-toast.ts
    "use client"

    // Inspired by react-hot-toast library
    import * as React from "react"

    import type {
      ToastActionElement,
      ToastProps,
    } from "@/components/ui/toast"

    const TOAST_LIMIT = 1
    const TOAST_REMOVE_DELAY = 1000000 // Effectively infinite until manually dismissed

    type ToasterToast = ToastProps & {
      id: string
      title?: React.ReactNode
      description?: React.ReactNode
      action?: ToastActionElement
    }

    const actionTypes = {
      ADD_TOAST: "ADD_TOAST",
      UPDATE_TOAST: "UPDATE_TOAST",
      DISMISS_TOAST: "DISMISS_TOAST",
      REMOVE_TOAST: "REMOVE_TOAST",
    } as const

    let count = 0

    function genId() {
      count = (count + 1) % Number.MAX_SAFE_INTEGER
      return count.toString()
    }

    type ActionType = typeof actionTypes

    type Action =
      | {
          type: ActionType["ADD_TOAST"]
          toast: ToasterToast
        }
      | {
          type: ActionType["UPDATE_TOAST"]
          toast: Partial<ToasterToast>
        }
      | {
          type: ActionType["DISMISS_TOAST"]
          toastId?: ToasterToast["id"]
        }
      | {
          type: ActionType["REMOVE_TOAST"]
          toastId?: ToasterToast["id"]
        }

    interface State {
      toasts: ToasterToast[]
    }

    const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

    const addToRemoveQueue = (toastId: string) => {
      if (toastTimeouts.has(toastId)) {
        return
      }

      const timeout = setTimeout(() => {
        toastTimeouts.delete(toastId)
        dispatch({
          type: "REMOVE_TOAST",
          toastId: toastId,
        })
      }, TOAST_REMOVE_DELAY)

      toastTimeouts.set(toastId, timeout)
    }

    export const reducer = (state: State, action: Action): State => {
      switch (action.type) {
        case "ADD_TOAST":
          return {
            ...state,
            toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
          }

        case "UPDATE_TOAST":
          return {
            ...state,
            toasts: state.toasts.map((t) =>
              t.id === action.toast.id ? { ...t, ...action.toast } : t
            ),
          }

        case "DISMISS_TOAST": {
          const { toastId } = action

          if (toastId) {
            addToRemoveQueue(toastId)
          } else {
            state.toasts.forEach((toast) => {
              addToRemoveQueue(toast.id)
            })
          }

          return {
            ...state,
            toasts: state.toasts.map((t) =>
              t.id === toastId || toastId === undefined
                ? {
                    ...t,
                    open: false,
                  }
                : t
            ),
          }
        }
        case "REMOVE_TOAST":
          if (action.toastId === undefined) {
            return {
              ...state,
              toasts: [],
            }
          }
          return {
            ...state,
            toasts: state.toasts.filter((t) => t.id !== action.toastId),
          }
      }
    }

    const listeners: Array<(state: State) => void> = []

    let memoryState: State = { toasts: [] }

    function dispatch(action: Action) {
      memoryState = reducer(memoryState, action)
      listeners.forEach((listener) => {
        listener(memoryState)
      })
    }

    type Toast = Omit<ToasterToast, "id">

    function toast({ ...props }: Toast) {
      const id = genId()

      const update = (props: ToasterToast) =>
        dispatch({
          type: "UPDATE_TOAST",
          toast: { ...props, id },
        })
      const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

      dispatch({
        type: "ADD_TOAST",
        toast: {
          ...props,
          id,
          open: true,
          onOpenChange: (open) => {
            if (!open) dismiss()
          },
        },
      })

      return {
        id: id,
        dismiss,
        update,
      }
    }

    function useToast() {
      const [state, setState] = React.useState<State>(memoryState)

      React.useEffect(() => {
        listeners.push(setState)
        return () => {
          const index = listeners.indexOf(setState)
          if (index > -1) {
            listeners.splice(index, 1)
          }
        }
      }, [state])

      return {
        ...state,
        toast,
        dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
      }
    }

    export { useToast, toast }
    ```

7. **Create `Toaster` Component:**
    This component renders the toasts.

    ```typescript
    // src/components/ui/toaster.tsx
    "use client"

    import { useToast } from "@/hooks/use-toast"
    import {
      Toast,
      ToastClose,
      ToastDescription,
      ToastProvider,
      ToastTitle,
      ToastViewport,
    } from "@/components/ui/toast"

    export function Toaster() {
      const { toasts } = useToast()

      return (
        <ToastProvider>
          {toasts.map(function ({ id, title, description, action, ...props }) {
            return (
              <Toast key={id} {...props}>
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>
                {action}
                <ToastClose />
              </Toast>
            )
          })}
          <ToastViewport />
        </ToastProvider>
      )
    }
    ```

## Step 6: Assemble the Page

Update `src/app/page.tsx` to import and render all the sections.

```typescript
// src/app/page.tsx
import { LanyardSection } from '@/components/sections/lanyard-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getPortfolioData } from '@/lib/portfolio-data'; // Import the data loading function

export default function Home() {
  const portfolioData = getPortfolioData(); // Load data once

  return (
    <div className="relative z-10 flex min-h-screen flex-col"> {/* Ensure content is above fixed background */}
      <Header data={portfolioData.header} />
      {/* Use container for consistent padding and centering */}
      <div className="container mx-auto flex-grow px-4 py-12 md:px-6 lg:py-16">
        <LanyardSection data={portfolioData.lanyard} />
        <ExperienceSection data={portfolioData.experience} />
        <ProjectsSection data={portfolioData.projects} />
        <TestimonialsSection data={portfolioData.testimonials} />
        <ContactSection data={portfolioData.contact} />
      </div>
      <Footer data={portfolioData.footer} />
    </div>
  );
}
```

## Step 7: Utilities

Ensure you have the `cn` utility function provided by ShadCN.

```typescript
// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Step 8: Run the Development Server

Start your Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or your specified port) in your browser. You should now see your MapleLeafDev portfolio!

## Further Enhancements

*   **Smooth Scrolling:** If you removed `scroll-smooth` from the `<html>` tag in `globals.css` due to conflicts, you can implement JavaScript-based smooth scrolling for the navigation links.
*   **Image Optimization:** Ensure all images used (especially placeholder images from `picsum.photos`) are optimized or replaced with actual project/profile images. Use the `next/image` component.
*   **Contact Form Backend:** Implement a proper backend (e.g., an API route using a service like Nodemailer, SendGrid, or a serverless function) to handle the contact form submissions.
*   **Accessibility (ARIA):** Review components and ensure appropriate ARIA attributes are used for better accessibility.
*   **Responsiveness:** Test thoroughly on different screen sizes and devices.
*   **Content Update:** Replace all placeholder text and images in `src/data/portfolio-data.json` with your actual information.

This guide provides a comprehensive structure. You can customize the styles, animations, and content further to personalize your portfolio. Happy coding! 🍁
