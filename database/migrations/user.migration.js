const db = require('../connect');

const createUsersTable = async () => {
    // try {
    //     await db.query(`CREATE TABLE IF NOT EXISTS users (
    //         id serial PRIMARY KEY,
    //         first_name VARCHAR (50) NOT NULL,
    //         last_name VARCHAR (50) NOT NULL,
    //         email VARCHAR (50) UNIQUE NOT NULL,
    //         password VARCHAR (1024) NOT NULL,
    //         gender VARCHAR (50) NOT NULL,
    //         job_role VARCHAR (50) NOT NULL,
    //         department VARCHAR (50) NOT NULL,
    //         address VARCHAR (50) NOT NULL,
    //         is_admin BOOL DEFAULT(false),
    //         created_on timestamp with time zone NOT NULL
    //     )`);
    //     console.log('Users table migrated');
    //     return;
    // } catch (error) {
    //     console.log(error);
    //     return;
    // }

    return new Promise((resolve, reject) => {
      db.query(`CREATE TABLE IF NOT EXISTS users (
                id serial PRIMARY KEY,
                first_name VARCHAR (50) NOT NULL,
                last_name VARCHAR (50) NOT NULL,
                email VARCHAR (50) UNIQUE NOT NULL,
                password VARCHAR (1024) NOT NULL,
                gender VARCHAR (50) NOT NULL,
                job_role VARCHAR (50) NOT NULL,
                department VARCHAR (50) NOT NULL,
                address VARCHAR (50) NOT NULL,
                is_admin BOOL DEFAULT(false),
                created_on timestamp with time zone NOT NULL
            )`).then(res => {
              console.log('Users table migrated');
              resolve()
            });
    })
};


const dropUsersTable = () => {
      return new Promise((resolve) => {
        db.query('DROP TABLE IF EXISTS users').then(res => {
          console.log('Users table dropped');
          resolve()
        });
      });
};

module.exports = {
    createUsersTable,
    dropUsersTable,
};

require('make-runnable/custom')({
  printOutputFrame: false
});
