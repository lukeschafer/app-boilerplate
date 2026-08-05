# MicroSaaS Edge Boilerplate Framework

A Cloudflare-native boilerplate framework for launching microSaaS applications built with Vite, React, Hono, Cloudflare Workers, Cloudflare D1, Cloudflare Email Sending, Cloudflare Turnstile, and IDPFlare OIDC.

---

## Features

- **Edge Architecture**: Runs 100% on Cloudflare Workers and D1 database.
- **Single Source Branding**: Single configuration file (`src/config/branding.ts`) controls app identity, domain, support email, color palette, and default theme mode.
- **5 Curated Color Palettes**: Light and Dark mode design system tokens (Slate/Indigo, Emerald/Mint, Obsidian/Steel, Sunset/Amber, Oceanic/Teal).
- **Zero AI-isms**: Clean UI using Lucide icons, Inter/Outfit typography, and zero emoji clutter.
- **Support & Helpdesk**: Integrated help Modal pre-filling authenticated user identity and dispatching support emails via Cloudflare Email Sending.
- **Cloudflare Turnstile Security**: Client-side widget rendering and server-side token validation, with automatic fallback testing keys for local dev and preview branch builds.
- **Branch Deployments**: `@idpflare/cf-branch-wrangler` integration (`npm run branch-deploy`) for automatic preview environment provisioning.
- **IDPFlare Single Sign-On**: Step-by-step setup guide (`idpflare.md`) for self-hosting IDPFlare OIDC servers on Cloudflare Workers.
- **GDPR Compliance**: Pre-built Privacy Policy, Terms of Service, data export (`GET /api/gdpr/export`), and account deletion (`DELETE /api/gdpr/account`).

---

## Quick Start Guide

### 1. Clone & Setup Project
```bash
git clone <your-repo-url> my-microsaas
cd my-microsaas
npm install
```

### 2. Run Interactive Setup Wizard
```bash
npm run setup
```
The setup wizard will prompt for:
1. Application Name & Domain
2. Target Support Email
3. Color Palette selection & Default Mode (light/dark)
4. Cloudflare Turnstile keys (press Enter to keep dev testing keys)
5. Automatically creates Cloudflare D1 database and runs local migrations.

### 3. Local Development
```bash
npm run dev
```
Starts concurrent development servers:
- **UI (Vite)**: `http://localhost:5173` (proxies `/api` calls to port 8787)
- **API (Wrangler Dev)**: `http://localhost:8787`

---

## Project Structure

```
.
├── .agents/
│   └── AGENTS.md                  # Guidance for AI Agents (Gemini & Claude Code)
├── migrations/
│   └── 0000_initial.sql           # D1 SQL Database Migrations
├── scripts/
│   └── setup.js                   # Interactive CLI setup wizard
├── src/
│   ├── api/                       # Worker API (Hono)
│   ├── config/                    # Single-source branding config (branding.ts)
│   ├── theme/                     # Palettes & CSS Design System
│   └── ui/                        # React Frontend (Vite SPA)
├── idpflare.md                    # IDPFlare self-hosting & setup guide
├── wrangler.jsonc                 # Cloudflare Worker configuration
└── vite.config.ts                 # Vite config with API proxy
```

---

## Deployment Commands

- **Local D1 Migration**: `npm run db:migrate:local`
- **Branch/Preview Deployment**: `npm run branch-deploy`
- **Production Deployment**: `npm run deploy`

---

## Documentation References

- [AI Agent Instructions](file://./.agents/AGENTS.md)
- [IDPFlare Setup Guide](file://./idpflare.md)
