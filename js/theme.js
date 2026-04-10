/* ===================================
   THEME TOGGLE (Dark / Light)
   =================================== */

export function initTheme() {
  const toggle = document.getElementById('theme-toggle');
  const root   = document.documentElement;

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  // Toggle on click
  toggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
