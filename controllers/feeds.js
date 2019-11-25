const db = require('../database');

exports.getFeeds = async (req, res) => {
	const feeds = await db.query(`SELECT * FROM posts ORDER BY createdon DESC`);
	res.status(200).json({
		status: 'success',
		data: feeds.rows
	});
}