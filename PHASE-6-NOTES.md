# Phase 6 — Adaptive Merchant Experience

## Included
- Corrected verification/login routing and removed the obsolete `owner_user_id` insert.
- Minimal enrollment records are created before checkout; full business setup remains after payment.
- Email confirmation callback can establish the Vordali session and continue directly to checkout.
- Restored original Vordali circular logo, desktop hero, and mobile hero assets.
- Added animated logo ring glow, sweep, and reduced-motion support.
- Added business type and revenue-risk model onboarding fields.
- Added the animated Revenue Recovery Tank to pricing/home ROI and merchant dashboard.
- Dashboard language adapts to prepared orders, phone orders, invoices, deposits, and appointment no-shows.

## Required database step
Run:
`supabase/migrations/012_adaptive_merchant_experience.sql`

## Supabase Auth URLs
Site URL: `https://www.vordali.com`
Allowed redirect: `https://www.vordali.com/auth/callback`

## Test flow
Pricing → register → verify email → checkout → Stripe sandbox → onboarding → adaptive dashboard.
