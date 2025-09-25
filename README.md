# Sportingbet ONE – Entain Take-Home Assessment

A modern, production-grade Single Page App (SPA) built with Next.js (App Router), TypeScript, Tailwind CSS v4, and an accessible, responsive UI. This README details architecture, technical decisions, performance strategies, SEO, deployment, and how to run locally.

Deployed app (bonus):https://entain.vercel.app/ or https://entain-2idzspotj-franciscogpponces-projects.vercel.app

Note on fidelity: I didn’t make it 100% pixel-perfect because the Figma prototype lacked some specs (exact font family/weights, spacing tokens, a few responsive breakpoints). Also, the font differs from the one mentioned by email. Within limited time, I aimed to deliver a very close, responsive, and accessible experience while prioritizing engineering quality.

## Why this solution (and why I’m the right hire)
- Senior-level Next.js architecture with App Router conventions: layouts, error/loading boundaries, not-found, metadata, robots/sitemap, and OG image.
- Strong TypeScript rigor (strict mode, safer compiler flags, type-only imports) to prevent whole classes of bugs.
- Performance-first: React Compiler enabled, code splitting via dynamic imports for below-the-fold sections, minimized client components, iframe lazy-activation, and optimized image loading.
- Accessibility: semantic landmarks, ARIA attributes, focus management, and keyboard traps for modals.
- Production readiness: Zod-validated envs, ESLint + Prettier + Tailwind plugin, and Vercel deployment with modern image formats.
- Pragmatic delivery: where specs were missing, I made sensible choices to ship a polished app quickly, with clear tradeoffs documented.

## Tech stack
- Framework: Next.js 15 (App Router, RSC), React 19
- Language: TypeScript (strict), modern compiler flags
- Styling: Tailwind CSS v4, Tailwind plugins, CSS variables theme
- UI: Accessible custom components, FontAwesome icons, Lucide for misc icons
- Images & Media: next/image, WebP/AVIF, YouTube iframe loaded on user intent
- Animations: Framer Motion for subtle transitions
- Tooling: ESLint (Next + TS rules), Prettier + prettier-plugin-tailwindcss
- Validation: Zod-based env parsing (`lib/env.ts`)
- Hosting: Vercel (prod), React Compiler enabled (experimental)

## Architecture and folder structure
- `app/`
  - `layout.tsx`: global shell, font, metadata/OG/Twitter, viewport
  - `page.tsx`: home composition (Header, QuickLinks, sections)
  - `loading.tsx`, `error.tsx`, `not-found.tsx`: route UX
  - `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`: SEO
- `components/`
  - `header.tsx`, `bottom-nav.tsx`, `footer.tsx`
  - `quick-links-nav.tsx`: sticky/affix section shortcuts (desktop + mobile)
  - Feature blocks: `hero.tsx`, `featured.tsx`, `benefits.tsx`, `promotions.tsx`, `about.tsx`, `faq.tsx`, `my-manager*.tsx`
  - `manager-modal-provider.tsx`: accessible modal provider
  - `ui/`: small primitives (button, card)
- `lib/`
  - `utils.ts`: `cn()`
  - `env.ts`: server/client env validation with Zod

### Key design patterns and decisions
- Minimize “use client”: Server Components by default; client only where browser APIs or interactivity is necessary (FAQ, carousel, modal provider).
- Dynamic imports for below-the-fold sections in `app/page.tsx` to reduce initial TTI.
- React Compiler: reduces need for manual `memo`/`useCallback` optimizations (kept code simple; tested flows).
- Sticky quick-links: implemented an affix logic that measures absolute offset and inserts a spacer to avoid layout jumps. This favors correctness across browsers.
- Modal accessibility: proper aria-modal, labelled title, focus trap, Escape handling, and focus restoration.

## Performance strategies
- Code splitting via `next/dynamic` with simple fallbacks
- Lazy image loading, modern formats, no oversized assets in critical path
- Defer YouTube iframe load until user interaction
- Reduced client bundle by avoiding unnecessary hooks/client components
- Tailwind utility-first approach for minimal CSS

## SEO
- Metadata in `app/layout.tsx` with OG + Twitter cards
- `app/robots.ts` and `app/sitemap.ts` for crawler friendliness
- `app/opengraph-image.tsx` to render a branded OG image at build/request time
- Semantic HTML, accessible landmarks, and descriptive alt attributes

## Running locally
Prereqs: Node 18+ and npm

1) Install dependencies
```bash
npm i
```

2) Run dev server
```bash
npm run dev
```
Visit http://localhost:3000

3) Lint & format
```bash
npm run lint
npm run lint:fix
npm run format
```

4) Typecheck
```bash
npm run typecheck
```

Optional: Configure env
- Create `.env.local` if needed (e.g., `NEXT_PUBLIC_APP_URL=http://localhost:3000`).
- Env shape is validated via Zod in `lib/env.ts`.

## Deploy
Already deployed to Vercel (bonus):
- https://entain.vercel.app/
or
- https://entain-2idzspotj-franciscogpponces-projects.vercel.app

To redeploy from CLI:
```bash
# Pull project & env settings (once)
npx vercel pull --yes --environment=production
# Deploy prod
npx vercel deploy --prod --yes
```

## Differentiators (what sets this project apart)
- React Compiler enabled with Babel plugin to explore state-of-the-art React optimizations
- Robust A11y: modal focus management, keyboard navigation, aria roles, semantics
- Production-grade SEO: robots, sitemap, OG image route, structured metadata
- Sticky nav with resilient affix logic that works across browsers and nested layouts
- Typed environment config with Zod, preventing misconfiguration in CI/CD
- Clean, strict TypeScript settings (noUncheckedIndexedAccess, exactOptionalPropertyTypes, type-only imports)
- Thoughtful performance: dynamic imports, lazy media, minimized client code, and Tailwind v4
- Bonus deployment & docs beyond the brief
- Bonus header, footer and bottom nav for mobile (the extra mile)

## Known tradeoffs & constraints
- Pixel-perfect differences vs Figma: Some specs (font, exact spacing) weren’t provided; I chose a close visual match and kept code quality high within limited time.
- Fonts: The font differs from the email’s instruction; I used Open Sans via `next/font` for reliable loading and good readability.
- Experimental features: React Compiler is enabled; thoroughly tested key flows but can be toggled off in `next.config.ts` if needed.

---
If this were to continue, I’d add: e2e tests with Playwright, visual tests with Chromatic/Storybook, Lighthouse budgets in CI, and a small design token layer for spacing/typography consistency.
