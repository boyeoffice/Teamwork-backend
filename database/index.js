const { createUsersTable, dropUsersTable } = require('./migrations/user.migration');
const { createPostsTable, dropPostsTable } = require('./migrations/post.migration');
const { createCategoriesTable, dropCategoriesTable } = require('./migrations/category.migration');
const { createCommentsTable, dropCommentsTable } = require('./migrations/comment.migration');

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
