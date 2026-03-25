import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "independent-projects",
    companyName: "Independent Projects",
    positions: [
      {
        id: "artwork-inventory-viewer-platform",
        title: "Artwork Inventory & Viewer Platform - Full Stack Developer",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Production Deployment",
        icon: "code",
        description: `- Built and deployed a serverless FastAPI and React platform for browsing structured artwork inventories and catalog data on the web.
- Replaced spreadsheet-heavy catalog browsing with a searchable workflow that was easier to use and maintain.
- Converted Excel-based source files into normalized catalog data using both local ingestion and Microsoft Graph workflows.
- Designed workbook-aware extraction pipelines so catalog updates could be processed consistently and reflected accurately in the UI.
- Implemented cache controls with TTL, ETag, and 304 handling to reduce unnecessary compute and speed up repeat visits.
- Hardened media delivery with input validation, cache invalidation, and structured request logging.
- Adapted file processing for serverless constraints and shipped the application on Vercel with a focus on backend correctness, performance, and maintainability.`,
        skills: [
          "React",
          "FastAPI",
          "Python",
          "Vercel",
          "Microsoft Graph",
          "HTTP Caching",
          "ETag",
          "Serverless",
        ],
        isExpanded: true,
      },
      {
        id: "clinic-management-system-dev",
        title: "Clinic Management System - Full Stack Web Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Present",
        icon: "code",
        description: `- Built a role-based clinic management platform to centralize patient, staff, and records workflows in one system.
- Designed the backend around protected healthcare workflows where access had to be restricted by user role and action type.
- Implemented JWT authentication and authorization for protected access across user roles.
- Developed more than 10 REST API endpoints covering patient management, staff actions, and record operations.
- Enforced server-side access rules for sensitive health data and restricted workflow actions by role.
- Added request validation to improve data integrity and reduce invalid submissions.
- Optimized core MySQL queries and improved typical load times by roughly 40% while keeping the backend maintainable.`,
        skills: [
          "PHP",
          "MySQL",
          "JWT Authentication",
          "RBAC",
          "REST APIs",
          "Database Optimization",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "webdavinci",
    companyName: "WebDaVinci",
    positions: [
      {
        id: "webdavinci-uiux-backend",
        title: "UI/UX Designer & Backend Developer",
        employmentPeriod: {
          start: "10.2024",
          end: "02.2025",
        },
        employmentType: "Project-Based",
        icon: "design",
        description: `- Designed dashboard interfaces and workflow screens for client-facing products with an emphasis on clarity and usability.
- Produced Figma concepts and translated them into implementation-ready layouts and interaction patterns.
- Improved information hierarchy for data-heavy views so key actions and status information were easier to scan.
- Supported the backend functionality needed to power dashboards and visualization-driven screens.
- Worked across design and backend constraints to keep UI behavior aligned with real application data.
- Refined patterns through implementation feedback to improve consistency and practical usability.
- Contributed across both product design and backend delivery, helping close the gap between concept and execution.`,
        skills: ["Figma", "PHP", "MySQL", "Dashboard Design", "UX"],
      },
    ],
  },
  {
    id: "lourdebella",
    companyName: "Lourdebella",
    positions: [
      {
        id: "lourdebella-backend-developer",
        title: "Backend Web Developer",
        employmentPeriod: {
          start: "07.2025",
          end: "09.2025",
        },
        employmentType: "Remote, Project-Based",
        icon: "code",
        description: `- Built PHP and MySQL backend services for a production web platform used in day-to-day business operations.
- Implemented role-based authentication and protected workflows around user-specific access requirements.
- Designed normalized schemas that reduced redundancy by roughly 30% and improved record consistency.
- Developed REST-style backend functionality for operational features and internal workflows.
- Added validation, logging, and security-minded handling to improve system reliability and traceability.
- Tuned backend performance and stability to support a reported uptime of 99.5%.
- Delivered a dependable backend foundation built for maintainability, access control, and operational use.`,
        skills: [
          "PHP",
          "MySQL",
          "REST APIs",
          "RBAC",
          "Logging",
          "Backend Development",
        ],
      },
    ],
  },
  {
    id: "constructgo",
    companyName: "ConstructGo",
    positions: [
      {
        id: "constructgo-fullstack-mobile-commerce",
        title: "Full-Stack Mobile Commerce Developer",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Independent Project",
        icon: "code",
        description: `- Built a multi-role mobile commerce and fulfillment platform for customers, drivers, store owners, and admins.
- Designed the system around a shared order lifecycle so each role could act on the same workflow from its own interface.
- Built role-specific navigation, ordering flows, and shared client state with Expo React Native and Zustand.
- Developed a Node.js and Express backend with Prisma for products, payments, and fulfillment lifecycle management.
- Integrated Supabase Auth and Postgres for authenticated sessions, protected APIs, and persistent cross-device data.
- Implemented PayMongo checkout creation, webhook verification, and idempotent payment reconciliation to support reliable payment confirmation.
- Solved product synchronization and delivery workflow persistence so actions from one role were reflected reliably across the system.`,
        skills: [
          "Expo",
          "React Native",
          "TypeScript",
          "Node.js",
          "Express",
          "Prisma",
          "Supabase",
          "Zustand",
          "PayMongo",
        ],
      },
    ],
  },
  {
    id: "youth-service-philippines",
    companyName: "Youth Service Philippines",
    positions: [
      {
        id: "ysp-fullstack-platform",
        title: "Full-Stack Platform Developer",
        employmentPeriod: {
          start: "02.2026",
        },
        employmentType: "Production-Oriented Platform",
        icon: "code",
        description: `- Built a production-oriented volunteer and operations platform with public, admin, and chapter-head workspaces.
- Designed the platform around approval-heavy operational workflows instead of static content pages.
- Developed the frontend in React and TypeScript with route-aware layouts for both public users and protected staff views.
- Implemented moderated publishing workflows so chapter-created opportunities required admin approval before release.
- Added notifications and announcements to support organization-wide communication and workflow visibility.
- Modeled volunteers, chapters, opportunities, and staff operations on Supabase and Postgres.
- Enforced role-aware access through Supabase RLS and trusted Edge Functions for privileged actions and protected coordination flows.`,
        skills: [
          "React",
          "TypeScript",
          "Vite",
          "Supabase",
          "Postgres",
          "RLS",
          "Edge Functions",
          "Tailwind CSS",
          "Radix UI",
        ],
      },
    ],
  },
  {
    id: "bc-apparel",
    companyName: "BC Apparel",
    positions: [
      {
        id: "bc-apparel-frontend-marketing-site",
        title: "Frontend Marketing Site Developer",
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: "Frontend Portfolio Project",
        icon: "code",
        description: `- Built a polished React marketing site for a branded apparel business with strong visual presentation and clear product storytelling.
- Structured the app as a responsive multi-route SPA with a shared shell, lazy-loaded pages, and code-split routes.
- Implemented reusable GSAP and ScrollTrigger motion patterns for hero sequences, reveals, and scroll-based storytelling.
- Added Framer Motion page transitions while keeping navigation and animation behavior cohesive.
- Optimized media delivery with Sharp-generated variants, responsive image handling, and AVIF and WebP support.
- Added structured SEO metadata, sitemap support, and other discoverability improvements beyond a typical portfolio demo.
- Shipped a production-ready frontend focused on brand presentation, performance, and lead capture through Web3Forms.`,
        skills: [
          "React",
          "TypeScript",
          "Vite",
          "Tailwind CSS",
          "GSAP",
          "Framer Motion",
          "Sharp",
          "React Router",
          "Web3Forms",
        ],
      },
    ],
  },
  {
    id: "custom-shopify-builder",
    companyName: "Custom Shopify Builder System",
    positions: [
      {
        id: "shopify-builder-fullstack",
        title: "Full-Stack Web Developer",
        employmentPeriod: {
          start: "10.2025",
          end: "11.2025",
        },
        employmentType: "Project-Based",
        icon: "code",
        description: `- Built a full-stack custom product builder for configuring personalized items before checkout.
- Implemented live previews and file uploads so users could visualize customizations in real time.
- Connected builder output to Shopify checkout generation for a commerce-ready purchase flow.
- Developed REST-style backend endpoints for configuration logic, uploads, and admin-side actions.
- Built an admin dashboard with pagination, filtering, CSV export, and activity logging for operational use.
- Designed normalized relational schemas to support dynamic options, scalable orders, and cleaner backend maintenance.
- Delivered a practical system that combined customer-facing customization with business-side tooling.`,
        skills: [
          "React",
          "REST APIs",
          "PHP",
          "MySQL",
          "Shopify API",
          "Admin Dashboard",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "st-marys-college-of-tagum",
        title: "Bachelor of Science in Computer Science",
        employmentPeriod: {
          start: "2023",
          end: "07.2027",
        },
        employmentType: "Expected July 2027",
        icon: "education",
        description: `- Pursuing a Bachelor of Science in Computer Science at St. Mary's College of Tagum, Inc.
- Building a practical foundation in software development, systems thinking, and applied programming.
- Studying core computer science concepts that support both backend and frontend engineering work.
- Applying academic learning to portfolio systems and client-facing software outside classroom requirements.
- Strengthening hands-on experience in databases, web development, and full-stack application design throughout the program.
- Developing the technical discipline needed to move from project implementation to production-ready engineering work.
- Expected to complete the degree in July 2027.`,
        skills: ["Computer Science", "Software Development"],
      },
    ],
  },
];
