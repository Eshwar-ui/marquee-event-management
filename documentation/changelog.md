# Changelog

All notable changes to the Marquee template are documented here. This project follows [Semantic Versioning](https://semver.org/).

## v1.0.0 — 2026-06-21

Initial release.

### Added
- 13 HTML pages: two home layouts, about, services, gallery, blog, contact, 404, coming-soon, login, signup, client dashboard, admin dashboard.
- Complete CSS variable design system in OKLCH (`style.css`), with separate `dark-mode.css` and `rtl.css`.
- Dark mode with `localStorage` persistence and system-preference detection.
- RTL toggle with structural overrides.
- Client dashboard: KPI cards, planning timeline, vendor approval table, guest list (add/remove), budget bars.
- Admin dashboard: KPI cards, CSS revenue chart, event pipeline and client tables.
- Form validation for contact, login (with show/hide + loading + error state) and signup (4-rule strength meter, confirm match, terms, disabled-until-valid).
- Reusable components: navbar with dropdown, footer, cards, accordion, testimonial slider, gallery/blog filters, pagination, back-to-top, cookie consent, preloader, countdown.
- Full SEO per page (unique title/description, Open Graph, Twitter cards, JSON-LD), `sitemap.xml`, `robots.txt`.
- Accessibility: skip links, focus-visible, ARIA states, focus trap on mobile menu, semantic landmarks.
- Original placeholder imagery and brand SVG logo set.
- Six documentation files plus README.

### Notes
- Real font files (`.woff2`/`.woff`) and production photos are added by the buyer; see `installation.md` and `credits.md`.
