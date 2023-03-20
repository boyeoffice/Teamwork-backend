const { successParser, errorParser } = require('../helpers/parser');
const { index, create } = require('../services/employee.service');

exports.getEmployee = async (req, res) => {
  try {
    const users = await index();
    return res.status(200).send(successParser('success','', users));
  } catch (error) {
    const message = error.message || error;
    let code = error.code;
    if (typeof error.code === 'string' || code === undefined) code = 500;
    return res.status(code).json(errorParser('error', message));
  }
}

exports.createEmployee = async (req, res) => {
  try {
    const credential = req.body;
    await create(credential);
    return res.status(201).send(successParser('success', 'Employee created.'));
  } catch (error) {
      const message = error.message || error;
      let code = error.code;
      if (typeof error.code === 'string' || code === undefined) code = 500;
      return res.status(code).json(errorParser('error', message));
  }
};
