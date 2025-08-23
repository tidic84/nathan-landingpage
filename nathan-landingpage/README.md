# Site statique — Nathan Seateun (Coach de Tennis)

Un site simple, épuré et moderne pour présenter les cours particuliers de tennis de Nathan Seateun.

## Démarrage local

- Ouvrir `index.html` dans un navigateur ou servir en local:

```bash
python3 -m http.server 5173 --directory .
```

Puis ouvrir `http://localhost:5173`.

## Personnalisation rapide

- Texte: éditer `index.html` (h1, sous-titre, coordonnées, zones Paris...)
- Photos: remplacer les images dans `assets/img/` (et les noms dans `index.html`)
- Couleurs/typographies: `assets/css/styles.css` (`:root` variables)
- Icône/Favicon: `assets/icons/favicon.svg`
- Liens de contact: `mailto:`, `tel:`, `wa.me` dans la section Contact

## SEO de base

- Balises `<title>` et `meta description` dans `index.html`
- Données structurées JSON-LD (LocalBusiness) intégrées dans `index.html`
- `robots.txt` et `sitemap.xml` à la racine du site

## Déploiement

- GitHub Pages: pousser ce dossier sur une branche et activer Pages
- Netlify/Vercel: créer un site statique en pointant vers ce répertoire
- Nginx/Apache: servir le contenu de `nathan-landingpage/` tel quel

## Licence

© Nathan Seateun. Tous droits réservés.