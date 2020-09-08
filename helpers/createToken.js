const jwt = require('jsonwebtoken');

const env = require('../env');

// eslint-disable-next-line arrow-body-style
const generateToken = (userId, email, isAdmin) => {
    return jwt.sign(
        {
            userId,
            email,
            isAdmin,
        },
        env.jwt_key,
        { expiresIn: env.jwt_duration },
    );
};

module.exports = generateToken;
