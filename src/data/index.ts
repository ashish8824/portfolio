// ── Skills ─────────────────────────────────────────────────────────────────
export const skills = {
  "Backend Engineering": [
    "Node.js",
    "Express.js",
    "REST API Design",
    "JWT Authentication",
    "Role-Based Access Control",
    "Socket.IO",
  ],
  "Frontend & Web": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  Databases: ["MongoDB", "PostgreSQL", "Supabase"],
  "Languages & Core": [
    "JavaScript",
    "TypeScript",
    "SQL",
    "Python",
    "C / C++",
    "Java",
  ],
  "Java Ecosystem": [
    "Core Java",
    "Spring Framework",
    "Spring Boot",
    "Maven",
    "Hibernate",
    "JPA",
  ],
  "Tools & Platform": [
    "Git & GitHub",
    "Swagger / OpenAPI",
    "Azure",
    "AWS (EC2)",
    "Linux & Bash",
  ],
};

// ── Experience ──────────────────────────────────────────────────────────────
export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Junior Associate Engineer",
    company: "Celebal Technologies",
    location: "Jaipur, Rajasthan",
    period: "Jul 2023 – Oct 2023",
    points: [
      "Developed and maintained backend REST APIs using Node.js and Express with strong validation and error handling.",
      "Debugged backend failures by analyzing logs and improving service reliability and response times.",
      "Assisted in deployment and monitoring of backend services on Microsoft Azure.",
      "Built chatbot-based automation tools using Microsoft Bot Framework.",
    ],
  },
];

// ── Projects ────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  githubUrlBackend?: string; // optional second repo link
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: "PulseBloom – Behavioral Analytics Platform",
    description:
      "A full-stack behavioral analytics platform with mood tracking, habit building, AI-powered insights, subscription billing, challenges, community feed, and badge system. Features dual-token JWT auth, RTK Query caching, Razorpay payments, and a real-time notification system.",
    techStack: [
      "React 18",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT (Dual Token)",
      "Razorpay",
      "Recharts",
      "Swagger",
      "Vercel",
    ],
    githubUrl: "https://github.com/ashish8824/pulsebloom-frontend",
    githubUrlBackend: "https://github.com/ashish8824/pulsebloom-backend",
    liveUrl: "https://pulse-bloom-frontend.vercel.app",
  },
  {
    title: "Second Brain – AI-Powered Knowledge Management",
    description:
      "An AI-powered personal knowledge management platform that allows users to capture, organize, search, and intelligently query their saved information using semantic search and natural language AI.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Hugging Face API",
      "Semantic Search",
      "Swagger",
      "React.js",
      "Tailwind CSS",
      "AWS EC2",
    ],
    githubUrl: "https://github.com/ashish8824/second-brain-frontend",
    githubUrlBackend: "https://github.com/ashish8824/second--brain-",
    liveUrl: "http://16.171.12.184/",
  },
  {
    title: "Smart Appointment & Queue Management",
    description:
      "A real-time appointment booking and queue tracking system designed to reduce waiting times, improve staff efficiency, and provide live queue visibility for users.",
    techStack: ["MERN", "JWT", "Socket.IO", "Role-Based Access"],
    githubUrl: "https://github.com/ashish8824/appointment-system-backend",
  },
];

// ── Build Process ───────────────────────────────────────────────────────────
export const buildSteps = [
  {
    title: "Architecture",
    points: [
      "Modular and layered backend design",
      "Role-based access control",
      "Backend-first planning",
    ],
  },
  {
    title: "APIs",
    points: [
      "RESTful & predictable responses",
      "Validation and pagination",
      "Scalable API contracts",
    ],
  },
  {
    title: "Data",
    points: [
      "Schema design based on access patterns",
      "Indexes and soft deletes",
      "Growth-aware modeling",
    ],
  },
];

// ── Notes ───────────────────────────────────────────────────────────────────
export type Note = {
  title: string;
  href: string;
};

export const notes: Note[] = [
  {
    title: "Why I prefer backend-first development for scalable systems",
    href: "https://dev.to/",
  },
  {
    title: "Mistakes I made while designing APIs and what I learned",
    href: "https://dev.to/",
  },
  {
    title: "What building real-time systems taught me about state",
    href: "https://dev.to/",
  },
  {
    title: "Lessons from designing multi-tenant applications",
    href: "https://dev.to/",
  },
];
