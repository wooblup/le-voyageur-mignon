var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  /* Main data JSON file */
  var dataFile = req.app.get('appData');

  /* Object to store city names & thumbnails */
  var indexData = [];

  /* Get city data and thumbnails for index page */
  dataFile.destinations.forEach(function(element) {

    indexData.push({

      city: element.city,
      thumbnail: element.thumbnail

    });

  });

  res.render('index', {
    title: 'Le Voyageur Mignonne',
    indexData: indexData
  });
});

module.exports = router;
