document.documentElement.classList.add('js');

// Scroll reveal
const revealEls = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-in'));
}

// Seamless marquees: duplicate the list once
document.querySelectorAll('.marquee, [data-loop]').forEach((list) => {
  [...list.children].forEach((li) => {
    const copy = li.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    list.appendChild(copy);
  });
});

// Announcement dismiss
document.querySelectorAll('[data-dismiss]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.dismiss)?.remove();
  });
});

// Copy install command
document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied';
    } catch {
      btn.textContent = 'Press ⌘C';
    }
    setTimeout(() => (btn.textContent = 'Copy'), 1600);
  });
});

// Mobile nav
const toggle = document.querySelector('[data-nav-toggle]');
// In the phone menu the buttons sit under the links, which grow when Resources opens
const placeNavActions = () => {
  const links = document.querySelector('.nav__links'), acts = document.querySelector('.nav__actions');
  if (links && acts) acts.style.top = document.body.classList.contains('nav-open') && matchMedia('(max-width: 1040px)').matches
    ? `${links.offsetTop + links.offsetHeight}px` : '';
};
toggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(open));
  placeNavActions();
});
// Resources dropdown: closes on a click elsewhere or Esc
const navRes = document.querySelector('.navres');
navRes?.addEventListener('toggle', placeNavActions);
document.addEventListener('click', (e) => { if (navRes?.open && !navRes.contains(e.target)) navRes.open = false; });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navRes?.open) { navRes.open = false; navRes.querySelector('summary').focus(); }
});
document.querySelectorAll('.nav__links a').forEach((a) =>
  a.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    toggle?.setAttribute('aria-expanded', 'false');
  })
);

// Catalog filter
const chips = document.querySelectorAll('[data-filter]');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => {
      c.classList.toggle('is-active', c === chip);
      c.setAttribute('aria-selected', String(c === chip));
    });
    const f = chip.dataset.filter;
    document.querySelectorAll('.cat').forEach((cat) => {
      cat.hidden = f !== 'all' && cat.dataset.group !== f;
    });
  });
});

// Rotating example request (simple.html)
document.querySelectorAll('[data-typer]').forEach((el) => {
  const lines = JSON.parse(el.dataset.typer);
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let i = 0;
  setInterval(() => {
    el.classList.add('is-fading');
    setTimeout(() => {
      i = (i + 1) % lines.length;
      el.textContent = lines[i];
      el.classList.remove('is-fading');
    }, 300);
  }, 3200);
});

// Copy buttons on detail pages and blog posts (the catalogue side panel has its own handler in catalogue.js)
document.addEventListener('click', async (e) => {
  const b = e.target.closest('[data-copy-id]');
  if (!b || b.closest('[data-panel]')) return;
  const label = b.dataset.label ?? (b.dataset.label = b.textContent);
  try {
    await navigator.clipboard.writeText(b.dataset.copyId);
    b.textContent = 'Copied';
  } catch {
    b.textContent = 'Press ⌘C';
  }
  setTimeout(() => (b.textContent = label), 1600);
});

// For humans / For agents (detail pages and blog posts): the choice is kept in localStorage; ?view=agent opens the Markdown view
{
  const set = (v) => {
    document.querySelectorAll('[data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === v)));
    document.querySelectorAll('[data-human-view]').forEach((e) => (e.hidden = v === 'agent'));
    document.querySelectorAll('[data-agent-view]').forEach((e) => (e.hidden = v !== 'agent'));
    try { localStorage.setItem('pramaan-view', v); } catch {}
  };
  if (document.querySelector('[data-view]')) {
    document.addEventListener('click', async (e) => {
      const b = e.target.closest('[data-view]');
      if (b) return set(b.dataset.view);
      const c = e.target.closest('[data-copy-pre]');
      if (!c) return;
      try { await navigator.clipboard.writeText(c.closest('.agent-view').querySelector('pre').textContent); c.textContent = 'Copied'; } catch { c.textContent = 'Press ⌘C'; }
      setTimeout(() => (c.textContent = 'Copy'), 1600);
    });
    let saved = null;
    try { saved = localStorage.getItem('pramaan-view'); } catch {}
    const q = new URLSearchParams(location.search).get('view');
    set(q === 'agent' || q === 'human' ? q : saved === 'agent' ? 'agent' : 'human');
  }
}

// Only one FAQ open at a time
const faqs = document.querySelectorAll('.faq__item');
faqs.forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) faqs.forEach((o) => o !== d && (o.open = false));
  })
);
