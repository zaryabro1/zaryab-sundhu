const express = require('express');
const router = express.Router();
const authController = require('../modules/auth/auth.controller');
const { validateLogin, validateRegister, validate } = require('../modules/auth/auth.validation');
const { authenticate } = require('../middleware/auth.middleware');

// Register route
router.post('/register', validateRegister, validate, authController.register);

// Login route
router.post('/login', validateLogin, validate, authController.login);

// Get current user (protected route)
router.get('/me', authenticate, authController.getCurrentUser);

module.exports = router;
