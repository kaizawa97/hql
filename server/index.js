'use strict';
const express = require('express');
const helmet = require('helmet');

const app = express();

const port = process.env.PORT || 5000;
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('Server listening on 5000');
});