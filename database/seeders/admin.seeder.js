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
let hashedPassword;
const gender = 'Male';
const jobRole = 'Software Developer';
const department = 'ICT';
const address = 'Lagos';
const isAdmin = true;

const seed = async () => {
    try {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash('123456', salt);
        await db.query(
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
                date,
            ],
        );
    } catch (e) {
        console.log(e);
    }
};

const seedAdmin = () => seed();

module.exports = seedAdmin;

require('make-runnable/custom')({
    printOutputFrame: false,
});
