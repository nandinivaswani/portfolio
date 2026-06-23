# Nandini Vaswani — Portfolio

A premium, production-ready portfolio for a **Senior Frontend Engineer specializing in streaming & media platforms**. Built to position deep, hard-to-fake differentiators (custom HLS video players, GraphQL data layers, white-label OTT architecture) front-and-center for recruiters, hiring managers, and technical interviewers.

🔗 **Live:** https://nandinivaswani.dev · **Resume:** `/resume`

---

## ✨ Highlights

- **Strategy-driven content** — leads with streaming/video specialization, not generic "React dev" framing.
- **Premium developer-cinematic UI** — near-black surfaces, electric violet/blue accent, glass cards, mesh glows, subtle grain.
- **Motion everywhere (tastefully)** — scroll reveals, staggered entrances, animated skill bars, count-up metrics, micro-interactions. Fully respects `prefers-reduced-motion`.
- **Light & dark mode** — system-aware, no flash, instant toggle.
- **ATS-friendly resume** at `/resume` — real semantic text, print-to-PDF optimized (`@page` A4 styles), one-click download.
- **SEO + sharing** — metadata, JSON-LD `Person` schema, dynamic OpenGraph image, `sitemap.xml`, `robots.txt`.
- **Accessible** — semantic landmarks, focus-visible rings, aria labels, keyboard-navigable, reduced-motion support.
- **Fast** — fully static prerender, optimized fonts via `next/font`, zero heavy media, CSS-only visual mocks.

## 🧱 Tech Stack

| Area | Choice |
|------|--------|
| Framework | **Next.js 16** (App Router, Turbopack) |
| Language | **TypeScript** / React 19 |
| Styling | **Tailwind CSS v4** (CSS-first `@theme` tokens) |
| Animation | **Motion** (`motion/react`) |
| Icons | **Lucide** (+ local SVGs for brand marks) |
| Theming | **next-themes** |

## 📁 Structure

```
app/
  layout.tsx            # fonts, SEO metadata, theme provider
  page.tsx              # homepage composition + JSON-LD
  resume/page.tsx       # ATS resume route (print-optimized)
  opengraph-image.tsx   # dynamic OG image
  sitemap.ts / robots.ts
  globals.css           # design tokens, utilities, print + reduced-motion
components/
  nav.tsx  footer.tsx  scroll-progress.tsx  theme-toggle.tsx
  project-visual.tsx    # CSS/SVG domain mockups (video player, code, card…)
  sections/             # hero, brands, about, projects, metrics,
                        # experience, skills, highlights, testimonials, contact
  resume/               # resume document + print/download actions
  ui/                   # primitives, reveal (motion), icon map, brand-icons
content/                # ← single source of truth (edit copy here)
  site.ts projects.ts experience.ts skills.ts highlights.ts resume.ts
lib/utils.ts            # cn() class helper
```

## ✏️ Editing content

All copy lives in `content/`. To update a project, role, skill, or stat, edit the
relevant file — no component changes needed. Update social links and contact
details in `content/site.ts`, and the production URL in `site.domain`.

## 🚀 Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## ☁️ Deploy

Optimized for **Vercel** (zero config). Push to a Git repo and import, or run
`vercel`. Set the canonical domain in `content/site.ts` (`site.domain`) so
metadata, sitemap, and OG image resolve correctly.

---

Designed & engineered as a personal portfolio. Content is grounded in real
production work across OTT/streaming platforms, SaaS, and high-traffic campaigns.
