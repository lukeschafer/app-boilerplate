# MicroSaaS Boilerplate Framework Guide for AI Agents (Gemini & Claude Code)

This document is the single authoritative reference for AI models (Gemini, Claude Code, Cursor, Codex) building or modifying microSaaS applications based on this boilerplate.

---

## 1. Core Architecture & Stack

- **Platform**: 100% Native Cloudflare (Workers, Pages, D1 Database, Cloudflare Email Sending, Cloudflare Turnstile, IDPFlare OIDC).
- **Frontend**: Vite + React SPA in `src/ui/`. Hot-reloading dev server runs on `http://localhost:5173` with proxying `/api` requests to port `8787`.
- **Backend API**: Hono on Cloudflare Worker in `src/api/`. Port `8787` for local development.
- **Database**: Cloudflare D1 SQL. All migrations must be placed in `./migrations/*.sql` (e.g. `./migrations/0000_initial.sql`).
- **Icons**: `lucide-react`. **Do NOT use emojis** anywhere in the code, UI, CLI scripts, or documentation.

---

## 2. Single Source of Truth for Branding & Design

All app branding is configured in a single file: `src/config/branding.ts`.

When updating app identity or theme:
1. Modify `src/config/branding.ts` (app name, tagline, domain, support email, palette choice, default mode).
2. Do NOT hardcode colors or app names inside components. Always consume from `branding.ts` or CSS custom properties defined in `src/theme/theme.css`.

### Design Guidelines & Anti-AI-isms
- Keep design sleek, modern, clean, and minimalist.
- **Strictly NO 'ai-isms'**: Avoid superfluous techy badges, flowery adjectives, or terms like "AI-Powered", "Enterprise-Grade", "Blah-Ready".
- Use clean typography (Inter / Outfit font stack) with generous white space and crisp borders.

---

## 3. Cloudflare Turnstile Configuration & Environments

- **Local Dev & Branch Deployments**:
  - Site Key: `1x00000000000000000000AA`
  - Secret Key: `1x0000000000000000000000000000000AA`
- **Production**: Uses site key and secret key set in `src/config/branding.ts` or Worker environment variables.
- Always wrap Turnstile rendering in `src/ui/components/Turnstile.tsx` and server verification in `src/api/middleware/turnstile.ts`.

---

## 4. Branch Deployments with `@idpflare/cf-branch-wrangler`

- For git preview branch deployments, use `npm run branch-deploy`.
- `@idpflare/cf-branch-wrangler` provisions isolated Cloudflare D1/KV branch resources automatically.

---

## 5. Resource Allocation Discipline

1. **D1 First**: Store all relational data in D1.
2. **Logos / Avatars**: Store small image assets as Base64 strings in D1 table `media` and serve via `/api/media/:id` with header `Cache-Control: public, max-age=31536000, immutable`.
3. **R2 Storage**: Use R2 ONLY if there is a demonstrated need for large file uploads (>2MB per file).
4. **Durable Objects**: Use DO ONLY if real-time web-socket collaboration is required.
5. **KV**: Use KV ONLY for high-throughput rate-limiting or key-value caches.

---

## 6. Emailing & Help System

- **Outbound Email**: Use Cloudflare Email Sending (`env.SEB` binding in Worker).
- **Inbound Email**: Use Cloudflare Email Routing pointing to the support email defined in `branding.ts`.
- **Help Endpoint**: `POST /api/help` validates Turnstile, attaches user ID/email if logged in, logs to D1 `help_requests`, and sends notification via `env.SEB`.

---

## 7. Identity Provider (IDPFlare)

- IDPFlare (`idpflare.com`) provides OIDC authentication.
- Reference `idpflare.md` for spinning up an IDPFlare instance.
- Client authentication uses OIDC PKCE flow in `src/ui/lib/oidc.ts`.

---

## 8. GDPR Compliance Rules

Every application created from this framework must comply with GDPR:
- Provide accessible Privacy Policy (`/privacy`) and Terms of Service (`/terms`).
- Implement user data export endpoint: `GET /api/gdpr/export`.
- Implement account deletion endpoint: `DELETE /api/gdpr/account`.
- Do not inject third-party cookies or intrusive tracking scripts.
