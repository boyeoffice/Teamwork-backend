const db = require('../database');
const randomId = require('../helpers/randomNumber');

exports.allCategories = async (req, res) => {
	try{
		const categories = await db.query('SELECT * FROM categories');
    res.status(200).json({
      status: 'success',
      data: categories.rows,
    });
	}catch(err){
		//console.log(err)
	}
}

  exports.getSingleCategory = async (req, res) =>{
    const { categoryId } = req.params;
    const category = await db.query(`SELECT * FROM categories WHERE categoryId = ${categoryId}`);
    if (category.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        error: 'Category with the specified categoryId NOT found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: category.rows[0],
    });
  }



exports.createCategory = async (req, res) => {
	try{
		const { category_name } = req.body;
    const category = await db.query('SELECT * FROM categories WHERE categoryName=$1', [category_name]);
    if (category.rowCount > 0) {
      return res.status(422).json({
        status: 'error',
        error: {
          category_name: ['Category name already exists']
        },
      });
    }

    const categoryId = randomId(3532);
    await db.query(
      `INSERT INTO categories (categoryId, categoryName) 
            VALUES ($1, $2)`, [categoryId, category_name],
    );
	res.status(201).json({
		status: 'success',
		data: {
			categoryId,
			category_name
		}
	 });
	}catch(err){
		console.log(err)
	}
}

exports.updateSingleCategory = async (req, res) => {
	try{
    const {categoryId} = req.params;
    const { category_name } = req.body;
   /* let { rows } = await db.query(`SELECT * FROM categories`);
    let category = rows.find(cat => cat.categoryid === parseInt(categoryId));
		//console.log(category)
    if(category == undefined) return res.status(404).json({
	    	status: 'error',
	    	 error: {
	    	 	category: ['Category Not Found']
	    	 } 
	     });
    category = rows.find(cat => cat.categoryname === category_name);
    console.log(category)
    if(category) return res.status(422).json({
	    	status: 'error',
	    	 error: {
	    	 	category: ['Category already exist']
	    	 } 
	     });*/
   let category = await db.query(
      `UPDATE categories
            SET categoryName = $1
            WHERE categoryId = ${categoryId} `,
      [category_name],
    );
   if(category.rowCount === 0) return res.status(404).json({
	    	status: 'error',
	    	 error: {
	    	 	category: ['Category Not Found']
	    	 } 
	     });
    return res.status(201).json({
      status: 'success',
      data: {
      	categoryId,
      	category_name
      },
      msg: 'Category succesfully updated',
    });
   }catch(err){
   	return res.status(422).json({
	    	status: 'error',
	    	 error: {
	    	 	category: ['Category already exist']
	    	 } 
	     });
   }
  }

exports.deleteSingleCategory = async (req, res) => {
    const { categoryId } = req.params;
    const category = await db.query(`DELETE FROM categories WHERE categoryId = ${categoryId}`);
    if (category.rowCount === 0) return res.status(404).json({
    	status: 'error',
       error: {
        category: ['Category Not Found']
       }
     });
    return res.status(202).json({
      status: 'success',
      msg: 'Category succesfully deleted',
    });
  }

