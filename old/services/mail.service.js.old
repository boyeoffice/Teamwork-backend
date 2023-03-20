const nodemailer = require('nodemailer');

const env = require('../env');

const transport = nodemailer.createTransport({
    host: env.mail_host,
    port: env.mail_port,
    auth: {
        user: env.mail_user,
        pass: env.mail_pass,
    },
});

const forgotPasswordMail = async (data) => {
    try {
        const { email } = data;
        await transport.sendMail({
            from: `${env.app_name} 👻 ${env.mail_from}`,
            to: email,
            subject: 'Forgot Password ✔',
            html: '<b>Hello World</b>',
        });
        return true;
    } catch (e) {
        const err = {
            code: e.code,
            message: e.message || e.toString(),
        };
        throw err;
    }
};

module.exports = forgotPasswordMail;
