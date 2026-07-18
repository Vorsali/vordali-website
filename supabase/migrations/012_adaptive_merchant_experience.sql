-- Phase 6: adaptive merchant experience and revenue intelligence profile.
-- Safe to run repeatedly against both earlier and current Vordali schemas.

do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'organizations' and column_name = 'owner_user_id'
  ) then
    alter table public.organizations alter column owner_user_id drop not null;
  end if;
end $$;

alter table public.organizations
  add column if not exists business_type text,
  add column if not exists revenue_risk_model text,
  add column if not exists baseline_unpaid_events_per_week numeric not null default 3,
  add column if not exists average_at_risk_value_cents bigint not null default 4200,
  add column if not exists estimated_recovery_rate numeric not null default 70;

create index if not exists organizations_business_type_idx
  on public.organizations(business_type);

create index if not exists organizations_revenue_risk_model_idx
  on public.organizations(revenue_risk_model);

notify pgrst, 'reload schema';
