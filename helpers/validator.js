const Validator = require('validatorjs');

const db = require('../database/connect');

Validator.registerAsync('exist', (value, attribute, req, passes) => {
    if (!attribute) throw new Error('Specify Requirements i.e fieldName: exist:table,column');
    const attArr = attribute.split(',');
    if (attArr.length !== 2) throw new Error(`Invalid format for validation rule ${attribute}`);
    const { 0: table, 1: column } = attArr;
    const msg = (column === 'email') ? `${column} has already been taken ` : `${column} already in use`;
    db.query(`SELECT * FROM ${table} WHERE email = $1`, [value]).then((user) => {
        // console.log(user.rows);
        if (user.rows.length > 0) {
            passes(false, msg); // if username is available
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
