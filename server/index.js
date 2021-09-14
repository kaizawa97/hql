'use strict';

const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const passport = require('passport');
const app = express();
const api = require('./routes/api');

require('dotenv').config();
const port = process.env.NODE_PORT;

app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api/v1/',api);
app.use(express.static('/public'));

app.get('/', (req, res) => {
  res.json({messeage: "Hello World!"});
});

app.use(function (req, res, next) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});