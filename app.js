const express = require('express');

// const env = require('./env');

const app = express();

app.use(express.json({ limit: '50mb', extended: true }));
app.use(
    express.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000,
    }),
);

app.get('/', (req, res) => {
    res.send({
        status: 'success',
        messages: 'Welcome to teamwork project.',
    });
});

module.exports = app;
