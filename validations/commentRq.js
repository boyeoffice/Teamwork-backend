const Validator = require('validatorjs');

const categoryRequest = (req, res, next) => {
  let data = {
    comment: req.body.comment,
  }

  let rules = {
    comment: 'required|string|max:50',
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