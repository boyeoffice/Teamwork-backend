// const bcrypt = require('bcrypt');

const db = require('../database/connect');
const verifyPassword = require('../helpers/verifyPassword');
const generateToken = require('../helpers/createToken');
const transport = require('../helpers/mail');
const env = require('../env');
const randomId = require('../helpers/randomNumber');
const date = require('../helpers/date.js');

exports.login = async (data) => {
    try {

    } catch (e) {
        const err = {
            code: e.code,
            message: e.message || e.toString(),
        };
        throw err;
    }
};

