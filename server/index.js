const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('../database/config/index.js');
const router = require('./router/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', router);

app.listen(PORT, (err) => {
  if (err) {
    console.log('failed to connect to server', err);
  } else {
    console.log(`Listening on PORT ${PORT}`);
  }
});