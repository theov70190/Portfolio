/* ─────────────────────────────────────────────
   app.js — Navigation, filtres, formulaire
   ───────────────────────────────────────────── */

/**
 * Navigate — change de page active et met à jour la nav
 * @param {string} pageId  - identifiant de la page (ex: 'home')
 * @param {Element} linkEl - élément <li> cliqué dans la sidebar
 */
function navigate(pageId, linkEl) {
  // Masquer toutes les pages
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });

  // Désactiver tous les liens
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Afficher la page cible
  const targetPage = document.getElementById('page-' + pageId);
  if (targetPage) {
    targetPage.classList.add('active');
    document.getElementById('content').scrollTop = 0;
  }

  // Activer le lien correspondant
  if (linkEl) {
    linkEl.classList.add('active');
  }

  // Fermer le menu mobile si ouvert
  closeSidebar();

  // Déclencher les animations propres à certaines pages
  if (pageId === 'competences') {
    setTimeout(animateSkillBars, 300);
  }
}

/**
 * filterProjects — filtre les cartes projet par catégorie
 * @param {string}  category - 'all' | 'enterprise' | 'school' | 'future'
 * @param {Element} btn      - bouton filtre cliqué
 */
function filterProjects(category, btn) {
  // Réinitialiser tous les boutons
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('filter-btn--active');
  });
  btn.classList.add('filter-btn--active');

  // Afficher / masquer les cartes
  document.querySelectorAll('.proj-card').forEach(card => {
    const match = category === 'all' || card.dataset.category === category;
    card.style.display = match ? '' : 'none';
  });
}

/**
 * handleSend — simule l'envoi du formulaire de contact
 * @param {Element} btn - bouton d'envoi
 */
function handleSend(btn) {
  // Fonction désactivée : le formulaire est maintenant géré par Formspree
}

/* ─────────────────────────────────────────────
   Menu mobile
   ───────────────────────────────────────────── */
let sidebarOpen = false;

function toggleMenu() {
  sidebarOpen = !sidebarOpen;
  document.getElementById('sidebar').classList.toggle('open', sidebarOpen);
  document.getElementById('sidebar-overlay').classList.toggle('open', sidebarOpen);
}

function closeSidebar() {
  if (window.innerWidth > 768) return;
  sidebarOpen = false;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
}
