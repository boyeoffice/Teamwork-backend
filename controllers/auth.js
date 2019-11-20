const db = require('../database');
const authorization = require('../middlewares/authorization');
const verifyPassword = require('../helpers/verifyPassword');
const passwordHash = require('../helpers/passwordHash');
const randomId = require('../helpers/randomNumber');

exports.login = async (req, res) => {
	try{
			const {email, password} = req.body;
			const user = await db.query(`SELECT * FROM users WHERE email = $1`, [email]);
      if (user.rows.length === 0) {
	      	return res.status(401).json({
	      		status: 'error',
	      		error: 'Email/Password do not match'
	      	});
      }
      const isPasswordValid = verifyPassword(password, user.rows[0].password);
        if (!isPasswordValid) {
          return res.status(401).json({
                status: 'error',
                error: 'Email/Password do not match',
            });
        }
       const token = authorization.generateToken({
       	userId: user.rows[0].userid,
       	isAdmin: user.rows[0].isadmin, 
       	email: user.rows[0].email 
       })
			return res.status(200).send({
				status: 'success',
				data: {
					token,
					userId: user.rows[0].userid
				}
			});
	}catch(err){
		//return res.status(400).send({error: err});
	}
}

exports.createUser = async (req, res) => {
	try {
		const {
      first_name, last_name, email, password, gender, job_role, department, address, is_admin,
    } = req.body;
    let user = await db.query('SELECT * FROM users WHERE email=$1', [email]);
    if (user.rowCount > 0) {
      return res.status(422).json({
        status: 'error',
        error: {
        	email: ['User already registered']
        },
        msg: 'Invalid data given'
      });
    }
    let hashedPassword = await passwordHash(password);
    let id = await randomId(1000000);
    user = await db.query(
      `INSERT INTO users (userId, firstName, lastName, email, password, gender, jobRole, department, address, isAdmin) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
      [id, first_name, last_name, email, hashedPassword, gender, job_role, department, address, is_admin],
    );
		res.status(201).json({
			status: 'success',
			data: req.body
		})
	}catch(err){
	/*	res.status(400).json({
			status: 'error',
			error: err
		});*/
	}
}
