const db = require('../database');
const cloudinary = require('cloudinary');
const today = new Date();
const date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${+today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const dateTime = `${date} ${time}`;
const randomId = require('../helpers/randomNumber');
const post_type = 'gif';


cloudinary.config({
  cloud_name: 'dxfnsh05z',
  api_key: '123435846189759',
  api_secret: 'Q6_ueDxgNn5Fvb5aMI4BvtWas_0',
});

exports.getAllgifs = async (req, res) => {
    const gifs = await db.query(`SELECT * FROM posts WHERE postType = '${post_type}' ORDER BY createdOn DESC`);
    res.status(200).json({
      status: 'Success',
      data: gifs.rows,
    });
  }

exports.postGif = async (req, res) => {
	try{
		const file = req.files.image;
    if (!file) return res.status(404).json({ message: 'Image is required' });
    //const createdOn = dateTime;
    const { title } = req.body;
    if (!title) return res.status(422).json({ message: 'title is required' });
    const gifcloud = await cloudinary.v2.uploader.upload(file.tempFilePath);
    const { secure_url: secureUrl, created_at: createdOn, public_id: publicId } = gifcloud;

    const identity = randomId(100000);

    const createdBy = req.user.userId;

    await db.query(
      `INSERT INTO posts (postId, title, imageUrl, createdOn, publicId, authorId, postType) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [identity, title, secureUrl, createdOn, publicId, createdBy, post_type],
    );
		res.status(201).json({
			status: 'success',
			data: {
				gifId: identity,
        message: 'GIF image successfully posted.',
        createdOn,
        title,
        imageUrl: secureUrl,
        createdBy,
			}
		})
	}catch(err){
		console.log(err)
	}
}

exports.getSingleGif = async (req, res) => {
    const { gifId } = req.params;
    const gif = await db.query(`SELECT * FROM posts WHERE postId = ${gifId}`);
    if (gif.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        error: 'Gif with the specified gifId NOT found',
      });
    }
    return res.status(200).json({
      status: 'success',
      data: gif.rows[0],
    });
  }

exports.deleteGif = async (req, res) => {
    const { gifId } = req.params;
    const gif = await db.query(`SELECT * FROM posts WHERE postId = ${gifId}`);
    if (gif.rows.length === 0) {
      return res.status(404).json({
        status: 'error',
        error: 'gif with the specified gifId NOT found',
      });
    }

    if (gif.rows[0].authorid !== req.user.userId) {
      return res.status(403).json({
        status: 'error',
        message: 'You cannot delete this Gif',
      });
    }

    await cloudinary.v2.uploader.destroy(gif.rows[0].publicid);


    await db.query(`DELETE FROM posts WHERE postId = ${gifId}`);
    //if (gif.rowCount === 0) return res.status(404).json({ message: 'Gif Not Found' });
    return res.status(202).json({
      status: 'success',
      data: {
        message: 'Gif post successfully deleted',
      },
    });
  }
