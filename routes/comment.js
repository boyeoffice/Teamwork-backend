const express = require('express');
const router = express.Router();

//Controller
const commentCtrl = require('../controllers/comments');

//Validation
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');

router.delete('/:id', auth, admin, commentCtrl.deleteComment);
router.patch('/:id/flag', auth, commentCtrl.flagComment);

module.exports = router;