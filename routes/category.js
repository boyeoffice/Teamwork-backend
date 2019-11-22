const express = require('express');
const router = express.Router();

//Controllers
const categoryCtrl = require('../controllers/category');

//Validation
const categoryRequest = require('../validations/categoryRq');
const updateCategoryRequest = require('../validations/updateCategoryRq');
const auth = require('../middlewares/auth');

router.get('/', auth, categoryCtrl.allCategories);
router.post('/', auth, categoryRequest, categoryCtrl.createCategory);
router.get('/:id', auth, categoryCtrl.getSingleCategory);
router.put('/:id', auth, updateCategoryRequest, categoryCtrl.updateSingleCategory);
router.delete('/:id', auth, categoryCtrl.deleteSingleCategory);

module.exports = router;