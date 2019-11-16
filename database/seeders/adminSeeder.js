const db = require("../index");
const randomId = require('../../helpers/randomNumber');

let id = randomId(1000000);
let firstName = 'Olakunle';
let lastName = 'Boye';
let email = 'admin@example.com';
let hashedPassword = '123456';
let gender = 'Male';
let jobRole = 'Software Developer';
let department = 'ICT';
let address = 'Lagos';
let isAdmin = true;

const seedAdmin = async () => {
	try{
		await db.query(
			`INSERT INTO users (userId, firstName, lastName, email, password, gender, jobRole, department, address, isAdmin) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [id, firstName, lastName, email, hashedPassword, gender, jobRole, department, address, isAdmin],
			)
	}catch(e){
		console.log(e)
	}
}
seedAdmin();