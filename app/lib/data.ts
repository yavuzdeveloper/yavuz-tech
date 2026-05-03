import { getExperienceYears } from "./utils";

export const PERSONAL = {
  name: "Yavuz Tokus",
  role: "Senior Frontend & Fullstack Engineer",
  tagline: "I build fast, precise, and elegant web experiences.",
  location: "Remote — Available Worldwide",
  email: "yavuztokus2010@gmail.com",
  github: "https://github.com/yavuzdeveloper",
  linkedin: "https://www.linkedin.com/in/yavuztokus/",
  yearsExp: getExperienceYears(),
  availability: "Open to opportunities",
};

export const SKILLS = {
  frontend: [
    "React / Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux / Zustand",
    "TanStack Query",
    "Framer Motion",
    "GraphQL (Apollo)",
  ],
  backend: [
    "Node.js / Express",
    "Python / Flask",
    "PostgreSQL / MongoDB",
    "Prisma ORM",
    "REST / WebSockets",
  ],
  devops: [
    "Docker",
    "AWS (Lambda, Cognito, S3, Amplify)",
    "Vercel / Netlify",
    "GitHub Actions (CI/CD)",
    "Serverless Architecture",
  ],
  tools: [
    "Git / GitHub / Bitbucket",
    "Jest / Vitest / React Testing Library",
    "Playwright / Cypress",
    "ESLint / Prettier / Husky",
    "Jira / Confluence / Slack / Microsoft Teams",
    "Figma",
  ],
  ai: [
    "Vercel AI SDK / TanStack AI",
    "Hugging Face / Transformers",
    "GenAI Tooling",
    "Cursor AI / GitHub Copilot / Windsurf",
  ],
};
export const EXPERIENCE = [
  {
    company: "Acme Corp",
    role: "Senior Frontend Engineer",
    period: "2022 — Present",
    location: "Remote",
    description:
      "Led frontend architecture for a real-time analytics platform serving 50k+ daily users. Reduced bundle size by 40% and improved Core Web Vitals scores to 95+.",
    stack: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
    highlight: "40% bundle reduction",
  },
  {
    company: "StartupXYZ",
    role: "Fullstack Engineer",
    period: "2020 — 2022",
    location: "San Francisco, CA",
    description:
      "Built and shipped 3 major product features end-to-end. Architected a microservices backend handling 1M+ daily requests with 99.9% uptime.",
    stack: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"],
    highlight: "1M+ daily requests",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2018 — 2020",
    location: "New York, NY",
    description:
      "Delivered 20+ client projects ranging from e-commerce to SaaS dashboards. Established component library used across all agency projects.",
    stack: ["React", "JavaScript", "SCSS", "REST APIs"],
    highlight: "20+ projects shipped",
  },
];

export const PROJECTS = [
  {
    title: "DataFlow Dashboard",
    description:
      "Real-time analytics platform with live charts, custom alerts, and memory-optimized Apollo cache management. Built for 24/7 uptime.",
    stack: ["Next.js", "TypeScript", "Apollo", "Victory.js", "WebSockets"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: "2024",
  },
  {
    title: "CollabSpace",
    description:
      "Multiplayer workspace with operational transforms for conflict-free collaborative editing. Sub-50ms latency via WebSocket architecture.",
    stack: ["React", "Node.js", "Socket.io", "Redis", "PostgreSQL"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    year: "2023",
  },
  {
    title: "EcomKit",
    description:
      "Headless e-commerce framework with pluggable payment providers, inventory sync, and a design system of 60+ components.",
    stack: ["Next.js", "Stripe", "Tailwind", "Prisma", "tRPC"],
    github: "https://github.com",
    live: null,
    featured: true,
    year: "2023",
  },
  {
    title: "DevMetrics CLI",
    description:
      "Terminal tool that aggregates PR review time, deployment frequency, and DORA metrics from GitHub and Jira APIs.",
    stack: ["Node.js", "TypeScript", "GitHub API", "Ink"],
    github: "https://github.com",
    live: null,
    featured: false,
    year: "2022",
  },
];

export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
