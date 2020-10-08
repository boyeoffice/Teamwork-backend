const Validator = require('../helpers/validator');
const { errorParser } = require('../helpers/parser');

const employeeRequest = (req, res, next) => {
    const rules = {
        email: 'required|string|email|exist:users,email',
        first_name: 'required|string',
        last_name: 'required|string',
        address: 'required|string',
        job_role: 'required|string',
        department: 'required|string',
    };

    /* function fails() {
        validator.errors.first('email');
    } */

    Validator(req.body, rules, {}, (err, status) => {
        if (!status) {
            res.status(422).send(errorParser('error', 'Invalid data given', err));
            throw err;
        }
        next();
    });
};

module.exports = employeeRequest;
