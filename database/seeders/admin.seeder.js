const bcrypt = require('bcrypt');

const db = require('../connect');
const randomId = require('../../helpers/randomNumber');
const date = require('../../helpers/date.js');

// const today = new Date();
// const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${+today.getDate()}`;
// const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
// const dateTime = `${date} ${time}`;


const id = randomId(1000000);
const firstName = 'Olakunle';
const lastName = 'Boye';
const email = 'admin@example.com';
const gender = 'Male';
const jobRole = 'CTO';
const department = 'ICT';
const address = 'Lagos';
const isAdmin = true;



const seed = async () => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = bcrypt.hash('123456', salt);
      return await db.query(
          `INSERT INTO users (id, first_name, last_name, email, password, gender, job_role, department, address, is_admin, created_on)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
          [
            id,
            firstName,
            lastName,
            email,
            gender,
            jobRole,
            department,
            address,
            isAdmin,
            hashedPassword,
            date
          ],
      );
    } catch (e) {
        console.log(e);
        return;
    }
};

const seedAdmin = async () => {
    await seed();
    db.end();
    return;
};

module.exports = seedAdmin;

require('make-runnable/custom')({
    printOutputFrame: false,
});
