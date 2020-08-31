const { createUsersTable, dropUsersTable } = require('./migrations/userMigration');
const { createPostsTable, dropPostsTable } = require('./migrations/postMigration');
const { createCategoriesTable, dropCategoriesTable } = require('./migrations/categoryMigration');
const { createCommentsTable, dropCommentsTable } = require('./migrations/commentsMigration');

const createAllTables = () => {
    createUsersTable();
    createPostsTable();
    createCategoriesTable();
    createCommentsTable();
};

const dropAllTables = () => {
    dropUsersTable();
    dropPostsTable();
    dropPostsTable();
    dropCategoriesTable();
    dropCommentsTable();
    // console.log('Table dropped');
};

module.exports = {
    createAllTables,
    dropAllTables,
};

require('make-runnable/custom')({
    printOutputFrame: false,
});
