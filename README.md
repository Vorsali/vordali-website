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


## npm/Vercel installation stabilization

This release also includes:

- Node.js pinned to `20.x`
- npm pinned to `10.8.2`
- `.npmrc` with conservative CI installation settings
- `vercel.json` with an explicit install command

This addresses repeated npm `Exit handler never called!` failures before the Next.js build begins.


## pnpm deployment fix

This release bypasses npm entirely because Vercel repeatedly failed inside npm with `Exit handler never called!`.

- Package manager: pnpm 9.15.9
- Runtime: Node.js 22.x
- Vercel install command: `corepack enable && pnpm install --no-frozen-lockfile`
- Vercel build command: `pnpm run build`
