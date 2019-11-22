const db = require('../database');
const today = new Date();
const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${+today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const randomId = require('../helpers/randomNumber');
const post_type = 'article';

exports.getAllArticles = async (req, res) => {
    const articles = await db.query(`SELECT * FROM posts WHERE postType = '${post_type}' ORDER BY createdon DESC`);
    return res.status(200).json({
      status: 'success',
      data: articles.rows,
    });
  }

exports.getSingleArticle = async (req, res) => {
    try {
      const {articleId} = req.params;
    const article = await db.query(`SELECT * FROM posts WHERE postId = ${articleId}`);
    if (article.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        error: 'Article with the specified articleId NOT found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: article.rows[0],
    });
    }catch(err){
      //console.log(err)
    }
  }

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
      `INSERT INTO posts (postId, title, article, createdOn, categoryId, authorId, postType) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, [articleId, title, content, createdOn, category_id, authorId, post_type],
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

/*exports.getArticlesInCategory =  async (req, res) => {
    const {categoryId} = req.params;
    const article = await db.query(`SELECT * FROM articles WHERE categoryId = ${categoryId}`);
    if (article.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        error: 'No articles in the specified Category',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: article.rows,
    });
  }*/

  exports.updateSingleArticle = async (req, res) => {
    try{
      const {articleId} = req.params;

    const owner = await db.query(`SELECT * FROM posts WHERE postId = ${articleId}`);
    if (owner.rowCount === 0) return res.status(404).json({
      status: 'error',
       error: 'Article Not Found' 
     });
    if (owner.rows[0].authorid !== req.user.userId) {
      return res.status(403).json({
        status: 'error',
        error: 'You cannot edit this article',
        });
       }
    const { title, content } = req.body;
    await db.query(
      `UPDATE posts
        SET title = $1, article = $2
        WHERE postId = ${articleId}`,
      [title, content],
    );

     return res.status(201).json({
        status: 'success',
        data: {
          title,
          content
        }
      })
    }catch(err){
      //console.log(err)
    }
  }

  exports.deleteSingleArticle = async (req, res) => {
    try{
      const { articleId } = req.params;

      const owner = await db.query(`SELECT * FROM posts WHERE postId = ${articleId}`);
      if (owner.rowCount === 0) return res.status(404).json({ status: 'error', error: 'Article Not Found' });
      if (owner.rows[0].authorid !== req.user.userId) {
        return res.status(403).json({
          status: 'error',
          msg: 'You cannot delete this article',
        });
      }
      await db.query(`DELETE FROM posts WHERE postId = ${articleId}`);
      return res.status(202).json({
        status: 'success',
        msg: 'Article succesfully deleted'
      })
    }catch(err){
      //console.log(err)
    }
  }
