var express = require('express');
var router = express.Router();

/* GET destination page. */
router.get('/destinations/:destination', function(req, res, next) {

  var destination = req.params.destination;

  res.render('destination', {
    title: 'Le Voyageur Mignonne',
    city: destination
  });

});

module.exports = router;
