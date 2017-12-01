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

	// API de dados
	var notifications = require('./routes/api/notifications');
	app.use('/api/notifications', notifications);
};