const express = require('express');

const router = express.Router();

const loginRequest = require('../requests/login.request');
// const forgotPasswordRequest = require('../requests/forgot.password.request');
const { login /* forgotPassword */ } = require('../controllers/auth.controller');

router.post('/login', loginRequest, login);
// router.post('/forgot/password', forgotPasswordRequest, forgotPassword);

module.exports = router;
