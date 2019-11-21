const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const authRoute = require('./routes/auth');
const articleRoute = require('./routes/article');

app.use('/v1/auth', authRoute);
app.use('/v1/articles', articleRoute);

app.get('/', (req, res) => {
	res.status(200).send({
		status: 200,
		message: 'Welcome to teamwork project'
	});
});
app.get("/users", (req, res) => {
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});

module.exports = app;