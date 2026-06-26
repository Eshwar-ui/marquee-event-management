/* =============================================================
   MARQUEE — main.js  (ES module)
   Handles: preloader, dark mode, RTL, hamburger + focus trap,
   nav active state, navbar shadow, scroll reveal, counters,
   footer year, accordion, testimonial slider, back-to-top,
   cookie consent, and form validators (newsletter/contact/login/signup).
   ============================================================= */

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const STORE = { theme: 'marquee-theme', dir: 'marquee-dir', cookie: 'marquee-cookie' };
const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Preloader ---------- */
window.addEventListener('load', () => {
  const pre = $('#preloader');
  if (pre) {
    pre.classList.add('is-hidden');
    setTimeout(() => pre.remove(), 600);
  }
});

/* ---------- Footer year ---------- */
const yearEl = $('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Micro-interaction helpers ---------- */
(function () {
  if (!motionOK) return;
  const targets = $$('.btn, .icon-btn, .filter-btn, .table-action');
  targets.forEach((target) => {
    if (target.dataset.microReady) return;
    target.dataset.microReady = 'true';
    target.addEventListener('pointerdown', (e) => {
      if (target.disabled) return;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'btn__ripple';
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      target.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove(), { once: true });
    });
  });
})();

/* ---------- Dark mode ---------- */
const themeToggle = $('#theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem(STORE.theme, isDark ? 'dark' : 'light'); } catch (e) {}
  });
}

/* ---------- RTL toggle ---------- */
const rtlToggle = $('#rtl-toggle');
if (rtlToggle) {
  rtlToggle.addEventListener('click', () => {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    if (isRtl) {
      document.documentElement.removeAttribute('dir');
      try { localStorage.setItem(STORE.dir, 'ltr'); } catch (e) {}
    } else {
      document.documentElement.setAttribute('dir', 'rtl');
      try { localStorage.setItem(STORE.dir, 'rtl'); } catch (e) {}
    }
  });
}

/* ---------- Nav active state (Section 29) ---------- */
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  $$('.navbar__link, #mobile-menu a').forEach((link) => {
    const page = (link.getAttribute('href') || '').split('/').pop();
    if (page === current) link.setAttribute('aria-current', 'page');
  });
  // Dropdown parents stay highlighted on any of their child pages.
  const homeToggle = $('[data-nav="home"]');
  if (homeToggle && (current === 'index.html' || current === 'index-2.html')) {
    homeToggle.setAttribute('aria-current', 'page');
  }
  const dashToggle = $('[data-nav="dashboard"]');
  if (dashToggle && (current === 'dashboard-user.html' || current === 'dashboard-admin.html')) {
    dashToggle.setAttribute('aria-current', 'page');
  }
})();

/* ---------- Navbar shadow on scroll ---------- */
const navbar = $('#navbar');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---------- Focus trap helper ---------- */
function createFocusTrap(container) {
  const selector = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
  function handle(e) {
    if (e.key !== 'Tab') return;
    const items = $$(selector, container).filter((el) => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
  return {
    activate() { container.addEventListener('keydown', handle); },
    deactivate() { container.removeEventListener('keydown', handle); }
  };
}

/* ---------- Hamburger / mobile menu ---------- */
const hamburger = $('#hamburger');
const mobileMenu = $('#mobile-menu');
if (hamburger && mobileMenu) {
  const trap = createFocusTrap(mobileMenu);
  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    mobileMenu.style.maxHeight = null;
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.querySelector('i').className = 'ti ti-menu-2';
    trap.deactivate();
  };
  const openMenu = () => {
    mobileMenu.classList.add('is-open');
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.querySelector('i').className = 'ti ti-x';
    trap.activate();
  };
  hamburger.addEventListener('click', () => {
    const open = hamburger.getAttribute('aria-expanded') === 'true';
    open ? closeMenu() : openMenu();
  });
  $$('#mobile-menu a').forEach((a) => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      hamburger.focus();
    }
  });
}

