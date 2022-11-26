const Validator = require('validatorjs');

const { errorParser } = require('../app/helpers/parser');

const loginRequest = (req, res, next) => {
    const data = {
        email: req.body.email,
        password: req.body.password,
    };

    const rules = {
        email: 'required|string|email|max:50',
        password: 'required|string|max:6',
    };

    const validation = new Validator(data, rules);
    if (validation.fails()) {
        return res.status(422).send(errorParser('error', 'Invalid data given', validation.errors.errors));
    }

    return next();
};

module.exports = loginRequest;
