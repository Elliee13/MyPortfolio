import artworkViewerImage from "@/assets/images/artwork/image.png";
import clinicDashboardImage from "@/assets/images/clinic/clinic-dashboard.png";
import clinicRecordsImage from "@/assets/images/clinic/image1.png";
import clinicStatisticsImage from "@/assets/images/clinic/image2.png";
import constructGoCustomerHomeImage from "@/assets/images/constructGo/image1.png";
import constructGoStoreDashboardImage from "@/assets/images/constructGo/image3.png";
import constructGoDriverDeliveryImage from "@/assets/images/constructGo/image4.png";

import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "artwork-inventory-viewer-platform",
    title: "Artwork Inventory & Viewer Platform",
    period: { start: "01.2026" },
    link: "https://artwork-r6o7.vercel.app/",
    links: [
      {
        label: "Live Demo",
        href: "https://artwork-r6o7.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Elliee13/Artwork",
      },
    ],
    skills: [
      "React",
      "FastAPI",
      "Python",
      "Vercel",
      "Microsoft Graph",
      "HTTP Caching",
    ],
    isExpanded: true,
    screenshotViewerSize: "large",
    description: `Catalog and inventory system built for teams that needed artwork records organized, searchable, and easier to maintain without staying inside spreadsheets.

- Built a React and FastAPI application that turned spreadsheet-based catalog management into a searchable web workflow
- Handled local-file and Microsoft Graph ingestion so updates could move from source files into the app more reliably
- Added cache controls, media validation, and serverless-aware delivery to make browsing faster and backend maintenance more dependable`,
    screenshots: [
      {
        src: artworkViewerImage.src,
        alt: "Artwork Inventory & Viewer Platform screenshot",
        caption:
          "Artwork viewer - categorized internal gallery built to improve access to artwork inventory.",
      },
    ],
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Artwork+Inventory+Viewer+Platform",
  },
  {
    id: "clinic-management-system",
    title: "Clinic Management System",
    period: { start: "2024" },
    skills: ["PHP", "MySQL", "JWT Authentication", "RBAC", "REST APIs"],
    screenshotViewerSize: "large",
    description: `Clinic records and operations system built to centralize patient data, staff actions, and day-to-day workflows behind role-based access.

- Built JWT authentication and more than 10 REST API endpoints for patient records, staff actions, and operational workflows
- Enforced server-side access control and validation for sensitive healthcare data and protected actions
- Optimized core MySQL queries to improve typical load times by roughly 40% while keeping the backend maintainable

Private academic system. Screenshots are available; source is not public.`,
    screenshots: [
      {
        src: clinicRecordsImage.src,
        alt: "Clinic Management System medical records view",
        caption:
          "Statistics dashboard - reporting view with filters, breakdowns, and print-ready summaries.",
      },
      {
        src: clinicStatisticsImage.src,
        alt: "Clinic Management System statistics dashboard",
        caption:
          "Medical records view - protected clinic workspace with role-filtered search and structured record access.",
      },
      {
        src: clinicDashboardImage.src,
        alt: "Clinic Management System dashboard overview",
        caption:
          "Clinic dashboard - operational overview for patient activity and daily clinic workflows.",
      },
    ],
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Clinic+Management+System",
  },
  {
    id: "constructgo",
    title: "ConstructGo",
    period: { start: "01.2026" },
    link: "https://github.com/Elliee13/constructGo",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Elliee13/constructGo",
      },
      {
        label: "APK Build",
        href: "https://expo.dev/accounts/ellie13/projects/constructgo/builds/cde1542d-83f7-4399-a0bf-2ff435f550ee",
      },
    ],
    skills: [
      "Expo",
      "React Native",
      "Node.js",
      "Express",
      "Prisma",
      "Supabase",
      "PayMongo",
      "Zustand",
    ],
    description: `Multi-role mobile commerce and fulfillment system built for customers, drivers, store owners, and admins working inside the same order lifecycle.

- Built role-specific mobile flows with Expo React Native and Zustand so each user type could act on the same workflow from its own interface
- Developed a Node.js and Express backend with Prisma, Supabase Auth, and Postgres for products, payments, fulfillment, and protected data access
- Implemented PayMongo checkout, webhook verification, and idempotent payment reconciliation so order states stayed consistent across roles`,
    screenshots: [
      {
        src: constructGoCustomerHomeImage.src,
        alt: "ConstructGo customer app home",
        caption:
          "Customer app home - hardware ordering flow with search, categories, and recent orders.",
      },
      {
        src: constructGoStoreDashboardImage.src,
        alt: "ConstructGo store owner dashboard",
        caption:
          "Store dashboard - order pipeline and dispatch workflow for store operations.",
      },
      {
        src: constructGoDriverDeliveryImage.src,
        alt: "ConstructGo driver delivery detail",
        caption:
          "Driver delivery detail - role-specific delivery workflow with order summary and progress handling.",
      },
    ],
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=ConstructGo",
  },
  {
    id: "youth-service-philippines",
    title: "Youth Service Philippines",
    period: { start: "02.2026" },
    link: "https://youth-service-ph.vercel.app/",
    links: [
      {
        label: "Live Demo",
        href: "https://youth-service-ph.vercel.app/",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Supabase",
      "Postgres",
      "RLS",
      "Edge Functions",
      "Tailwind CSS",
    ],
    description: `Volunteer and operations platform built for public users, chapter heads, and admins managing approvals, announcements, and organization-wide coordination.

- Built route-aware React and TypeScript interfaces for both public users and protected staff workspaces
- Implemented moderated publishing workflows so opportunities created by chapters required admin approval before release
- Modeled operational data on Supabase and Postgres with RLS and Edge Functions to protect privileged actions and role-based access`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=Youth+Service+Philippines",
  },
];
