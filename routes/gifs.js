const express = require('express');
const router = express.Router();
const fileUpload = require('express-fileupload');

//Controllers
const gifsCtrl = require('../controllers/gifs');

//Validations 
const auth = require('../middlewares/auth');

router.use(fileUpload({
  useTempFiles: true,
}));

router.get('/', auth, gifsCtrl.getAllgifs);
router.post('/', auth, gifsCtrl.postGif);

module.exports = router;