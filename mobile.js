(function () {
  const BREAKPOINT = 860;
  let observed = false;

  function closeMenu() {
    document.body.classList.remove('ar-menu-open');
    document.querySelectorAll('.ar-menu-toggle').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Ouvrir le menu');
    });
  }

  function enhanceHeader(header, index) {
    if (header.dataset.arMobileHeader === '1') return;
    const nav = header.querySelector('nav');
    if (!nav) return;

    header.dataset.arMobileHeader = '1';
    nav.dataset.arMobileNav = '1';
    if (!nav.id) nav.id = 'ar-mobile-nav-' + index;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'ar-menu-toggle';
    button.setAttribute('aria-controls', nav.id);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Ouvrir le menu');
    button.innerHTML = '<span></span><span></span><span></span>';

    button.addEventListener('click', () => {
      const open = !document.body.classList.contains('ar-menu-open');
      document.body.classList.toggle('ar-menu-open', open);
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    header.appendChild(button);
  }

  function init() {
    document.querySelectorAll('header').forEach(enhanceHeader);

    if (!observed) {
      observed = true;
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
      });
      window.addEventListener('resize', () => {
        if (window.innerWidth > BREAKPOINT) closeMenu();
      });

      const observer = new MutationObserver(() => {
        document.querySelectorAll('header').forEach(enhanceHeader);
      });
      observer.observe(document.documentElement, { childList: true, subtree: true });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
