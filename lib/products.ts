export type Product = {
  slug: "commit" | "approve" | "follow" | "verify";
  name: string;
  status: "Live" | "Research";
  tagline: string;
  description: string;
  ideal: string;
  accent: string;
};

export const products: Product[] = [
  {
    slug: "commit",
    name: "Commit",
    status: "Live",
    tagline: "Secure customer commitment before work begins.",
    description: "Create a secure order, send a transactional payment request, and begin only after Stripe verifies payment.",
    ideal: "Restaurants, caterers, bakeries, contractors, repair shops, and service businesses.",
    accent: "blue"
  },
  {
    slug: "approve",
    name: "Approve",
    status: "Research",
    tagline: "Turn verbal approval into a clear, trackable decision.",
    description: "A focused approval workflow for estimates, custom work, scope changes, and high-value decisions.",
    ideal: "HVAC, plumbing, roofing, electrical, construction, and professional services.",
    accent: "violet"
  },
  {
    slug: "follow",
    name: "Follow",
    status: "Research",
    tagline: "Make sure the next important follow-up actually happens.",
    description: "Simple, accountable reminders for estimates, appointments, maintenance, renewals, and customer callbacks.",
    ideal: "Any business losing opportunities because follow-up depends on memory.",
    accent: "green"
  },
  {
    slug: "verify",
    name: "Verify",
    status: "Research",
    tagline: "Reduce risk before expensive work begins.",
    description: "A focused risk and identity layer for suspicious requests, high-value orders, and costly commitments.",
    ideal: "Businesses exposed to fraud, prank orders, chargebacks, or identity uncertainty.",
    accent: "amber"
  }
];
