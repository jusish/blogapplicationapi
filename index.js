const express = require('express');
const app = express();
const mongoose = require('mongoose');

const blogRouter = require('./routes/BlogRoutes')

app.use(express.json());

app.listen(3000, () => {
  console.log('Listening on http://localhost:3000');
});

app.use("/api/blogs", blogRouter);

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/nodejscrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to mongodb');
  })
  .catch(() => {
    console.error('Failed to connected to db', error);
  });
