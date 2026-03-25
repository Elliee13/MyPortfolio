# BC Apparel Codebase Portfolio Overview

## Project Snapshot

**Project name:** `bcapparel`

**Project type:** Frontend-only marketing and product showcase website

**Primary goal:** Present BC Apparel's custom apparel and promotional product offerings through a polished, responsive single-page application with strong visual design, motion, and performance-conscious media handling.

**Current implementation style:** Static React SPA with curated product data, external catalog links, and a client-side contact form integration.

## What This Project Does

This codebase powers a branded promotional-products storefront experience for BC Apparel. It is not an e-commerce checkout app. Instead, it is a curated discovery and lead-generation site designed to:

- introduce the company and its value proposition,
- showcase featured products and product categories,
- link visitors to external supplier/catalog pages,
- highlight downloadable/viewable brochures and catalogs,
- provide a direct contact path for inquiries,
- reinforce branding with strong editorial design and motion.

The application uses a high-end marketing-site approach rather than a dashboard or CRUD application approach. The emphasis is on brand presentation, animation, responsiveness, SEO, and image delivery.

## Core Tech Stack

- **React 19** for the UI layer
- **TypeScript 5.9** for type safety
- **Vite 7** for development and production builds
- **React Router 7** for client-side routing
- **Tailwind CSS 4** for utility-first styling
- **GSAP + ScrollTrigger** for scroll-based animation
- **Framer Motion** for route transitions
- **Sharp** for build-time image optimization
- **Web3Forms** for contact form delivery

## High-Level Architecture

This is a client-rendered SPA with lazy-loaded route modules and a shared site shell.

Architecture breakdown:

1. `src/main.tsx`
   Boots the React app and wraps it in `BrowserRouter`.

2. `src/App.tsx`
   Defines route mapping and lazy-loads page modules using `React.lazy` and `Suspense`.

3. `src/components/Layout.tsx`
   Provides the global shell:
   - sticky auto-hiding header,
   - desktop and mobile navigation,
   - page transition wrapper,
   - footer with company and contact details.

4. `src/pages/*`
   Route-level page modules:
   - `HomePage`
   - `FeaturedPage`
   - `AboutPage`
   - `ProductsPage`
   - `BrochuresCatalogsPage`
   - `ContactPage`
   - `NotFoundPage`

5. `src/motion/*`
   Reusable animation system built around GSAP and motion helpers.

6. `src/data/*`
   Curated in-repo content data for products and featured categories.

7. `scripts/*`
   Build-time asset tooling and deployment preparation scripts.

## Route Map

### `/`
Home landing page. This is the most feature-dense page and acts as the primary marketing experience.

Key sections:

- hero section with optimized responsive imagery,
- vendor logo strip,
- services overview,
- featured picks carousel/tab system,
- category browse cards,
- brochure/catalog carousel,
- "How It Works" section,
- trusted brand marquee.

Important implementation details:

- hero animation uses a custom intro timeline,
- scroll reveals are GSAP-driven,
- structured data is injected for featured picks,
- responsive images are served through `picture` elements with AVIF/WebP fallbacks,
- section-level interactions are designed for both desktop and mobile.

### `/featured`
Curated gallery page for featured products, grouped by category.

Key behaviors:

- anchor links for fast category navigation,
- horizontal product scrollers per category,
- drag-to-scroll pointer support,
- wheel-to-horizontal-scroll behavior,
- runtime SEO meta tag updates for the featured route,
- JSON-LD `ItemList` structured data output.

### `/about`
Brand story and positioning page with a more narrative presentation.

Key behaviors:

- GSAP hero intro animation,
- scroll progress line,
- paragraph reveal animations,
- stat card stagger reveals,
- mission section reveal,
- accessibility-aware reduced-motion handling.

### `/products`
Curated product-category overview page.

Key behaviors:

- category cards link outward to external catalog search pages,
- grid adapts between 3-column and 2-column arrangements,
- media is optimized and responsive,
- cards use reveal-on-scroll motion.

### `/brochures-catalogs`
Brochure/catalog browsing page focused on brand catalogs and seasonal materials.

Key behaviors:

- grid of large brochure cards,
- responsive optimized images,
- external links to supplier/viewer destinations,
- reveal-on-scroll motion.

### `/contact`
Lead-generation and contact page.

Key behaviors:

- contact image hero panel,
- branded inquiry form,
- honeypot anti-bot field,
- submission through Web3Forms,
- client-side success/error states,
- business inquiry info cards.

### `*`
Fallback not-found route for unmatched client-side paths.

## Data Model and Content Strategy

This project intentionally keeps content in the frontend repository instead of pulling from a CMS or backend.

### Featured Product Dataset

`src/data/featuredProducts.ts` contains the main curated data source used by the homepage and featured page.

It defines:

- `TrendingCategory` union type,
- `TrendingProduct` type,
- `FEATURED_CATEGORIES`,
- `FEATURED_PRODUCTS`.

The current dataset includes:

- 5 product categories,
- 10 curated items per category,
- 50 featured products total.

