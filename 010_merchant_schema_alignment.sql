-- Merchant business profile, primary location, and payment-request defaults
alter table public.organizations
  add column if not exists support_email text,
  add column if not exists default_request_expiration_minutes integer not null default 30
    check (default_request_expiration_minutes in (15,30,60,120,1440));

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
