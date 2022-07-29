/** @format */

const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send({
    Home: 'Welcome To Todo api!',
  });
});

app.listen(port, () => {
  console.log(`Todo-api is running on port ${port}`);
});
