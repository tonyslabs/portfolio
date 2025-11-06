export function setupNav() {
  const navButton = document.querySelector('.navbar-icon-button');
  const navMenu = document.querySelector('.w-nav-menu');

  if (!navButton || !navMenu) return;

  const toggleNav = () => {
    const isOpen = navMenu.classList.contains('is-open');

    navMenu.classList.toggle('is-visible', !isOpen);
    setTimeout(
      () => {
        navMenu.classList.toggle('is-open', !isOpen);
        navButton.setAttribute('aria-expanded', String(!isOpen));
      },
      isOpen ? 300 : 10
    );
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      const isOpen = navMenu.classList.contains('is-open');
      if (isOpen) toggleNav();
    }
  };

  navButton.addEventListener('click', toggleNav);
  document.addEventListener('keydown', onKeyDown);
  return () => {
    navButton.removeEventListener('click', toggleNav);
    document.removeEventListener('keydown', onKeyDown);
  };
}

export function setupSidebarCollapse() {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.sidebar-toggle');
  if (!sidebar || !toggleBtn) return;

  const storageKey = 'sidebarCollapsed';
  const applyState = (collapsed) => {
    sidebar.classList.toggle('is-collapsed', collapsed);
    toggleBtn.setAttribute('aria-pressed', String(collapsed));
    const text = toggleBtn.querySelector('.toggle-text');
    const icon = toggleBtn.querySelector('.toggle-icon');
    if (text) text.textContent = collapsed ? 'Expand' : 'Collapse';
    if (icon) icon.textContent = collapsed ? '⟩⟩' : '⟨⟩';
  };

  // Initial state
  const initial = localStorage.getItem(storageKey) === '1';
  applyState(initial);

  const onClick = () => {
    const isCollapsed = sidebar.classList.contains('is-collapsed');
    const next = !isCollapsed;
    applyState(next);
    try { localStorage.setItem(storageKey, next ? '1' : '0'); } catch {}
  };

  toggleBtn.addEventListener('click', onClick);
  // Expand on profile image/brand click when collapsed
  const brand = document.querySelector('.w-nav-brand');
  const onBrandClick = (e) => {
    if (sidebar.classList.contains('is-collapsed')) {
      e.preventDefault();
      applyState(false);
      try { localStorage.setItem(storageKey, '0'); } catch {}
    }
  };
  if (brand) brand.addEventListener('click', onBrandClick);

  return () => {
    toggleBtn.removeEventListener('click', onClick);
    if (brand) brand.removeEventListener('click', onBrandClick);
  };
}
