/* =============================================================
   MARQUEE - dashboard-pages.js
   Renders standalone dashboard tab pages from the body data attrs.
   ============================================================= */

const dashboardPages = {
  user: {
    overview: {
      title: "Eloise & Ravi's Wedding",
      subtitle: '14 September 2026 - Garden Estate',
      content: `
        <section aria-label="Overview">
          <div class="kpi-grid">
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-calendar-due" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-clock" aria-hidden="true"></i> on track</span></div><div class="kpi__value">85</div><div class="kpi__label">Days to event</div></div>
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-wallet" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-arrow-up-right" aria-hidden="true"></i> 62%</span></div><div class="kpi__value">&pound;6,050</div><div class="kpi__label">Budget used of &pound;9,800</div></div>
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-checklist" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-arrow-up-right" aria-hidden="true"></i> 18/24</span></div><div class="kpi__value">75%</div><div class="kpi__label">Tasks complete</div></div>
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-users" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-arrow-up-right" aria-hidden="true"></i> 142</span></div><div class="kpi__value">142 / 180</div><div class="kpi__label">Guests confirmed</div></div>
          </div>
        </section>
        <div class="dash-grid dash-grid--2">
          <section class="panel" aria-label="Next steps">
            <div class="panel__head"><h2 class="panel__title">Next steps</h2><span class="badge badge--info">This week</span></div>
            <div class="panel__body">
              <ol class="timeline">
                <li class="timeline__item timeline__item--active"><span class="timeline__dot"></span><div class="timeline__title">Confirm remaining RSVPs</div><div class="timeline__meta">38 guests still awaiting response</div></li>
                <li class="timeline__item"><span class="timeline__dot"></span><div class="timeline__title">Approve floral proposal</div><div class="timeline__meta">Petal & Stem quote expires Friday</div></li>
                <li class="timeline__item"><span class="timeline__dot"></span><div class="timeline__title">Review photography shortlist</div><div class="timeline__meta">2 portfolios ready for review</div></li>
              </ol>
            </div>
          </section>
          <section class="panel" aria-label="Budget snapshot">
            <div class="panel__head"><h2 class="panel__title">Budget snapshot</h2><a href="dashboard-user-budget.html" style="font-size:var(--fs-small);color:var(--color-primary)">Open budget</a></div>
            <div class="panel__body">
              <div class="budget-row"><div class="budget-row__head"><span>Committed</span><span>&pound;6,050</span></div><div class="bar"><span class="bar__fill" style="width:62%"></span></div></div>
              <div class="budget-row"><div class="budget-row__head"><span>Pending approvals</span><span>&pound;3,300</span></div><div class="bar"><span class="bar__fill bar__fill--accent" style="width:34%"></span></div></div>
              <div class="budget-row"><div class="budget-row__head"><strong>Remaining buffer</strong><strong>&pound;450</strong></div><div class="bar"><span class="bar__fill" style="width:5%"></span></div></div>
            </div>
          </section>
        </div>
      `
    },
    event: {
      title: 'My Event',
      subtitle: 'Planning progress and run-of-show',
      content: `
        <div class="dash-grid dash-grid--2">
          <section class="panel" aria-label="Planning progress">
            <div class="panel__head"><h2 class="panel__title">Planning progress</h2><span class="badge badge--info">On schedule</span></div>
            <div class="panel__body">
              <ol class="timeline">
                <li class="timeline__item timeline__item--done"><span class="timeline__dot"><i class="ti ti-check" aria-hidden="true"></i></span><div class="timeline__title">Concept & date locked</div><div class="timeline__meta">Completed in February</div></li>
                <li class="timeline__item timeline__item--done"><span class="timeline__dot"><i class="ti ti-check" aria-hidden="true"></i></span><div class="timeline__title">Venue booked - Garden Estate</div><div class="timeline__meta">Completed in March</div></li>
                <li class="timeline__item timeline__item--done"><span class="timeline__dot"><i class="ti ti-check" aria-hidden="true"></i></span><div class="timeline__title">Catering & florals confirmed</div><div class="timeline__meta">Completed in May</div></li>
                <li class="timeline__item timeline__item--active"><span class="timeline__dot"></span><div class="timeline__title">Finalise guest list & RSVPs</div><div class="timeline__meta">In progress - due July</div></li>
                <li class="timeline__item"><span class="timeline__dot"></span><div class="timeline__title">Seating plan & run-of-show</div><div class="timeline__meta">Upcoming - August</div></li>
                <li class="timeline__item"><span class="timeline__dot"></span><div class="timeline__title">Final headcount to vendors</div><div class="timeline__meta">Upcoming - September</div></li>
              </ol>
            </div>
          </section>
          <section class="panel" aria-label="Event details">
            <div class="panel__head"><h2 class="panel__title">Event details</h2></div>
            <div class="panel__body">
              <div class="budget-row"><div class="budget-row__head"><span>Date</span><strong>14 Sep 2026</strong></div></div>
              <div class="budget-row"><div class="budget-row__head"><span>Venue</span><strong>Garden Estate</strong></div></div>
              <div class="budget-row"><div class="budget-row__head"><span>Guest target</span><strong>180</strong></div></div>
              <div class="budget-row"><div class="budget-row__head"><span>Planner</span><strong>Mei Lin</strong></div></div>
            </div>
          </section>
        </div>
      `
    },
    vendors: {
      title: 'Vendors',
      subtitle: 'Review proposals and approvals',
      content: `
        <section class="panel" aria-label="Vendor approvals">
          <div class="panel__head"><h2 class="panel__title">Vendors awaiting your approval</h2><span class="badge badge--warning">2 pending</span></div>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Vendor</th><th>Category</th><th>Quote</th><th>Status</th><th>Action</th></tr></thead>
              <tbody>
                <tr><td><div class="person"><img src="../assets/images/content/avatar-2.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Petal & Stem</span></div></td><td>Florals</td><td>&pound;1,800</td><td><span class="badge badge--warning">Pending</span></td><td style="display:flex;gap:4px"><button class="table-action table-action--approve" aria-label="Approve Petal & Stem"><i class="ti ti-check" aria-hidden="true"></i></button><button class="table-action table-action--decline" aria-label="Decline Petal & Stem"><i class="ti ti-x" aria-hidden="true"></i></button></td></tr>
                <tr><td><div class="person"><img src="../assets/images/content/avatar-3.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Frame & Light</span></div></td><td>Photography</td><td>&pound;1,500</td><td><span class="badge badge--warning">Pending</span></td><td style="display:flex;gap:4px"><button class="table-action table-action--approve" aria-label="Approve Frame & Light"><i class="ti ti-check" aria-hidden="true"></i></button><button class="table-action table-action--decline" aria-label="Decline Frame & Light"><i class="ti ti-x" aria-hidden="true"></i></button></td></tr>
                <tr><td><div class="person"><img src="../assets/images/content/avatar-4.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">The Garden Estate</span></div></td><td>Venue</td><td>&pound;4,000</td><td><span class="badge badge--success">Approved</span></td><td><span style="color:var(--color-text-muted);font-size:var(--fs-small)">-</span></td></tr>
                <tr><td><div class="person"><img src="../assets/images/content/avatar-5.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Feast Co.</span></div></td><td>Catering</td><td>&pound;3,200</td><td><span class="badge badge--success">Approved</span></td><td><span style="color:var(--color-text-muted);font-size:var(--fs-small)">-</span></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      `
    },
    guests: {
      title: 'Guest List',
      subtitle: 'RSVPs, meals and seating',
      content: `
        <section class="panel" aria-label="Guest list">
          <div class="panel__head"><h2 class="panel__title">Guest list</h2><button class="btn btn--primary" id="add-guest" style="min-height:40px"><i class="ti ti-plus" aria-hidden="true"></i> Add guest</button></div>
          <div class="table-wrap">
            <table class="table" id="guest-table">
              <thead><tr><th>Guest</th><th>Party</th><th>RSVP</th><th>Meal</th><th>Table</th><th></th></tr></thead>
              <tbody>
                <tr><td class="person__name">Hartman Family</td><td>4</td><td><span class="badge badge--success">Confirmed</span></td><td>Standard</td><td>1</td><td><button class="table-action" aria-label="Remove guest"><i class="ti ti-trash" aria-hidden="true"></i></button></td></tr>
                <tr><td class="person__name">Ravi's Parents</td><td>2</td><td><span class="badge badge--success">Confirmed</span></td><td>Vegetarian</td><td>1</td><td><button class="table-action" aria-label="Remove guest"><i class="ti ti-trash" aria-hidden="true"></i></button></td></tr>
                <tr><td class="person__name">The Okoro Party</td><td>3</td><td><span class="badge badge--warning">Pending</span></td><td>Standard</td><td>4</td><td><button class="table-action" aria-label="Remove guest"><i class="ti ti-trash" aria-hidden="true"></i></button></td></tr>
                <tr><td class="person__name">Mei & Guest</td><td>2</td><td><span class="badge badge--success">Confirmed</span></td><td>Vegan</td><td>5</td><td><button class="table-action" aria-label="Remove guest"><i class="ti ti-trash" aria-hidden="true"></i></button></td></tr>
                <tr><td class="person__name">University Friends</td><td>6</td><td><span class="badge badge--info">Invited</span></td><td>Mixed</td><td>7</td><td><button class="table-action" aria-label="Remove guest"><i class="ti ti-trash" aria-hidden="true"></i></button></td></tr>
              </tbody>
            </table>
          </div>
        </section>
      `
    },
    budget: {
      title: 'Budget',
      subtitle: 'Committed spend and remaining buffer',
      content: `
        <section class="panel" aria-label="Budget">
          <div class="panel__head"><h2 class="panel__title">Budget</h2><button class="btn btn--ghost" style="min-height:40px">Export</button></div>
          <div class="panel__body">
            <div class="budget-row"><div class="budget-row__head"><span>Venue & catering</span><span>&pound;3,800 / &pound;4,000</span></div><div class="bar"><span class="bar__fill" style="width:95%"></span></div></div>
            <div class="budget-row"><div class="budget-row__head"><span>Florals & styling</span><span>&pound;1,200 / &pound;1,800</span></div><div class="bar"><span class="bar__fill bar__fill--accent" style="width:66%"></span></div></div>
            <div class="budget-row"><div class="budget-row__head"><span>Photography</span><span>&pound;650 / &pound;1,500</span></div><div class="bar"><span class="bar__fill" style="width:43%"></span></div></div>
            <div class="budget-row"><div class="budget-row__head"><span>Entertainment</span><span>&pound;400 / &pound;1,500</span></div><div class="bar"><span class="bar__fill" style="width:27%"></span></div></div>
            <div class="budget-row"><div class="budget-row__head"><strong>Total</strong><strong>&pound;6,050 / &pound;9,800</strong></div><div class="bar"><span class="bar__fill" style="width:62%"></span></div></div>
          </div>
        </section>
      `
    },
    messages: {
      title: 'Messages',
      subtitle: 'Planner updates and vendor notes',
      content: `
        <section class="panel" aria-label="Messages">
          <div class="panel__head"><h2 class="panel__title">Recent messages</h2><span class="badge badge--info">3 unread</span></div>
          <div class="panel__body">
            <div class="budget-row"><div><strong>Mei Lin</strong><p style="font-size:var(--fs-small);margin-top:4px">I added the updated seating draft and marked the family tables for review.</p></div></div>
            <div class="budget-row"><div><strong>Petal & Stem</strong><p style="font-size:var(--fs-small);margin-top:4px">The floral quote now includes the ceremony arch transfer to reception.</p></div></div>
            <div class="budget-row"><div><strong>Marquee Production</strong><p style="font-size:var(--fs-small);margin-top:4px">Your final walk-through is pencilled for the last week of August.</p></div></div>
          </div>
        </section>
      `
    },
    settings: {
      title: 'Settings',
      subtitle: 'Preferences and account details',
      content: `
        <div class="dash-grid dash-grid--2">
          <section class="panel" aria-label="Profile settings"><div class="panel__head"><h2 class="panel__title">Profile</h2></div><div class="panel__body"><div class="budget-row"><div class="budget-row__head"><span>Name</span><strong>Eloise Hartman</strong></div></div><div class="budget-row"><div class="budget-row__head"><span>Email</span><strong>eloise@email.com</strong></div></div><div class="budget-row"><div class="budget-row__head"><span>Role</span><strong>Client owner</strong></div></div></div></section>
          <section class="panel" aria-label="Notifications"><div class="panel__head"><h2 class="panel__title">Notifications</h2></div><div class="panel__body"><div class="budget-row"><div class="budget-row__head"><span>Email updates</span><span class="badge badge--success">On</span></div></div><div class="budget-row"><div class="budget-row__head"><span>Vendor approvals</span><span class="badge badge--success">On</span></div></div><div class="budget-row"><div class="budget-row__head"><span>Weekly digest</span><span class="badge badge--muted">Off</span></div></div></div></section>
        </div>
      `
    }
  },
  admin: {
    overview: {
      title: 'Studio overview',
      subtitle: 'June 2026',
      content: `
        <section aria-label="Overview">
          <div class="kpi-grid">
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-calendar-event" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-arrow-up-right" aria-hidden="true"></i> 3</span></div><div class="kpi__value">18</div><div class="kpi__label">Active events</div></div>
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-currency-pound" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-arrow-up-right" aria-hidden="true"></i> 12%</span></div><div class="kpi__value">&pound;142k</div><div class="kpi__label">Revenue MTD</div></div>
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-user-plus" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--up"><i class="ti ti-arrow-up-right" aria-hidden="true"></i> 9</span></div><div class="kpi__value">27</div><div class="kpi__label">New leads</div></div>
            <div class="kpi"><div class="kpi__top"><span class="kpi__icon"><i class="ti ti-clock-hour-4" aria-hidden="true"></i></span><span class="kpi__delta kpi__delta--down"><i class="ti ti-arrow-down-right" aria-hidden="true"></i> 2</span></div><div class="kpi__value">6</div><div class="kpi__label">Pending approvals</div></div>
          </div>
        </section>
        <div class="dash-grid dash-grid--2">
          <section class="panel" aria-label="Revenue report"><div class="panel__head"><h2 class="panel__title">Revenue, last 7 months</h2><span class="badge badge--success">+12% YoY</span></div><div class="panel__body">${chartBars()}</div></section>
          <section class="panel" aria-label="Event mix"><div class="panel__head"><h2 class="panel__title">Event mix</h2></div><div class="panel__body">${eventMix()}</div></section>
        </div>
      `
    },
    clients: {
      title: 'Clients',
      subtitle: 'Accounts, leads and lifetime value',
      content: clientTable()
    },
    vendors: {
      title: 'Vendors',
      subtitle: 'Supplier network and approvals',
      content: `
        <section class="panel" aria-label="Vendors"><div class="panel__head"><h2 class="panel__title">Vendor network</h2><button class="btn btn--primary" style="min-height:40px"><i class="ti ti-plus" aria-hidden="true"></i> Add vendor</button></div><div class="table-wrap"><table class="table"><thead><tr><th>Vendor</th><th>Category</th><th>Rating</th><th>Open quotes</th><th>Status</th></tr></thead><tbody>
        <tr><td class="person__name">Petal & Stem</td><td>Florals</td><td>4.9</td><td>3</td><td><span class="badge badge--success">Preferred</span></td></tr>
        <tr><td class="person__name">Frame & Light</td><td>Photography</td><td>4.8</td><td>2</td><td><span class="badge badge--success">Preferred</span></td></tr>
        <tr><td class="person__name">Feast Co.</td><td>Catering</td><td>4.7</td><td>4</td><td><span class="badge badge--info">Active</span></td></tr>
        <tr><td class="person__name">Vinyl Nights DJ</td><td>Entertainment</td><td>4.4</td><td>1</td><td><span class="badge badge--warning">Review</span></td></tr>
        </tbody></table></div></section>
      `
    },
    events: {
      title: 'Events',
      subtitle: 'Pipeline and delivery stages',
      content: eventTable()
    },
    content: {
      title: 'Content',
      subtitle: 'Gallery and journal assets',
      content: `
        <div class="grid grid-3">
          <article class="card"><div class="card__media aspect-3-2"><img src="../assets/images/content/gallery-1.webp" alt="Garden estate wedding" width="800" height="1000" /></div><div class="card__body"><span class="pill">Gallery</span><h2 class="card__title" style="font-size:var(--fs-lg);margin-top:var(--space-1)">Wedding portfolio</h2><p style="font-size:var(--fs-small)">Ready for homepage and gallery use.</p></div></article>
          <article class="card"><div class="card__media aspect-3-2"><img src="../assets/images/content/blog-featured.webp" alt="Planning journal visual" width="1200" height="700" /></div><div class="card__body"><span class="pill">Journal</span><h2 class="card__title" style="font-size:var(--fs-lg);margin-top:var(--space-1)">Seasonal planning</h2><p style="font-size:var(--fs-small)">Featured article artwork is published.</p></div></article>
          <article class="card"><div class="card__media aspect-3-2"><img src="../assets/images/ui/og-image.webp" alt="Open graph preview" width="1200" height="630" /></div><div class="card__body"><span class="pill">Social</span><h2 class="card__title" style="font-size:var(--fs-lg);margin-top:var(--space-1)">OG preview</h2><p style="font-size:var(--fs-small)">Used across public pages.</p></div></article>
        </div>
      `
    },
    reports: {
      title: 'Reports',
      subtitle: 'Revenue and conversion performance',
      content: `<div class="dash-grid dash-grid--2"><section class="panel" aria-label="Revenue report"><div class="panel__head"><h2 class="panel__title">Revenue, last 7 months</h2><span class="badge badge--success">+12% YoY</span></div><div class="panel__body">${chartBars()}</div></section><section class="panel" aria-label="Event mix"><div class="panel__head"><h2 class="panel__title">Event mix</h2></div><div class="panel__body">${eventMix()}</div></section></div>`
    },
    messages: {
      title: 'Messages',
      subtitle: 'Team and client communication',
      content: `
        <section class="panel" aria-label="Messages"><div class="panel__head"><h2 class="panel__title">Inbox</h2><span class="badge badge--warning">5 pending</span></div><div class="panel__body">
          <div class="budget-row"><div><strong>Northwind Events</strong><p style="font-size:var(--fs-small);margin-top:4px">Updated attendee counts for the launch have been added.</p></div></div>
          <div class="budget-row"><div><strong>Lumen Foundation</strong><p style="font-size:var(--fs-small);margin-top:4px">Donor seating requires one more board review.</p></div></div>
          <div class="budget-row"><div><strong>Production Team</strong><p style="font-size:var(--fs-small);margin-top:4px">August crew allocations are ready for approval.</p></div></div>
        </div></section>
      `
    },
    settings: {
      title: 'Settings',
      subtitle: 'Studio preferences and permissions',
      content: `
        <div class="dash-grid dash-grid--2">
          <section class="panel"><div class="panel__head"><h2 class="panel__title">Workspace</h2></div><div class="panel__body"><div class="budget-row"><div class="budget-row__head"><span>Studio</span><strong>Marquee Events</strong></div></div><div class="budget-row"><div class="budget-row__head"><span>Timezone</span><strong>Europe/London</strong></div></div><div class="budget-row"><div class="budget-row__head"><span>Currency</span><strong>GBP</strong></div></div></div></section>
          <section class="panel"><div class="panel__head"><h2 class="panel__title">Permissions</h2></div><div class="panel__body"><div class="budget-row"><div class="budget-row__head"><span>Admin users</span><strong>4</strong></div></div><div class="budget-row"><div class="budget-row__head"><span>Client portals</span><strong>18 active</strong></div></div><div class="budget-row"><div class="budget-row__head"><span>Approval mode</span><span class="badge badge--success">Required</span></div></div></div></section>
        </div>
      `
    }
  }
};

