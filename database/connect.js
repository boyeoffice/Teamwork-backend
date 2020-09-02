const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DB_URL,
});

/**
 * DB Query
 * @param {object} req
 * @param {object} res
 * @returns {object} object
 */
function query(queryText, params) {
    return new Promise((resolve, reject) => {
        pool
            .query(queryText, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
                pool.end();
            });
    });
}
module.exports = { query };
