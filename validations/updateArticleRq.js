const Validator = require('validatorjs');

const updateArticleRequest = (req, res, next) => {
  let data = {
    title: req.body.title,
    content: req.body.content,
    //category_id: req.body.category_id
  }

  let rules = {
    title: 'required|string|max:50',
    content: 'required|string',
   // category_id: 'required|integer'
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

module.exports = updateArticleRequest;