/* ─────────────────────────────────────────────
   animations.js — Animations : barres, reveal
   ───────────────────────────────────────────── */

/**
 * animateSkillBars — anime les barres de compétences
 * au chargement de la page "Compétences".
 * La largeur cible est lue depuis l'attribut data-width.
 */
function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const targetWidth = bar.getAttribute('data-width');
    if (targetWidth) {
      bar.style.width = targetWidth + '%';
    }
  });
}

/**
 * revealOnScroll — anime les éléments .reveal au passage
 * dans le viewport (Intersection Observer).
 * Utilisé pour les sections longues avec défilement.
 */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

/* ── Initialisation au chargement ── */
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
});
