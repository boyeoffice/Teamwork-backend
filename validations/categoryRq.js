const Validator = require('validatorjs');

const categoryRequest = (req, res, next) => {
  let data = {
    category_name: req.body.category_name,
  }

  let rules = {
    category_name: 'required|string|max:50',
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

module.exports =categoryRequest;