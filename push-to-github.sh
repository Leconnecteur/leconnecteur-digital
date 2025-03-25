#!/bin/bash

# Configuration
REPO_URL="https://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@github.com/Leconnecteur/leconnecteur-digital.git"
TEMP_DIR="/tmp/leconnecteur-temp-push"
SOURCE_DIR="/Users/geremylourenco/CascadeProjects/le-connecteur-digital"

# Créer un dossier temporaire
mkdir -p $TEMP_DIR
cd $TEMP_DIR

# Initialiser un nouveau dépôt Git
git init
git checkout -b main

# Copier les fichiers essentiels (sans node_modules, .next, et fichiers volumineux)
echo "Copie des fichiers essentiels..."
rsync -av --exclude='.git' --exclude='node_modules' --exclude='.next' \
  --exclude='*.jpg' --exclude='*.jpeg' --exclude='*.png' --exclude='*.gif' \
  --exclude='*.webp' --exclude='*.mp4' --exclude='*.webm' --exclude='*.svg' \
  --exclude='public/assets/images' --exclude='public/assets/videos' \
  --exclude='src/assets' \
  $SOURCE_DIR/ $TEMP_DIR/

# Configurer le dépôt distant
git remote add origin $REPO_URL

# Ajouter tous les fichiers
git add .

# Faire un commit
git commit -m "Initial commit for Le Connecteur Digital website"

# Pousser vers GitHub
echo "Poussée vers GitHub..."
git push -u origin main --force

echo "Terminé! Vérifiez votre dépôt GitHub."
