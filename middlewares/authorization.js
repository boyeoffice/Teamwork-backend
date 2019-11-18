const jwt = require('jsonwebtoken');

module.exports = {
    getToken: (req) => {
        const bearerToken = req.headers.authorization;
        const token = bearerToken && bearerToken.replace('Bearer ', '');

        return token;
    },

    generateToken: (userId, isAdmin, email) => {
        const token = jwt.sign({ userId, isAdmin, email },
            'jwtPrivateKey', {
                expiresIn: '10h',
            });

        return token;
    },
};