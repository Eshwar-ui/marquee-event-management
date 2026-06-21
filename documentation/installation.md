# Installation

Marquee is a static HTML/CSS/JS template. There is no build step and no dependencies to install. Tailwind and Tabler Icons load from a CDN; everything else is local.

## 1. Local preview

Because pages use ES modules (`<script type="module">`), open them through a local server rather than the `file://` protocol.

**VS Code (easiest):** install the *Live Server* extension, right-click `pages/index.html`, choose *Open with Live Server*.

**Node:**
```bash
npx serve .
# then open http://localhost:3000/pages/index.html
```

**Python:**
```bash
python -m http.server 8000
# then open http://localhost:8000/pages/index.html
```

## 2. Folder layout

```
marquee/
├── assets/
│   ├── css/   style.css · dark-mode.css · rtl.css
│   ├── js/    main.js · dashboard.js
│   ├── images/  hero/ · content/ · ui/
│   └── fonts/   (drop real .woff2/.woff here — see below)
├── pages/      all .html files
├── documentation/
├── sitemap.xml · robots.txt · README.md
```

## 3. Fonts (one manual step)

The template ships with `@font-face` rules and strong system fallbacks, so it renders immediately. For the intended look, add the two font families:

1. Download **Cormorant Garamond** and **Jost** from `https://fonts.google.com/download?family=Cormorant+Garamond` and `...?family=Jost`.
2. Convert the needed weights to `.woff2` + `.woff` (e.g. at squoosh.app or `npx ttf2woff2`).
3. Place them in `assets/fonts/` using these exact names:
   `CormorantGaramond-Medium`, `CormorantGaramond-SemiBold`, `Jost-Regular`, `Jost-Medium`, `Jost-SemiBold` (each `.woff2` and `.woff`).

## 4. Images

Placeholder imagery is local SVG. To use real photos, export to WebP at the dimensions listed in `documentation/credits.md` and replace the files in `assets/images/`. Keep the same filenames and no code changes are needed.

## 5. Deployment

The site is fully static — host it anywhere.

- **Netlify:** drag the project folder onto app.netlify.com, or connect the repo. Set the publish directory to the project root. The contact form already includes the markup pattern for Netlify Forms (add `data-netlify="true"` to `#contact-form`).
- **Vercel:** `vercel` in the project root, or import the repo. No build command needed.
- **GitHub Pages:** push to a repo, enable Pages on the `main` branch, root folder. Visit `/pages/index.html`.

Set your real domain in each page's `<link rel="canonical">`, the Open Graph `og:url` tags, and `sitemap.xml` before going live.