Categories:

- Drinkware
- Writing Instruments
- Apparel
- Bags
- Tech Products

This module also uses `import.meta.glob(..., { eager: true })` to preload optimized AVIF and WebP image variants and build `srcSet` values dynamically.

That approach is a notable engineering decision because it:

- keeps content static and predictable,
- avoids runtime image lookup complexity,
- still enables responsive image delivery,
- centralizes media metadata assembly in one place.

### Other Curated Content

Several pages also define local arrays for page-specific content:

- brochure listings,
- vendor logos,
- brand logos,
- services cards,
- "How It Works" steps,
- product-category cards.

This reflects a marketing-site architecture where the codebase itself acts as the content model.

## Motion and Interaction System

One of the strongest technical characteristics of this codebase is the custom motion system.

### Motion Libraries

- **GSAP / ScrollTrigger** handles scroll-based reveals and timeline control.
- **Framer Motion** handles page-level route transitions.

### Motion Modules

The `src/motion/` folder includes reusable hooks and tokens:

- `gsap.ts`
- `tokens.ts`
- `useGsapScope.ts`
- `useHeroIntro.ts`
- `useParallax.ts`
- `usePin.ts`
- `usePrefersReducedMotion.ts`
- `useReveal.ts`
- `index.ts`

### Key Design Decisions

#### `useReveal`
Reusable scroll-reveal hook that:

- supports selectors or arrays of refs,
- applies staggered or single-element animation,
- defers setup using `requestIdleCallback` when possible,
- respects reduced-motion preferences,
- cleans up `ScrollTrigger` instances on unmount.

#### `useHeroIntro`
Reusable intro timeline hook for first-paint sections.

Important detail:
animation setup is deliberately deferred until after initial paint to reduce the risk of harming LCP.

#### `MotionLayout`
Wraps route content in Framer Motion and refreshes `ScrollTrigger` after navigation. This prevents stale scroll calculations after a page transition.

### UX Impact

This system gives the project:

- more polished page entrances,
- better visual sequencing,
- brand-forward presentation,
- a consistent animation language,
- graceful reduced-motion fallback behavior.

## Performance and Media Optimization

Performance work is a major part of this codebase.

### Image Optimization Pipeline

The project includes build-time image tooling using Sharp.

Relevant scripts:

- `scripts/optimize-brochure-images.mjs`
- `scripts/optimize-featured-images.mjs`
- `scripts/copy-htaccess.mjs`

The active build pipeline includes:

- `prebuild`: brochure optimization
- `build`: TypeScript compile + Vite build
- `postbuild`: copy `.htaccess` into `dist`

### Responsive Image Delivery

Across the app, major visual assets are rendered with:

- AVIF sources,
- WebP sources,
- fallback images,
- explicit `width` and `height`,
- `fetchPriority` for priority imagery,
- `loading="lazy"` for non-critical media,
- `decoding="async"` for better rendering behavior.

### LCP Awareness

The codebase contains a development-only hook, `useLcpInstrumentation`, which logs Largest Contentful Paint candidate details through `PerformanceObserver`.

This is a strong signal that the project was tuned with real performance debugging in mind, not just visual polish.

### Build Observations

A production build completes successfully.

Notable generated bundle details from the current build:

- main JS bundle: about `498 kB` before gzip
- main CSS bundle: about `44.5 kB` before gzip
- homepage route chunk: about `29 kB`
- featured product data chunk: about `109 kB`

Important tradeoff:
the site is code-split at the route level, but it still ships a large amount of media and one sizeable shared JS bundle. The visual experience is strong, but there is still room for more aggressive asset slimming and chunk optimization.

## SEO and Discoverability

This codebase includes deliberate SEO work uncommon in small demo storefronts.

Implemented SEO features:

- base meta description in `index.html`,
- canonical link in `index.html`,
- Open Graph metadata,
- Twitter metadata,
- `robots.txt`,
- `sitemap.xml`,
- route-specific runtime meta updates on the featured page,
- JSON-LD `ItemList` structured data on homepage featured picks,
- JSON-LD `ItemList` structured data on `/featured`.

This makes the project stronger for a portfolio because it shows awareness of discoverability, sharing, and search presentation, not just UI implementation.

## Styling System

Styling is built with Tailwind CSS 4 and a small amount of handcrafted global CSS.

### Visual Direction

The design leans toward:

- white/stone editorial surfaces,
- muted slate typography,
- dark navy accents,
- rounded cards,
- soft shadows,
- premium marketing-site spacing.

### Global Styling Features

`src/styles.css` defines:

- CSS custom properties for palette values,
- font and heading rhythm,
- custom marquee animations,
- scrollbar styling,
- scroll fade overlays,
- utility-style visual helpers such as `.stroke-text`.

This is not a default Tailwind-only codebase. It uses Tailwind for speed but still introduces a design layer with custom CSS variables and bespoke effects.

## Navigation and Layout Behavior

`src/components/Layout.tsx` is more than a wrapper. It contains several UX decisions:

