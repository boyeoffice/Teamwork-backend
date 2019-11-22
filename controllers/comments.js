const db = require('../database');
const today = new Date();
const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${+today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const randomId = require('../helpers/randomNumber');
const post_type = 'article';

exports.commentOnArticle = async (req, res) => {
	try{
		const { comment } = req.body;
	  const { articleId } = req.params;
	  const createdOn = dateTime;
	  const createdBy = req.user.userId;
	  const commentId = randomId(10000);
	  const article = await db.query(`SELECT * FROM posts WHERE postId = ${articleId}`);
	    if (article.rows.length === 0) {
	      return res.status(404).json({
	        status: 'error',
	        error: 'Article with the specified ID NOT found',
	      });
	    }
	    await db.query(
      `INSERT INTO comments (commentId, comment, createdOn, postId, authorId) 
        VALUES ($1, $2, $3, $4, $5)`,
      [commentId, comment, createdOn, articleId, createdBy],
    );
		res.status(201).json({
			status: 'success',
			data: {
				createdOn,
        articleTitle: article.rows[0].title,
        article: article.rows[0].article,
        comment,
			}
		})
	}catch(err){
		//console.log(err)
	}
}