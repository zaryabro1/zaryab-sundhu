const express = require('express');
const router = express.Router();
const authController = require('../modules/auth/auth.controller');
const { validateLogin, validateRegister, validate } = require('../modules/auth/auth.validation');

// Register route
router.post('/register', validateRegister, validate, authController.register);

// Login route
router.post('/login', validateLogin, validate, authController.login);

module.exports = router;
