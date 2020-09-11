const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');

const { createEmployee } = require('../controllers/admin.controller');

router.post('/employee', [auth], createEmployee);

module.exports = router;
