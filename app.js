require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = require('./servidor/rutas/rutasPublicas');

const puerto = process.env.PUERTO || 3002;
const app = express();


app.use('dotenv');
app.use(expressLayouts);

app.set('layout', 'layouts/publica');

app.use('/', router);

app.listen(puerto, () => {
  console.log(`Servidor conectado en el puerto: ${puerto}`);
});
