-- Align the live merchant schema with the Sprint 2-4 application contract.
-- Safe to run repeatedly.

alter table public.organizations
  add column if not exists website text,
  add column if not exists timezone text not null default 'America/Chicago',
  add column if not exists onboarding_complete boolean not null default false,
  add column if not exists status text not null default 'pending',
  add column if not exists support_email text,
  add column if not exists default_request_expiration_minutes integer not null default 30,
  add column if not exists updated_at timestamptz not null default now();

alter table public.organization_members
  add column if not exists display_name text;

alter table public.organization_subscriptions
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_subscription_id text,
  add column if not exists stripe_checkout_session_id text,
  add column if not exists stripe_price_id text,
  add column if not exists current_period_end timestamptz,
  add column if not exists cancel_at_period_end boolean not null default false,
  add column if not exists updated_at timestamptz not null default now();

create table if not exists public.organization_locations (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null default 'Main location',
  address_line1 text,
  address_line2 text,
  city text,
  state text,
  postal_code text,
  country text not null default 'US',
  phone text,
  timezone text not null default 'America/Chicago',
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists organization_locations_one_primary
  on public.organization_locations(organization_id)
  where is_primary = true;

alter table public.organization_locations enable row level security;

notify pgrst, 'reload schema';