/* ---------- Scroll reveal ---------- */
const revealEls = $$('.reveal');
if (revealEls.length) {
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
}

/* ---------- Data motion ---------- */
(function () {
  const motionEls = $$('.bar, .chart-bars, .kpi');
  if (!motionEls.length) return;
  if (!motionOK || !('IntersectionObserver' in window)) {
    motionEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3, rootMargin: '0px 0px -30px 0px' });
  motionEls.forEach((el) => io.observe(el));
})();

/* ---------- Stat counters ---------- */
const counters = $$('[data-count]');
if (counters.length && 'IntersectionObserver' in window) {
  const animate = (el) => {
    const raw = el.getAttribute('data-count');
    const target = parseFloat(raw);
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = (raw.split('.')[1] || '').length;
    const duration = 1500;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      el.textContent = (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const co = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { animate(entry.target); co.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });
  counters.forEach((el) => co.observe(el));
}

/* ---------- Accordion ---------- */
$$('.accordion__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const expanded = trigger.getAttribute('aria-expanded') === 'true';
    const panel = trigger.nextElementSibling;
    trigger.setAttribute('aria-expanded', String(!expanded));
    panel.style.maxHeight = expanded ? null : panel.scrollHeight + 'px';
  });
});

/* ---------- Testimonial slider ---------- */
(function () {
  const slider = $('#testimonial-slider');
  if (!slider) return;
  const slides = $$('.testimonial-slide', slider);
  if (slides.length < 2) return;
  let i = 0;
  let timer;
  const show = (n) => {
    slides.forEach((s, idx) => { s.style.display = idx === n ? 'block' : 'none'; });
    i = n;
  };
  const next = () => show((i + 1) % slides.length);
  const prev = () => show((i - 1 + slides.length) % slides.length);
  const start = () => { timer = setInterval(next, 6000); };
  const reset = () => { clearInterval(timer); start(); };
  $('#testi-next') && $('#testi-next').addEventListener('click', () => { next(); reset(); });
  $('#testi-prev') && $('#testi-prev').addEventListener('click', () => { prev(); reset(); });
  show(0); start();
})();

/* ---------- Scroll progress bar ---------- */
if (motionOK) {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    bar.style.transform = `scaleX(${p})`;
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

/* ---------- Back to top ---------- */
const backTop = $('#back-to-top');
if (backTop) {
  const toggle = () => backTop.classList.toggle('is-visible', window.scrollY > 400);
  toggle();
  window.addEventListener('scroll', toggle, { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- Cookie consent ---------- */
(function () {
  const banner = $('#cookie-banner');
  if (!banner) return;
  let choice = null;
  try { choice = localStorage.getItem(STORE.cookie); } catch (e) {}
  if (!choice) setTimeout(() => banner.classList.add('is-visible'), 1200);
  const close = (val) => {
    try { localStorage.setItem(STORE.cookie, val); } catch (e) {}
    banner.classList.remove('is-visible');
  };
  $('#cookie-accept') && $('#cookie-accept').addEventListener('click', () => close('accepted'));
  $('#cookie-decline') && $('#cookie-decline').addEventListener('click', () => close('declined'));
})();

/* ---------- Validation helpers ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function setError(input, errEl, msg) {
  if (msg) {
    input.setAttribute('aria-invalid', 'true');
    if (errEl) errEl.textContent = msg;
    return false;
  }
  input.removeAttribute('aria-invalid');
  if (errEl) errEl.textContent = '';
  return true;
}

/* ---------- Newsletter (footer) ---------- */
(function () {
  const form = $('#newsletter-form');
  if (!form) return;
  const email = $('#news-email', form);
  const err = $('#news-error', form);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.value.trim())) { setError(email, err, 'Enter a valid email address.'); return; }
    setError(email, err, '');
    email.value = '';
    err.style.color = 'var(--color-success)';
    err.textContent = 'Thank you, you are on the list.';
  });
})();

