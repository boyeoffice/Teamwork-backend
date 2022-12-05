const createError = require('http-errors');
const express = require('express');
const cors = require('cors');

const env = require('./env');

const loginRouter = require('./routes/auth.route');
// const adminRouter = require('./routes/admin.route');

// const env = require('./env');

const app = express();

// use cors
/* const whitelist = [process.env.APP_BASE_URL];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
}; */

app.use(cors());

app.use(express.json({ limit: '50mb', extended: true }));
app.use(
    express.urlencoded({
        extended: true,
        limit: '50mb',
        parameterLimit: 50000,
    }),
);

// router
app.get('/', (req, res) => {
  return res.send({
      status: 'success',
      messages: 'Welcome to teamwork project.',
  });
});

app.use('/api/v1/auth', loginRouter);
// app.use('/api/v1/admin', adminRouter);

app.use((req, res, next) => {
    next(createError(404));
});

// error handler
// app.use((err, req, res) => {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get(env.environment) === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     // res.render('error');
// });

module.exports = app;
