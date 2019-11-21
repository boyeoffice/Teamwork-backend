const db = require('../index');

  const createCategoriesTable = async () => {
    try{
    	await db.query(`CREATE TABLE IF NOT EXISTS categories (
            categoryId serial PRIMARY KEY, 
            categoryName VARCHAR (50) UNIQUE NOT NULL)`);
    	console.log('Table created successfully')
    }catch(e){
    	console.log();
    }
  };

  createCategoriesTable();