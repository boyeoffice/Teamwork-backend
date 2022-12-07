const db = require('../connect');

const createResetPasswordsTable = () => {
  return Promise.resolve(
    db.query(`CREATE TABLE IF NOT EXISTS reset_passwords (
      id serial PRIMARY KEY,
      email VARCHAR (50) NOT NULL,
      token VARCHAR (50) NOT NULL,
      created_on timestamp with time zone NOT NULL
    )`)
  )
};

const dropResetPasswordTable = () => {
  return Promise.resolve(
    db.query('DROP TABLE IF EXISTS reset_passwords')
  );
};

module.exports = {
    createResetPasswordsTable,
    dropResetPasswordTable,
};
