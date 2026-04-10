/* ===================================
   NAVIGATION
   =================================== */

export function initNav() {
  const nav         = document.getElementById('navbar');
  const hamburger   = document.getElementById('nav-hamburger');
  const overlay     = document.getElementById('nav-overlay');
  const mobileLinks = document.querySelectorAll('.nav__mobile-link');
  const navLinks    = document.querySelectorAll('.nav__link');
  const sections    = document.querySelectorAll('section[id]');

  // --- Scrolled state ---
  const scrollHandler = () => {
    nav?.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', scrollHandler, { passive: true });
  scrollHandler(); // run once on load

  // --- Hamburger toggle ---
  function openMenu() {
    hamburger?.classList.add('is-open');
    overlay?.classList.add('is-open');
    hamburger?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger?.classList.remove('is-open');
    overlay?.classList.remove('is-open');
    hamburger?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = hamburger.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  });

  // Close on mobile link click
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // --- Active section highlight ---
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('is-active'));
        const active = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
        active?.classList.add('is-active');
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // --- Smooth scroll for all anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
