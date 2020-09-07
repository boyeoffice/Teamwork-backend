// const bcrypt = require('bcrypt');

const db = require('../database/connect');
const verifyPassword = require('../helpers/verifyPassword');
const generateToken = require('../helpers/createToken');

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
