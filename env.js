const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    database_url: process.env.DB_URL,
    secret: process.env.SECRET,
    port: process.env.PORT || 5000,
    environment: process.env.NODE_ENV,
    jwt_key: process.env.JWT_KEY,
    jwt_duration: process.env.JWT_DURATION,
    mail_host: process.env.MAIL_HOST,
    mail_user: process.env.MAIL_USERNAME,
    mail_pass: process.env.MAIL_PASSWORD,
    mail_port: process.env.MAIL_PORT,
    mail_from: process.env.MAIL_FROM_ADDRESS,
    app_name: process.env.APP_NAME,
};
