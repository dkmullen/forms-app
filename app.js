const express = require('express'), 
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

const routes = require('./routes/routes');
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('');

app.use(bodyParser.json()); // Must be ABOVE the routes call
routes(app);

module.exports = app;