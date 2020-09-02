const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

const app = express();

// use body-parser
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(
    bodyParser.urlencoded({
        limit: '50mb',
        extended: true,
        parameterLimit: 50000,
    }),
);

app.use(express.json());
app.use(express.urlencoded({ extend: true }));

dotenv.config();

app.get('/', (req, res) => {
    res.send({
        status: 'success',
        messages: 'Welcome to teamwork project.',
    });
});

module.exports = app;
