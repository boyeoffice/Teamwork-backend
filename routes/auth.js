const express = require('express');
const router = express.Router();

//controllers
const authCtrl = require('../controllers/auth');

//validations
const createUserReq = require('../validations/createUserRequest');

router.post('/signin', authCtrl.login);
router.post('/create-user', createUserReq, authCtrl.createUser);

module.exports = router;