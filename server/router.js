const router = require('express').Router();
const axios = require('axios');

// CREATE / POST (extension)
router.post('/:id/reservation', (req, res) => {
  axios({
    method: 'POST',
    url: 'http://localhost:3000/api/v1/listings' + req.url,
    body: req.body
  })
    .then((innerRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

// READ / GET
router.get('/:id', (req, res) => {
  axios({
    method: 'GET',
    url: 'http://localhost:3000/api/v1/listings' + req.url,
  })
    .then((innerRes) => {
      // console.log(innerRes.data);
      res.json(innerRes.data);
      // res.end();
    })
    .catch((err) => {
      // console.log(err);
      res.sendStatus(500);
      // res.end();
    });
});

// Update / PUT (extension)
router.put('/:id/reservation/:id', (req, res) => {
  axios({
    method: 'PUT',
    url: 'http://localhost:3000/api/v1/listings' + req.url,
    body: req.body
  })
    .then((innerRes) => {
      res.json(innerRes.data);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

// Delete / DELETE (extension)
router.delete('/:id/reservation', (req, res) => {
  axios({
    method: 'DELETE',
    url: 'http://localhost:3000/api/v1/listings' + req.url,
    body: req.body
  })
    .then((innerRes) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = router;
