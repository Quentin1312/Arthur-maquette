# Maquette — Entreprise Arthur Richard

Maquette d'un site vitrine pour Arthur Richard, artisan peintre et rénovateur (Nevers et 70 km alentour).

## Contenu

**Le site à publier** (à la racine du dépôt) : une page d'accueil + 5 pages de service (une par prestation, pour le SEO).

```
index.html                              accueil one-page
service-peinture-interieure.html        01  Peinture intérieure & extérieure / ravalement
service-revetements-sols-murs.html      02  Pose de revêtements sols et murs
service-platrerie-seche.html            03  Plâtrerie sèche & isolation intérieure
service-salle-de-bain-cle-en-main.html  04  Salle de bain clé en main
service-cover-styl.html                 05  Covering & rénovation de surfaces (service signature)
assets/                                 logos et photo d'enseigne
```

Les mêmes pages existent en fichiers source éditables (`.dc.html`) pour l'éditeur Claude Design.

## Sections de l'accueil

Hero plein écran (3 variantes possibles) · Services 01→05, cliquables vers leur page · Section Covering dédiée · Présentation entreprise · Réalisations (avant/après + galerie filtrable) · Zone d'intervention (carte) · FAQ devis · Témoignages · Contact + formulaire de devis.

## Chaque page de service contient

Fil d'ariane, titre + numéro, contenu de la prestation en plusieurs points, déroulé du chantier en 4 étapes, 3 photos de chantier, bloc devis, liens vers les autres services. Balise `title`, `meta description` et données structurées `Service` / `LocalBusiness` renseignées pour le référencement.

## Personnalisation express

Toutes les couleurs sont des variables CSS en haut de chaque page, dans `:root` :

```css
--noir:#1a1a19;        /* fonds sombres */
--gris-fonce:#333332;  /* texte courant */
--gris:#75746f;        /* texte secondaire */
--gris-clair:#f2f1ee;  /* fonds clairs */
--blanc:#ffffff;
--rouge:#d8202a;       /* accent, repris du logo */
--rouge-clair:#ec3b34; /* survol */
```

Typographie : Saira Condensed (titres) + Inter Tight (textes).

## À compléter

- Tous les textes hors intitulés de services et de prestations sont en lorem ipsum.
- Photos : emplacements vides, à remplacer par les vraies photos de chantier.
- Liens Facebook et fiche Google encore en `#`.
- Le formulaire de devis n'est pas connecté (aucun envoi).
