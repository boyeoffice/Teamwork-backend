const Validator = require('validatorjs');

const Parser = require('../helpers/parser');

module.exports = (req, res, next) => {
    const data = {
        reset_token: req.body.reset_token,
        password: req.body.password,
        password_confirmation: req.body.password_confirmation
    };

    const rules = {
      reset_token: 'required|string|max:50',
      password: 'required|string|min:6|max:200|confirmed'
    };

    const validation = new Validator(data, rules);
    if (validation.fails()) {
        return res.status(422).send(Parser.errorParser('error', 'Invalid data given', validation.errors.errors));
    }

    return next();
};

