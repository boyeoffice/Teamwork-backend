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
        const { email, password } = data;
        let passwordMatch;
        const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        // console.log(user);
        if (user.rows.length > 0) {
            passwordMatch = verifyPassword(password, user.rows[0].password);
        }
        if (user.rows.length === 0 || !passwordMatch) {
            const err = {
                code: 401,
                message: 'Invalid email/Password',
            };
            throw err;
        }
        const token = generateToken({
            userId: user.rows[0].id,
            email: user.rows[0].email,
            isAdmin: user.rows[0].is_admin,
        });
        return {
            token,
            user: user.rows[0],
        };
    } catch (e) {
        const err = {
            code: e.code,
            message: e.message || e.toString(),
        };
        throw err;
    }
};

exports.forgotPassword = async (data) => {
    try {
        const { email } = data;
        const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        if (user.rows.length === 0) {
            const err = {
                code: 404,
                message: 'Invalid email',
            };
            throw err;
        }
        const id = randomId(345);
        const token = randomId(120394);
        await transport.sendMail({
            from: `${env.app_name} 👻 ${env.mail_from}`,
            to: email,
            subject: 'Forgot Password ✔',
            html: `<b>Hello World ${token}</b>`,
        });
        await db.query(
            `INSERT INTO reset_passwords (id, email, token, created_on)
            VALUES ($1, $2, $3, $4)`,
            [
                id,
                email,
                token,
                date,
            ],
        );
        return {
            // token,
            user: user.rows[0],
        };
    } catch (e) {
        const err = {
            code: e.code,
            message: e.message || e.toString(),
        };
        throw err;
    }
};
