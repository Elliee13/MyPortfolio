# ConstructGo Portfolio Documentation

## Project Summary

ConstructGo is a multi-role mobile commerce and fulfillment system for a hardware store workflow. It combines a React Native mobile app, a Node.js backend, Supabase authentication and database services, and PayMongo payment processing into one end-to-end system.

The system supports four roles:
- Customer
- Driver
- Store Owner
- Admin

The core goal of the project is to turn a local-only demo app into a connected, database-backed platform where products, orders, payments, and delivery state are synchronized across devices and roles.

## What The System Does

ConstructGo allows a customer to browse a hardware catalog, add items to cart, place an order, and pay using either Cash on Delivery or PayMongo-backed digital payments such as GCash and Maya. Once an order is paid and approved for fulfillment, it enters a delivery flow where drivers can accept delivery requests and mark orders as delivered. Store owners can manage products and fulfillment decisions, while admin flows provide broader visibility over platform activity.

This project is not just a storefront UI. It includes:
- Role-based authentication
- Backend product synchronization
- Persistent order tracking
- Payment session creation
- Webhook-driven payment confirmation
- Delivery assignment and completion lifecycle
- Cross-device data consistency

## Technical Stack

### Mobile App

- Expo
- React Native
- React Navigation
- Zustand
- Supabase JS client

### Backend

- Node.js
- Express
- TypeScript
- Prisma ORM

### Database and Auth

- Supabase Postgres
- Supabase Auth

### Payments

- PayMongo Checkout Sessions
- PayMongo webhook verification and payment reconciliation

## Architecture Overview

The project is split into two main parts:

### 1. Mobile Frontend

The mobile app lives in `src/` and is responsible for:
- Rendering the customer, driver, store owner, and admin experiences
- Managing UI state with Zustand
- Calling backend APIs for products, orders, fulfillment, and payment status
- Using Supabase Auth sessions to attach JWTs to protected backend requests

### 2. Backend API

The backend lives in `backend/` and is responsible for:
- Serving product data from the database
- Creating payment orders and PayMongo checkout sessions
- Verifying and processing PayMongo webhook events
- Enforcing role-protected fulfillment endpoints
- Persisting delivery lifecycle state in the database

## Repository Structure

### Root

- `src/` mobile app source
- `backend/` backend API and Prisma schema
- `docs/` project-specific supporting documentation

### Mobile folders

- `src/screens/` role-specific screens and user flows
- `src/stores/` Zustand stores for application state
- `src/api/` fetch wrappers and service-layer API calls
- `src/navigation/` app navigators and role routing
- `src/data/` local seed/catalog data and image mappings
- `src/components/` shared UI components

### Backend folders

- `backend/src/index.ts` main Express server
- `backend/src/auth/` auth and role middleware
- `backend/src/routes/` route definitions
- `backend/src/controllers/` controller logic
- `backend/src/seed/` product seed and sync scripts
- `backend/prisma/schema.prisma` data model

## Main Engineering Problems Solved

### 1. Product Sync Across Devices

Originally, product data was stored locally in Zustand and seeded from static files. This created a device-local truth problem: deleting or changing products on one device did not affect another device.

This was solved by:
- Adding a `Product` model to the backend database
- Creating `/products` and `/store/products` endpoints
- Updating the mobile product store to fetch from backend as source of truth
- Keeping local product data only as a visual/template fallback

Result:
- Store owner product changes persist server-side
- Customer and store owner views can refetch and stay in sync

### 2. Local Asset Images With Database Products

The project had final approved product images inside `src/assets/products`, but backend product rows did not carry those image assets directly.

This was solved by:
- Syncing product records to the backend with stable SKUs
- Mapping backend products back to local asset images using SKU and product metadata
- Merging remote product records with local product templates in the mobile app

Result:
- Product content comes from the database
- Final approved visuals still come from bundled app assets

### 3. Payment Persistence and Confirmation

The system needed real digital payment flow instead of fake local status changes.

