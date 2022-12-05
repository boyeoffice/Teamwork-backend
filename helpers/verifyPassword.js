const bcrypt = require('bcrypt');

/**
 * @method verifyPassword
 * @param {string} password
 * @return {Promise} Promise of true or false
 */

 module.exports = (password, hash) => bcrypt.compareSync(password, hash);

