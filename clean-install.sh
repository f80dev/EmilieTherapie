#!/bin/bash
# Nettoyage complet avant relance locale — corrige les erreurs SCSS
# « can't find stylesheet to import » ou « compound selectors may no
# longer be extended » liées à des caches Vite/Angular/Sass désynchronisés.

set -e
cd "$(dirname "$0")"

echo "1/5  Suppression node_modules/.cache (Vite/Angular)..."
rm -rf node_modules/.cache

echo "2/5  Suppression .angular (cache du compilateur AOT)..."
rm -rf .angular

echo "3/5  Suppression dist (build précédent)..."
rm -rf dist

echo "4/5  Réinstallation propre des dépendances..."
npm ci --no-audit --no-fund 2>&1 | tail -5

echo "5/5  Vérification présence des fichiers SCSS critiques..."
for f in \
  src/app/_shared.scss \
  src/app/_legal.scss \
  src/app/app.scss \
  src/app/parcours/parcours.scss \
  src/app/tarifs/tarifs.scss \
  src/app/versionslegales/versionslegales.scss \
  src/app/mentionslegales/mentionslegales.scss \
  src/app/politiquedeconfidentialite/politiquedeconfidentialite.scss \
  src/app/admin/admin.scss \
  src/app/vertical-card/vertical-card.scss \
  src/styles.scss \
  src/index.html
do
  if [ ! -f "$f" ]; then
    echo "    ❌ MANQUANT: $f"
  else
    printf "    ✓ %s\n" "$f"
  fi
done

echo
echo "Tous les caches ont été purgés. Lance maintenant :"
echo "  npm start          (ou: npx ng serve)"
echo "  npm run build      (build de production)"
