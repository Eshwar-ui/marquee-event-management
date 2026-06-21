# Marquee — Event Management HTML Template

A production-ready, multi-page HTML template for a full-service event management studio: weddings, corporate events, galas and private celebrations. Includes a client planning dashboard and an agency admin dashboard.

**Aesthetic:** "Botanical Luxe" — deep forest green, warm cream, brass accent. Cormorant Garamond + Jost.

## Highlights

- 13 pages including two distinct home layouts, full marketing site, auth, and two dashboards.
- OKLCH CSS-variable design system — rebrand by changing two color tokens.
- Dark mode (persisted, system-aware) and RTL support in separate stylesheets.
- Client dashboard: planning progress, vendor approvals, guest list, budget.
- Admin dashboard: analytics, revenue chart, event pipeline, clients.
- Validated forms (contact, login, signup, newsletter), accessible to WCAG 2.1 AA.
- Complete per-page SEO: meta, Open Graph, Twitter cards, JSON-LD, sitemap, robots.
- No build step. Tailwind + Tabler Icons via CDN; everything else local.

## Quick start

Serve through a local server (ES modules need it):

```bash
npx serve .
# open http://localhost:3000/pages/index.html
```

## Documentation

Full guides are in [`documentation/`](documentation/):

- [installation.md](documentation/installation.md) — local preview, fonts, deployment
- [customization.md](documentation/customization.md) — colors, fonts, content, forms
- [page-structure.md](documentation/page-structure.md) — every page and its sections
- [credits.md](documentation/credits.md) — fonts, icons, images, licenses
- [changelog.md](documentation/changelog.md) — version history
- [support.md](documentation/support.md) — FAQs and contact

## Two manual steps before launch

1. **Fonts** — add Cormorant Garamond + Jost `.woff2`/`.woff` to `assets/fonts/` (see installation.md).
2. **Images** — replace placeholder SVGs with WebP photos at the sizes in credits.md.

Then set your real domain in each page's canonical/OG tags and in `sitemap.xml`.

## License

Sold per the marketplace license. Fonts (OFL), Tabler Icons (MIT) and Tailwind (MIT) retain their own licenses — see credits.md.

— v1.0.0 · 2026-06-21
