'use strict';

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const app = express();
const api = require('./routes/api');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}));

app.use('/api/v1/',api);
app.use('/public',express.static(path.join(__dirname,'../public')));

app.get('/', (req, res) => {
  res.json({messeage: "Hello World!"});
});

app.use(function (req, res, next) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});