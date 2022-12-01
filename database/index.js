const db = require('./connect');

const { createUsersTable, dropUsersTable } = require('./migrations/user.migration');
const { createPostsTable, dropPostsTable } = require('./migrations/post.migration');
const { createCategoriesTable, dropCategoriesTable } = require('./migrations/category.migration');
const { createCommentsTable, dropCommentsTable } = require('./migrations/comment.migration');
const { createResetPasswordsTable, dropReestPasswordTable } = require('./migrations/reset.password.migration');

const createAllTables = async () => {
    await createUsersTable();
    await createPostsTable();
    await createCategoriesTable();
    await createCommentsTable();
    await createResetPasswordsTable();
    return;
};

const dropAllTables = async () => {
    await dropUsersTable();
    await dropPostsTable();
    await dropCategoriesTable();
    await dropCommentsTable();
    await dropReestPasswordTable();
    db.end();
    return;
    // console.log('Table dropped');
};

module.exports = {
    createAllTables,
    dropAllTables,
};

// require('make-runnable/custom')({
//     // printOutputFrame: false,
// });
