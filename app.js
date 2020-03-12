import express from 'express';
const app = express();
import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';
import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(
  process.env.MONGODB,
  {
    useUnifiedTopology: true
  }
);

app.use(morgan('dev'));
app.use(urlencoded({extended: false}));
app.use(json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method==='OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({});
  }

  next();
});

app.use((req,res,next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
}); 

export default app;