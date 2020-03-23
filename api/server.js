const express = require('express');
const carsRouter = require('../cars/cars-router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to your homepage</h2>`);
});

server.use('/api/cars', carsRouter);

module.exports = server;
