const bcrypt = require('bcrypt');

const db = require('../database/connect');
const transport = require('../helpers/mail');
const env = require('../env');
const randomId = require('../helpers/randomNumber');
const date = require('../helpers/date.js');

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
    transport.sendMail({
      from: `${env.app_name} 👻 no-reply@example.com`,
      to: email,
      subject: 'Forgot Password ✔',
      html: `<b>Hello World <br/> ${token}</b>`,
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
    return;
  } catch (e) {
    const err = {
      code: e.code,
      message: e.message || e.toString(),
    };
    throw err;
  }
};

exports.resetPassword = async (data) => {
  try {
    const { reset_token, password } = data;
    const resetToken = await db.query('SELECT * FROM reset_passwords WHERE token = $1', [reset_token]);
    if (resetToken.rows.length === 0) {
      const err = {
        code: 404,
        message: 'Invalid token',
      };
      throw err;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await db.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, resetToken.rows[0].email]);

    await db.query('DELETE FROM reset_passwords WHERE token = $1', [reset_token]);

    return;
  } catch (e) {
    const err = {
      code: e.code,
      message: e.message || e.toString(),
    };
    throw err;
  }
}