/* ---------- Contact form ---------- */
(function () {
  const form = $('#contact-form');
  if (!form) return;
  const fields = {
    name: $('#cf-name', form), email: $('#cf-email', form),
    subject: $('#cf-subject', form), message: $('#cf-message', form)
  };
  const errs = {
    name: $('#cf-name-error', form), email: $('#cf-email-error', form),
    subject: $('#cf-subject-error', form), message: $('#cf-message-error', form)
  };
  const counter = $('#cf-counter', form);
  if (counter && fields.message) {
    const update = () => { counter.textContent = `${fields.message.value.length} / 1000`; };
    fields.message.addEventListener('input', update); update();
  }
  const validate = () => {
    let ok = true;
    if (fields.name.value.trim().length < 2) ok = setError(fields.name, errs.name, 'Please enter at least 2 characters.') && ok;
    else setError(fields.name, errs.name, '');
    if (!EMAIL_RE.test(fields.email.value.trim())) ok = setError(fields.email, errs.email, 'Enter a valid email address.') && ok;
    else setError(fields.email, errs.email, '');
    if (fields.subject.value.trim().length < 5) ok = setError(fields.subject, errs.subject, 'Subject needs at least 5 characters.') && ok;
    else setError(fields.subject, errs.subject, '');
    const len = fields.message.value.trim().length;
    if (len < 20 || len > 1000) ok = setError(fields.message, errs.message, 'Message must be 20 to 1000 characters.') && ok;
    else setError(fields.message, errs.message, '');
    return ok;
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate()) return;
    const success = $('#contact-success');
    form.style.display = 'none';
    if (success) success.classList.add('is-visible');
  });
})();

/* ---------- Login form ---------- */
(function () {
  const form = $('#login-form');
  if (!form) return;
  const email = $('#login-email', form);
  const pass = $('#login-password', form);
  const emailErr = $('#login-email-error', form);
  const passErr = $('#login-password-error', form);
  const alertBox = $('#login-alert', form);
  const toggle = $('#login-pass-toggle', form);
  const submit = $('#login-submit', form);
  if (toggle) toggle.addEventListener('click', () => {
    const showing = pass.type === 'text';
    pass.type = showing ? 'password' : 'text';
    toggle.querySelector('i').className = showing ? 'ti ti-eye' : 'ti ti-eye-off';
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    if (!EMAIL_RE.test(email.value.trim())) ok = setError(email, emailErr, 'Enter a valid email address.') && ok;
    else setError(email, emailErr, '');
    if (pass.value.length < 8) ok = setError(pass, passErr, 'Password must be at least 8 characters.') && ok;
    else setError(pass, passErr, '');
    if (!ok) return;
    submit.disabled = true;
    submit.classList.add('is-loading');
    submit.textContent = 'Signing in…';
    setTimeout(() => {
      submit.disabled = false;
      submit.classList.remove('is-loading');
      submit.textContent = 'Sign in';
      alertBox.classList.add('is-visible');
      alertBox.textContent = 'Those credentials did not match. Try demo@marquee.events / password123.';
    }, 1400);
  });
})();

/* ---------- Countdown (coming-soon) ---------- */
(function () {
  const root = $('#countdown');
  if (!root) return;
  const target = new Date(root.getAttribute('data-target')).getTime();
  const out = {
    days: $('#cd-days', root), hours: $('#cd-hours', root),
    mins: $('#cd-mins', root), secs: $('#cd-secs', root)
  };
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    if (out.days) out.days.textContent = pad(d);
    if (out.hours) out.hours.textContent = pad(h);
    if (out.mins) out.mins.textContent = pad(m);
    if (out.secs) out.secs.textContent = pad(s);
  };
  tick();
  setInterval(tick, 1000);
  const form = $('#coming-form');
  if (form) {
    const email = $('#coming-email', form);
    const msg = $('#coming-msg', form);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!EMAIL_RE.test(email.value.trim())) {
        email.setAttribute('aria-invalid', 'true');
        if (msg) { msg.style.color = 'var(--color-danger)'; msg.textContent = 'Enter a valid email address.'; }
        return;
      }
      email.removeAttribute('aria-invalid');
      email.value = '';
      if (msg) { msg.style.color = 'var(--color-success)'; msg.textContent = 'You are on the list, we will be in touch.'; }
    });
  }
})();

