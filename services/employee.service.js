const bcrypt = require('bcrypt');

const db = require('../database/connect');
const randomId = require('../helpers/randomNumber');
const date = require('../helpers/date.js');

exports.create = async (data) => {
  try {
    const {
      first_name,
      last_name,
      email,
      gender,
      job_role,
      department,
      address,
    } = data;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);
    const id = randomId(1000000);
    return db.query(
            `INSERT INTO users (id, first_name, last_name, email, password, gender, job_role, department, address, created_on)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [
              id,
              first_name,
              last_name,
              email,
              hashedPassword,
              gender,
              job_role,
              department,
              address,
              date
            ],
          );
  } catch (err) {
    throw err
  }
}
