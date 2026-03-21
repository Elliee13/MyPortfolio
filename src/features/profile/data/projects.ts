import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "artwork-inventory-viewer-platform",
    title: "Artwork Inventory & Viewer Platform",
    period: { start: "01.2026" },
    link: "https://dev-portfolio-blue-eight.vercel.app/",
    skills: [
      "React",
      "FastAPI",
      "Python",
      "Vercel",
      "Microsoft Graph",
      "HTTP Caching",
    ],
    isExpanded: true,
    description: `React + FastAPI inventory viewer platform deployed on Vercel for structured artwork and catalog workflows.

- Converted Excel workbooks into structured product catalogs with dual local and Microsoft Graph ingestion
- Implemented identity-based HTTP caching using TTL, ETag, and 304 responses
- Secured media endpoints with validation, cache invalidation, structured logging, and reliable serverless storage constraints`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Artwork+Inventory+Viewer+Platform",
  },
  {
    id: "clinic-management-system",
    title: "Clinic Management System",
    period: { start: "2024" },
    link: "https://dev-portfolio-blue-eight.vercel.app/",
    skills: ["PHP", "MySQL", "JWT Authentication", "RBAC", "REST APIs"],
    description: `Role-based clinic platform managing 1000+ records with secure backend architecture.

- Built JWT-based authentication and 10+ REST API endpoints
- Optimized database queries to reduce load time by 40%
- Enforced server-side access control and validation for sensitive health records`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Clinic+Management+System",
  },
  {
    id: "lourdebella",
    title: "Lourdebella",
    period: { start: "07.2025", end: "09.2025" },
    link: "https://dev-portfolio-blue-eight.vercel.app/",
    skills: ["PHP", "MySQL", "REST APIs", "RBAC"],
    description: `Backend infrastructure and secure authentication for a production web platform supporting day-to-day business operations.

- Engineered backend services supporting 50+ concurrent users
- Designed normalized schemas reducing redundancy by 30%
- Applied logging and security practices that achieved 99.5% uptime`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Lourdebella",
  },
  {
    id: "custom-shopify-builder-system",
    title: "Custom Shopify Builder System",
    period: { start: "10.2025", end: "11.2025" },
    link: "https://dev-portfolio-blue-eight.vercel.app/",
    skills: ["React", "PHP", "MySQL", "REST APIs", "Shopify API"],
    description: `Custom product builder with mockup previews, artwork uploads, Shopify checkout generation, and a production admin dashboard.

- Engineered a React + PHP + MySQL product builder with live previews and file uploads
- Built admin tooling with pagination, filtering, CSV export, and activity logging
- Designed normalized schemas for dynamic product configuration and scalable order workflows`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Custom+Shopify+Builder+System",
  },
];
