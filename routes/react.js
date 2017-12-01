var express = require('express');
var router = express.Router();

// Pagina com JQuery
router.get('/', function(req, res, next) {
  res.render('react', { title: 'ReactJS' });
});

module.exports = router;