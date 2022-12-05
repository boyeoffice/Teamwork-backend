const Pool = require('pg-pool');

const env = require('../env');

const config = {
  host: env.database_host,
  database: env.database_name,
  user: env.database_user ,
  password: env.database_pass,
  port: 5432,
  ssl: false,
  max: 1, // set pool max size to 20
  idleTimeoutMillis: 1000, // close idle clients after 1 second
  connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
  maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (
}

const pool = new Pool(config);

function query(queryText, params) {
  return new Promise((resolve, reject) => {
      pool
          .query(queryText, params)
          .then((res) => {
              resolve(res);
          })
          .catch((err) => {
              reject(err);
          });
  });
}

function end() {
  return pool.end();
}

module.exports = {
  query,
  end,
};
