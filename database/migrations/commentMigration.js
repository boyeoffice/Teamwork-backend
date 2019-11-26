 const db = require('../index');
 const createArticlesCommentsTable = async () => {
    try {
      await db.query(`CREATE TABLE IF NOT EXISTS comments (
                    commentId serial PRIMARY KEY, 
                    comment VARCHAR (50) NOT NULL,
                    createdOn timestamp with time zone NOT NULL,
                    postId INTEGER NOT NULL,
                    authorId INTEGER NOT NULL,
                    status INTEGER NOT NULL DEFAULT 1
                    )`);
      console.log('Table created successfully');
    } catch (error) {
      console.log(error);
    }
  };

  createArticlesCommentsTable();