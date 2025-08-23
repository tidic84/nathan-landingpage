# Site statique — Nathan Seateun (Coach de Tennis)

Site simple, moderne et épuré pour présenter des cours particuliers de tennis.

## Démarrage local

- Installer un serveur statique (ex. `npm i -g serve`)
- Lancer: `serve .` depuis le dossier du site (`/workspace/nathan-seateun-site`)
- Ouvrir `http://localhost:3000`

## Structure

- `index.html` (Accueil)
- `photos.html` (Galerie)
- `contact.html` (Contact)
- `assets/css/styles.css` (Styles)
- `assets/js/main.js` (JS léger)
- `assets/img/` (images, favicon)
- `robots.txt`, `sitemap.xml`

## Personnalisation

- Remplacer les images (actuellement placeholders Unsplash) par vos photos dans `assets/img/` et mettre à jour les `src` si besoin.
- Mettre à jour l'email/téléphone dans `contact.html`.
- Mettre à jour les tarifs dans `index.html`.

## Déploiement

Hébergement statique recommandé: Netlify, Vercel, GitHub Pages.
- Netlify/Vercel: glisser-déposer le dossier ou connecter le repo.
- GitHub Pages: activer Pages sur la branche principale (dossier racine).

## SEO

- Balises Open Graph/Twitter prêtes sur l'accueil. `og:image` utilise un placeholder Unsplash (1200x630).
- `robots.txt` et `sitemap.xml` inclus.
- JSON-LD `Person` ajouté dans `index.html`.
