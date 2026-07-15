# Vordali Website

A production-ready static marketing website for Vordali.

## Deploy on Vercel

1. Upload the contents of this folder to the root of the `vordali-website` GitHub repository.
2. In Vercel, import or redeploy that repository.
3. Set **Framework Preset** to `Other`.
4. Leave **Build Command** blank.
5. Leave **Output Directory** blank.
6. Click **Deploy**.

Vercel will serve `index.html` automatically.

## Connect vordali.com

After the temporary `.vercel.app` site looks correct:

1. Open the project in Vercel.
2. Go to **Settings → Domains**.
3. Add `vordali.com` and `www.vordali.com`.
4. Enter Vercel's requested DNS records in Network Solutions.

## Before public launch

The form currently opens an email addressed to `hello@vordali.com`. Create that mailbox or replace the address in `index.html`.

## Files

- `index.html` — page structure and copy
- `styles.css` — complete design system and responsive layout
- `script.js` — mobile menu, header behavior, and entrance animations
- `assets/` — Vordali brand imagery


## Commit connection patch

This version adds:

- `Commit`, `Sign In`, and `Launch Commit` links in the main navigation
- A dedicated Vordali Commit product section
- Hero and footer links to the live Commit application
- Mobile-responsive Commit navigation and product preview

Current app destination:

```text
https://vordali-commit.vercel.app/login
```

When a custom application subdomain is connected later, replace that URL with
`https://app.vordali.com/login` or `https://commit.vordali.com/login`.


## Included assets

This package now includes a complete `assets/` folder:

- `assets/vordali-mark.webp`
- `assets/vordali-hero.webp`
- `assets/favicon.png`

You can upload the entire package to the website repository without separately
adding the image files.
