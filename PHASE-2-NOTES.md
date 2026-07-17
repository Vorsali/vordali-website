# Phase 2 — Merchant Enrollment Foundation

## Included
- Merchant registration and login using Supabase Auth REST endpoints
- Email verification and password recovery screens
- Plan-aware registration from the public pricing page
- Starter and Pro plan chooser
- Server-side merchant account bootstrap
- Organization, member, and subscription records
- Subscription-gated dashboard routing
- Business onboarding form
- Merchant dashboard shell
- Stripe checkout placeholder that remains locked until verified billing is connected

## Required setup
1. Run `supabase/migrations/007_merchant_enrollment_foundation.sql` in Supabase SQL Editor.
2. Confirm these Vercel environment variables exist:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. In Supabase Auth, add these redirect/site URLs:
   - `https://www.vordali.com`
   - `https://www.vordali.com/login`
4. Deploy with Vercel Framework Preset set to Next.js and all build overrides off.

## Important
The dashboard intentionally remains inaccessible while the subscription status is `incomplete`. The next billing sprint will create Stripe Checkout Sessions and activate subscriptions only from signed Stripe webhooks.
