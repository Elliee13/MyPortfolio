# Youth Service Philippines - Portfolio Codebase Overview

Last updated: 2026-03-22

## 1. Project Summary

Youth Service Philippines is a production-oriented full-stack web application for a youth-led civic and volunteer organization.

The platform combines:
- a public website
- public volunteer accounts
- a protected admin workspace
- a protected chapter-head workspace
- workflow approvals
- in-app notifications
- role-aware operations management

The system is designed to support real organizational activity, not just static content.

Core outcomes the app supports:
- showcase programs and advocacy
- recruit volunteers
- accept membership and chapter applications
- manage chapter-led volunteer opportunities
- approve opportunities before public release
- coordinate staff workflows and announcements

## 2. Product Surfaces

### Public surface
For visitors and public volunteers.

Main capabilities:
- view the public website
- browse programs
- browse chapters
- browse approved volunteer opportunities
- access membership and chapter application forms
- register and sign in
- manage a volunteer account
- see personal volunteer signup history
- receive in-app notifications

### Admin surface
For staff users with the `admin` role.

Main capabilities:
- manage programs
- manage chapters
- manage volunteer opportunities
- approve chapter-head-submitted opportunities
- manage chapter-head accounts and assignments
- manage public site settings
- send targeted announcements
- review volunteer signup activity
- receive workflow notifications

### Chapter-head surface
For staff users with the `chapter_head` role.

Main capabilities:
- create and manage opportunities for one assigned chapter
- monitor volunteer activity for that chapter
- view chapter reports
- receive approval and volunteer workflow notifications

## 3. Technology Stack

### Frontend
- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS
- shadcn/Radix-based UI primitives
- Lucide icons
- GSAP for animation/reveal behavior

### Backend and platform
- Supabase Auth
- Supabase Postgres
- Supabase Row Level Security (RLS)
- Supabase Storage
- Supabase Edge Functions

### Hosting and delivery
- Vercel for the frontend
- Supabase for backend services
- GitHub Actions for CI
- Supabase CLI for database migrations and function deployment

## 4. Architecture Overview

The app uses a split architecture:

- **frontend SPA**
  - React application served from Vercel
- **backend platform**
  - Supabase Auth for identity
  - Postgres + RLS for data protection
  - Edge Functions for trusted privileged operations

Design approach:
- direct browser-to-Supabase reads for allowed data
- trusted backend function only for sensitive staff operations
- route-level role protection in the frontend
- RLS as the actual backend enforcement layer

This keeps the architecture relatively lean while still maintaining strong security boundaries.

## 5. Routing Model

### Public routes
Rendered through `src/components/layout/PublicLayout.tsx`

Important routes:
- `/`
- `/about`
- `/programs`
- `/programs/:id`
- `/membership-and-chapter`
- `/volunteer-opportunities`
- `/contact`
- `/register`
- `/my-account`
- `/notifications`
- `/staff`

### Admin routes
Rendered through `src/components/layout/AdminLayout.tsx`
Protected by `RequireRole("admin")`

Important routes:
- `/admin`
- `/admin/programs`
- `/admin/chapters`
- `/admin/opportunities`
- `/admin/volunteers`
- `/admin/staff`
- `/admin/settings`
- `/admin/notifications`
- `/admin/announcements`

### Chapter-head routes
Rendered through `src/components/layout/ChapterHeadLayout.tsx`
Protected by `RequireRole("chapter_head")`

Important routes:
- `/chapter-head`
- `/chapter-head/opportunities`
- `/chapter-head/volunteers`
- `/chapter-head/reports`
- `/chapter-head/notifications`

## 6. Authentication and User Model

The application supports three user contexts:

1. **public volunteer users**
- authenticated through Supabase Auth
- managed through `/register` and `/my-account`
- stored in `public.users`
- do not use the staff `profiles.role` model

2. **admin users**
- authenticated through Supabase Auth
- require a `public.profiles` row with `role = 'admin'`
- routed to `/admin`

3. **chapter-head users**
- authenticated through Supabase Auth
- require a `public.profiles` row with `role = 'chapter_head'`
- also scoped by `profiles.chapter_id`
- routed to `/chapter-head`

### Auth bootstrap model
Primary file:
- `src/auth/AuthProvider.tsx`

Responsibilities:
- restore session quickly
- keep `user` and `session` state current
- fetch staff profile separately
- expose `loading` and `profileRecovering`
- preserve public-route usability while staff profile recovery happens

### Role protection
Primary file:
- `src/auth/RequireRole.tsx`