/* ---------- Gallery / blog category filter ---------- */
(function () {
  const bars = $$('.filter-bar');
  bars.forEach((bar) => {
    const buttons = $$('.filter-btn', bar);
    const grid = bar.nextElementSibling;
    if (!grid) return;
    const items = $$('[data-category]', grid);
    const empty = $('#' + (grid.id || '') + '-empty') || $('#gallery-empty');
    bar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      const filter = btn.getAttribute('data-filter');
      let shown = 0;
      grid.classList.add('filtering');
      items.forEach((item) => {
        const match = filter === 'all' || item.getAttribute('data-category') === filter;
        if (match) {
          item.style.display = '';
          requestAnimationFrame(() => item.classList.remove('is-filtering-out'));
        } else {
          item.classList.add('is-filtering-out');
          window.setTimeout(() => { item.style.display = 'none'; }, motionOK ? 180 : 0);
        }
        if (match) shown++;
      });
      window.setTimeout(() => grid.classList.remove('filtering'), motionOK ? 260 : 0);
      if (empty) empty.style.display = shown === 0 ? 'block' : 'none';
    });
  });
})();

/* ---------- Signup form ---------- */
(function () {
  const form = $('#signup-form');
  if (!form) return;
  const name = $('#su-name', form);
  const email = $('#su-email', form);
  const pass = $('#su-password', form);
  const confirm = $('#su-confirm', form);
  const terms = $('#su-terms', form);
  const submit = $('#su-submit', form);
  const bars = $$('.strength__bar', form);
  const rules = {
    length: $('#rule-length', form), upper: $('#rule-upper', form),
    number: $('#rule-number', form), symbol: $('#rule-symbol', form)
  };
  const errs = {
    name: $('#su-name-error', form), email: $('#su-email-error', form),
    confirm: $('#su-confirm-error', form)
  };
  const check = (v) => ({
    length: v.length >= 8,
    upper: /[A-Z]/.test(v),
    number: /[0-9]/.test(v),
    symbol: /[^A-Za-z0-9]/.test(v)
  });
  const refresh = () => {
    const r = check(pass.value);
    const score = Object.values(r).filter(Boolean).length;
    bars.forEach((bar, idx) => {
      bar.className = 'strength__bar' + (idx < score ? ' is-on-' + score : '');
    });
    Object.keys(rules).forEach((k) => {
      if (rules[k]) {
        rules[k].classList.toggle('is-valid', r[k]);
        const icon = rules[k].querySelector('i');
        if (icon) icon.className = r[k] ? 'ti ti-circle-check' : 'ti ti-circle';
      }
    });
    const allValid = score === 4 && terms.checked
      && name.value.trim().length >= 2 && EMAIL_RE.test(email.value.trim())
      && confirm.value === pass.value && confirm.value.length > 0;
    submit.disabled = !allValid;
    return r;
  };
  [pass, confirm, terms, name, email].forEach((el) => {
    el.addEventListener('input', refresh);
    el.addEventListener('change', refresh);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let ok = true;
    if (name.value.trim().length < 2) ok = setError(name, errs.name, 'Please enter your name.') && ok;
    else setError(name, errs.name, '');
    if (!EMAIL_RE.test(email.value.trim())) ok = setError(email, errs.email, 'Enter a valid email address.') && ok;
    else setError(email, errs.email, '');
    if (confirm.value !== pass.value) ok = setError(confirm, errs.confirm, 'Passwords do not match.') && ok;
    else setError(confirm, errs.confirm, '');
    if (!ok) return;
    const success = $('#signup-success');
    if (success) { form.style.display = 'none'; success.classList.add('is-visible'); }
  });
  refresh();
})();
