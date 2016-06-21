/* Champions router. */
var express         = require('express');
var router          = express.Router();
var timestamp       = require('timestamp-util');
var championsJSON   = require('../static/json/champions.json');

/**
 * @route("/champions")
 * @method("GET")
 *
 * Returns a JSON response of the current champions in league.
 */
router.get('/', function (request, response) {
    timestamp("[GET] /champions - Sending champions.json");

    response.send(championsJSON);
});

module.exports = router;