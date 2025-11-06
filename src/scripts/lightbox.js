export function setupLightbox() {
  let overlay = document.querySelector('.lightbox-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-backdrop"></div>
      <div class="lightbox-content" role="dialog" aria-modal="true" aria-label="Image viewer">
        <button class="lightbox-close" aria-label="Close">×</button>
        <img class="lightbox-image" alt="Expanded image" />
        <button class="lightbox-prev" aria-label="Previous">‹</button>
        <button class="lightbox-next" aria-label="Next">›</button>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const imgEl = overlay.querySelector('.lightbox-image');
  const closeBtn = overlay.querySelector('.lightbox-close');
  const prevBtn = overlay.querySelector('.lightbox-prev');
  const nextBtn = overlay.querySelector('.lightbox-next');
  const backdrop = overlay.querySelector('.lightbox-backdrop');

  let currentGroup = [];
  let currentIndex = -1;

  function open(src, group, index) {
    currentGroup = group || [src];
    currentIndex = typeof index === 'number' ? index : 0;
    updateImage();
    overlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
  }

  function updateImage() {
    imgEl.src = currentGroup[currentIndex];
    prevBtn.style.display = currentGroup.length > 1 ? 'block' : 'none';
    nextBtn.style.display = currentGroup.length > 1 ? 'block' : 'none';
  }

  function prev() {
    if (currentGroup.length < 2) return;
    currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
    updateImage();
  }

  function next() {
    if (currentGroup.length < 2) return;
    currentIndex = (currentIndex + 1) % currentGroup.length;
    updateImage();
  }

  const onClick = (e) => {
    const link = e.target.closest('a.lightbox-link');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    e.preventDefault();
    const groupId = link.getAttribute('data-lightbox');
    if (groupId) {
      const groupLinks = Array.from(document.querySelectorAll(`a.lightbox-link[data-lightbox="${groupId}"]`));
      const group = groupLinks.map((a) => a.getAttribute('href')).filter(Boolean);
      const index = groupLinks.indexOf(link);
      open(href, group, index);
    } else {
      open(href);
    }
  };

  const onKey = (e) => {
    if (!overlay.classList.contains('is-visible')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') prev();
    if (e.key === 'ArrowRight') next();
  };

  const onBackdrop = (e) => {
    if (e.target === backdrop) close();
  };

  document.addEventListener('click', onClick);
  document.addEventListener('keydown', onKey);
  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);
  backdrop.addEventListener('click', onBackdrop);

  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onKey);
    closeBtn.removeEventListener('click', close);
    prevBtn.removeEventListener('click', prev);
    nextBtn.removeEventListener('click', next);
    backdrop.removeEventListener('click', onBackdrop);
  };
}

