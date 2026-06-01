const express = require('express');
const router = express.Router();

import { verifyToken } from '../middlewares/authMiddleware.js';

const authController = require('../controllers/authController');

// Route pour l'inscription
router.post('/register', authController.register);

// Route pour la connexion
router.post('/login', authController.login);

router.get('/profile', verifyToken, authController.getProfile);

module.exports = router;