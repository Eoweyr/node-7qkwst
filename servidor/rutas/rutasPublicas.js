const express = require('express');
const routerPublico = express.Router();


routerPublico.get('/', (req, res) => {
  res.send('hola');
})


module.exports = routerPublico;