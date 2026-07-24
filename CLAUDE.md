# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (eslint-config-next core-web-vitals)
```

There is no test suite configured in this repo.

Requires a `.env.local` with EmailJS credentials for the contact form to work:
`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

## Architecture

Single-page Next.js (App Router) portfolio site. `app/page.js` is the entire site: it stacks section
components in order (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Qualifications`, `Contact`, `Footer`).
There is no routing beyond this — new content means adding a new section component and inserting it into
that stack, plus a matching in-page anchor link (`#section-id`) in `Navbar`'s `navLinks`.

- `components/sections/` — one component per homepage section. Each is self-contained with its own
  content data (arrays of projects/skills/etc. are defined inline at the top of the file, not fetched).
- `components/layout/` — `Navbar`, `Footer`, `SmoothScroll` (Lenis + GSAP ScrollTrigger wiring), `CustomCursor`.
- `components/ui/` — small reusable primitives: `Magnetic` (GSAP magnetic-hover wrapper for buttons/links)
  and `GlobalGlow` (cursor-following radial glow + click particle effects, mounted once in `app/layout.js`).

All animated/interactive components are client components (`"use client"`) using `framer-motion` for
in-view reveal transitions and `gsap` for cursor/scroll-driven effects. Smooth scrolling comes from
`Lenis`, initialized in `SmoothScroll` and ticked through `gsap.ticker`; `ScrollTrigger` is kept in sync
via `lenis.on("scroll", ScrollTrigger.update)`.

### Theming

Dark/light theme is a runtime toggle (`Navbar`'s `isDark` state sets `data-theme` on `<html>`), not
Tailwind's `dark:` variant. Colors are CSS custom properties defined per-theme in `app/globals.css`
(`:root`/`[data-theme="dark"]` vs `[data-theme="light"]`) and consumed either via `var(--...)` inline
styles or hardcoded hex Tailwind classes (e.g. `bg-[#0F1115]`, `text-[#C9B59C]`). Light-theme overrides
for hardcoded-hex elements live as `[data-theme="light"] ...` overrides at the bottom of `globals.css` —
when adding new hardcoded colors to a section, add a corresponding light-theme override there rather than
introducing a new CSS variable pattern.

### Conventions

- Path alias `@/*` maps to the repo root (see `jsconfig.json`).
- No TypeScript — plain `.js` files throughout, including components.
- Section components hardcode their own copy/data arrays (e.g. `projects` in `Projects.js`, socials in
  `Contact.js`) rather than pulling from a shared content file or CMS.
