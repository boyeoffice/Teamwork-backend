const Validator = require('validatorjs');

const createArticleRequest = (req, res, next) => {
  let data = {
    title: req.body.title,
    content: req.body.content,
  }

  let rules = {
    title: 'required|string|max:50',
    content: 'required|string',
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

module.exports = createArticleRequest;