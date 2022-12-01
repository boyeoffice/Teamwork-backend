const Pool = require('pg-pool');

const config = {
  host: 'postgres',
  database: 'teamwork_db',
  user: 'teamwork',
  password: 'teamwork',
  port: 5432,
  ssl: false,
  max: 20, // set pool max size to 20
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


// module.exports.query = (text, values) => {
//   // console.log('query:', text, values)
//   return pool.query(text, values).catch(err => {
//     console.log(err)
//   });
// }
