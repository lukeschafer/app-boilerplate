# MicroSaaS Edge Boilerplate Framework

A Cloudflare-native boilerplate framework for launching microSaaS applications built with Vite, React, Hono, Cloudflare Workers, Cloudflare D1, Cloudflare Email Sending, Cloudflare Turnstile, and IDPFlare OIDC.

---

## Features

- **Edge Architecture**: Runs 100% on Cloudflare Workers and D1 database.
- **Single Source Branding**: Single configuration file (`src/config/branding.ts`) controls app identity, domain, support email, color palette, and default theme mode.
- **15 Curated Color Palettes**: Light and Dark mode design system tokens across Slate and non-Slate base options (Indigo, Sapphire, Emerald, Amber, Violet, Rose, Cyan, Coral, Zinc/Purple, Midnight/Sky, Sandstone/Amber, Charcoal/Teal, Obsidian/Ruby, Nordic/Frost, Plum/Fuchsia).
- **Zero AI-isms**: Clean UI using Lucide icons, Inter/Outfit typography, and zero emoji clutter.
- **Support & Helpdesk**: Integrated help modal pre-filling authenticated user identity and dispatching support emails via Cloudflare Email Sending.
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
4. Cloudflare Turnflare keys (press Enter to keep dev testing keys)
5. Automatically creates Cloudflare D1 database and runs local migrations.

### 3. Local Development
```bash
npm run dev
```
Starts concurrent development servers:
- **UI (Vite)**: `http://localhost:5173` (proxies `/api` calls to port 8787)
- **API (Wrangler Dev)**: `http://localhost:8787`

---

## Identity Provider (OIDC / IDP) Setup Guide

To configure single sign-on (SSO) authentication using **IDPFlare** (or any standard OIDC provider like Auth0, Okta, Keycloak):

### 1. Register Client Application in IDP Dashboard
Create a new OIDC Client Application with the following settings:

| Setting | Production Value | Local Development Value |
| :--- | :--- | :--- |
| **Application Type** | Single Page Application (SPA) | Single Page Application (SPA) |
| **Grant Type** | Authorization Code (`authorization_code`) | Authorization Code (`authorization_code`) |
| **Auth Method** | PKCE (`S256`) - **No Client Secret** | PKCE (`S256`) - **No Client Secret** |
| **Response Type** | `code` | `code` |
| **Redirect URI** | `https://<your-domain>/auth/callback` | `http://localhost:5173/auth/callback` |
| **Post-Logout Redirect URI** | `https://<your-domain>/` | `http://localhost:5173/` |
| **Allowed Scopes** | `openid profile email` | `openid profile email` |

> **Security Note on Client Secrets**: You do **NOT** need a client secret. Single Page Applications (SPAs) run publicly in user web browsers where secrets cannot be safely kept. Instead, OAuth 2.0 / OIDC uses **PKCE (Proof Key for Code Exchange with S256)**, where the browser dynamically generates cryptographic verifiers for each login request.

### 2. Required Scopes & Claims

- **`openid`**: Required. Initiates OIDC flow and yields `id_token` and `sub` (unique user identifier).
- **`profile`**: Required. Claims user display details (`name`, `given_name`, `family_name`, `picture`).
- **`email`**: Required. Claims user contact details (`email`, `email_verified`).

### 3. Configure Client Credentials in Branding
Update `src/config/branding.ts` with your registered OIDC Client ID and Issuer URL:
```ts
export const BRANDING: BrandingConfig = {
  // ...
  oidcClientId: 'your-app-client-id',
  oidcIssuerUrl: 'https://idpflare.com', // or your self-hosted IDPFlare Workers URL
};
```

---

## Project Structure

```
.
├── .agents/
│   └── AGENTS.md                  # Guidance for AI Agents (Gemini & Claude Code)
├── migrations/
│   └── 0000_initial.sql           # D1 SQL Database Migrations
├── scripts/
│   ├── create-app.ps1             # PowerShell script to provision new app repos
│   └── setup.js                   # Interactive CLI setup wizard
├── src/
│   ├── api/                       # Worker API (Hono)
│   ├── config/                    # Single-source branding & pricing config
│   ├── theme/                     # Palettes & CSS Design System
│   └── ui/                        # React Frontend (Vite SPA)
├── create-app.ps1                 # App provisioner script
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
