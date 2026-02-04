---
stepsCompleted: ['step-01-init', 'step-02-context', 'step-03-starter', 'step-04-decisions', 'step-05-patterns', 'step-06-structure', 'step-07-validation', 'step-08-complete']
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2026-02-04'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- **Lead Gen Core:** The system is primarily a "Lead Capture Engine" wrapped in a luxury brand. The "Audit Form" is the critical interactive component.
- **Visuals as Function:** High-res imagery is a functional requirement for trust. The architecture must prioritize media delivery (CDN, caching, formats).

**Non-Functional Requirements:**
- **Performance:** LCP < 2.5s is a hard constraint.
- **Mobile-First:** 80% traffic mobile means we need a "Mobile-First" CSS architecture (e.g. Tailwind).

**Scale & Complexity:**
- Primary domain: Web (Marketing + Lead Gen)
- Complexity level: Medium
- Estimated architectural components: ~15 (Pages + Interactive Forms + layout components)

### Technical Constraints & Dependencies
- **Next.js:** Mandated for SEO/SSR capabilities.
- **Supabase:** Implied for Database/Auth (based on tech stack pref).
- **Vercel:** Preferred for "Edge" performance.

### Cross-Cutting Concerns Identified
- Image Optimization Pipeline
- Lead Tracking (Pixels/Analytics)
- GDPR / Cookie Consent

## Starter Template Evaluation

### Primary Technology Domain
**Web Application** (Next.js / React Server Components)

### Starter Options Considered
- **T3 Stack:** Excellent for type-safety, but tRPC might be overkill for a simpler "Lead Gen" MVP.
- **Community Starters (e.g., michaeltroya):** Feature-rich (includes Shadcn), but higher maintenance risk.
- **Official Supabase Starter:** Best balance of features (Auth/DB preset) and stability.

### Selected Starter: Official Next.js + Supabase

**Rationale for Selection:**
We prioritize **Stability** and **Performance**. The official starter provides the necessary Supabase wiring (Auth, Cookies, Middleware) without optimizing for a different stack (like tRPC). We can easily add `shadcn/ui` for the "St-Barth" aesthetic.

**Initialization Command:**

```bash
npx create-next-app@latest -e with-supabase
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
- TypeScript (Strict Mode)
- Next.js 15 (App Router)

**Styling Solution:**
- Tailwind CSS (Standard)
- PostCSS

**Code Organization:**
- `/app` directory structure (Server Components)
- `/utils/supabase` for pre-configured clients (Server/Client/Middleware)

## Core Architectural Decisions

### Data Architecture
- **Database:** Supabase Postgres.
- **Schema Pattern:** 1:1 mapping of `auth.users` to `public.profiles`.
- **Row Level Security (RLS):** Enabled on ALL tables. "Select" public for portfolios, "Insert" public for Audit requests (Lead Gen).

### Authentication & Security
- **Auth Strategy:** Email Magic Links (Passwordless).
- **Session Management:** Supabase SSR (Cookies).

### API & Communication Patterns
- **Mutation Pattern:** Next.js Server Actions (for Forms).
- **Fetch Pattern:** React Server Components (Direct DB access).

### Frontend Architecture
- **Component System:** shadcn/ui.
- **Iconography:** lucide-react.
- **Font:** Google Fonts (Inter / Outfit) optimized via `next/font`.

## Implementation Patterns & Consistency Rules

### Naming Patterns
- **Database Tables/Columns:** `snake_case` (postgres standard).
- **Files & Directories:** `kebab-case` (ALWAYS).
- **React Components:** `PascalCase`.
- **API/Action Functions:** `camelCase` (verbPrefix).

### Structure Patterns
**Co-location Strategy:**
- Shared UI (Buttons, Inputs): `@/components/ui` (shadcn).
- Feature Components: `@/components/features/[feature-name]`.
- Logic/Hooks: Co-located with feature if unique, otherwise `@/hooks`.

### Process Patterns
**Mutation Pattern (Server Actions):**
1. VALIDATE input with Zod on Server.
2. MUTATE via Supabase Client.
3. REVALIDATE path (`revalidatePath`).
4. RETURN standard response (`{success, error}`).

**Error Handling:**
- "Expected" errors (validation) -> Return to UI.
- "Unexpected" errors (db down) -> Throw -> `error.tsx` boundary.

## Project Structure & Boundaries

### Complete Project Directory Structure
```
Kazas/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
├── src/
│   ├── app/                    # App Router (Pages & Layouts)
│   │   ├── (public)/           # Marketing Site Routes
│   │   │   ├── page.tsx        # Home
│   │   │   ├── audit/          # Audit Funnel
│   │   │   └── portfolio/      # Villa Grid
│   │   ├── layout.tsx          # Root Layout (Fonts/Providers)
│   │   ├── globals.css         # Tailwind directives
│   │   └── api/                # Route Handlers (Webhooks only)
│   ├── actions/                # Server Actions (Mutations)
│   │   ├── audit.ts            # Audit Form submission logic
│   │   ├── auth.ts             # Magic Link logic
│   ├── components/
│   │   ├── ui/                 # Shadcn/ui (Button, Input, Card)
│   │   ├── features/           # Domains (AuditForm, VillaCard)
│   │   │   ├── audit/
│   │      └── portfolio/
│   │   └── layout/             # Header, Footer, Hero
│   ├── lib/
│   │   ├── supabase/           # Supabase Clients (SSR/Client)
│   │   └── utils.ts            # cn() helper
│   └── types/                  # Global TS Interfaces
└── public/                     # Static Assets
```

### Architectural Boundaries

**API Boundaries:**
- **External:** Supabase Auth & DB (via `lib/supabase`).
- **Internal:** Server Actions (in `src/actions`) are the ONLY way UI mutates data.

**Component Boundaries:**
- **UI Components:** "Dumb" (receive props, emit events). No business logic.
- **Feature Components:** "Smart" (manage state, call Server Actions).

## Architecture Validation Results

### Coherence Validation ✅
- **Stack Compatibility:** Next.js 15 (RFC) + Supabase (SSR) is a proven, high-performance pairing.
- **Pattern Alignment:** "Server Actions" for mutations aligns perfectly with "Lead Gen Forms".

### Requirements Coverage Validation ✅
- **St-Barth Visuals:** Addressed by `next/image` and CDN strategy.
- **Audit Funnel:** Addressed by Server Action mutation pattern.
- **MVP limits:** No complex booking engine = architecture is lean.

### Architecture Completeness Checklist
- [x] Tech Stack defined (Next.js, Supabase, Tailwind).
- [x] Project Structure defined (Feature-based).
- [x] Naming Conventions locked (Snake/Kebab/Camel).
- [x] First Step identified (npx create-next-app).

### Architecture Readiness Assessment
**Overall Status:** READY FOR IMPLEMENTATION
**Confidence Level:** High
