-- Stripe subscription checkout, lifecycle, and customer billing identifiers
alter table public.organization_subscriptions
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_subscription_id text,
  add column if not exists stripe_checkout_session_id text,
  add column if not exists stripe_price_id text,
  add column if not exists current_period_end timestamptz,
  add column if not exists cancel_at_period_end boolean not null default false;

create unique index if not exists organization_subscriptions_stripe_customer_id_key
  on public.organization_subscriptions(stripe_customer_id)
  where stripe_customer_id is not null;

create unique index if not exists organization_subscriptions_stripe_subscription_id_key
  on public.organization_subscriptions(stripe_subscription_id)
  where stripe_subscription_id is not null;
