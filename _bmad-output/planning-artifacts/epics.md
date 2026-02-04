---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories']
inputDocuments: ['prd.md', 'architecture.md']
---

# Kazas - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for Kazas, decomposed from the PRD and Architecture data.

## Requirements Inventory

### Functional Requirements Map
**FR1:** Guest Grid -> **Epic 2**
**FR2:** Villa Detail -> **Epic 2**
**FR3:** Airbnb Redirect -> **Epic 2**
**FR4:** Audit Form -> **Epic 3**
**FR5:** Lead Qualification -> **Epic 3**
**FR6:** Confirmation/Email -> **Epic 3**
**FR7:** Service Pillars -> **Epic 1**
**FR8:** Before/After Visuals -> **Epic 1**
**FR9:** Trust Badges -> **Epic 1**
**FR10:** Admin Notification -> **Epic 3**
**FR11:** Contact Form -> **Epic 1**

## Epic List

### Epic 1: Brand Foundation & Service Discovery
**Goal:** Establish the "Luxe Caribéen" digital presence. Users can trust the brand, view service pillars, and contact the agency.
**Value:** Builds the "Trust Validator" required for any conversion.
**Includes:** Project Setup, Shadcn/ui Design System, Landing Page, Service Pages.
**FRs covered:** FR7, FR8, FR9, FR11.

#### Story 1.1: Project Setup & Design System
As a Developer,
I want to initialize the Next.js 15 project with Supabase and the "Luxe Caribéen" design system,
So that I have a solid, consistent foundation for building the UI components.

**Acceptance Criteria:**
**Given** a fresh development environment
**When** I initialize the project using `create-next-app`
**Then** the project should run with Next.js 15, TypeScript, and Tailwind CSS
**And** Shadcn/ui should be installed with the verified color palette (Inter/Outfit fonts configured)
**And** Supabase environment variables should be configured in `.env.local`
**And** The project structure should match the Architecture Document (src/app, src/components/features, etc.)

#### Story 1.2: Global Layout & Navigation
As a Guest,
I want to see a responsive header and footer on every page,
So that I can easily navigate between the Home, Portfolio, and Services sections.

**Acceptance Criteria:**
**Given** I am on any page of the site
**When** I view the Header
**Then** I should see the Kazas Logo and navigation links (Home, Villas, Services, Contact)
**And** On mobile, the menu should collapse into a "Hamburger" or accessible drawer
**And** The Footer should display legal links and social icons
**And** The layout should correspond to the "Luxe" aesthetic (consistent spacing/typography)

#### Story 1.3: Landing Page Core (Hero & Value)
As a Guest,
I want to see a stunning, high-performance Hero section immediately upon loading,
So that I understand the "Luxe Caribéen" value proposition within 2.5 seconds.

**Acceptance Criteria:**
**Given** I visit the root URL (`/`)
**When** the page loads
**Then** the LCP (Largest Contentful Paint) must happen within 2.5s (using `next/image` priority)
**And** I should see the primary Hero Headline and a "Book a Villa" CTA
**And** The introductory value proposition text should be legible and properly typographed

#### Story 1.4: Service Showcase & Trust Signals
As a Property Owner,
I want to see detailed service pillars and "Before/After" renovation examples,
So that I can trust Kazas with my property management.

**Acceptance Criteria:**
**Given** I am scrolling the Landing Page (or Services Page)
**When** I view the "Services" section
**Then** I should see distinct cards/sections for "Renovation", "Management", and "Concierge"
**And** I should be able to interact with a "Before/After" image comparison slider (FR8)
**And** I should see Verified Trust Badges (Superhost, etc.) displayed prominently

#### Story 1.5: Contact Feature
As a Potential Lead,
I want to fill out a simple contact form,
So that I can get in touch for general inquiries.

**Acceptance Criteria:**
**Given** I am on the Contact section
**When** I submit the form with valid Name, Email, and Message
**Then** I should see a success "Toast" notification
**And** The data should be sent to the server via a Next.js Server Action
**And** (MVP) The server should log the inquiry (Admin Email notification logic to be stubbed or implemented if simple)

### Epic 2: The "Luxe" Portfolio Experience
**Goal:** Guests can browse curated villas with high-fidelity visuals and seamless Airbnb redirection.
**Value:** Showcases the "Product" and enables Guest Validation.
**Includes:** Portfolio Grid, Property Details, Image Gallery.
**FRs covered:** FR1, FR2, FR3.

