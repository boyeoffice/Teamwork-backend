const { successParser, errorParser } = require('../helpers/parser');

const { login } = require('../services/user.service');

exports.login = async (req, res) => {
    try {
        const credential = req.body;
        const userRes = await login(credential);
        res.status(200).send(successParser('success', 'login successful.', userRes));
    } catch (error) {
        const message = error.message || error;
        const code = error.code || 500;
        res.status(code).json(errorParser('error', message));
    }
};