function chartBars() {
  return `
    <div class="chart-bars" role="img" aria-label="Bar chart of monthly revenue trending upward from December to June">
      <div class="chart-bars__col"><div class="chart-bars__bar" style="height:45%"></div><span class="chart-bars__label">Dec</span></div>
      <div class="chart-bars__col"><div class="chart-bars__bar" style="height:38%"></div><span class="chart-bars__label">Jan</span></div>
      <div class="chart-bars__col"><div class="chart-bars__bar" style="height:55%"></div><span class="chart-bars__label">Feb</span></div>
      <div class="chart-bars__col"><div class="chart-bars__bar" style="height:62%"></div><span class="chart-bars__label">Mar</span></div>
      <div class="chart-bars__col"><div class="chart-bars__bar" style="height:74%"></div><span class="chart-bars__label">Apr</span></div>
      <div class="chart-bars__col"><div class="chart-bars__bar" style="height:80%"></div><span class="chart-bars__label">May</span></div>
      <div class="chart-bars__col"><div class="chart-bars__bar chart-bars__bar--accent" style="height:100%"></div><span class="chart-bars__label">Jun</span></div>
    </div>
  `;
}

function eventMix() {
  return `
    <div class="budget-row"><div class="budget-row__head"><span>Weddings</span><span>48%</span></div><div class="bar"><span class="bar__fill" style="width:48%"></span></div></div>
    <div class="budget-row"><div class="budget-row__head"><span>Corporate</span><span>27%</span></div><div class="bar"><span class="bar__fill bar__fill--accent" style="width:27%"></span></div></div>
    <div class="budget-row"><div class="budget-row__head"><span>Galas</span><span>15%</span></div><div class="bar"><span class="bar__fill" style="width:15%"></span></div></div>
    <div class="budget-row"><div class="budget-row__head"><span>Private</span><span>10%</span></div><div class="bar"><span class="bar__fill" style="width:10%"></span></div></div>
  `;
}

