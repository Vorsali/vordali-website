-- Phase 8 / Recovery Tank™ foundation
-- Stores merchant-selected simulator defaults and presentation preferences.

alter table public.organizations
  add column if not exists business_type text default 'restaurant',
  add column if not exists recovery_theme text default 'vordali',
  add column if not exists recovery_tank_style text default 'classic',
  add column if not exists recovery_tank_enabled boolean default true,
  add column if not exists average_transaction numeric(10,2) default 35.00,
  add column if not exists transactions_at_risk_per_week integer default 5,
  add column if not exists estimated_recovery_rate numeric(5,2) default 0.80,
  add column if not exists dashboard_layout text default 'standard',
  add column if not exists animations_enabled boolean default true;

comment on column public.organizations.business_type is 'Business profile used for adaptive Recovery Tank terminology and defaults.';
comment on column public.organizations.recovery_theme is 'Merchant-selected Recovery Theme.';
comment on column public.organizations.recovery_tank_style is 'Recovery Tank visual style; classic is included with Starter.';
comment on column public.organizations.average_transaction is 'Average transaction value used by the Recovery Tank simulator.';
comment on column public.organizations.transactions_at_risk_per_week is 'Estimated weekly transactions exposed to loss.';
comment on column public.organizations.estimated_recovery_rate is 'Estimated recoverable share expressed as a decimal from 0 to 1.';

alter table public.organizations
  drop constraint if exists organizations_recovery_rate_range;
alter table public.organizations
  add constraint organizations_recovery_rate_range
  check (estimated_recovery_rate >= 0 and estimated_recovery_rate <= 1);

alter table public.organizations
  drop constraint if exists organizations_transactions_at_risk_nonnegative;
alter table public.organizations
  add constraint organizations_transactions_at_risk_nonnegative
  check (transactions_at_risk_per_week >= 0);
