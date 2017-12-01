var express = require('express');
var router = express.Router();

// Pagina com JQuery
router.get('/', function(req, res, next) {
  res.render('jquery', { title: 'JQuery' });
});

module.exports = router;