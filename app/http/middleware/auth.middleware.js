const jwt = require('jsonwebtoken');

const env = require('../env');

const { errorParser } = require('../helpers/parser');

const verifyToken = (req, res, next) => {
    jwt.verify(req.token, env.jwt_key, (err, authData) => {
        if (err) {
            res.status(401).json(errorParser('error', 'unauthorized.'));
        } else {
            res.locals.user = authData.user; // set user data to local response
            next();
        }
    });
};

const isAuthorized = (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (typeof bearerHeader !== 'undefined') {
        const token = bearerHeader.split(' ')[1];

        req.token = token;

        verifyToken(req, res, next);
    } else {
        res.status(401).json({
            status: 'error',
            message: 'Authorization needed',
        });
    }
};

module.exports = isAuthorized;
