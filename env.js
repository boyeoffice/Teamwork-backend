const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    database_url: process.env.DB_URL,
    test_database_url: process.env.TEST_DATABASE_URL,
    secret: process.env.SECRET,
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV,
    jwt_key: process.env.JWT_KEY,
    jwt_duration: process.env.JWT_DURATION,

};
