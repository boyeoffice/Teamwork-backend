const db = require('./connect');

const { createUsersTable, dropUsersTable } = require('./migrations/user.migration');
const { createPostsTable, dropPostsTable } = require('./migrations/post.migration');
const { createCategoriesTable, dropCategoriesTable } = require('./migrations/category.migration');
const { createCommentsTable, dropCommentsTable } = require('./migrations/comment.migration');

const createAllTables = async () => {
    await createUsersTable();
    await createPostsTable();
    await createCategoriesTable();
    await createCommentsTable();
};

const dropAllTables = async () => {
    await dropUsersTable();
    await dropPostsTable();
    await dropCategoriesTable();
    await dropCommentsTable();
    db.end();
    // console.log('Table dropped');
};

module.exports = {
    createAllTables,
    dropAllTables,
};

require('make-runnable/custom')({
    printOutputFrame: false,
});
