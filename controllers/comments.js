const db = require('../database');
const today = new Date();
const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${+today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const randomId = require('../helpers/randomNumber');
//const post_type = 'article';

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
        commentId
			}
		})
	}catch(err){
		//console.log(err)
	}
}

exports.commentOnGif = async (req, res) => {
	try{
		const { comment } = req.body;
	  const { gifId } = req.params;
	  const createdOn = dateTime;
	  const createdBy = req.user.userId;
	  const commentId = randomId(10000);
	  const gif = await db.query(`SELECT * FROM posts WHERE postId = ${gifId}`);
	    if (gif.rows.length === 0) {
	      return res.status(404).json({
	        status: 'error',
	        error: 'Article with the specified ID NOT found',
	      });
	    }
	    await db.query(
      `INSERT INTO comments (commentId, comment, createdOn, postId, authorId) 
        VALUES ($1, $2, $3, $4, $5)`,
      [commentId, comment, createdOn, gifId, createdBy],
    );
		res.status(201).json({
			status: 'success',
			data: {
				createdOn,
        gifTitle: gif.rows[0].title,
        gif: gif.rows[0],
        comment,
        commentId
			}
		})
	}catch(err){
		//console.log(err)
	}
}

exports.flagComment = async (req, res) => {
	try{
	  const Id = req.params.id;
	  const {status} = req.body;
	  const comment = await db.query(`SELECT * FROM comments WHERE commentId = ${Id}`);
	    if (comment.rows.length === 0) {
	      return res.status(404).json({
	        status: 'error',
	        error: 'Comment with the specified ID NOT found',
	      });
	    }
	    await db.query(
      `UPDATE comments SET status = $1 WHERE commentId = ${Id}`,
      [status],
    );
		res.status(201).json({
			status: 'success',
			Id
		})
	}catch(err){
		//console.log(err)
	}
}

exports.deleteComment = async (req, res) => {
	try{
	  const Id = req.params.id;
	  let status = 0;
	  const comment = await db.query(`SELECT * FROM comments WHERE commentId = ${Id}`);
	    if (comment.rows.length === 0) {
	      return res.status(404).json({
	        status: 'error',
	        error: 'Comment with the specified ID NOT found',
	      });
	    }
	    await db.query(
      `DELETE FROM comments WHERE commentId = ${Id}`
    );
		res.status(202).json({
			status: 'success',
			msg: 'Comment successfully deleted'
		})
	}catch(err){
		//console.log(err)
	}
}