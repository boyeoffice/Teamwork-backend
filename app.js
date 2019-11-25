const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const authRoute = require('./routes/auth');
const articleRoute = require('./routes/article');
const categoryRoute = require('./routes/category');
const gifRoute = require('./routes/gifs');

app.use('/v1/auth', authRoute);
app.use('/v1/articles', articleRoute);
app.use('/v1/category', categoryRoute);
app.use('/v1/gifs', gifRoute);
app.get('/', (req, res) => {
	res.status(200).send({
		status: 200,
		message: 'Welcome to teamwork project'
	});
});

module.exports = app;