# Image de base Node.js
FROM node:18-alpine

# Crée le dossier de travail dans le conteneur
WORKDIR /usr/src/app

# Installation de git (nécessaire pour Baileys/dépendances)
RUN apk add --no-cache git

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install --production

# Copie de l'ensemble du code source (index.js, data.js, etc.)
COPY . .

# Expose le port de l'application
EXPOSE 3000

# Commande pour démarrer le bot
CMD ["npm", "start"]
