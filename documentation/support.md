# Support

Thank you for choosing **Marquee**. We are happy to help you get the most out of the template.

## Contact

- **Email:** support@marquee-template.example
- **Response time:** within 24–48 hours, Monday to Friday.
- Please include your purchase code, the page or file in question, and a screenshot or short description of the issue.

## Frequently asked questions

### 1. The fonts don't look like the demo. Why?
The template ships with `@font-face` rules but not the actual font binaries (licensing). It falls back to system fonts until you add **Cormorant Garamond** and **Jost** to `assets/fonts/`. See `installation.md`, section 3.

### 2. The images are plain gradients. How do I add real photos?
The placeholders are original SVGs. Export your photos to WebP at the dimensions in `credits.md`, keep the same filenames, and drop them into `assets/images/`. No code changes needed.

### 3. How do I change the brand color?
Edit `--color-primary` and `--color-accent` in the `:root` block of `assets/css/style.css`. Because every component reads these variables, the whole site updates. See `customization.md`.

### 4. The pages are blank or scripts don't run when I double-click the file.
Pages use ES modules, which browsers block on the `file://` protocol. Serve the folder with a local server (Live Server, `npx serve`, or `python -m http.server`). See `installation.md`, section 1.

### 5. How do I connect the contact form to receive emails?
Add a Formspree `action` URL or Netlify's `data-netlify="true"` attribute to `#contact-form`, then remove the demo success handler in `main.js`. See `customization.md` → Forms.

### 6. Is the dashboard connected to a backend?
No. Both dashboards are front-end demonstrations with realistic placeholder data and working UI interactions (approve/decline, add/remove, sidebar). Wire them to your own API as needed.

## Before requesting support

- Confirm you are viewing pages through a local or hosted server, not `file://`.
- Check the browser console for errors.
- Make sure you have not renamed files inside `assets/`.
- Re-read the relevant documentation file — most questions are answered there.
