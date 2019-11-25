const Validator = require('validatorjs');

const updateCategoryRequest = (req, res, next) => {
  let data = {
    category_id: req.params.categoryId,
    category_name: req.body.category_name
  }

  let rules = {
    category_id: 'required|integer',
    category_name: 'required|string'
  }
  let validation = new Validator(data, rules);
  if(validation.fails()){
    return res.status(422).json({
      error: validation.errors.errors,
      status: 'error',
      msg: 'Invalid data given'
    });
  }
  next();
}

module.exports = updateCategoryRequest;