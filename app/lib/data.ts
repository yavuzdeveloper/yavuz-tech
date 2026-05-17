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
    "Redux / Zustand / Context API",
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
    "Vercel / Netlify / Redhat OpenShift",
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
    company: "Adecco UK",
    role: "Senior Frontend Developer",
    period: "Aug 2025 — Present",
    location: "London, UK",
    description:
      "Leading development of a micro-frontend (MFE) platform for a major UK energy company. Building real-time dashboards processing live data streams while driving architecture decisions, performance, and cross-team collaboration.",
    stack: [
      "React",
      "TypeScript",
      "Apollo Client",
      "GraphQL",
      "Micro Frontends",
      "Webpack",
      "Jest",
      "Cypress",
    ],
    highlight: "Leading MFE project for major energy firm",
  },
  {
    company: "Point Sigma",
    role: "Frontend Developer",
    period: "Sep 2023 — May 2025",
    location: "London, UK",
    description:
      "Led development of scalable React architecture by migrating Salesforce Aura/LWC components into reusable modular structures. Built performant applications using hooks and TypeScript with strong type safety. Managed global state via Context API and integrated AWS services (Cognito, Amplify, Lambda, API Gateway) for authentication and backend communication. Implemented RESTful APIs and contributed to AI-driven analytics features using LLMs. Collaborated in Agile teams and mentored junior developers.",
    stack: [
      "React",
      "TypeScript",
      "AWS",
      "Context API",
      "Ant Design",
      "Chart.js",
    ],
    highlight: "AI-powered analytics & scalable architecture",
  },

  {
    company: "Boutique Rugs",
    role: "Software Development Specialist",
    period: "Feb 2022 — Sep 2023",
    location: "USA (Remote)",
    description:
      "Developed large-scale product management interfaces handling thousands of items using React and Next.js. Managed complex state with Redux Toolkit and integrated GraphQL (Apollo Client) and REST APIs. Built performant and responsive admin dashboards and contributed to improved UX and maintainability.",
    stack: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "GraphQL",
      "Apollo",
      "PHP",
      "Node.js",
    ],
    highlight: "Scalable product systems (100k+ items)",
  },

  {
    company: "T-Con",
    role: "Frontend Developer",
    period: "Dec 2020 — Feb 2022",
    location: "London, UK",
    description:
      "Modernized legacy frontend architecture by migrating class-based components to hooks-based React with TypeScript. Built reusable UI components and integrated RESTful APIs for CRUD operations. Focused on maintainability, clean architecture, and scalable UI design.",
    stack: ["React", "TypeScript", "Styled Components"],
    highlight: "Migration to modern React architecture",
  },

  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jul 2018 — Dec 2020",
    location: "Turkey",
    description:
      "Delivered 10+ full-stack web applications using PHP, Laravel, and MySQL. Built dynamic, responsive interfaces and integrated third-party APIs. Focused on performance optimization, cross-browser compatibility, and long-term maintainability.",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript"],
    highlight: "10+ production projects delivered",
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

// export const PROJECTS2 = [
//   {
//     title: "Real-time Energy Analytics Dashboard",
//     description:
//       "Designed and developed a real-time analytics dashboard processing live data streams for an energy sector client. Focused on performance, scalability, and modular micro-frontend architecture.",
//     stack: [
//       "React",
//       "TypeScript",
//       "GraphQL",
//       "Apollo Client",
//       "WebSockets",
//       "Micro Frontends",
//     ],
//     github: null,
//     live: null,
//     featured: true,
//     year: "2025",
//   },
//   {
//     title: "Product Management Platform",
//     description:
//       "Built a scalable product management system handling 100k+ items with advanced filtering, real-time updates, and optimized state management using Redux Toolkit and GraphQL.",
//     stack: ["React", "Next.js", "Redux Toolkit", "GraphQL", "Apollo Client"],
//     github: null,
//     live: null,
//     featured: true,
//     year: "2023",
//   },
//   {
//     title: "Real-time Collaboration Engine",
//     description:
//       "Developed a low-latency collaborative editing system using WebSockets, enabling real-time multi-user interactions with conflict resolution and efficient state synchronization.",
//     stack: ["React", "Node.js", "WebSockets", "Redis"],
//     github: "https://github.com/your-username/realtime-collab",
//     live: "https://your-demo-link.com",
//     featured: false,
//     year: "2024",
//   },
// ];

export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
