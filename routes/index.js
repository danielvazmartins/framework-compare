var express = require('express');
var router = express.Router();

// Home com link para as paginas
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

module.exports = router;
