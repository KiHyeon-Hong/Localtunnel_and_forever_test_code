const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send('Hello World!!!');
});

app.get('/checkURL', (req, res, next) => {
  res.send(fs.readFileSync(__dirname + '/files/url.txt', 'utf8').split(': ')[1]);
});

app.listen(65001, () => {
  console.log(`Server running...`);
});
