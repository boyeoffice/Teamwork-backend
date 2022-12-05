const db = require('../connect');

const createResetPasswordsTable = () => {
  return Promise.resolve(
    db.query(`CREATE TABLE IF NOT EXISTS reset_passwords (
      id serial PRIMARY KEY,
      email VARCHAR (50) NOT NULL,
      token VARCHAR (50) NOT NULL,
      created_on timestamp with time zone NOT NULL
    )`).then(res => {
      console.log('Reset passwords table migrated')
    })
  )
};

const dropResetPasswordTable = () => {
  return Promise.resolve(
    db.query('DROP TABLE IF EXISTS reset_passwords').then(res => {
      console.log('Reset password table dropped')
    })
  );
};

module.exports = {
    createResetPasswordsTable,
    dropResetPasswordTable,
};
