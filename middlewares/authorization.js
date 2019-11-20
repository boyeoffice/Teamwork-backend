const jwt = require('jsonwebtoken');

module.exports = {
    generateToken: (userId, isAdmin, email) => {
        const token = jwt.sign({ userId, isAdmin, email },
            'jwtPrivateKey', {
                expiresIn: '10h',
            });

        return token;
    },
};