function eventTable() {
  return `
    <section class="panel" aria-label="Event pipeline"><div class="panel__head"><h2 class="panel__title">Event pipeline</h2><button class="btn btn--primary" style="min-height:40px"><i class="ti ti-plus" aria-hidden="true"></i> New event</button></div><div class="table-wrap"><table class="table"><thead><tr><th>Event</th><th>Client</th><th>Date</th><th>Value</th><th>Stage</th></tr></thead><tbody>
      <tr><td class="person__name">Garden Estate Wedding</td><td>E. Hartman</td><td>14 Sep 2026</td><td>&pound;9,800</td><td><span class="badge badge--info">Planning</span></td></tr>
      <tr><td class="person__name">Northwind Launch</td><td>Northwind Ltd</td><td>02 Jul 2026</td><td>&pound;24,000</td><td><span class="badge badge--warning">Final prep</span></td></tr>
      <tr><td class="person__name">Lumen Foundation Gala</td><td>Lumen Trust</td><td>19 Oct 2026</td><td>&pound;38,500</td><td><span class="badge badge--info">Planning</span></td></tr>
      <tr><td class="person__name">Helios Conference</td><td>Helios Tech</td><td>11 Aug 2026</td><td>&pound;52,000</td><td><span class="badge badge--success">Confirmed</span></td></tr>
      <tr><td class="person__name">Coastal Wedding</td><td>Marcus & Tom</td><td>05 Sep 2026</td><td>&pound;11,400</td><td><span class="badge badge--muted">Enquiry</span></td></tr>
    </tbody></table></div></section>
  `;
}

