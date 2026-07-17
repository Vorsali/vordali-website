import { createHmac, timingSafeEqual } from "node:crypto";

export type StripeSubscription = {
  id: string;
  customer: string | { id: string };
  status: string;
  cancel_at_period_end?: boolean;
  metadata?: Record<string, string>;
  items?: { data?: Array<{ current_period_end?: number; price?: { id?: string } }> };
};

export type StripeCheckoutSession = {
  id: string;
  url?: string | null;
  customer?: string | { id: string } | null;
  subscription?: string | { id: string } | null;
  client_reference_id?: string | null;
  metadata?: Record<string, string> | null;
};

function secretKey() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("Stripe is not configured.");
  return key;
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://www.vordali.com").replace(/\/$/, "");
}

export function getPriceId(plan: string) {
  const priceId = plan === "pro" ? process.env.STRIPE_PRICE_PRO : process.env.STRIPE_PRICE_STARTER;
  if (!priceId) throw new Error(`Stripe price is not configured for the ${plan} plan.`);
  return priceId;
}

export function normalizeSubscriptionStatus(status: string) {
  const allowed = ["incomplete", "incomplete_expired", "trialing", "active", "past_due", "canceled", "unpaid", "paused"];
  return allowed.includes(status) ? status : "incomplete";
}

function append(params: URLSearchParams, key: string, value: unknown) {
  if (value === undefined || value === null || value === "") return;
  if (typeof value === "boolean") params.append(key, value ? "true" : "false");
  else params.append(key, String(value));
}

export async function stripeRequest<T>(path: string, values?: Record<string, unknown>): Promise<T> {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(values || {})) append(body, key, value);
  const response = await fetch(`https://api.stripe.com/v1${path}`, {
    method: values ? "POST" : "GET",
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      ...(values ? { "Content-Type": "application/x-www-form-urlencoded" } : {})
    },
    body: values ? body.toString() : undefined,
    cache: "no-store"
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload?.error?.message || `Stripe request failed (${response.status}).`);
  return payload as T;
}

export function verifyStripeSignature(payload: string, header: string, secret: string) {
  const parts = header.split(",").map((part) => part.trim().split("="));
  const timestamp = parts.find(([key]) => key === "t")?.[1];
  const signatures = parts.filter(([key]) => key === "v1").map(([, value]) => value);
  if (!timestamp || !signatures.length) throw new Error("Stripe signature header is malformed.");
  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > 300) throw new Error("Stripe webhook timestamp is outside the tolerance window.");
  const digest = createHmac("sha256", secret).update(`${timestamp}.${payload}`, "utf8").digest("hex");
  const expected = Buffer.from(digest, "utf8");
  const valid = signatures.some((signature) => {
    const actual = Buffer.from(signature, "utf8");
    return actual.length === expected.length && timingSafeEqual(actual, expected);
  });
  if (!valid) throw new Error("Stripe webhook signature is invalid.");
}
