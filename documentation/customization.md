# Customization

Almost everything visual is controlled by CSS variables in one place: `assets/css/style.css`.

## Colors

The palette is defined as OKLCH tokens in the `:root` block near the top of `style.css`. OKLCH is `oklch(Lightness Chroma Hue)` — lightness `0`–`1`, chroma `0`+, hue in degrees.

```css
:root {
  --color-primary:      oklch(0.345 0.050 155);  /* forest green */
  --color-accent:       oklch(0.700 0.090 80);   /* brass */
  --color-bg:           oklch(0.972 0.012 95);   /* warm cream */
  --color-surface-dark: oklch(0.300 0.045 155);  /* dark sections */
  /* ...full set in the file... */
}
```

**To rebrand**, change the hue of `--color-primary` / `--color-accent` (e.g. hue `155` → `265` for a violet). Every component updates automatically because nothing hardcodes a color.

Dark-mode colors live separately in `assets/css/dark-mode.css` under `.dark {}`. Edit those tokens to tune the dark theme without touching light mode.

> Tip: keep chroma low when lightness is very high or very low, or colors look harsh.

## Typography

Heading and body fonts are two tokens:

```css
--font-heading: 'Cormorant Garamond', Georgia, serif;
--font-body: 'Jost', system-ui, sans-serif;
```

Swap the font name (and add a matching `@font-face` block at the top of `style.css` plus the files in `assets/fonts/`). Type sizes are the `--fs-*` tokens; the scale uses a ≥1.25 ratio between steps.

## Spacing, radius, shadows

- Spacing: `--space-1` (8px) through `--space-10` (120px).
- Radius: `--radius-sm` … `--radius-full`.
- Shadows: `--shadow-xs` … `--shadow-lg`, plus `--shadow-accent`.

Change a token once and it cascades everywhere.

## Logo

Replace the four SVGs in `assets/images/ui/`: `logo.svg` (light bg), `logo-dark.svg` (dark bg + footer), `logo-dashboard.svg` (sidebar), `favicon.svg`. Keep roughly the same aspect ratio (168×40) or adjust the `.navbar__logo img { height }` rule.

## Editing content

All content is inline in the page files. Sections are wrapped in comments:

```html
<!-- SECTION: PROCESS -->
... 
<!-- END SECTION: PROCESS -->
```

Copy a whole section block to reuse a layout on another page. The navbar and footer are identical across every standard page — if you change one, change all of them (or use find-and-replace across `pages/`).

## Forms

- **Contact** (`#contact-form`), **login** (`#login-form`), **signup** (`#signup-form`) and **newsletter** (`#newsletter-form`) are validated in `assets/js/main.js`. Search for the matching `id` to adjust rules or messages.
- To wire the contact form to a backend, add a Formspree `action` URL or Netlify's `data-netlify="true"` attribute to the `<form>` and remove the demo `e.preventDefault()` success handler.

## Dark mode & RTL

Both toggles are in the navbar and persist via `localStorage` (`marquee-theme`, `marquee-dir`). Logic lives in `main.js`. RTL structural overrides are in `assets/css/rtl.css`.

## Countdown (coming-soon)

Set the target on the `#countdown` element: `data-target="2026-12-31T00:00:00"`.
