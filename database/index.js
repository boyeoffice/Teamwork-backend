const { createUsersTable, dropUsersTable } = require('./migrations/user.migration');
const { createPostsTable, dropPostsTable } = require('./migrations/post.migration');
const { createCategoriesTable, dropCategoriesTable } = require('./migrations/category.migration');
const { createCommentsTable, dropCommentsTable } = require('./migrations/comment.migration');
const { createResetPasswordsTable, dropResetPasswordTable } = require('./migrations/reset.password.migration');

const createAllTables = () => {
  return Promise.all([
    createUsersTable(),
    createPostsTable(),
    createCategoriesTable(),
    createCommentsTable(),
    createResetPasswordsTable()
  ]);
}

const dropAllTables = () => {
  return Promise.all([
    dropUsersTable(),
    dropPostsTable(),
    dropCategoriesTable(),
    dropCommentsTable(),
    dropResetPasswordTable()
  ]);
};

module.exports = {
    createAllTables,
    dropAllTables,
};

require('make-runnable/custom')({
  printOutputFrame: false
});
