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
toggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(open));
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

// Only one FAQ open at a time
const faqs = document.querySelectorAll('.faq__item');
faqs.forEach((d) =>
  d.addEventListener('toggle', () => {
    if (d.open) faqs.forEach((o) => o !== d && (o.open = false));
  })
);
