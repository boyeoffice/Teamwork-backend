const { successParser, errorParser } = require('../../../helpers/parser');

const { login /* forgotPassword */ } = require('../../services/users/login.service');

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

/* exports.forgotPassword = async (req, res) => {
    try {
        const credential = req.body;
        await forgotPassword(credential);
        res.status(200).send(successParser('success', 'email sent successfully.'));
    } catch (error) {
        const message = error.message || error;
        const code = error.code || 500;
        res.status(code).json(errorParser('error', message));
    }
}; */
