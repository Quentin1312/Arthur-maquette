# Maquette — Entreprise Arthur Richard

Maquette d'un site vitrine pour Arthur Richard, artisan peintre et rénovateur (Nevers et 70 km alentour).

## Contenu

`site/` — **le site complet à publier** : une page d'accueil + 7 pages de service (une par prestation, pour le SEO).

```
site/index.html                              accueil one-page
site/service-peinture-interieure.html        01
site/service-peinture-exterieure-ravalement.html   02
site/service-revetements-sols-murs.html      03
site/service-platrerie-seche.html            04
site/service-isolation-interieure.html       05
site/service-salle-de-bain-cle-en-main.html  06
site/service-cover-styl.html                 07
site/assets/                                 logos et photo d'enseigne
```

À la racine : les mêmes pages en fichiers source éditables (`.dc.html`).

## Sections de l'accueil

Hero plein écran (3 variantes possibles) · Services 01→07, cliquables vers leur page · Section Cover Styl dédiée · Présentation entreprise · Réalisations (avant/après + galerie filtrable) · Zone d'intervention (carte) · FAQ devis · Témoignages · Contact + formulaire de devis.

## Chaque page de service contient

Fil d'ariane, titre + numéro, contenu de la prestation en 5 points, déroulé du chantier en 4 étapes, 3 photos de chantier, bloc devis, liens vers les autres services. Balise `title`, `meta description` et données structurées `Service` / `LocalBusiness` renseignées pour le référencement.

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
