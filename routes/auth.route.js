const express = require('express');

const router = express.Router();

const loginRequest = require('../requests/login.request');
const { login } = require('../controllers/auth.controller');

router.post('/login', loginRequest, login);

module.exports = router;
