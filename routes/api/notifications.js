var express = require('express');
var router = express.Router();

// Retorna todas as notificacoes
router.get('/', function(req, res, next) {
	var notifications = [{
		id: 1,
		image: '/images/note1.jpg',
		title: 'Notificacao 1',
		url: '/note1'
	},{
		id: 2,
		image: '/images/note2.jpg',
		title: 'Notificacao 2',
		url: '/note2'
	},{
		id: 3,
		image: '/images/note3.jpg',
		title: 'Notificacao 3',
		url: '/note3'
	},{
		id: 4,
		image: '/images/note4.jpg',
		title: 'Notificacao 4',
		url: '/note4'
	},{
		id: 5,
		image: '/images/note5.jpg',
		title: 'Notificacao 5',
		url: '/note5'
	}];
  	res.json(notifications);
});

module.exports = router;
