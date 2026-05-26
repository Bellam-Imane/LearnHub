const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

const app = express();

// Autoriser la communication entre le Frontend et le Backend (CORS)
app.use(cors());

// Permettre au serveur de lire et de traiter les données au format JSON
app.use(express.json());

// 💡 CORRECTION : Définir le chemin de manière stricte dans le dossier d'exécution actuel
const dbPath = path.join(process.cwd(), 'users.json');

// Fonction globale pour lire les utilisateurs à partir du fichier JSON
global.getUsersFromDB = () => {
  // 💡 FORCE : Si le fichier n'existe pas, on le crée TOUT DE SUITE sur le disque
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([]), 'utf-8');
    console.log('Création initiale du fichier users.json réussie ! 🎉');
  }
  // Lire le contenu du fichier et le transformer en objet JavaScript
  const data = fs.readFileSync(dbPath, 'utf-8');
  return JSON.parse(data || '[]');
};

// 💡 EXÉCUTION EN AMONT : Forcer la création du fichier dès le démarrage du serveur
global.getUsersFromDB();

// Fonction globale pour sauvegarder la liste mise à jour des utilisateurs dans le fichier JSON
global.saveUsersToDB = (users) => {
  // Écrire les données dans le fichier avec une indentation de 2 espaces pour lisibilité
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2), 'utf-8');
};

// Message indiquant que le système de stockage local JSON est prêt
console.log('Connexion au fichier local (JSON) réussie ✔');

// Route principale pour la gestion de l'authentification (Inscription / Connexion)
app.use('/api/auth', require('./routes/authRoutes'));

// Gestion globale des erreurs pour éviter que le serveur ne plante en cas de bug
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Une erreur interne est survenue !' });
});

// Définir le port sur lequel le serveur va tourner (par défaut 5000)
const PORT = process.env.PORT || 5000;

// Démarrer le serveur backend
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT} 🚀`);
});