This was solved by:
- Creating backend payment order rows
- Creating PayMongo checkout sessions from the backend
- Saving PayMongo session IDs in the database
- Polling backend order payment state from the mobile app
- Processing PayMongo webhooks to mark orders and payment rows as paid

Result:
- Payment state is backed by the database
- Mobile app reflects real payment results instead of local simulation

### 4. Secure Webhook Processing

PayMongo webhook payloads were initially not parsed correctly, and payment confirmation was not reliable.

This was solved by:
- Using raw body middleware specifically for the webhook route
- Verifying the `Paymongo-Signature`
- Parsing the real event shape from PayMongo
- Adding idempotency using `webhook_events.event_id`
- Safely handling duplicate webhook deliveries and race conditions

Result:
- Payment reconciliation is reliable
- Duplicate events do not corrupt order state

### 5. Fulfillment State in the Database

Delivery state originally lived only in mobile Zustand stores. That meant driver assignment and delivery completion did not persist across users or devices.

This was solved by:
- Extending `PaymentOrder` with fulfillment fields:
- `fulfillmentStatus`
- `driverId`
- `approvedAt`
- `assignedAt`
- `deliveredAt`
- Adding fulfillment endpoints on the backend
- Updating mobile driver and store owner actions to call the backend first

Result:
- Driver acceptance and delivery are now persisted in the database
- Backend logs and database rows are the source of truth

## User Roles and Flows

### Customer

Customer capabilities:
- Sign in using Supabase-backed role login
- Browse products
- Add items to cart
- Place orders
- Pay with COD, GCash, or Maya
- View active and historical orders
- Track order and payment status

Relevant frontend areas:
- `src/screens/shop/`
- `src/screens/profile/`

### Driver

Driver capabilities:
- Sign in with driver profile
- View delivery requests
- Accept a pending delivery request
- Mark delivery as completed
- View assigned deliveries

Relevant frontend areas:
- `src/screens/driver/`
- `src/stores/driverOrdersStore.ts`

Backend support:
- `PATCH /orders/:orderId/accept-driver`
- `PATCH /orders/:orderId/delivered`

### Store Owner

Store owner capabilities:
- Sign in with store owner profile
- View and manage products
- Assign drivers
- Monitor fulfillment state
- Review order-related status

Relevant frontend areas:
- `src/screens/storeOwner/`

Backend support:
- `GET /store/products`
- `DELETE /store/products/:id`
- `PATCH /store/products/:id/active`
- `PATCH /orders/:orderId/assign-driver`

### Admin

Admin capabilities:
- Sign in as admin
- Access broader operational screens
- View platform-level data and management screens

Relevant frontend areas:
- `src/screens/admin/`

## State Management Strategy

The project uses Zustand heavily. Each major concern has its own store.

Examples:
- `productStore` for product source-of-truth on device
- `catalogStore` for customer-facing filtered product catalog
- `orderStore` for orders, payment metadata, and fulfillment actions
- `supabaseAuthStore` for auth session tokens
- `profileStore` for role/profile loading
- `driverOrdersStore` for driver-specific derived order lists

This structure keeps state modular while still allowing different parts of the app to react to shared backend-driven data.

## Authentication Model

Authentication is based on Supabase Auth.

The app uses a single role-based login screen where the user selects a role and signs in with Supabase credentials. After login:
- the session is persisted locally
- the profile row is fetched from `public.profiles`
- the app role is derived from the database profile
- backend requests include `Authorization: Bearer <supabase access token>`

This avoids trusting local role toggles and moves authorization to backend-verified profile data.

## Backend API Design

The current backend is intentionally simple and direct. The Express server defines routes in a mostly centralized structure, with product routes split into controller/router files and payment/fulfillment logic kept in `backend/src/index.ts`.

Important backend endpoints include:
- `GET /products`
- `GET /store/products`
- `POST /payments/checkout`
- `GET /orders/:backendOrderId`
- `PATCH /orders/:orderId/assign-driver`
- `PATCH /orders/:orderId/accept-driver`
- `PATCH /orders/:orderId/delivered`
- `POST /webhooks/paymongo`

