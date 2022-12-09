const Validator = require('../helpers/validator');
const { errorParser } = require('../helpers/parser');

const employeeRequest = async (req, res, next) => {
    const rules = {
        email: 'required|string|email|exist:users,email',
        first_name: 'required|string',
        last_name: 'required|string',
        address: 'required|string',
        job_role: 'required|string',
        department: 'required|string',
    };

    Validator(req.body, rules, {}, (err, status) => {
    if (!status) {
      return res.status(422).send(errorParser('error', 'Invalid data given', err));
    }
    next();
  });
};

module.exports = employeeRequest;
