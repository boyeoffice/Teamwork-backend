const db = require('../connect');

const createCategoriesTable = async () => {
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS categories (
            id serial PRIMARY KEY, 
            name VARCHAR (50) UNIQUE NOT NULL)`);
    } catch (error) {
        console.log(error);
    }
};

const dropCategoriesTable = async () => {
    try {
        await db.query('DROP TABLE IF EXISTS categories');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCategoriesTable,
    dropCategoriesTable,
};
