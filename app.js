const express = require('express'), 
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config');

const routes = require('./routes/routes');
const app = express();

const port = process.env.PORT || 3050;
app.set('port', port);

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

app.use(bodyParser.json()); // Must be ABOVE the routes call
routes(app);

module.exports = app;