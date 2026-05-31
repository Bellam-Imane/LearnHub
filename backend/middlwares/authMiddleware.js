const jwt = require('jsonwebtoken');

// Middleware pour vérifier le token JWT envoyé par le Frontend (React)
module.exports = (req, res, next) => {
  // Récupérer le token depuis le header Authorization
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).json({ message: "Accès refusé. Aucun token fourni." });
  }

  // Le header est souvent sous forme "Bearer <TOKEN>", on extrait juste le token
  const token = authHeader.split(' ')[1];

  try {
    // Vérification et décodage du token avec la clé secrète
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next(); // Passer au controller suivant
  } catch (error) {
    res.status(400).json({ message: "Token invalide ou expiré." });
  }
};