function clientTable() {
  return `
    <section class="panel" aria-label="Clients"><div class="panel__head"><h2 class="panel__title">Recent clients</h2><button class="btn btn--primary" style="min-height:40px"><i class="ti ti-plus" aria-hidden="true"></i> Add client</button></div><div class="table-wrap"><table class="table"><thead><tr><th>Client</th><th>Email</th><th>Events</th><th>Lifetime value</th><th>Status</th></tr></thead><tbody>
      <tr><td><div class="person"><img src="../assets/images/content/avatar-1.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Eloise Hartman</span></div></td><td>eloise@email.com</td><td>1</td><td>&pound;9,800</td><td><span class="badge badge--success">Active</span></td></tr>
      <tr><td><div class="person"><img src="../assets/images/content/avatar-3.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Daniel Osei</span></div></td><td>d.osei@northwind.co</td><td>3</td><td>&pound;61,000</td><td><span class="badge badge--success">Active</span></td></tr>
      <tr><td><div class="person"><img src="../assets/images/content/avatar-5.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Sofia Marchetti</span></div></td><td>sofia.m@email.com</td><td>2</td><td>&pound;14,700</td><td><span class="badge badge--info">Repeat</span></td></tr>
      <tr><td><div class="person"><img src="../assets/images/content/avatar-6.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Aisha Bello</span></div></td><td>aisha@heliostech.io</td><td>1</td><td>&pound;52,000</td><td><span class="badge badge--warning">Lead</span></td></tr>
      <tr><td><div class="person"><img src="../assets/images/content/avatar-4.webp" alt="" class="avatar-sm" width="36" height="36" /><span class="person__name">Priya Nair</span></div></td><td>priya.nair@email.com</td><td>1</td><td>&pound;6,200</td><td><span class="badge badge--muted">Past</span></td></tr>
    </tbody></table></div></section>
  `;
}

(function () {
  const body = document.body;
  const role = body.dataset.dashboardRole;
  const page = body.dataset.dashboardPage;
  const pageData = dashboardPages[role] && dashboardPages[role][page];
  const content = document.getElementById('dash-content');
  if (!pageData || !content) return;

  const title = document.getElementById('dash-page-title');
  const subtitle = document.getElementById('dash-page-subtitle');
  if (title) title.textContent = pageData.title;
  if (subtitle) subtitle.textContent = pageData.subtitle;
  document.title = pageData.title + ' - Marquee';
  content.innerHTML = pageData.content;
})();
