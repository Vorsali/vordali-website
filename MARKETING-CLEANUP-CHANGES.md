# Vordali Website Marketing Cleanup — 2026-08-01

## Completed in this build

- Removed the retired merchant dashboard, authentication, onboarding, Stripe Billing, and merchant API implementation from the public website repository.
- Preserved only the public problem-submission and product-waitlist APIs.
- Reworked the header so Sign In and Launch Commit go directly to the canonical app at `commit.vordali.com` without checking a duplicate website session.
- Added direct legacy redirects for old login, registration, dashboard, billing, onboarding, and subscription URLs.
- Made Vercel Analytics and Speed Insights consent-aware. They now load only after the visitor accepts optional analytics.
- Updated the Cookie Policy to match the consent implementation.
- Removed the global homepage canonical tag so inner pages do not incorrectly canonicalize to `/`.
- Updated pricing signup links to go directly to Commit while preserving Starter or Pro plan intent.
- Hid the Enterprise card for the current launch and centered the two public plans.
- Replaced outdated “Stripe Billing ready / before checkout is wired” copy with accurate live-product messaging.
- Added `.gitignore` and `.npmrc`.
- Changed the requested Node runtime from 24.x to the stable 22.x line to remove the Vercel runtime override mismatch.
- Removed the committed TypeScript build cache.

## Before pushing

Run locally:

```bash
npm install
npm run build
```

This will create the missing `package-lock.json`. Commit that lockfile with the rest of these changes.

## Required production environment variables

The marketing site still needs the Supabase URL and service-role key only for the public problem and waitlist submission endpoints:

- `NEXT_PUBLIC_SUPABASE_URL` or `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

The marketing site should no longer need Stripe secrets, Stripe webhook secrets, or merchant-auth environment variables.
