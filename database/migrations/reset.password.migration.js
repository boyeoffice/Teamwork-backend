const db = require('../connect');

const createResetPasswordsTable = async () => {
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS reset_passwords (
            id serial PRIMARY KEY,
            email VARCHAR (50) NOT NULL,
            token VARCHAR (50) NOT NULL,
            created_on timestamp with time zone NOT NULL
        )`);
        console.log('Reset passwords table migrated')
    } catch (error) {
        console.log(error);
    }
};

const dropReestPasswordTable = async () => {
    try {
        await db.query('DROP TABLE IF EXISTS reset_passwords');
        console.log('Reset password table droped');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createResetPasswordsTable,
    dropReestPasswordTable,
};
