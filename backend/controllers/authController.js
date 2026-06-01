const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Fonction pour gérer l'inscription d'un nouvel utilisateur (Register)
const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Récupérer la liste actuelle des utilisateurs stockés dans le fichier JSON
    const users = global.getUsersFromDB();

    // Vérifier si un utilisateur possède déjà la même adresse email
    const userExists = users.find(user => user.email === email);

    if (userExists) {
      return res.status(400).json({
        message: "Cet email est déjà utilisé."
      });
    }

    // Hasher le mot de passe pour garantir la sécurité des données
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Créer l'objet du nouvel utilisateur avec un ID unique basé sur le temps
    const newUser = {
      _id: Date.now().toString(),
      fullName,
      email,
      password: hashedPassword
    };

    // Ajouter le nouvel utilisateur au tableau et sauvegarder dans le fichier JSON
    users.push(newUser);
    global.saveUsersToDB(users);

    // Générer un token JWT directement après l'inscription
    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Renvoyer le token et les infos de l'utilisateur au frontend
    res.status(201).json({
      success: true,
      message: "Utilisateur créé avec succès !",
      token,
      user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur serveur lors de l'inscription."
    });
  }
};

// Fonction pour gérer la connexion d'un utilisateur (Login)
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Récupérer les utilisateurs depuis le fichier JSON pour chercher l'email
    const users = global.getUsersFromDB();
    const user = users.find(user => user.email === email);

    // Si l'utilisateur n'existe pas dans le fichier
    if (!user) {
      return res.status(400).json({
        message: "Email ou mot de passe incorrect."
      });
    }

    // Comparer le mot de passe saisi avec le mot de passe hashé stocké
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Email ou mot de passe incorrect."
      });
    }

    // Générer un token JWT valable 24h pour maintenir la session active
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Renvoyer le token et les infos de l'utilisateur au frontend
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Erreur serveur lors de la connexion."
    });
  }
};

// Fonction pour récupérer les informations du profil de l'utilisateur connecté
const getProfile = (req, res) => {
  // req.user est ajouté automatiquement par le middleware verifyToken
  res.json({
    success: true,
    user: req.user
  });
};

// Exporter les trois fonctions pour les lier aux routes correspondantes
module.exports = {
  register,
  login,
  getProfile
};