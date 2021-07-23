const Validator = require('validatorjs');

const Parser = require('../helpers/parser');

const forgotPasswordRequest = (req, res, next) => {
    const data = {
        email: req.body.email,
    };

    const rules = {
        email: 'required|string|email|max:50',
    };

    const validation = new Validator(data, rules);
    if (validation.fails()) {
        return res.status(422).send(Parser.errorParser('error', 'Invalid data given', validation.errors.errors));
    }

    return next();
};

module.exports = forgotPasswordRequest;
