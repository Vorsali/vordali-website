-- Sprint 5: Stripe webhook audit trail and automatic subscription activation.
-- Safe to run repeatedly.

alter table public.organization_subscriptions
  add column if not exists activated_at timestamptz,
  add column if not exists updated_at timestamptz not null default now();

create table if not exists public.stripe_webhook_events (
  id uuid primary key default gen_random_uuid(),
  stripe_event_id text not null unique,
  event_type text not null,
  processed boolean not null default false,
  error_message text,
  received_at timestamptz not null default now(),
  processed_at timestamptz
);

create index if not exists stripe_webhook_events_received_at_idx
  on public.stripe_webhook_events(received_at desc);

alter table public.stripe_webhook_events enable row level security;

notify pgrst, 'reload schema';
