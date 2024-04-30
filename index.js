import express from 'express';
import connectDB from './configs/db.js';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

const app = express();
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
connectDB(URI);
// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import indexRouter from './routes/index.js';
import urlsRouter from './routes/Urls.js';

app.use('/', indexRouter);
app.use('/api', urlsRouter);

// Server
app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
