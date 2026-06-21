# Page Structure

Every standard page shares: a `<head>` SEO block, a pre-paint theme script, an identical **navbar**, a `<main>`, an identical **footer**, a back-to-top button, and a cookie banner. Auth and dashboard pages omit the navbar/footer by design.

## Pages and their sections

### index.html — Home 1 (Hero-2 Split)
1. Hero — split: copy left, image right
2. Process — Features-4 numbered steps (Consult / Design / Coordinate / Celebrate)
3. About — zigzag (image left, text right)
4. Gallery preview — masonry teaser of recent events
5. Testimonials — pull-quote auto-advancing slider
6. CTA — gradient band on dark forest green

### index-2.html — Home 2 (Hero-4 Bento)
1. Hero — bento image grid right, copy left
2. Packages — three pricing cards, middle "Signature" highlighted
3. Stats — animated counters on a dark band
4. Testimonials — masonry of cards
5. Featured work — three selected events
6. CTA — split with email capture

> Both home pages use different hero layouts and a different 5th section, per spec.

### about.html
Page header · Story (split) · Values (3 cards) · Team (4 cards) · Stats band (dark) · CTA.

### services.html
Page header · Service grid (6 cards) · What's included (zigzag) · FAQ (accordion) · CTA (dark).

### gallery.html
Page header · Filterable masonry (All / Weddings / Corporate / Galas / Private) · CTA (dark).

### blog.html
Page header · Featured post (large split card) · Filterable 3-column grid · Pagination.

### contact.html
Page header · Split: contact details + map placeholder / validated form with success state.

### 404.html
Navbar + footer retained · Oversized muted "404" · Two CTAs · Quick links.

### coming-soon.html
No navbar/footer · Centered logo · Countdown · Email capture · Social links.

### login.html / signup.html
No navbar/footer · Split: brand panel + form · Social login (Google, GitHub) · Full JS validation. Signup has a 4-rule password strength meter and disabled-until-valid submit.

### dashboard-user.html (client)
Sidebar + topbar. Sections: Overview (4 KPI cards) · Planning progress (timeline) · Budget (bars) · Vendor approvals (action table) · Guest list (table with add/remove).

### dashboard-admin.html (agency)
Sidebar + topbar. Sections: Overview (4 KPI cards) · Revenue chart (CSS bars) · Event mix · Event pipeline (table) · Recent clients (table).

## Reusable building blocks (CSS classes)

- Layout: `.container`, `.section-standard/-hero/-compact/-tight`, `.split`, `.grid grid-2/3/4`, `.masonry`, `.bento`.
- Components: `.card`, `.feature`, `.step`, `.price-card`, `.testimonial-card`, `.accordion`, `.pill`, `.badge`, `.btn` (`--primary/--accent/--ghost/--on-dark`).
- Dashboard: `.dash`, `.dash-sidebar`, `.dash-topbar`, `.kpi`, `.panel`, `.table`, `.timeline`, `.bar`, `.chart-bars`.
- Surfaces: `.surface-dark` (forest green), `.surface-alt` (raised cream).
