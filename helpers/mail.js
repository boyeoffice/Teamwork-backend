const nodemailer = require('nodemailer');

const env = require('../env');

const transport = nodemailer.createTransport({
    host: 'mailhog',
    port: 1025,
    // auth: {
    //     user: '', //env.mail_user,
    //     pass: '', // env.mail_pass,
    // },
});

module.exports = transport;
