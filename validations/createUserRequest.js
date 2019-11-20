const Validator = require('validatorjs');

const createUserRequest = (req, res, next) => {
  let data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    job_role: req.body.job_role,
    department: req.body.department,
    gender: req.body.gender,
    address: req.body.address,
    is_admin: req.body.is_admin
  }

  let rules = {
    password: 'required|string|min:6',
    job_role: 'required|string',
    department: 'required|string',
    gender: 'required|string',
    address: 'required|string',
    is_admin: 'required|string',
    first_name: 'required|string|min:3|max:20',
    last_name: 'required|string|min:3|max:20',
    email: 'required|email'
  }
  let validation = new Validator(data, rules);
  if(validation.fails()){
    return res.status(422).json({
      data: validation.errors.errors,
      status: 'error',
      msg: 'Invalid data given'
    });
  }
  next();
}

module.exports = createUserRequest;