const express = require('express');
const Cars = require('../data/dbConfig');

const router = express.Router();

router.get('/', (req, res) => {
  Cars.select('*')
    .from('cars')
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(err => {
      res.status(500).json({message: 'Something went wrong'});
    });
});

router.post('/', (req, res) => [
  Cars.select('*')
    .from('cars')
    .insert(req.body)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(err => {
      res.status(500).json({message: 'Error posting a car'});
    })
]);

module.exports = router;
