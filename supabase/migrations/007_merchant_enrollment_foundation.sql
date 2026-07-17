-- Merchant enrollment, ownership, onboarding, and subscription gating foundation
create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null unique,
  name text not null,
  phone text,
  website text,
  timezone text not null default 'America/Chicago',
  onboarding_complete boolean not null default false,
  status text not null default 'pending' check (status in ('pending','active','suspended','closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.organization_members (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null,
  role text not null default 'owner' check (role in ('owner','manager','employee')),
  display_name text,
  email text,
  created_at timestamptz not null default now(),
  unique (organization_id,user_id),
  unique (user_id)
);

alter table public.organization_subscriptions
  drop constraint if exists organization_subscriptions_organization_id_fkey;
alter table public.organization_subscriptions
  add constraint organization_subscriptions_organization_id_fkey
  foreign key (organization_id) references public.organizations(id) on delete cascade;

alter table public.organizations enable row level security;
alter table public.organization_members enable row level security;

-- All writes and enrollment reads currently pass through protected server routes
-- using the service-role key. User-facing RLS policies will be added when direct
-- browser database access is introduced.
