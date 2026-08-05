# MicroSaaS Framework Guide for AI Agents (Gemini & Claude Code)

This document is the single authoritative reference for AI models (Gemini, Claude Code, Cursor, Codex) building or modifying SaaS applications based on this boilerplate.

---

## 1. Core Principles & Philosophy

- **This is a SaaS Application Boilerplate**: The generated code and public UI represent the target SaaS product itself. **NEVER** output copy or metadata referring to "boilerplate", "framework", "template", or underlying tech stack infrastructure.
- **Zero Tech Stack Name-Dropping in UI/Legals**: Public pages (Landing, Pricing, Privacy Policy, Terms of Service, Dashboard) must **NEVER** mention technical names like Cloudflare, Workers, D1, IDPFlare, Turnstile, Hono, or Vite.
- **Zero 'AI-isms' & Fake Badges**: Strictly avoid badges like "Cloudflare Edge Native", flowery adjectives, or terms like "AI-Powered", "Enterprise-Grade", "Blah-Ready".
- **Strictly NO Emojis**: Use `lucide-react` icons throughout the UI and clean ASCII formatting in CLI scripts.
- **Support Email Privacy**: The `supportEmail` configured in `src/config/branding.ts` is strictly a backend recipient for support/GDPR emails. **NEVER** expose the plain text support email address on public UI pages.

---

## 2. Branding & Single Source of Truth

All app identity is configured in a single file: `src/config/branding.ts`.

When updating app identity or theme:
1. Modify `src/config/branding.ts` (app name, tagline, description, domain, support email, palette choice, default mode).
2. Do NOT hardcode colors or app names inside components. Consume from `branding.ts` or CSS custom properties defined in `src/theme/theme.css`.

---

## 3. Page & Content Guidelines

### Landing Page
- Hero section uses `BRANDING.appName`, `BRANDING.tagline`, and `BRANDING.description`.
- Feature section contains exactly 3 placeholder feature cards:
  - Title: `Feature 1`, Subline: `Insert Feature Subline Here`
  - Title: `Feature 2`, Subline: `Insert Feature Subline Here`
  - Title: `Feature 3`, Subline: `Insert Feature Subline Here`
- Product preview uses realistic SaaS metric mockups (Active Users, Monthly Recurring Revenue, System Status), avoiding raw tech log metrics.

### User State & Dashboard
- Default state is **logged out** (`currentUser = null`).
- Authenticated user state is required to view the workspace dashboard.
- Do NOT render admin developer screens, tech stack debug cards, or live palette switchers in user-facing dashboards.

### Legal Pages (Terms & Privacy Policy)
- Provide comprehensive, professional, realistic SaaS agreements.
- GDPR Privacy Policy must feature "Request My Data" and "Erase Account Data" controls that dispatch request emails to `supportEmail`.

---

## 4. Technical Architecture

- **Frontend**: Vite + React SPA in `src/ui/`.
- **Backend API**: Hono on Cloudflare Worker in `src/api/`.
- **Database**: Cloudflare D1 SQL. All migrations belong in `./migrations/*.sql` (e.g. `./migrations/0000_initial.sql`).
- **Turnstile Verification**: Handled via `src/ui/components/Turnstile.tsx` and validated on backend. Testing key `1x00000000000000000000AA` is used for dev and preview branch builds.
- **Branch Deployments**: Use `npm run branch-deploy` (`@idpflare/cf-branch-wrangler`).
