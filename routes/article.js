const express = require('express');
const router = express.Router();

//Controllers
const articleCtrl = require('../controllers/article');

//Validations
const createArticleRequest = require('../validations/createArticleRq');
const auth = require('../middlewares/auth');

router.post('/', auth, createArticleRequest, articleCtrl.createArticle);

module.exports = router;