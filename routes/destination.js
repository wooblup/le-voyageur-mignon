var express = require('express');
var router = express.Router();

/* GET destination page. */
router.get('/destinations/:destination', function(req, res, next) {

  /* Name of city */
  var destination = req.params.destination;

  /* Variable to store body text */
  var destinationData = [];

  /* Main data JSON file */
  var dataFile = req.app.get('appData');

  dataFile.destinations.forEach(function(element) {

    /* Check if city name exists in data */
    if (element.city == destination) {

      destinationData.push({

        city: destination,
        photo: element.photo,
        text: element.bodyText

      });

    }

  });

  res.render('destination', {
    title: 'Le Voyageur Mignon',
    destinationData: destinationData
  });

});

module.exports = router;
