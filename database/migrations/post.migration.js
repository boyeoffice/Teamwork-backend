const db = require('../connect');

const createPostsTable = async () => {
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS posts (
            id serial PRIMARY KEY,
            title VARCHAR (2500) NOT NULL,
            content VARCHAR (2500) NULL,
            created_on timestamp with time zone NOT NULL,
            author_id INTEGER NOT NULL,
            category_id INTEGER NOT NULL DEFAULT 0,
            image_url VARCHAR (1024) NOT NULL,
            post_type VARCHAR (20) NOT NULL,
            is_public BOOL DEFAULT(false)
        )`);
        console.log('Posts table migrated');
        // await db.end();
    } catch (error) {
        console.log(error);
    }
};

const dropPostsTable = async () => {
    try {
        await db.query('DROP TABLE IF EXISTS posts');
        console.log('Posts table dropped');
        // await db.end();
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPostsTable,
    dropPostsTable,
};
