const db = require('../index');

  const createArticlesTable = async () => {
    try {
      await db.query(`CREATE TABLE IF NOT EXISTS articles (
                                articleId serial PRIMARY KEY, 
                                title VARCHAR (50) NOT NULL,
                                article VARCHAR (2500) NOT NULL,
                                createdOn timestamp with time zone NOT NULL,
                                categoryId INTEGER NOT NULL,
                                authorId INTEGER NOT NULL
                                )`);
      console.log('Table created successfully');
    } catch (error) {
      console.log(error);
    }
  };

  createArticlesTable();