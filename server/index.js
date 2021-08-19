'use strict';

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const app = express();
const api = require('./routes/api');

require('dotenv').config();
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(logger('dev'));

app.use(express.json());

app.use('/api/v1/',api);

app.get('/', (req, res) => {
  res.json({messeage: "Hello World!"});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});