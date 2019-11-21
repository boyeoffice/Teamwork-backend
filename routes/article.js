const express = require('express');
const router = express.Router();

//Controllers
const articleCtrl = require('../controllers/article');

//Validations
const createArticleRequest = require('../validations/createArticleRq');
const updateArticleRequest = require('../validations/updateArticleRq');
const auth = require('../middlewares/auth');

router.get('/', auth, articleCtrl.getAllArticles);
router.post('/', auth, createArticleRequest, articleCtrl.createArticle);
router.get('/:articleId', auth, articleCtrl.getSingleArticle);
router.put('/:articleId', auth, updateArticleRequest, articleCtrl.updateSingleArticle);
router.delete('/:articleId', auth, articleCtrl.deleteSingleArticle);

module.exports = router;