# Sprint 5 — Automatic Subscription Activation

## What this release adds

- Signed Stripe webhook verification
- Automatic subscription status synchronization into Supabase
- Lifecycle handling for checkout, subscription updates, cancellations, paid invoices, and failed invoices
- Stripe webhook event audit table
- Immediate post-checkout reconciliation using the returned Checkout Session ID
- Automatic routing to business onboarding after Stripe reports `active` or `trialing`

## 1. Run the Supabase migration

Run this file in the Supabase SQL Editor:

`supabase/migrations/011_stripe_webhook_activation.sql`

## 2. Create the Stripe webhook

In Stripe Sandbox/Test mode, create a webhook endpoint:

`https://www.vordali.com/api/billing/webhook`

Subscribe it to these events:

- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

Copy the endpoint signing secret (`whsec_...`) into Vercel as:

`STRIPE_WEBHOOK_SECRET`

The webhook, API secret key, and Price IDs must all come from the same Stripe mode. Use Test mode for development.

## 3. Redeploy

Vercel must redeploy after `STRIPE_WEBHOOK_SECRET` is added or changed.

## 4. Test

1. Sign in.
2. Choose a plan.
3. Complete Stripe Sandbox checkout with `4242 4242 4242 4242`.
4. Return to `/subscription/success`.
5. The status should change from `incomplete` to `active`.
6. Continue to `/onboarding/business`.

## Verification locations

- Stripe: Developers/Workbench → Webhooks → endpoint deliveries
- Supabase: `organization_subscriptions`
- Supabase: `stripe_webhook_events`
- Vercel: Logs → `/api/billing/webhook` and `/api/billing/confirm`
