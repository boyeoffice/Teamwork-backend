const db = require('../index');

  const createArticlesTable = async () => {
    try {
      await db.query(`CREATE TABLE IF NOT EXISTS posts (
                                postId serial PRIMARY KEY, 
                                title VARCHAR (50) NOT NULL,
                                article VARCHAR (2500) NULL,
                                createdOn timestamp with time zone NOT NULL,
                                categoryId INTEGER NOT NULL,
                                authorId INTEGER NOT NULL,
                                imageUrl VARCHAR (1024) NULL,
                                publicId VARCHAR (1024) NULL,
                                postType VARCHAR (20) NOT NULL
                                )`);
      console.log('Table created successfully');
    } catch (error) {
      console.log(error);
    }
  };

  createArticlesTable();