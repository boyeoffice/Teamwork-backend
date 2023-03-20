import createError from 'http-errors';
import express from 'express';
import cors from 'cors';

// import env from '../env';

// const loginRouter = import('./routes/auth.route');
// const adminRouter = import('./routes/admin.route');
// import appRouter from './routes';

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

app.use(express.json({
  limit: '50mb',
  // extended: true,
  // parameterLimit: 50000,
}));
app.use(express.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 50000,
}));

app.get('/', (req, res) => {
  return res.send({
      status: 'success',
      messages: 'Welcome to teamwork project.',
      // environment: env.environment
  });
});

// app.use('/api/v1/', appRouter);

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

export default app;