Responsibilities:
- protect `/admin/*`
- protect `/chapter-head/*`
- show loading UI while profile recovery is happening
- block authenticated users with missing or wrong staff role

## 7. Public Account Flow

### Registration and sign-in
Primary file:
- `src/pages/Register.tsx`

Supports:
- email/password sign-up
- email/password sign-in
- Google OAuth sign-in for public accounts

### My Account
Primary file:
- `src/pages/MyAccount.tsx`

Capabilities:
- view and update volunteer profile details
- see signup history
- sign out
- receive notifications

### Public user provisioning
The system provisions `public.users` rows for authenticated public users through a tracked SQL migration and auth trigger.

This matters because:
- `My Account` reads from `public.users`
- volunteer history is tied to the authenticated public user

## 8. Staff Account Management

Primary files:
- `src/pages/AdminStaff.tsx`
- `src/lib/admin.api.ts`
- `supabase/functions/admin-manage-chapter-head/index.ts`

Current pattern:
- table-first admin UI
- modal create/edit interactions
- trusted backend path for privileged account management

Admin can:
- list chapter-head users
- create chapter-head users
- update chapter assignment

Security model:
- browser does not perform privileged `auth.admin` operations directly
- admin-only verification happens server-side in the Edge Function
- function uses the service role key only on the server

## 9. Content and Configuration Management

### Programs
Admin can:
- create programs
- edit programs
- delete programs
- upload/update images

### Chapters
Admin can:
- create chapters
- edit chapters
- delete chapters

### Site settings
Admin can manage:
- homepage counters
- public contact details
- membership form URL
- chapter proposal form URL

Current UX:
- current values stay visible
- settings are edited in focused modals by settings group

## 10. Membership and Chapter Application Flow

Primary file:
- `src/pages/MembershipChapter.tsx`

Current behavior:
- two public-facing form cards:
  - membership form
  - chapter proposal form
- each card shows:
  - thumbnail-style form preview
  - form title
  - form description
  - CTA
- access requires a signed-in public account

Form URLs are admin-managed through `site_settings`.
Fallback URLs exist, but only as fallback behavior.

## 11. Volunteer Opportunity Flow

### Public side
Primary file:
- `src/pages/VolunteerOpportunities.tsx`

Behavior:
- only approved opportunities are shown publicly
- each opportunity shows chapter, date, SDGs, and sign-up details
- authenticated public users can sign up
- logged-out users are prompted to register/sign in

### Public signup
Primary file:
- `src/components/volunteer/SignUpModal.tsx`

Current behavior:
- collects required volunteer information
- supports prefill from the authenticated public user profile
- includes a hidden honeypot field
- submits through a protected backend flow

### Staff side
Admin and chapter heads both work with volunteer opportunities, but with different permissions.

## 12. Opportunity Approval Workflow

This is one of the core workflow systems in the app.

### Business rule
Chapter-head-created opportunities must not become public immediately.

### Current implementation
- chapter head creates opportunity
- opportunity is saved as `pending_approval`
- public site does not show it
- admin sees it in the admin opportunities workspace
- admin can approve it
- once approved, it becomes public

### Metadata tracked
The system also tracks:
- `approval_status`
- `created_by`
- `created_by_label`
- `approved_by`
- `approved_at`

This improves moderation accountability without implementing a full audit log.

### UX model
- create/edit uses modal-based CRUD
- approve uses confirmation dialog
- delete uses confirmation dialog
- row actions use the same dots-menu pattern for consistency

## 13. Notifications System

The app includes a V1 in-app notifications system.

### Core capabilities
- per-user notifications
- unread count
- read/unread state
- dropdown preview from header
- full notifications pages
- admin announcements

### Automatic workflow notifications
Examples:
- admin notified when a chapter-head-created opportunity needs approval
- chapter head notified when an opportunity is approved
- chapter head notified when a member applies to an opportunity
- member notified when their application is received

### Announcement system
Admins can send announcements to:
- members only
- chapter heads only
- both

### UX structure
- bell icon in header
- unread badge
- dropdown preview
- `View all notifications` link
- dedicated pages:
  - `/notifications`
  - `/admin/notifications`
  - `/chapter-head/notifications`

## 14. About Page and Public Trust Layer

Primary file:
- `src/pages/About.tsx`

Purpose:
- improve trust and legitimacy
- explain organization identity
- show nationwide reach
- support conversion into volunteering and chapter leadership

