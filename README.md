# Vordali Website — Next.js Conversion

This package replaces the static HTML marketing site with a Next.js App Router application.

## Included

- Shared navigation, footer, branding, and metadata
- Homepage
- Products
- Pricing and interactive ROI calculator
- Vordali Labs waitlists and problem submissions
- Why Vordali manifesto
- Trust Center and legal policies
- Server-side API routes for Supabase submissions
- Redirects from old `.html` URLs

## Deployment

Upload the contents of this ZIP to the root of the `vordali-website` repository.

Vercel should automatically detect Next.js.

Keep these Vercel environment variables:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

The previously completed database migration remains valid.

## Suggested commit

`Convert Vordali website to Next.js`

## Important

Do not select a static output directory in Vercel. Framework Preset should be Next.js and the Build Command should use the project default (`next build`).
