const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

//Controllers
const gifsCtrl = require('../controllers/gifs');
const commentCtrl = require('../controllers/comments');

//Validations 
const auth = require('../middlewares/auth');
const commentRequest = require('../validations/commentRq');

router.use(fileUpload({
  useTempFiles: true,
}));

router.get('/', auth, gifsCtrl.getAllgifs);
router.post('/', auth, gifsCtrl.postGif);
router.get('/:gifId', auth, gifsCtrl.getSingleGif);
router.delete('/:gifId', auth, gifsCtrl.deleteGif);
router.post('/:gifId/comment', auth, commentRequest, commentCtrl.commentOnGif);

module.exports = router;