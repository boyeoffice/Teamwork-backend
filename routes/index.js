const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');

const employeeRequest = require('../requests/employee.request');
const loginRequest = require('../requests/login.request');
const forgotPasswordRequest = require('../requests/forgot.password.request');
const resetPasswordReset = require('../requests/reset.password.request');

const { login, forgotPasswordCtrl, resetPasswordCtrl } = require('../controllers/auth.controller');

router.post('/auth/login', loginRequest, login);
router.post('/auth/forgot/password', forgotPasswordRequest, forgotPasswordCtrl);
router.post('/auth/reset/password', resetPasswordReset, resetPasswordCtrl);

const { getEmployee, createEmployee } = require('../controllers/employee.controller');

router.get('/employees', [auth], getEmployee);
router.post('/employees', [auth], employeeRequest, createEmployee);

module.exports = router;
