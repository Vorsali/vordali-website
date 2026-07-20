# Vordali Inc. launch-candidate updates

## Completed
- Corrected the Recovery Tank break-even calculation to use the actual annual-cost-to-protected-revenue percentage.
- Repainted the break-even marker above the liquid, reflections, and glass foot so it remains visible.
- Added a high-contrast dashed guide, connector, dot, and external label.
- Added mobile Recovery Tank sizing and overflow safeguards for narrow screens.
- Preserved tank animations on mobile; reduced-motion preferences are still respected.
- Added an Accept / Reject optional-cookie consent panel with local persistence and a link to the Cookie Policy.
- Updated visible corporate branding and metadata to Vordali Inc.
- Added “INC.” to the supplied hero and orb media without redesigning the original assets.
- Confirmed TypeScript validity and successful Next.js compilation/static-page generation.

## Deployment note
The cookie choice is stored under `vordali-cookie-consent`. Essential functionality remains active when optional cookies are rejected. Connect any future optional analytics initialization to the `vordali-cookie-consent` browser event before enabling it.
