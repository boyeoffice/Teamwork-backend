const express = require('express');
const router = express.Router();

//Controllers
const articleCtrl = require('../controllers/article');
const commentCtrl = require('../controllers/comments');

//Validations
const createArticleRequest = require('../validations/createArticleRq');
const updateArticleRequest = require('../validations/updateArticleRq');
const commentRequest = require('../validations/commentRq');
const auth = require('../middlewares/auth');

router.get('/', auth, articleCtrl.getAllArticles);
router.post('/', auth, createArticleRequest, articleCtrl.createArticle);
router.get('/:articleId', auth, articleCtrl.getSingleArticle);
router.patch('/:articleId', auth, updateArticleRequest, articleCtrl.updateSingleArticle);
router.delete('/:articleId', auth, articleCtrl.deleteSingleArticle);
router.post('/:articleId/comment', auth, commentRequest, commentCtrl.commentOnArticle);

module.exports = router;