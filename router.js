module.exports = function(app) {
	// Home
	var index = require('./routes/index');
	app.use('/', index);

	// Pagina com JQuery
	var jquery = require('./routes/jquery');
	app.use('/jquery', jquery);

	// Pagina com AngularJS

	// Pagina com ReactJS
	var react = require('./routes/react');
	app.use('/react', react);

	// Pagina com Angular4

	app.use(function (req, res, next) {
    	// Website you wish to allow to connect
    	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    	next();
	});

	// API de dados
	var notifications = require('./routes/api/notifications');
	app.use('/api/notifications', notifications);
};