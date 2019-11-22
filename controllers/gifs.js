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