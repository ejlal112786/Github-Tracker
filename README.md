# GitHub Tracker

Understand your GitHub activity. Track your progress. Improve your repositories.

**Status: Phase 1 of 10 — foundation & UI preview.** The landing page, sign-in
shell, and dashboard preview are functional. Authentication, GitHub API sync,
and security scanning are intentionally NOT implemented yet; all dashboard
figures are clearly labeled **sample data**.

## Stack

- Next.js 15 (App Router) + TypeScript (strict)
- Tailwind CSS v4 + shadcn/ui-style components + Lucide icons
- Recharts (analytics previews)
- Vitest + Testing Library (unit tests)
- Planned later: Supabase (auth + DB), Vercel deployment

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

No environment variables are required for Phase 1. Optional future config is
documented in `.env.example` (copy to `.env.local`; never commit secrets).

## Validation

```bash
npm run lint        # ESLint (next/core-web-vitals + typescript)
npm run typecheck   # tsc --noEmit
npm test            # vitest run
npm run build       # production build
```

## Routes (Phase 1)

| Route | Purpose |
| --- | --- |
| `/` | Landing page (hero, features, dashboard teaser, privacy) |
| `/sign-in` | Sign-in shell — ONLY GitHub OAuth + email verification (OTP/magic link). No passwords, no Google. |
| `/sign-in/github-placeholder` | Honest placeholder where the real OAuth redirect will live (Phase 2) |
| `/dashboard` | Overview preview (sample data, visibly badged) |
| `/dashboard/activity` | Trend + event feed preview (sample data) |
| `/dashboard/repositories` | Repo list preview (sample data) |
| `/dashboard/security` | Empty state — scanning ships in a later phase |
| `/dashboard/profile` | Empty state — profile links after Phase 2 sign-in |
| `/dashboard/settings` | Empty state — settings require an account |
| `/privacy`, `/terms`, `/contact` | Supporting pages (draft placeholders) |

## Product constraints (enforced by design)

- Sign-in methods: **GitHub OAuth** and **email verification (OTP / magic
  link)** only. No password auth, no Google sign-in.
- Entering a GitHub username/URL never proves account ownership; only OAuth
  can link an account.
- Sample data is always labeled (`SampleDataBadge`) and lives only in
  `lib/sample-data.ts`.
- Secrets are read centrally via `lib/env.ts` (`requireEnv` names the missing
  variable but never logs values) and configured through Vercel Environment
  Variables. Nothing secret is committed.

## Architecture notes

- `app/` — App Router pages; each route is small and composes shared blocks.
- `components/ui/` — low-level primitives (button, card, input, badge…).
- `components/` — app-wide blocks (header, footer, empty states, badges).
- `components/dashboard/` — dashboard shell, sidebar nav, widgets.
- `components/marketing/`, `components/auth/` — page-specific sections.
- `lib/` — utils, env validation, navigation config, sample data.
- `types/` — shared TypeScript interfaces.

Adding later phases should mean adding routes/APIs, not restructuring.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) (free Hobby plan).
3. Vercel auto-detects Next.js; no env vars are needed for Phase 1.
4. In later phases add the variables from `.env.example` under
   **Project Settings → Environment Variables**.

## Disclaimer

GitHub Tracker is an independent product and is not affiliated with, endorsed
by, or sponsored by GitHub, Inc.
