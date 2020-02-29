const router = require('express').Router();
const axios = require('axios');

// CREATE / POST (extension)
router.post('/:id/reservation', (req, res) => {
  let accomodation_id = parseInt(req.originalUrl.match(/(?<=listings\/)(.*)(?=\/reservation)/));

  psqlQuery.postReservation(accomodation_id, req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
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
  psqlQuery.putReservation(1, {}, () => {
    res.json('TESTING POST');
  })
});

// Delete / DELETE (extension)
router.delete('/:id/reservation', (req, res) => {
  let accomodation_id = parseInt(req.originalUrl.match(/(?<=listings\/)(.*)(?=\/reservation)/));
  let {user_id, startDate} = req.body;

  psqlQuery.deleteReservation(accomodation_id, user_id, startDate, (err, result) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });

});

module.exports = router;
