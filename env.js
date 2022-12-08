const dotenv = require('dotenv');

let path = '.env.test';
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  path = '.env';
}

dotenv.config({path: path});

module.exports = {
    // database_url: process.env.DB_URL,
    database_host: process.env.PG_HOST,
    database_name: process.env.PG_DB_NAME,
    database_user: process.env.PG_USER,
    database_pass: process.env.PG_PASSWORD,
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
