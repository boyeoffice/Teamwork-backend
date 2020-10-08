const Validator = require('validatorjs');

const db = require('../database/connect');

Validator.registerAsync('exist', (value, attribute, req, passes) => {
    if (!attribute) throw new Error('Specify Requirements i.e fieldName: exist:table,column');
    // do your database/api checks here etc
    db.query('SELECT * FROM users WHERE email = $1', [value]).then((user) => {
        // console.log(user.rows);
        if (user.rows.length > 0) {
            passes(false, 'Email has already been taken.'); // if username is available
            return;
        }
        passes(); // if username is not available
    });
});

const validator = (body, rules, customMessages, callback) => {
    const validation = new Validator(body, rules, customMessages);

    validation.passes(() => callback(null, true));

    validation.fails(() => callback(validation.errors, false));
};

module.exports = validator;
