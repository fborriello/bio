/* ===================================
   TYPEWRITER EFFECT
   =================================== */

export function initTypewriter() {
  const el = document.getElementById('typewriter-text');
  if (!el) return;

  const roles = [
    'Engineering Manager',
    'Open Source Enthusiast',
    'Team Builder',
    'People & Tech Leader',
  ];

  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;
  let timeoutId  = null;

  function type() {
    const current = roles[roleIndex];
    el.textContent = isDeleting
      ? current.substring(0, charIndex--)
      : current.substring(0, charIndex++);

    let delay = isDeleting ? 45 : 90;

    if (!isDeleting && charIndex === current.length + 1) {
      delay      = 2200;
      isDeleting = true;
    } else if (isDeleting && charIndex < 0) {
      isDeleting = false;
      charIndex  = 0;
      roleIndex  = (roleIndex + 1) % roles.length;
      delay      = 500;
    }

    timeoutId = setTimeout(type, delay);
  }

  type();
}
