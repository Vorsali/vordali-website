import { redirect } from "next/navigation";
import { getMerchantContext } from "@/lib/auth/supabaseAuth";
import { getOrganizationProfile } from "@/lib/merchant/profile";
import { dashboardLanguage } from "@/lib/merchant/adaptiveProfile";
import { RevenueRecoveryTank } from "@/components/RevenueRecoveryTank";

export const metadata = { title: "Merchant dashboard" };

export default async function Page() {
  const context = await getMerchantContext();
  if (!context) redirect("/login");
  if (!context.subscription) redirect("/choose-plan");
  if (!["active", "trialing"].includes(context.subscription.status)) redirect("/checkout");
  if (!context.organization.onboarding_complete) redirect("/onboarding/business");

  const profile = await getOrganizationProfile(context.organization.id);
  const location = [profile.location?.city, profile.location?.state].filter(Boolean).join(", ") || "Primary location";
  const language = dashboardLanguage(profile.organization.revenue_risk_model);
  const annualExposure = profile.organization.baseline_unpaid_events_per_week * 52 * (profile.organization.average_at_risk_value_cents / 100);
  const estimatedRecovered = annualExposure * (profile.organization.estimated_recovery_rate / 100);
  const annualPlan = context.subscription.plan_slug === "pro" ? 839.88 : 479.88;

  return (
    <main className="merchant-dashboard">
      <aside>
        <a className="dashboard-brand" href="/"><img src="/assets/vordali-logo-orb.webp" alt="" />VORDALI <small>INC. · COMMIT</small></a>
        <nav><a className="active" href="/dashboard">Overview</a><span>Payment requests</span><span>Customers</span><span>Analytics</span><a href="/billing">Billing</a><a href="/settings/business">Business settings</a></nav>
        <form action="/api/auth/logout" method="post"><button>Sign out</button></form>
      </aside>
      <section>
        <header>
          <div><p className="kicker">Adaptive merchant dashboard</p><h1>Welcome, {context.organization.name}.</h1><p>{location} · {context.subscription.plan_slug} plan · {language.intro}</p></div>
          <button className="button button-primary" disabled>Create payment request</button>
        </header>
        <div className="dashboard-status">
          <article><span>Subscription</span><strong>{context.subscription.status}</strong><small>{context.subscription.plan_slug} plan</small></article>
          <article><span>{language.eventLabel}</span><strong>{profile.organization.baseline_unpaid_events_per_week}/wk</strong><small>Current onboarding estimate</small></article>
          <article><span>{language.valueLabel}</span><strong>${(profile.organization.average_at_risk_value_cents / 100).toFixed(0)}</strong><small>Used for estimated ROI</small></article>
          <article><span>{language.activityLabel}</span><strong>0</strong><small>Actual activity begins with requests</small></article>
        </div>
        <div className="dashboard-intelligence-grid">
          <RevenueRecoveryTank exposedRevenue={annualExposure} recoveredRevenue={estimatedRecovered} planAnnualCost={annualPlan} label={language.protectedLabel} mode="estimated" />
          <section className="dashboard-welcome">
            <p className="kicker">Business-specific workspace</p>
            <h2>Your dashboard now speaks your business language.</h2>
            <p>Vordali uses the selected revenue-risk model to choose the metrics that matter. The tank currently uses onboarding estimates; after payment requests begin, it can transition to actual protected revenue.</p>
            <div className="dashboard-actions"><a className="button button-secondary" href="/settings/business">Adjust business profile</a><a className="button button-secondary" href="/billing">Manage billing</a></div>
          </section>
        </div>
      </section>
    </main>
  );
}
