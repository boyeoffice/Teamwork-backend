const { successParser, errorParser } = require('../helpers/parser');

exports.createEmployee = async (req, res) => {
    try {
        res.status(201).send(successParser('success', 'Employee created.'));
    } catch (error) {
        const message = error.message || error;
        const code = error.code || 500;
        res.status(code).json(errorParser('error', message));
    }
};
