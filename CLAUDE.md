
# CLAUDE.md

Guidance for Claude Code when working in this repository. Read this before editing.

## Project

Personal portfolio for **Tea Pejovska** (frontend developer & CS student at FINKI).
Single-page marketing site: nav, hero, projects, skills, education, footer.
Aesthetic: "Neutral Professional Precision" — high-contrast slate/navy, generous
whitespace, tonal layers instead of heavy shadows.

## Commands

```bash
npm run dev     # local dev server → http://localhost:3000
npm run build   # production build (run before considering a task done)
npm run lint    # ESLint
```

## Stack

- Next.js 14, App Router, `src/` directory
- React 18, TypeScript (strict)
- Tailwind CSS (custom theme — see below), no component libraries
- Fonts: Epilogue (via `next/font/google`), Material Symbols Outlined (via `<link>` in layout)
- Import alias: `@/*` → `src/*`

## Structure

```
src/
  app/
    layout.tsx      # html/body, fonts, Material Symbols link, globals
    page.tsx        # composes the sections in order
    globals.css     # tailwind directives + custom utilities
  components/        # one file per section, PascalCase
    Reveal.tsx       # CLIENT component: scroll-triggered fade-in wrapper
    MountReveal.tsx  # CLIENT component: mount-triggered fade-in wrapper (above the fold)
    Navbar.tsx  Hero.tsx  Projects.tsx  Skills.tsx  Education.tsx  Footer.tsx
  data/
    content.ts       # projects, skills, coursework arrays
```

## Design system — SOURCE OF TRUTH is `tailwind.config.ts`

Always use these semantic tokens as Tailwind classes. Never hardcode hex values
in JSX. If a needed token is missing, add it to `tailwind.config.ts`, don't inline it.

**Important:** `DESIGN.md` prose says primary is `#1e293b`, but the real token is
`primary: #091426` (deep navy) and `primary-container: #1e293b`. The config wins.

Key color tokens (name → hex):
- `primary #091426`, `on-primary #ffffff`, `primary-container #1e293b`, `on-primary-container #8590a6`
- `secondary #505f76`, `secondary-container #d0e1fb`, `on-secondary-container #54647a`
- `tertiary #061525`, `tertiary-container #1b2a3b`, `on-tertiary-container #8291a6`
- `background`/`surface #f7f9fb`, `on-background`/`on-surface #191c1e`
- `surface-container-lowest #ffffff`, `surface-container-low #f2f4f6`, `surface-container #eceef0`
- `on-surface-variant #45474c`, `outline #75777d`, `outline-variant #c5c6cd`
- `error #ba1a1a`

### Typography — always pair a `font-*` and a `text-*` class

Every text element uses BOTH the family utility and the size utility, e.g.
`font-headline-lg text-headline-lg`. All families resolve to Epilogue; the
`text-*` token carries size + line-height + weight + tracking. Keep this pairing.

Scale: `headline-xl` (40) · `headline-lg` (32) · `headline-lg-mobile` (28) ·
`headline-md` (24) · `body-lg` (18) · `body-md` (16) · `body-sm` (14) ·
`label-md` (14, semibold) · `label-sm` (12, semibold, tracked).

Responsive headline pattern (hero): mobile first, desktop override:
`font-headline-lg-mobile md:font-headline-xl text-headline-lg-mobile md:text-headline-xl`.

### Spacing tokens (custom)

`section-gap 120px` · `margin-mobile 20px` · `margin-desktop 80px` · `gutter 24px`
· `margin 32px` · plus `xs/sm/md/lg/xl`. Standard section shell:
`py-section-gap px-margin-mobile md:px-margin-desktop`. Content wrapper:
`max-w-[1280px] mx-auto`. Grid gap: `gap-gutter`.

### Radius

`rounded-lg` (0.5rem, buttons/inputs/chips) · `rounded-card` (1.5rem, cards/panels)
· `rounded-md` (small tags) · `rounded-full` (pills/dots).

### Custom CSS utilities (defined in `globals.css`, not Tailwind)

- `ambient-shadow` — the soft diffused card shadow (use instead of Tailwind `shadow-*`)
- `ambient-shadow-hover` — lift + deepen on hover
- `fade-in-up` / `.visible` — scroll reveal, driven by `<Reveal>`
- `glass-panel` — frosted panel (available, currently unused)

Depth rule: prefer tonal background shifts + `ambient-shadow`. Avoid heavy Tailwind shadows.

## Conventions

- **Server components by default.** Only `Reveal.tsx`/`MountReveal.tsx` (and anything
  using hooks/`IntersectionObserver`/events) gets `"use client"`. Don't mark sections
  as client unless they need it.
- **Scroll reveals:** wrap a block below the fold in `<Reveal>`; pass `delay` (ms) for
  stagger, matching the original `transition-delay` values (0 / 100 / 200). Triggers
  via `IntersectionObserver` when scrolled into view.
- **Mount reveals:** for above-the-fold content (e.g. Hero), wrap in `<MountReveal>`
  instead — same `fade-in-up` styling, but triggers on mount rather than scroll, since
  an `IntersectionObserver` firing immediately on initial viewport content reads as a
  flash, not a reveal. Stagger with `delay` the same way.
- Both share the `fade-in-up`/`.visible` CSS in `globals.css`, which already respects
  `prefers-reduced-motion`.
- **Icons:** `<span className="material-symbols-outlined">icon_name</span>`.
- **Project covers:** no photos — each project card renders a solid token-colored
  cover (`coverBg`/`coverFg` in `content.ts`) with a centered motif (`graphic_eq`
  icon or an "Aa" typography mark), not a `next/image`.
- **Content** (project cards, skill chips, coursework) lives in `src/data/content.ts`,
  not hardcoded in JSX. Add/edit items there.
- Keep everything responsive with the existing `md:` breakpoints; single column on mobile.

## Don't

- Don't reintroduce the Tailwind CDN `<script>` or an inline `tailwind.config` — the
  theme lives in `tailwind.config.ts`.
- Don't hardcode hex colors or px font sizes in components — use tokens.
- Don't add UI libraries, CSS-in-JS, or extra animation deps without asking.
- The hero is intentionally text-only — no portrait or imagery there.