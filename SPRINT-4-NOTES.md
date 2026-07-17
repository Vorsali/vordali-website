# Sprint 4 — Merchant onboarding and dashboard activation

## Included
- Expanded business onboarding profile
- Primary business location storage
- Support email and payment-link expiration defaults
- Editable Business Settings page
- Activated merchant dashboard experience
- Stripe Professional Price ID variable compatibility

## Required setup
Run `supabase/migrations/009_merchant_onboarding_dashboard.sql` in the Supabase SQL Editor before testing onboarding.

## Test path
1. Sign in with a verified merchant account.
2. Complete Stripe sandbox checkout.
3. Confirm the webhook marks the subscription active.
4. Complete `/onboarding/business`.
5. Confirm `/dashboard` loads.
6. Edit values at `/settings/business`.
