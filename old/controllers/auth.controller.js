const { successParser, errorParser } = require('../helpers/parser');

const loginService = require('../services/login.service');
const { forgotPassword, resetPassword } = require('../services/forgot.password.service');

exports.login = async (req, res) => {
    try {
        const credential = req.body;
        const userRes = await loginService(credential);
        return res.status(200).send(successParser('success', 'login successful.', userRes));
    } catch (error) {
        const message = error.message;
        let code = error.code;
        if (typeof code === 'string' || code === undefined) code = 500;
        return res.status(code).json(errorParser('error', message));
    }
};

exports.forgotPasswordCtrl = async (req, res) => {
    try {
        const credential = req.body;
        await forgotPassword(credential);
        res.status(200).send(successParser('success', 'email sent successfully.'));
    } catch (error) {
        const message = error.message;
        let code = error.code;
        if (typeof error.code === 'string') code = 500;
        res.status(code).json(errorParser('error', message));
    }
};

exports.resetPasswordCtrl = async (req, res) => {
  try {
      const credential = req.body;
      await resetPassword(credential);
      res.status(200).send(successParser('success', 'password reset successfully.'));
  } catch (error) {
      const message = error.message;
      let code = error.code;
      if (typeof error.code === 'string') code = 500;
      res.status(code).json(errorParser('error', message));
  }
};