This design favors shipping a reliable demo and enforcing business correctness first before introducing architectural complexity.

## Database Model

Key models:

### Product

Represents product catalog rows used by customer and store owner flows.

Important fields:
- `name`
- `priceCents`
- `category`
- `sku`
- `stock`
- `isActive`
- `deletedAt`

### PaymentOrder

Represents the main business order record.

Important fields:
- local order references
- payment status
- fulfillment status
- assigned driver
- delivery timestamps

### PaymongoPayment

Stores payment session information and PayMongo identifiers.

### WebhookEvent

Stores processed PayMongo event payloads for idempotency and traceability.

### Profile

Stores role information linked to Supabase users.

## Deployment and Build

### Mobile

Build system:
- Expo / EAS Build

Android APK profile:
- `demo`

Important public build-time environment variables:
- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`
- `EXPO_PUBLIC_API_BASE_URL`

### Backend

The backend is deployed separately and depends on:
- Supabase database
- Supabase auth configuration
- PayMongo keys and webhook secret

## Notable Technical Decisions

### Why use backend products but local images

The project needed true backend sync for products, but the final approved visual assets already existed in the app bundle. The chosen approach was to let the database control business data and let the mobile app resolve presentation assets locally.

This keeps:
- synchronization correct
- assets stable
- APK visuals high quality

### Why keep Zustand

The app already had extensive Zustand-based screen flows. Replacing it would create unnecessary risk. The practical decision was to keep Zustand and progressively move the data source of truth from local-only state to backend-backed state.

### Why keep a simple backend structure

The backend is still understandable as a demo-hardening codebase. Complex abstractions were intentionally avoided so the team could iterate quickly while validating flows like checkout, webhook reconciliation, and delivery lifecycle.

## Current System Strengths

- End-to-end payment flow exists and is backend-backed
- Fulfillment state persists in the database
- Product catalog sync works across devices
- Role-based access is enforced on the backend
- Webhook handling is signature-verified and idempotent
- Mobile app uses final bundled product visuals

## Current Constraints

- Backend still has a large `index.ts` and could later be split into modules
- Some older UI areas still rely on historical local patterns
- Existing TypeScript errors in unrelated screens/components remain in the repo
- The architecture is production-leaning for demo scope, but not yet fully enterprise-modular

## Portfolio Value

This project demonstrates:
- Full-stack mobile engineering
- Role-based product and fulfillment workflows
- Real payment integration with webhook reconciliation
- Multi-device synchronization
- Authenticated API design
- Database-backed lifecycle state management
- Practical migration from local demo data to backend source of truth

It shows strong ownership across frontend, backend, database design, and operational debugging, especially in areas where real-world systems often break:
- webhook parsing
- duplicate event handling
- cross-device sync
- payment state consistency
- environment/build configuration

## Key Files For Review

Mobile:
- `src/stores/productStore.ts`
- `src/stores/catalogStore.ts`
- `src/stores/orderStore.ts`
- `src/stores/driverOrdersStore.ts`
- `src/api/apiClient.ts`
- `src/api/ordersService.ts`
- `src/api/paymentsService.ts`
- `src/navigation/RootNavigator.tsx`
- `src/data/products.ts`
- `src/data/productImages.ts`

Backend:
- `backend/src/index.ts`
- `backend/src/routes/products.routes.ts`
- `backend/src/controllers/products.controller.ts`
- `backend/src/auth/requireSupabaseUser.ts`
- `backend/src/auth/requireRole.ts`
- `backend/prisma/schema.prisma`
- `backend/src/seed/syncProductsFromMobileSeeds.ts`

## One-Line Portfolio Description

ConstructGo is a full-stack multi-role hardware ordering and delivery platform built with Expo React Native, Node.js, Prisma, Supabase, and PayMongo, featuring backend-synced products, webhook-confirmed payments, and database-persisted fulfillment workflows.
