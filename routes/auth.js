const express = require('express');
const router = express.Router();

//controllers
const authCtrl = require('../controllers/auth');

router.post('/login', authCtrl.login);

module.exports = router;