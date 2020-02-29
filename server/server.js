const express = require('express');
const axios = require('axios');
const path = require('path');
// Middlewaress
const morgan = require('morgan');
const router = require('./router.js');

const app = express();
const port = 3003;

// what the server is listening on
app.set('port', port);

// parsing
app.use(morgan('dev'));

// server static files
app.use(express.static(path.join(__dirname, '../public')));

// Air Carousel
app.get(
  '/api/:house',
  (req, res) => {
    axios({
      method: 'GET',
      url: 'http://localhost:1337' + req.url,
    })
      .then((innerRes) => {
        // console.log(innerRes.data);
        res.writeHead(200);
        res.write(JSON.stringify(innerRes.data));
        res.end();
      })
      .catch((err) => {
        // console.log(err);
        res.writeHead(500);
        res.end();
      });
  }
);

// Reviews
app.get(
  '/v1/api/:house/reviews',
  (req, res) => {
    axios({
      method: 'GET',
      url: 'http://localhost:2020' + req.url,
    })
      .then((innerRes) => {
        // console.log(innerRes.data);
        res.writeHead(200);
        res.write(JSON.stringify(innerRes.data));
        res.end();
      })
      .catch((err) => {
        // console.log(err);
        res.writeHead(500);
        res.end();
      });
  }
);

// Use router to handle and request for Scheduling
app.use('/api/v1/listings',router);


// Related Homes
app.get(
  '/gethomes',
  (req, res) => {
    axios({
      method: 'GET',
      url: 'http://localhost:4321' + req.url,
    })
      .then((innerRes) => {
        // console.log(innerRes.data);
        res.writeHead(200);
        res.write(JSON.stringify(innerRes.data));
        res.end();
      })
      .catch((err) => {
        // console.log(err);
        res.writeHead(500);
        res.end()
      });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports.app = app;