- sticky navigation,
- auto-hide header on downward scroll,
- reveal header on upward scroll,
- desktop and mobile nav variations,
- branded CTA for contact,
- shared footer with business details,
- outlet wrapped in animated page transitions.

This contributes to the "finished product" feel of the site.

## Forms and External Integrations

The only live integration in the app is the contact form.

### Web3Forms Integration

The contact page:

- reads `VITE_WEB3FORMS_ACCESS_KEY` from the Vite environment,
- posts JSON to `https://api.web3forms.com/submit`,
- includes a hidden `botcheck` honeypot field,
- handles sending, success, and error states,
- resets fields after success.

This is a lightweight backendless integration pattern suitable for brochureware or lead-capture sites.

## Deployment Strategy

The repo is prepared for static hosting with SPA fallback support.

### Vercel

`vercel.json` configures:

- build command,
- output directory,
- SPA rewrites to `index.html`,
- long-term cache headers for `/assets/*`.

### Shared Hosting / cPanel

`scripts/copy-htaccess.mjs` copies `public/.htaccess` into the final build output so direct-route loads can work on Apache-style hosting.

This is useful because the project is clearly intended to be deployable beyond modern frontend platforms.

## File and Module Inventory

Current code structure includes approximately:

- 14 components in `src/components`
- 7 route/page modules in `src/pages`
- 9 motion-related modules in `src/motion`

Supporting folders:

- `src/data`
- `src/hooks`
- `src/utils`
- `public`
- `scripts`

## Engineering Strengths

This codebase is strongest in the following areas:

- **Visual polish:** strong card layouts, editorial typography, branded imagery, and motion.
- **Motion architecture:** reusable hooks instead of one-off inline animation logic everywhere.
- **Performance mindset:** optimized media variants, preload hints, lazy route loading, and LCP instrumentation.
- **Portfolio quality presentation:** the site feels deliberate and finished, not like a starter-template app.
- **SEO awareness:** metadata, structured data, sitemap, and robots support are all present.
- **Deployment readiness:** Vercel and Apache/cPanel paths are both considered.

## Current Limitations and Tradeoffs

For portfolio honesty, these points are worth documenting too:

- **No backend or CMS:** all content is hardcoded in the repo.
- **No checkout or inventory layer:** this is a showcase site, not a transactional store.
- **No automated test suite:** no `test` or `spec` files were found in the repository.
- **Heavy image footprint:** several original PNG/JPG assets are still large in the production build.
- **Some content duplication:** category and brochure data appears in multiple page modules instead of being centralized.
- **Some text encoding artifacts exist in source content:** a few strings show mojibake-style characters, which suggests copy/paste or file encoding cleanup is still needed.

## What This Demonstrates in a Portfolio

This project demonstrates ability in:

- modern React SPA architecture,
- TypeScript-based frontend development,
- route-level code splitting,
- animation system design,
- responsive layout implementation,
- image optimization workflows,
- frontend SEO implementation,
- static-site deployment configuration,
- brand-focused UI engineering,
- backendless form integration.

## Suggested Portfolio Framing

If you include this project in a portfolio, the strongest framing is:

> A premium promotional-products marketing site built with React, TypeScript, Vite, Tailwind CSS, GSAP, and Framer Motion. The project focuses on polished brand presentation, route-level code splitting, image optimization, animated storytelling, SEO enhancements, and static deployment readiness.

Shorter version:

> Built a responsive React storefront and lead-generation site for a branded apparel company, featuring custom motion systems, optimized responsive media, structured SEO metadata, and production-ready static deployment.

## Practical Resume/Portfolio Talking Points

- Designed and built a multi-route React 19 marketing site for a promotional products brand.
- Implemented reusable GSAP/ScrollTrigger hooks for hero intros and scroll-triggered reveal animations.
- Added Framer Motion route transitions while keeping ScrollTrigger state in sync across navigation.
- Optimized media delivery with Sharp-generated AVIF/WebP variants, `picture` sources, preload hints, and lazy loading.
- Built a curated featured-products system backed by typed in-repo data and responsive image sets.
- Integrated Web3Forms for backendless lead capture with client-side validation and bot-honeypot protection.
- Configured static deployment for both Vercel and Apache-style hosting with SPA rewrites and cache headers.
- Added SEO improvements including canonical metadata, Open Graph tags, Twitter tags, `robots.txt`, `sitemap.xml`, and JSON-LD structured data.

## Build Verification

The project was verified with:

```bash
npm run build
```

Result:

- build completed successfully,
- brochure image optimization ran during `prebuild`,
- Vite production output was generated,
- `.htaccess` was copied into `dist` during `postbuild`.

## Final Assessment

This is a strong frontend portfolio project because it goes beyond basic page rendering. It combines brand-oriented UI design, typed React architecture, a reusable motion system, practical SEO work, deployment preparation, and asset optimization into a cohesive real-world marketing site.

Its biggest strengths are presentation quality, motion engineering, and frontend production readiness.
