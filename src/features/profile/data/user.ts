import myProfileImage from "@/assets/images/my-profile.jpg";
import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "John",
  lastName: "Austria",
  displayName: "John Ellemeleck P. Austria",
  username: "Elliee13",
  gender: "male",
  pronouns: "he/him",
  bio: "Backend-focused full-stack developer building internal tools, admin systems, and API-driven products for teams that depend on reliable workflows.",
  timeZone: "Asia/Manila",
  flipSentences: [
    "Backend-focused full-stack developer",
    "Internal tools, APIs, and operational platforms",
    "Best suited for workflow-driven product work",
  ],
  address: "Davao, Philippines",
  phoneNumber: "KzYzOTE1NjIxOTkzMA==",
  secondPhoneNumber: "",
  email: "aGV5aXRzZWxsaWllZUBnbWFpbC5jb20=",
  website: "https://dev-portfolio-blue-eight.vercel.app/",
  jobTitle: "Backend-Focused Full-Stack Developer",
  jobs: [
    {
      title: "Backend-Focused Full-Stack Developer",
      website: "https://dev-portfolio-blue-eight.vercel.app/",
    },
  ],
  about: `
- I build **backend-first products** for teams that need clear workflows, protected access, and systems that stay reliable beyond a prototype.
- My strongest work is in **FastAPI, PHP, MySQL, PostgreSQL, Supabase, React, and React Native**, with hands-on experience across API design, database modeling, role-based access, and production-minded delivery.
- I have built systems such as **ConstructGo**, **Youth Service Philippines**, and **BC Apparel**, spanning mobile commerce, moderated publishing, inventory workflows, and admin-facing operations.
- I do my best work on products that need **clean business logic, maintainable backend architecture, and interfaces that help admins, staff, and end users complete real tasks efficiently**.
- I am a strong fit for **internal tools, workflow systems, admin platforms, and API-driven product work** where reliability, usability, and implementation quality all matter.
`,
  avatar: myProfileImage.src,
  ogImage: myProfileImage.src,
  namePronunciationUrl: "",
  keywords: [
    "John Ellemeleck P. Austria",
    "John Austria",
    "Elliee13",
    "backend-focused full-stack developer",
    "fastapi developer",
    "php developer",
    "rest api engineer",
    "jwt authentication",
    "rbac",
    "mysql developer",
    "postgresql developer",
    "supabase",
    "serverless deployment",
  ],
  dateCreated: "2026-03-21",
};
