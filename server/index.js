'use strict';
const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const app = express();

const port = process.env.PORT;
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server listening on 5000');
});