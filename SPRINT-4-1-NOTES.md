# Sprint 4.1 — Enrollment Flow Completion

This release completes the current merchant enrollment segment:

- Session-aware marketing header: authenticated users see Dashboard and Sign Out.
- Reliable plan selection navigation using a full browser transition.
- Stripe Checkout remains initiated from `/checkout` through `/api/billing/checkout`.
- New-account creation no longer attempts to write a nonexistent `organization_members.email` column.
- Idempotent schema-alignment migration covering the fields used by Sprints 2–4.

## Required database step

Run:

`supabase/migrations/010_merchant_schema_alignment.sql`

The migration is safe to run even if some or all fields already exist.

## Test sequence

1. Sign in.
2. Confirm the header shows Dashboard and Sign Out.
3. Open `/choose-plan`.
4. Choose Starter or Pro.
5. Confirm `/checkout` opens instead of returning to `/choose-plan`.
6. Click Continue to secure checkout.
7. Confirm Stripe Sandbox opens with the selected price.
8. Complete payment using Stripe test card `4242 4242 4242 4242`.
9. Confirm the success page checks subscription status and routes to business onboarding.
