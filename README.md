# Portfolio — Théo Valadoux

## Structure du projet

```
portfolio/
├── index.html          ← Page principale (structure HTML)
│
├── css/
│   ├── style.css       ← Reset, variables CSS, layout, composants partagés
│   ├── nav.css         ← Sidebar, liens de navigation, menu mobile
│   └── pages.css       ← Styles spécifiques à chaque page
│
├── js/
│   ├── app.js          ← Navigation, filtres projets, formulaire contact
│   └── animations.js   ← Barres de compétences, scroll reveal
│
└── assets/             ← Dossier pour tes images et fichiers (à remplir)
```

## Lancer le projet

Ouvre simplement `index.html` dans ton navigateur.

> **Conseil** : installe l'extension **Live Server** dans VS Code pour avoir
> un rechargement automatique à chaque sauvegarde.
> Clic droit sur `index.html` → *Open with Live Server*

## Pages disponibles

| Page         | Description                              |
|--------------|------------------------------------------|
| Accueil      | Hero avec stats, pills et boutons d'action |
| Parcours     | Timeline expérience pro + formation      |
| Compétences  | Barres de progression + cards + outils   |
| Projets      | Grille filtrables par catégorie          |
| BTS SIO      | Documents, blocs de compétences          |
| Contact      | Formulaire + coordonnées                 |

## Personnaliser

- **Ton email** : cherche `theo.valadoux@email.com` dans `index.html`
- **Tes liens** : mets à jour LinkedIn et GitHub dans la section Contact
- **Tes images** : place-les dans `assets/` et référence-les dans `index.html`
- **Tes couleurs** : modifie les variables dans `:root { }` dans `css/style.css`

## Technologies utilisées

- HTML5 sémantique
- CSS3 (variables, grid, flexbox, animations)
- JavaScript Vanilla (ES6+)
- Google Fonts : Syne + DM Sans
