var express = require('express'),
	app = express(),
	port = 3000,
	mongoose = require('mongoose'),
	Contact = require('./api/models/contactsModel'), //importing contacts module
	bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contactDB',{useNewUrlParser:true});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

var routes = require('./api/routes/contactsRoutes'); //importing routes module
routes(app); //register the route

app.listen(port);
module.exports = app;