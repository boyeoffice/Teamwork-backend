const { createUsersTable, dropUsersTable } = require('./migrations/userMigration');

const createAllTables = () => {
    createUsersTable();
};

const dropAllTables = () => {
    dropUsersTable();
    console.log('Table dropped');
};

module.exports = {
    createAllTables,
    dropAllTables,
};

require('make-runnable');
