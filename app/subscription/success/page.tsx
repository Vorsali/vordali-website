import { redirect } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { SubscriptionSuccess } from "@/components/billing/SubscriptionSuccess";
import { getCurrentUser } from "@/lib/auth/supabaseAuth";
export const metadata={title:"Subscription confirmed"};
export default async function Page(){if(!await getCurrentUser())redirect("/login");return <PageShell><main className="merchant-flow-page narrow"><header><p className="kicker">Payment received</p><h1>Welcome to Vordali Commit.</h1><p>Your secure checkout is complete. Stripe now confirms the subscription with Vordali before dashboard access is unlocked.</p></header><SubscriptionSuccess/></main></PageShell>}
