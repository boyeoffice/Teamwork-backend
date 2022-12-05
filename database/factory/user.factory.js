const bcrypt = require('bcrypt');

const db = require('../connect');
const randomId = require('../../helpers/randomNumber');
const date = require('../../helpers/date.js');

const id = randomId(1000000);
const firstName = 'User';
const lastName = 'User';
const email = 'user3@example.com';
const gender = 'Male';
const jobRole = 'CTO';
const department = 'ICT';
const address = 'Lagos';
const isAdmin = true;

module.exports.seed = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash('123456', salt);
  return db.query(
          `INSERT INTO users (id, first_name, last_name, email, password, gender, job_role, department, address, is_admin, created_on)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
          [
            id,
            firstName,
            lastName,
            email,
            hashedPassword,
            gender,
            jobRole,
            department,
            address,
            isAdmin,
            date
          ],
        )
};

require('make-runnable/custom')({
  printOutputFrame: false
});