Includes:
- organization overview
- mission and vision
- what the organization does
- advocacy pillars
- reach/map section
- key programs
- chapter-lead CTA
- final join CTA

## 15. Security Design

Security is enforced in layers.

### Frontend layer
- role-based route protection
- public/staff route separation
- UI hides unauthorized flows

### Backend layer
- Supabase RLS policies
- role-aware SQL helper functions
- trusted Edge Function for privileged staff account management

### Workflow protection
- public only sees approved opportunities
- chapter heads cannot self-approve through the UI or normal browser writes
- notifications do not bypass route protection
- per-user read state is recipient-specific

## 16. Reliability Patterns

The codebase has several explicit reliability patterns.

### `withTimeout`
Used on important async operations so the UI does not hang indefinitely.

### `aliveRef`
Used to prevent state updates after unmount or stale async completion.

### Explicit query states
Used widely across pages:
- `loading`
- `error`
- `empty`
- `ready`
- additional scoped states where needed

### Honest UI behavior
The code deliberately avoids:
- false empty states after failed fetches
- false success after failed mutations
- silent failures in staff workflows

## 17. Database Design Themes

Important database-backed entities include:
- `profiles`
- `users`
- `programs`
- `chapters`
- `site_settings`
- `volunteer_opportunities`
- `volunteer_signups`
- `notifications`
- `announcements`

Patterns used:
- RLS for row ownership and role restriction
- idempotent SQL migrations
- auth triggers for user provisioning
- trigger-based workflow notifications
- additive schema evolution for new moderation metadata

## 18. Deployment Model

### Frontend
- built with Vite
- deployed to Vercel

### Backend
- Supabase project for auth/database/storage/functions

### Database changes
- tracked through `supabase/migrations`
- applied with Supabase CLI

### Functions
- deployed with Supabase CLI

Typical operational commands:
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npx --yes supabase db push`
- `npx --yes supabase functions deploy <function-name>`

## 19. CI and Delivery Discipline

The repo includes CI-oriented documentation and GitHub workflow configuration.

The general engineering posture is:
- typed frontend
- lint/build verification
- tracked migrations
- production-safe incremental rollout
- feature-by-feature commits instead of broad rewrites

## 20. Portfolio Value / Engineering Highlights

This codebase is strong portfolio material because it demonstrates:

### Full-stack systems thinking
- frontend architecture
- backend auth/data modeling
- route protection
- workflow state management

### Security-aware design
- RLS-backed access control
- role-scoped surfaces
- trusted backend path for privileged operations

### Product-oriented workflow design
- approval workflow
- notifications
- announcements
- public/member/staff separation

### Operational reliability
- timeout handling
- honest error-state behavior
- incremental migrations
- low-risk UI refactors

### UX maturity
- modal CRUD where appropriate
- monitoring-first admin pages where CRUD is not appropriate
- responsive public marketing pages
- lightweight notification UX

## 21. Suggested Portfolio Framing

If you present this project in a portfolio, a strong framing is:

> Built a production-oriented full-stack platform for a youth civic organization using React, TypeScript, Supabase, and Vercel. Designed role-based admin and chapter-head workspaces, public volunteer account flows, approval workflows for moderated opportunity publishing, and an in-app notifications system, with security enforced through Supabase RLS and trusted backend functions.

Shorter version:

> Full-stack volunteer and chapter management platform with public, admin, and chapter-head surfaces, moderated publishing workflows, secure role-based access, and in-app notifications.

## 22. Key Files to Mention in a Review

If you are walking someone through the codebase, these are good anchor files:

- `src/app/router.tsx`
- `src/auth/AuthProvider.tsx`
- `src/auth/RequireRole.tsx`
- `src/lib/public.api.ts`
- `src/lib/admin.api.ts`
- `src/pages/AdminDashboard.tsx`
- `src/pages/AdminStaff.tsx`
- `src/pages/ChapterHeadDashboard.tsx`
- `src/pages/VolunteerOpportunities.tsx`
- `src/components/notifications/NotificationBell.tsx`
- `supabase/functions/admin-manage-chapter-head/index.ts`
- `supabase/migrations/20260317110000_add_notifications_v1.sql`

## 23. Final Summary

Youth Service Philippines is not just a content site. It is a workflow-driven platform with:
- public-facing storytelling and recruitment
- authenticated volunteer participation
- staff-governed operational tooling
- approval-based publishing
- notifications and announcements
- explicit security and reliability patterns

That makes it a strong example of a real-world full-stack application that balances product UX, operational clarity, and backend safety.
