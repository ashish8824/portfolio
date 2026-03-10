# Ashish Anand — Developer Portfolio

> Personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.  
> Live at → [ashish-anand.vercel.app](https://ashish-anand.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=flat-square&logo=vercel)

---

## ✨ Features

- **Dark terminal aesthetic** — JetBrains Mono + Sora fonts, green accent (`#7fff6e`), dot-grid background
- **Typewriter hero** — animated role cycling with blinking cursor
- **Active nav highlighting** — `IntersectionObserver`-based, updates as you scroll
- **Responsive hamburger menu** — animated mobile nav with smooth slide-down
- **Skill tag pills** — color-coded by category (green for backend, cyan for frontend/languages)
- **Dual GitHub links** — projects with separate frontend/backend repos show two buttons
- **Contact form** — powered by [FormSubmit](https://formsubmit.co), redirects to a dedicated success page
- **SEO ready** — Open Graph tags, Twitter card, `robots.ts`, `sitemap.ts`
- **Custom favicon** — terminal `~/` monogram in accent green, multi-resolution `.ico`
- **Scroll-to-top** — footer button with keyboard accessibility
- **CSS variables** — full design token system, easy to retheme

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── favicon.ico          # Custom ~/  monogram favicon (multi-resolution)
│   ├── favicon-256.png      # PNG version for Apple touch icon / OG image
│   └── cv.pdf               # Downloadable CV (add your own)
│
├── src/
│   ├── app/
│   │   ├── globals.css           # Design tokens, fonts, animations, utilities
│   │   ├── layout.tsx            # Root layout + full SEO metadata
│   │   ├── page.tsx              # Home page — assembles all sections
│   │   ├── robots.ts             # SEO: robots.txt
│   │   ├── sitemap.ts            # SEO: sitemap.xml
│   │   └── contact-success/
│   │       └── page.tsx          # Dedicated form success page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx        # Fixed nav, hamburger, active section detection
│   │   └── sections/
│   │       ├── Hero.tsx          # Typewriter, CTA buttons, scroll indicator
│   │       ├── BuildProcess.tsx  # 3-card methodology section
│   │       ├── Skills.tsx        # Tag pill grid by category
│   │       ├── Experience.tsx    # Timeline with accent bar
│   │       ├── Projects.tsx      # Cards with dual GitHub + live demo links
│   │       ├── Notes.tsx         # Developer writing links
│   │       ├── Contact.tsx       # FormSubmit form + social links
│   │       └── Footer.tsx        # Copyright + scroll-to-top
│   │
│   └── data/
│       └── index.ts             # All content: skills, experience, projects, notes
│
├── tsconfig.json                 # @/* path alias
├── postcss.config.mjs
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/ashish8824/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## 🛠️ Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| Framework    | Next.js 16 (App Router, Turbopack)   |
| Language     | TypeScript 5                         |
| Styling      | Tailwind CSS v4 + CSS Variables      |
| Fonts        | JetBrains Mono + Sora (Google Fonts) |
| Form backend | FormSubmit                           |
| Deployment   | Vercel                               |

---

## 📐 Design System

All design tokens are defined as CSS variables in `globals.css`:

```css
--bg: #0a0a0f /* page background        */ --bg-card: #111118
  /* card background         */ --bg-hover: #16161f
  /* input / hover bg        */ --border: #1e1e2e /* default border          */
  --border-hi: #2e2e4e /* highlighted border      */ --accent: #7fff6e
  /* terminal green          */ --accent2: #5ce8ff /* cyan                    */
  --text: #e8e8f0 /* primary text            */ --muted: #6b6b80
  /* secondary text          */ --muted-hi: #9999b0
  /* slightly brighter muted */;
```

### Utility Classes

| Class            | Description                                 |
| ---------------- | ------------------------------------------- |
| `.card`          | Dark card with border + hover lift          |
| `.tag`           | Green monospace skill pill                  |
| `.tag-cyan`      | Cyan variant of `.tag`                      |
| `.mono-label`    | Uppercase green section label               |
| `.gradient-text` | Green → cyan gradient text                  |
| `.accent-bar`    | Short green rule above section headings     |
| `.section-wrap`  | Max-width container with responsive padding |
| `.dot-grid`      | Subtle dot pattern background               |
| `.cursor-blink`  | Animated terminal cursor                    |

---

## ✏️ Customisation

All content lives in **one file**: `src/data/index.ts`.

### Update your skills

```ts
export const skills = {
  "Backend Engineering": ["Node.js", "Express.js", ...],
  "Java Ecosystem": ["Core Java", "Spring Boot", ...],
  // add more categories as needed
};
```

### Add a project

```ts
export const projects: Project[] = [
  {
    title: "My New Project",
    description: "What it does and why it matters.",
    techStack: ["Node.js", "React", "MongoDB"],
    githubUrl: "https://github.com/you/frontend-repo",
    githubUrlBackend: "https://github.com/you/backend-repo", // optional
    liveUrl: "https://your-project.vercel.app", // optional
  },
];
```

> When `githubUrlBackend` is provided, the project card automatically shows two GitHub buttons — **Frontend** and **Backend**.

### Update your experience

```ts
export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Acme Corp",
    location: "Remote",
    period: "Jan 2024 – Present",
    points: ["Built X", "Improved Y by Z%"],
  },
];
```

---

## 📬 Contact Form

The form uses [FormSubmit](https://formsubmit.co) — no backend required.

To change the recipient email, update the `action` in `Contact.tsx`:

```tsx
<form action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
```

On first submission FormSubmit will send you a confirmation email to activate the endpoint.

The form redirects to `/contact-success` on submit — a dedicated page at `src/app/contact-success/page.tsx`.

---

## 🔍 SEO

- **Open Graph** + **Twitter Card** metadata in `layout.tsx`
- `robots.ts` → auto-generates `/robots.txt`
- `sitemap.ts` → auto-generates `/sitemap.xml`
- Custom favicon registered as `icon` + `apple-touch-icon` in metadata

To update the site URL after deployment, find and replace `ashish-anand.vercel.app` in:

- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/components/sections/Contact.tsx` (the `_next` hidden input)

---

## 📦 Deployment

This project is deployed on [Vercel](https://vercel.com).

```bash
# One-time setup
npm i -g vercel
vercel login

# Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments on every push to `main`.

---

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.

---

_Built by [Ashish Anand](https://ashish-anand.vercel.app) · March 2026_
