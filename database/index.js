const pg = require('pg');
require('dotenv').config();

let conString = process.env.DB_URL //Can be found in the Details page
let client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log('Connected to database');
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});