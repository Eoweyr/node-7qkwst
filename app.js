require('dotenv');
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const puerto = process.env.PUERTO || 3002;
const app = express();
const routerPublico = require('./servidor/rutas/rutasPublicas');

app.use('dotenv');
app.use(expressLayouts);

app.set('layout', 'layouts/publica');

app.use('/', routerPublico);

app.listen(puerto, () => {
  console.log(`Servidor conectado en el puerto: ${puerto}`);
});
