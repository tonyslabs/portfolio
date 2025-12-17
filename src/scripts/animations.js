export function setupAnimations() {
  const targets = Array.from(document.querySelectorAll('[data-animate]'));
  if (targets.length === 0) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.1 },
  );

  for (const el of targets) observer.observe(el);

  return () => observer.disconnect();
}

