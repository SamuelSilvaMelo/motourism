const express = require('express');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', routes.login);
app.post('/users', routes.createUsers);
app.get('/itineraries', routes.getAllItineraries);
app.get('/motorhomes', routes.getAllMotorhomes);

app.use(errorMiddleware);

module.exports = app;
