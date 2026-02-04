---
stepsCompleted: ['step-02-discovery', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
inputDocuments: ['product-brief-Kazas-2026-02-04.md']
workflowType: 'prd'
classification:
  projectType: 'Web Application'
  domain: 'Hospitality / Real Estate'
  complexity: 'Medium'
  projectContext: 'Greenfield'
---

# Product Requirements Document - Kazas

**Author:** Cyril
**Date:** 2026-02-04

## Success Criteria

### User Success
- **Owners:** Measurable increase in rental yield (ROI) and attaining "Superhost" status.
- **Guests:** Consistently high ratings (> 4.8/5 stars) and positive qualitative feedback.

### Business Success
- **Acquisition:** Sign 10 managed properties in Year 1.
- **Brand:** Establish Kazas as the reference for luxury management in Martinique.

### Technical Success
- **Performance:** Sub-2 second load times for key landing pages (Vital for conversions).
- **SEO:** Ranking on first page for "Villa luxe Martinique" within 6 months.
- **Reliability:** 99.9% distinct uptime for the marketing site.

### Measurable Outcomes
- 10 Qualified Leads per month via "Audit" form.
- 100% Owner Retention rate after Year 1.

## Product Scope

### MVP - Minimum Viable Product
- **Core Platform:** "Luxe Caribéen" standard marketing website.
- **Features:** Portfolio Grid, "Request Audit" Lead Funnel, Service Pillar pages.
- **Content:** High-res imagery, Trust signals (Superhost), Contact via WhatsApp.

### Growth Features (Post-MVP)
- **Direct Booking:** Integration with channel manager or direct booking engine to bypass OTAs.
- **Owner Reporting:** Automated PDF report generation.

### Vision (Future)
- **Kazas Club:** Exclusive members-only booking platform.
- **Owner App:** Real-time dashboard for property performance.

## User Journeys

### Journey 1: The "Yield-Seeker" Owner (Conversion)
**Persona:** Marc, 55, Paris. Owns a villa in Le François but is frustrated by low occupancy.
**Scenario:**
1.  **Discovery:** Marc lands on Kazas.fr via a LinkedIn ad about "High-Yield Management."
2.  **Impression:** He is immediately struck by the "Luxe Caribéen" aesthetic—it looks far more premium than his current agency.
3.  **Action:** He navigates to "Revenue Management" and sees the case studies.
4.  **Conversion:** He clicks "Request Performance Audit," fills in his villa details (Location, Pool, # of rooms).
5.  **Outcome:** He sees a "Success" message promising an expert review within 24h. He feels he is dealing with pros.

### Journey 2: The "Dream" Guest (Validation)
**Persona:** Sophie, 35, Montreal. Planning a luxury trip for 3 couples.
**Scenario:**
1.  **Browsing:** Sophie finds the Kazas site (via Instagram). She browses the "Portfolio" grid.
2.  **Selection:** She spots "Villa Horizon." The high-res photos and "Concierge Included" tag reassure her.
3.  **Booking:** She clicks "Book this Villa" and is redirected to the Airbnb listing (MVP scope).
4.  **Benefit:** The Kazas site served as a "Trust Validator" that pushed her to book on the OTA.

### Journey 3: The Kazas Ops Manager (Internal)
**Persona:** Julie, Head of Operations.
**Scenario:**
1.  **Notification:** Julie receives an email notification: "New Audit Request from Marc."
2.  **Review:** She opens the email (or CRM in future), sees the villa details.
3.  **Action:** She qualifies the lead (Good location!) and calls Marc immediately.

## Domain-Specific Requirements

### Compliance & Regulatory
-   **GDPR (EU):** Strict consent management for cookies and "Audit Form" data collection (Lead generation).
-   **French Consumer Law:** Mandatory legal notices (Mentions Légales) and transparent pricing display rules.

### Technical Constraints (Luxury Standard)
-   **Visual Performance:** Must support 4K imagery/video without compromising load speed (<2s). (Critical for "Luxe Caribéen" feel).
-   **Mobile-First Aesthetic:** 80% of traffic likely from Social Media (Instagram/LinkedIn) -> Mobile experience must be flawless.

### Risk Mitigations
-   **Brand Reputation:** "Superhost" claims must be verifiable to avoid "False Advertising" risks.
-   **Data Privacy:** High-Net-Worth owners are sensitive to privacy; address details must not be public on the site.

## Innovation & Novel Patterns

### Detected Innovation Areas
-   **Vertical Service Integration:** Bundling Architect/Renovation services with Property Management (typically separate vendors).
-   **"Trust-First" UX:** Using high-fidelity web design to simulate the "Luxe Caribéen" experience digitally before the physical stay.

### Validation Approach
-   **A/B Testing:** Test "Renovation" angles vs "Yield" angles in ads to see which hook works best.
-   **Conversion Rate:** If the "Luxe Caribéen" aesthetic works, visitor-to-lead conversion should exceed industry average (target > 5%).

## Web Application Specific Requirements

### Project-Type Overview
A "Luxe Caribéen" standard marketing website built as a Single Page Application (SPA) or optimized Multi-Page Application (MPA) for SEO.

### Technical Architecture Considerations
-   **SEO Strategy:** Server-Side Rendering (SSR) or Static Site Generation (SSG) is mandatory for indexing. (Next.js recommended).
-   **Responsive Design:** Fully responsive breakpoints (Mobile, Tablet, Desktop) with specific "Mobile-First" design system.
-   **Browser Support:** Support for last 2 major versions of Chrome, Safari (iOS/Desktop), and Firefox.

### Implementation Considerations
-   **Performance:** Core Web Vitals (LCP < 2.5s) optimization.
-   **Accessibility:** WCAG 2.1 AA compliance (contrast, alt tags).
-   **Analytics:** Integration with GA4 and Pixel for lead tracking.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy
**MVP Approach:** "The Launchpad" - A high-converting Marketing Site (Lead Gen) with manual fulfillment.
**Philosophy:** Build trust with design, capture leads with content. No complex tech (booking engine) initially.

### MVP Feature Set (Phase 1)
**Core User Journeys Supported:**
- Owner Discovery -> Audit Request
- Guest Discovery -> Redirect to Airbnb

**Must-Have Capabilities:**
- "Luxe Caribéen" Design System (Animations, Typography)
- Dynamic Portfolio Grid (CMS-driven)
- Multi-step "Audit" Lead Form with validation
- Service Detail Pages (Vision, Renovation, Management)

### Post-MVP Features

**Phase 2 (Growth - Year 1):**
- Direct Booking Engine integration
- Owner Login (PDF Repository)
- Blog / Martinique Guide (SEO Boost)

**Phase 3 (Expansion - Year 2+):**
- Members-only Club (Kazas Club)
- Proprietary Mobile App for Owners
- Dynamic Yield Dashboard

### Risk Mitigation Strategy
- **Technical Risks:** SEO ranking lag -> Mitigated by "Luxe Caribéen" brand ads on Social Media.
- **Market Risks:** Low trust in new agency -> Mitigated by "Audit" hook (free value) vs hard sell.
-   **Resource Risks:** Content production bottleneck -> Launch with 5 flagship villas max.

## Functional Requirements

### 1. Portfolio & Property Discovery
- FR1: Guest can view a curated grid of managed villas with high-res thumbnails.
- FR2: Guest can view a specific Villa Detail page with image carousel, amenities, and "Luxe Caribéen" style description.
- FR3: Guest can click "Book on Airbnb" to be redirected to the specific OTA listing (No internal booking logic).

### 2. Owner Acquisition (The Audit Funnel)
- FR4: Owner can access a multi-step "Performance Audit" form.
- FR5: Owner can input property criteria (Location, # Rooms, Pool status) to qualify the lead.
- FR6: Owner receives immediate on-screen confirmation + "Next Steps" email upon submission.

### 3. Service & Trust Content
- FR7: User can navigate between "Renovation," "Management," and "Concierge" service pillars.
- FR8: User can view "Before/After" transformation visual comparisons (Renovation proof).
- FR9: User can verify "Superhost" status via visible trust badges/links.

### 4. Operations & Notifications
- FR10: System sends an instant email notification to Kazas Admin for every Audit Request.
- FR11: System sends an email notification for generic "Contact Us" inquiries.

## Non-Functional Requirements

### Performance & Visual Experience
- **NFR1 (Visuals):** Largest Contentful Paint (LCP) must be < 2.5s even with 4K hero images (Use Next.js Image Optimization).
- **NFR2 (Smoothness):** Scroll animations/transitions must run at 60fps on mobile devices.

### Usability & Mobile-First
- **NFR3 (Responsive):** 100% of workflows ("Audit Form", "Villa Grid") must be fully functional on mobile viewports (375px+).
- **NFR4 (Accessibility):** Site must pass Lighthouse Accessibility audit with score > 90 (Legible contrast, aria-labels).

### Security & Privacy
- **NFR5 (Data):** Owner lead data (Name, Phone, Villa Address) must be encrypted in transit (TLS 1.2+).
- **NFR6 (Compliance):** Cookie consent banner must block tracking scripts until explicit user opt-in (GDPR).

### Reliability
- **NFR7 (Availability):** Marketing site must have 99.9% uptime (Vercel Edge Network recommended).
