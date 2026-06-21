/* =============================================================
   MARQUEE — dashboard.js  (ES module)
   Sidebar collapse/overlay, sidebar active link, vendor
   approve/decline, guest add/remove. No console output.
   ============================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* ---------- Sidebar overlay (mobile) ---------- */
(function () {
  const sidebar = $('#dash-sidebar');
  const overlay = $('#dash-overlay');
  const burger = $('#dash-burger');
  if (!sidebar || !burger) return;
  const open = () => {
    sidebar.classList.add('is-open');
    overlay && overlay.classList.add('is-open');
    burger.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    sidebar.classList.remove('is-open');
    overlay && overlay.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  };
  burger.addEventListener('click', () => {
    sidebar.classList.contains('is-open') ? close() : open();
  });
  overlay && overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  $$('.dash-nav__link', sidebar).forEach((link) => {
    link.addEventListener('click', () => { if (window.innerWidth < 1024) close(); });
  });
})();

/* ---------- Sidebar active link (scroll spy + click) ---------- */
(function () {
  const links = $$('.dash-nav__link').filter((l) => (l.getAttribute('href') || '').startsWith('#'));
  if (!links.length) return;
  const setActive = (link) => {
    links.forEach((l) => l.classList.toggle('is-active', l === link));
  };
  links.forEach((link) => {
    link.addEventListener('click', () => setActive(link));
  });
  const sections = links
    .map((l) => document.getElementById(l.getAttribute('href').slice(1)))
    .filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = links.find((l) => l.getAttribute('href') === '#' + entry.target.id);
          if (link) setActive(link);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => io.observe(s));
  }
})();

/* ---------- Vendor approve / decline ---------- */
(function () {
  const makeBadge = (text, cls) => {
    const span = document.createElement('span');
    span.className = 'badge ' + cls;
    span.textContent = text;
    return span;
  };
  $$('.table-action--approve, .table-action--decline').forEach((btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('tr');
      if (!row) return;
      const statusCell = row.children[3];
      const actionCell = row.children[4];
      const approved = btn.classList.contains('table-action--approve');
      if (statusCell) {
        statusCell.textContent = '';
        statusCell.appendChild(approved ? makeBadge('Approved', 'badge--success') : makeBadge('Declined', 'badge--danger'));
      }
      if (actionCell) {
        actionCell.textContent = '—';
        actionCell.style.color = 'var(--color-text-muted)';
      }
    });
  });
})();

/* ---------- Guest add / remove ---------- */
(function () {
  const addBtn = $('#add-guest');
  const table = $('#guest-table');
  if (!table) return;
  const tbody = table.querySelector('tbody');

  const bindRemove = (btn) => {
    btn.addEventListener('click', () => {
      const row = btn.closest('tr');
      if (row) row.remove();
    });
  };
  $$('.table-action', tbody).forEach(bindRemove);

  if (addBtn && tbody) {
    let n = 1;
    addBtn.addEventListener('click', () => {
      const row = document.createElement('tr');
      const cells = [
        { text: 'New guest ' + n++, cls: 'person__name' },
        { text: '1' },
        { badge: ['Invited', 'badge--info'] },
        { text: 'Standard' },
        { text: '—' }
      ];
      cells.forEach((c) => {
        const td = document.createElement('td');
        if (c.cls) td.className = c.cls;
        if (c.badge) {
          const b = document.createElement('span');
          b.className = 'badge ' + c.badge[1];
          b.textContent = c.badge[0];
          td.appendChild(b);
        } else {
          td.textContent = c.text;
        }
        row.appendChild(td);
      });
      const actionTd = document.createElement('td');
      const rmBtn = document.createElement('button');
      rmBtn.className = 'table-action';
      rmBtn.setAttribute('aria-label', 'Remove guest');
      const icon = document.createElement('i');
      icon.className = 'ti ti-trash';
      icon.setAttribute('aria-hidden', 'true');
      rmBtn.appendChild(icon);
      bindRemove(rmBtn);
      actionTd.appendChild(rmBtn);
      row.appendChild(actionTd);
      tbody.appendChild(row);
    });
  }
})();