#### Story 2.1: Portfolio Data Model & Seeding
As a Developer,
I want to establish the `villas` database schema and seed it with high-quality dummy data,
So that the frontend components have realistic content to display.

**Acceptance Criteria:**
**Given** the Supabase database
**When** I run the migration script
**Then** a `villas` table should exist with columns: `id`, `slug`, `title`, `description`, `images` (array), `price_per_night`, `location`, `airbnb_url`, `amenities` (jsonb)
**And** RLS policies should allow Public Read access
**And** The seed script should populate 5 "Luxe" villas with varied attributes

#### Story 2.2: Villa Grid Component
As a Guest,
I want to view a beautiful grid of villas on the Portfolio page,
So that I can browse available properties.

**Acceptance Criteria:**
**Given** I am on the `/portfolio` page
**When** the page loads
**Then** I should see a grid of Villa Cards
**And** Each card should display the thumbnail, title, location, and "From X€/night"
**And** Hovering over a card should trigger a subtle "Luxe" animation (zoom or shadow)
**And** Clicking a card should navigate to `/portfolio/[slug]` via Next.js Link

#### Story 2.3: Villa Detail Page & Gallery
As a Guest,
I want to see deep details and large images for a specific villa,
So that I can decide if it fits my vacation needs.

**Acceptance Criteria:**
**Given** I am on a specific Villa Detail page
**When** I view the content
**Then** I should see a full-width Hero image and a masonry/grid gallery of other images
**And** I should see the full description, list of amenities, and location details
**And** The page metadata (Title/Description) should be dynamically generated for SEO

#### Story 2.4: Booking Redirection (Conversion)
As a Guest,
I want to easily book the villa on Airbnb,
So that I can secure my dates on a trusted platform.

**Acceptance Criteria:**
**Given** I am on a Villa Detail page
**When** I click the primary "Book on Airbnb" button
**Then** I should be redirected to the specific Airbnb listing URL in a new tab
**And** The link should use `rel="noopener noreferrer"` for security
**And** The button should be sticky or persistently visible on mobile

### Epic 3: Owner Acquisition Engine (Lead Gen)
**Goal:** Convert owners into qualified leads via the multi-step "Performance Audit".
**Value:** The core business growth engine.
**Includes:** Multi-step Form, Server Actions, Email Notifications (Admin).
**FRs covered:** FR4, FR5, FR6, FR10.

#### Story 3.1: Lead Database & RLS
As a Developer,
I want to create the secure `audit_leads` table,
So that I can store sensitive owner information safely.

**Acceptance Criteria:**
**Given** the Supabase database
**When** I run the migration
**Then** the `audit_leads` table should exist with fields: `id`, `owner_name`, `email`, `phone`, `property_address`, `details` (jsonb), `status` (new/contacted)
**And** RLS policies should enabled: INSERT for Public (Anon), SELECT for Admin Service Role ONLY (No public read)

#### Story 3.2: Multi-Step Audit Form (UI)
As a Property Owner,
I want to answer questions about my villa in a guided, multi-step interface,
So that I don't feel overwhelmed by a long form.

**Acceptance Criteria:**
**Given** I am on the Audit Request page
**When** I interact with the form
**Then** I should see a "Wizard" style layout (Step 1: Location, Step 2: Property Details, Step 3: Contact)
**And** I should not be able to proceed to the next step without valid input (Client-side validation via Zod)
**And** The progress should be visually indicated (e.g., Progress Bar)

#### Story 3.3: Form Submission & Notification (Server Action)
As a Property Owner,
I want to submit my audit request and know it was received,
So that I can expect a response from Kazas.

**Acceptance Criteria:**
**Given** I have completed the Audit Form
**When** I click "Submit Request"
**Then** the data should be validated on the server (Server Action)
**And** The data should be inserted into `audit_leads`
**And** An email notification should be simulated/sent to the Admin (console log or Resend stub)
**And** I should be redirected to a Success Page

#### Story 3.4: Success Confirmation Page
As a Property Owner,
I want to see a reassuring confirmation message after submission,
So that I know my request is being processed.

**Acceptance Criteria:**
**Given** I have just submitted a valid Audit Request
**When** I land on the Success Page
**Then** I should see a "Thank You" message and "What happens next" explanation
**And** (Design Refinement) The page should maintain the "Luxe" aesthetic to keep trust high
**And** There should be a "Back to Home" button
