const db = require('../database');
const today = new Date();
const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${+today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const randomId = require('../helpers/randomNumber');

exports.createArticle = async (req, res) => {
	try{
	const { title, content, category_id } = req.body;
    const createdOn = dateTime;
    const articleId = randomId(5484621);
    //const category = await db.query(`SELECT * FROM categories WHERE categoryId = ${categoryId}`);
   /* if (category.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        error: 'Category with the specified categoryId NOT found',
      });
    }*/

    const authorId = req.user.userId;
    //console.log(authorId);
    await db.query(
      `INSERT INTO articles (articleId, title, article, createdOn, categoryId, authorId) 
        VALUES ($1, $2, $3, $4, $5, $6)`, [articleId, title, content, createdOn, category_id, authorId],
    );
	res.status(201).json({
		status: 'success',
		data: {
			title,
			content,
			articleId
		}
	})
}catch(err){
	//console.log(err)
}
}