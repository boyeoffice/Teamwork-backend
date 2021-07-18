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

module.exports = transport;
