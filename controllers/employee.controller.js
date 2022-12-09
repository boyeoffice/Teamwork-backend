const { successParser, errorParser } = require('../helpers/parser');
const { create } = require('../services/employee.service');

exports.createEmployee = async (req, res) => {
  try {
    const credential = req.body;
    await create(credential);
    res.status(201).send(successParser('success', 'Employee created.'));
  } catch (error) {
      const message = error.message || error;
      let code = error.code;
      if (typeof error.code === 'string' || code === undefined) code = 500;
      res.status(code).json(errorParser('error', message));
  }
};
