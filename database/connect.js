const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

// a generic query, that executes all queries you send to it
function query(data, value) {
    return new Promise((resolve, reject) => {
        pool
            .query(data, value)
            .then((res) => {
                resolve(res);
                pool.end();
            })
            .catch((err) => {
                reject(err);
                pool.end();
            });
    });
}
module.exports = { query };
