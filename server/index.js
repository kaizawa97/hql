'use strict';

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const app = express();

require('dotenv').config();
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server listening on 5000');
});