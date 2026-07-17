# Sprint 3 — Stripe subscription billing

## Delivered
- Stripe-hosted recurring subscription checkout
- Starter and Pro Stripe Price ID mapping
- Signed Stripe webhook verification
- Subscription status synchronization
- Success and cancellation pages
- Billing portal launch route
- Dashboard and onboarding gating from webhook-confirmed status

## Supabase
Run `supabase/migrations/008_stripe_subscription_billing.sql` in the SQL Editor.

## Vercel variables
Add these to Production:
- `NEXT_PUBLIC_SITE_URL=https://www.vordali.com`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `STRIPE_PRICE_STARTER`
- `STRIPE_PRICE_PRO`

Keep the three working Supabase variables already configured.

## Stripe setup
1. Create one recurring monthly Product/Price for Starter ($39.99) and one for Pro ($69.99).
2. Copy each `price_...` ID into Vercel.
3. Add webhook endpoint: `https://www.vordali.com/api/billing/webhook`
4. Subscribe it to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
   - `invoice.payment_failed`
5. Copy the endpoint signing secret (`whsec_...`) into Vercel.
6. Enable and configure Stripe Customer Portal before testing `/billing`.

Use Stripe test-mode keys and test prices first.
