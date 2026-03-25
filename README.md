# My Portfolio

Personal portfolio for **John Ellemeleck P. Austria**, focused on backend-heavy full-stack product work, internal tools, admin systems, and API-driven platforms.

Live site:

- [dev-portfolio-blue-eight.vercel.app](https://dev-portfolio-blue-eight.vercel.app/)

## Overview

This portfolio is built to present real proof of work rather than just a tool list. It highlights practical systems work across workflow-driven products, protected admin experiences, role-based platforms, and backend-focused implementation.

Featured proof projects:

- **ConstructGo**: multi-role mobile commerce and fulfillment system with customer, store owner, driver, and admin workflows
- **Clinic Management System**: private academic clinic records and operations platform with role-based access and protected workflows
- **Artwork Inventory & Viewer Platform**: internal gallery and inventory system with spreadsheet ingestion, caching, and serverless-aware delivery
- **Youth Service Philippines**: volunteer and operations platform with approvals, protected workspaces, and organization-level coordination

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Radix UI
- Motion
- Vercel Analytics + Speed Insights

## Features

- Portfolio-focused App Router setup
- Screenshot-backed project proof
- Light and dark theme support
- vCard download route
- SEO basics with metadata, sitemap, robots, and JSON-LD
- PWA manifest and favicon support
- Blog support with MDX routes still available in the codebase

## Local Development

This project uses `pnpm`.

```bash
corepack enable
corepack pnpm install
corepack pnpm dev
```

The dev server runs on:

```text
http://localhost:1408
```

Useful commands:

```bash
corepack pnpm build
corepack pnpm start
corepack pnpm lint
corepack pnpm check-types
```

## Deployment

This repo is ready for deployment on **Vercel**.

Recommended environment variables:

```bash
APP_URL=https://your-production-url.vercel.app
```

Optional:

```bash
GITHUB_API_TOKEN=
```

`GITHUB_API_TOKEN` is only needed if you want authenticated GitHub API requests for the repository star count.

## Project Structure

Key areas:

- `src/app/` - routes, metadata, manifest, robots, sitemap, OG routes
- `src/features/profile/` - profile data, sections, projects, experiences, screenshots
- `src/components/` - shared UI and app components
- `src/assets/images/` - local project screenshots and profile assets
- `public/` - favicon, resume, public icons, and static assets
- `docs/` - portfolio documentation and supporting notes

## Notes

- The **Clinic Management System** is intentionally kept private. Screenshots are shown in the portfolio, but no public source link is exposed.
- Public project links currently included:
  - ConstructGo GitHub + APK build
  - Artwork live demo + GitHub
  - Youth Service Philippines live demo

## License

Licensed under the [MIT license](./LICENSE).
