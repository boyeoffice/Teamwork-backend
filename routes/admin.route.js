const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');

const employeeRequest = require('../requests/employee.request');

const { createEmployee } = require('../controllers/admin.controller');

router.post('/employee', [auth], employeeRequest, createEmployee);

module.exports = router;
