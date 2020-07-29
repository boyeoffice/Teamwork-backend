const express = require('express');
const bodyParser =require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/', (req, res) => {
    res.send({
        status: 'success',
        messages: 'Welcome to teamwork project.'
    });
});

module.exports = app;
