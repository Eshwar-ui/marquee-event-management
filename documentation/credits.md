# Credits

## Fonts

| Font | Use | Source | License |
|---|---|---|---|
| Cormorant Garamond | Headings | https://fonts.google.com/specimen/Cormorant+Garamond | SIL Open Font License 1.1 |
| Jost | Body | https://fonts.google.com/specimen/Jost | SIL Open Font License 1.1 |

Both are self-hosted via `@font-face` (no CDN font links). Download, convert to `.woff2`/`.woff`, and place in `assets/fonts/` — see `installation.md`.

## Icons

| Library | Use | Source | License |
|---|---|---|---|
| Tabler Icons (webfont) | All UI icons | https://tabler.io/icons | MIT |

Loaded via jsDelivr CDN in each page `<head>`.

## CSS framework

| Tool | Use | Source | License |
|---|---|---|---|
| Tailwind CSS (Play CDN) | Layout utility classes only | https://tailwindcss.com | MIT |

All colors, typography and spacing come from the CSS variable system, not Tailwind.

## Images

All imagery shipped with the template is **original placeholder SVG**, generated for this template (botanical-luxe gradients with an event motif). No third-party images are included, so there is nothing to attribute and nothing to license.

### Replacing placeholders with real photos

Export to WebP at these dimensions and reuse the existing filenames in `assets/images/`:

| Slot | File pattern | Dimensions |
|---|---|---|
| Hero | `hero/hero-*-{640,1024,1920}` | 1920×1080 (16:9), 3 sizes |
| Service / feature cards | `content/service-*` | 800×600 (4:3) |
| Gallery | `content/gallery-1..9` | mixed (4:3, 1:1, 3:2) |
| Blog cards | `content/blog-*` | 900×600 (3:2); featured 1200×700 |
| Avatars | `content/avatar-1..6` | 400×400 (1:1) |
| About | `content/about-*` | ~900×700 |
| OG image | `ui/og-image` | 1200×630 |

Recommended free, license-clear sources: **Pexels** (pexels.com) and **Unsplash** (unsplash.com). Download locally and convert to WebP — never hotlink. Avoid images containing recognisable people, brand logos or public figures.

## Brand

The "Marquee" name, logo marks and all copy were created originally for this template.
