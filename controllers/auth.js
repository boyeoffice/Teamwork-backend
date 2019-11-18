const db = require('../database');
const authorization = require('../middlewares/authorization');
const verifyPassword = require('../helpers/verifyPassword');

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
		return res.status(400).send({error: err});
	}
}
