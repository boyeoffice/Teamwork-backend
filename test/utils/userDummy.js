const login = {
    validDetails: {
        email: 'admin@example.com',
        password: '123456',
    },
    invalidEmail: {
        email: 'april@example.com',
        password: '123456',
    },
    invalidPassword: {
        email: 'admin@example.com',
        password: 'fool',
    },
};

module.exports = {
    login,
};
