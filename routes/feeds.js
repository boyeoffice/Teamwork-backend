const express = require('express');
const router = express.Router();

//Controller
const feedsCtrl = require('../controllers/feeds');
const auth = require('../middlewares/auth');

router.get('/', auth, feedsCtrl.getFeeds);

module.exports = router;