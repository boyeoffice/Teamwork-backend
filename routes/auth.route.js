const express = require('express');

const router = express.Router();

const loginRequest = require('../requests/login.request');
const forgotPasswordRequest = require('../requests/forgot.password.request');
const resetPasswordReset = require('../requests/reset.password.request');
const { login, forgotPasswordCtrl, resetPasswordCtrl } = require('../controllers/auth.controller');

router.post('/login', loginRequest, login);
router.post('/forgot/password', forgotPasswordRequest, forgotPasswordCtrl);
router.post('/reset/password', resetPasswordReset, resetPasswordCtrl);

module.exports = router;
