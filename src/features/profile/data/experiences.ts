import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "independent-projects",
    companyName: "Independent Projects",
    positions: [
      {
        id: "artwork-inventory-viewer-platform",
        title: "Full Stack Developer - Production Deployment",
        employmentPeriod: {
          start: "01.2026",
        },
        employmentType: "Production Deployment",
        icon: "code",
        description: `- Architected and deployed a FastAPI serverless gallery converting Excel workbooks into structured product catalogs with dual ingestion (local and Microsoft Graph).
- Implemented identity-based HTTP caching with TTL, ETag, and 304 handling to reduce redundant compute and improve CDN and client performance.
- Secured media endpoints with strict validation, workbook-aware cache invalidation, structured logging, and /tmp-constrained storage for reliable serverless execution.`,
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
        title: "Full Stack Web Developer",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Present",
        icon: "code",
        description: `- Architected a role-based platform managing 1000+ records with JWT authentication and 10+ REST API endpoints.
- Optimized database queries reducing load time by 40% while supporting concurrent users.
- Enforced server-side access control and structured data validation for sensitive health records.`,
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
        description: `- Designed dashboards and interface systems for client-facing work.
- Delivered backend functionality supporting data visualization features.
- Improved usability through iterative design and implementation updates.`,
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
        description: `- Engineered backend services supporting 50+ concurrent users using PHP and MySQL with role-based authentication.
- Designed normalized schemas reducing redundancy by 30% and improving data consistency.
- Applied logging and security best practices achieving 99.5% uptime.`,
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
        description: `- Engineered a React + PHP + MySQL product builder using REST APIs with live previews, file uploads, and Shopify checkout integration.
- Engineered an admin dashboard with pagination, filtering, CSV export, and activity logging for operational efficiency.
- Designed normalized relational schemas supporting dynamic product configuration and scalable order processing workflows.`,
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
        description: `- St. Mary's College of Tagum, Inc.
- Tagum City, Davao del Norte.
- Bachelor of Science in Computer Science.`,
        skills: ["Computer Science", "Software Development"],
      },
    ],
  },
];
