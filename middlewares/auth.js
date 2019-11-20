const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decodedToken = jwt.verify(token, 'jwtPrivateKey');
		const userId = decodedToken.userId;
		if(req.body.userId && req.body.userId !== userId){
			throw 'Invalid user ID';
		}else{
			req.user = userId;
			next();
		}
	} catch (e){
		res.status(401).json({
			msg: 'Unauthorized',
			status: 'error',
			data: ''
		});
	}
}