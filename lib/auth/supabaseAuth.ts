import { cookies } from "next/headers";
import { supabaseAdminRequest } from "@/lib/database/supabaseAdmin";

const COOKIE_NAME = "vordali_access_token";
const authUrl = () => process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const anonKey = () => process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

export type AuthUser = {
  id: string;
  email?: string;
  user_metadata?: Record<string, unknown>;
};

export type MerchantContext = {
  user: AuthUser;
  organization: { id: string; name: string; phone: string | null; onboarding_complete: boolean };
  member: { role: string; display_name: string | null };
  subscription: { plan_slug: string; status: string } | null;
};

export async function authRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const url = authUrl()?.replace(/\/$/, "");
  const key = anonKey();
  if (!url || !key) throw new Error("Supabase authentication is not configured.");
  const response = await fetch(`${url}/auth/v1${path}`, {
    ...init,
    headers: { apikey: key, "Content-Type": "application/json", ...(init.headers || {}) },
    cache: "no-store"
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.msg || payload?.error_description || payload?.message || "Authentication failed.");
  return payload as T;
}

export async function setAuthCookie(accessToken: string, expiresIn = 3600) {
  const store = await cookies();
  store.set(COOKIE_NAME, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: expiresIn
  });
}

export async function clearAuthCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getAccessToken() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value || null;
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const token = await getAccessToken();
  if (!token) return null;
  try {
    return await authRequest<AuthUser>("/user", { headers: { Authorization: `Bearer ${token}` } });
  } catch {
    return null;
  }
}

function slugify(value: string, suffix: string) {
  const base = value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 70) || "business";
  return `${base}-${suffix.slice(0, 8)}`;
}

/**
 * Creates the minimal merchant shell required to reserve a plan and attach a
 * Stripe subscription. Full business information is collected only after
 * payment in the onboarding flow.
 */
export async function ensureMerchantAccount(user: AuthUser) {
  const metadata = user.user_metadata || {};
  const plan = ["starter", "pro"].includes(String(metadata.selected_plan)) ? String(metadata.selected_plan) : "starter";
  const ownerName = String(metadata.owner_name || "Business Owner").slice(0, 120);

  const members = await supabaseAdminRequest<Array<{ organization_id: string }>>(
    `/rest/v1/organization_members?user_id=eq.${encodeURIComponent(user.id)}&select=organization_id&limit=1`
  );

  let organizationId = members[0]?.organization_id;
  if (!organizationId) {
    const businessName = String(metadata.business_name || "New Vordali Business").slice(0, 120);
    const phone = metadata.phone ? String(metadata.phone).slice(0, 30) : null;
    const organizations = await supabaseAdminRequest<Array<{ id: string }>>("/rest/v1/organizations", {
      method: "POST",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({
        name: businessName,
        slug: slugify(businessName, user.id),
        phone,
        status: "pending",
        onboarding_complete: false
      })
    });
    if (!organizations[0]?.id) throw new Error("Unable to create the merchant enrollment record.");
    organizationId = organizations[0].id;

    await supabaseAdminRequest("/rest/v1/organization_members", {
      method: "POST",
      headers: { Prefer: "return=minimal" },
      body: JSON.stringify({ organization_id: organizationId, user_id: user.id, role: "owner", display_name: ownerName })
    });
  }

  const subscriptions = await supabaseAdminRequest<Array<{ organization_id: string }>>(
    `/rest/v1/organization_subscriptions?organization_id=eq.${encodeURIComponent(organizationId)}&select=organization_id&limit=1`
  );
  if (!subscriptions.length) {
    await supabaseAdminRequest("/rest/v1/organization_subscriptions", {
      method: "POST",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify({ organization_id: organizationId, plan_slug: plan, status: "incomplete" })
    });
  }
  return organizationId;
}

export async function getMerchantContext(): Promise<MerchantContext | null> {
  const user = await getCurrentUser();
  if (!user) return null;
  const members = await supabaseAdminRequest<Array<{ organization_id: string; role: string; display_name: string | null }>>(
    `/rest/v1/organization_members?user_id=eq.${encodeURIComponent(user.id)}&select=organization_id,role,display_name&limit=1`
  );
  if (!members.length) return null;
  const member = members[0];
  const organizations = await supabaseAdminRequest<Array<{ id: string; name: string; phone: string | null; onboarding_complete: boolean }>>(
    `/rest/v1/organizations?id=eq.${member.organization_id}&select=id,name,phone,onboarding_complete&limit=1`
  );
  const subscriptions = await supabaseAdminRequest<Array<{ plan_slug: string; status: string }>>(
    `/rest/v1/organization_subscriptions?organization_id=eq.${member.organization_id}&select=plan_slug,status&limit=1`
  );
  if (!organizations.length) return null;
  return { user, organization: organizations[0], member, subscription: subscriptions[0] || null };
}

export function nextMerchantRoute(context: MerchantContext | null) {
  if (!context) return "/choose-plan";
  if (!context.subscription) return "/choose-plan";
  if (["active", "trialing"].includes(context.subscription.status)) {
    return context.organization.onboarding_complete ? "/dashboard" : "/onboarding/business";
  }
  return "/checkout";
}
