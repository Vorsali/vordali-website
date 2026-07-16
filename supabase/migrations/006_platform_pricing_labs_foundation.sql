-- Vordali platform research, subscription, and feature foundation
create extension if not exists pgcrypto;

create table if not exists public.platform_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  status text not null default 'research' check (status in ('research','pilot','live','retired')),
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.platform_products (slug, name, status, description)
values
  ('commit','Commit','live','Secure customer commitment before work begins.'),
  ('approve','Approve','research','Track customer approvals for estimates and scope changes.'),
  ('follow','Follow','research','Make sure valuable follow-ups happen.'),
  ('verify','Verify','research','Reduce identity and transaction risk.')
on conflict (slug) do update set
  name = excluded.name,
  status = excluded.status,
  description = excluded.description,
  updated_at = now();

create table if not exists public.subscription_plans (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  monthly_price_cents integer,
  contact_for_pricing boolean not null default false,
  active boolean not null default true,
  features jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

insert into public.subscription_plans (slug,name,monthly_price_cents,contact_for_pricing,features)
values
  ('starter','Starter',3999,false,'{"secure_requests":true,"sms":true,"basic_dashboard":true,"revenue_protected":false,"advanced_analytics":false}'::jsonb),
  ('pro','Pro',6999,false,'{"secure_requests":true,"sms":true,"basic_dashboard":true,"revenue_protected":true,"beacon":true,"pulse":true,"custom_branding":true,"advanced_analytics":true}'::jsonb),
  ('enterprise','Enterprise',null,true,'{"all_pro_features":true,"multiple_locations":true,"api_access":true,"custom_integrations":true,"dedicated_onboarding":true}'::jsonb)
on conflict (slug) do update set
  name=excluded.name,
  monthly_price_cents=excluded.monthly_price_cents,
  contact_for_pricing=excluded.contact_for_pricing,
  features=excluded.features,
  updated_at=now();

create table if not exists public.organization_subscriptions (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null,
  plan_slug text not null references public.subscription_plans(slug),
  status text not null default 'trialing' check (status in ('trialing','active','past_due','paused','canceled','incomplete')),
  stripe_customer_id text,
  stripe_subscription_id text,
  trial_starts_at timestamptz,
  trial_ends_at timestamptz,
  current_period_starts_at timestamptz,
  current_period_ends_at timestamptz,
  canceled_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id)
);

create table if not exists public.feature_flags (
  id uuid primary key default gen_random_uuid(),
  feature_key text not null,
  plan_slug text references public.subscription_plans(slug),
  organization_id uuid,
  enabled boolean not null default true,
  configuration jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (plan_slug is not null or organization_id is not null)
);

create unique index if not exists feature_flags_plan_unique
  on public.feature_flags(feature_key, plan_slug)
  where plan_slug is not null and organization_id is null;

create unique index if not exists feature_flags_org_unique
  on public.feature_flags(feature_key, organization_id)
  where organization_id is not null;

create table if not exists public.product_waitlists (
  id uuid primary key default gen_random_uuid(),
  product_slug text not null references public.platform_products(slug),
  name text not null,
  email text not null,
  business_name text,
  business_type text,
  problem text not null,
  hours_lost_weekly numeric,
  monthly_cost_cents bigint,
  source text,
  created_at timestamptz not null default now(),
  unique(product_slug,email)
);

create table if not exists public.problem_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  business_name text,
  business_type text,
  problem text not null,
  current_workaround text,
  hours_lost_weekly numeric,
  monthly_cost_cents bigint,
  source text,
  research_status text not null default 'new' check (research_status in ('new','reviewing','validated','planned','declined')),
  created_at timestamptz not null default now()
);

alter table public.platform_products enable row level security;
alter table public.subscription_plans enable row level security;
alter table public.organization_subscriptions enable row level security;
alter table public.feature_flags enable row level security;
alter table public.product_waitlists enable row level security;
alter table public.problem_submissions enable row level security;

drop policy if exists "public can read live and research products" on public.platform_products;
create policy "public can read live and research products"
on public.platform_products for select
to anon, authenticated
using (status in ('research','pilot','live'));

drop policy if exists "public can read active plans" on public.subscription_plans;
create policy "public can read active plans"
on public.subscription_plans for select
to anon, authenticated
using (active = true);

-- Waitlist and problem submissions are inserted through server-side Vercel functions
-- using the Supabase service-role key. No public insert policy is intentionally created.
