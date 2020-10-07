const Validator = require('validatorjs');

const db = require('../database/connect');

const { errorParser } = require('../helpers/parser');

const employeeRequest = (req, res, next) => {
    Validator.registerAsync('email_unique', (email, attribute, passes) => {
        // do your database/api checks here etc
        db.query('SELECT * FROM users WHERE email = $1', [req.body.email]).then((user) => {
            if (user.rows.length === 0) {
                passes(); // if username is available
            } else {
                passes(false, 'Email has already been taken.'); // if username is not available
            }
        });
    });
    const data = {
        email: req.body.email,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        job_role: req.body.job_role,
        department: req.body.department,
    };

    const rules = {
        email: 'required|string|email|email_unique',
        first_name: 'required|string',
        last_name: 'required|string',
        address: 'required|string',
        job_role: 'required|string',
        department: 'required|string',
    };

    /* function fails() {
        validator.errors.first('email');
    } */

    const validation = new Validator(data, rules);
    if (validation.fails()) {
        return res.status(422).send(errorParser('error', 'Invalid data given', validation.errors.errors));
    }

    return next();
};

module.exports = employeeRequest;
