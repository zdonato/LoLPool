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

router.get('/type-ahead-list', function (request, response) {
    timestamp("[GET] /champions/type-ahead-list - Sending list of champion names");

    var championNames = [];

    Object.keys(championsJSON).forEach((champ) => {
        championNames.push(championsJSON[champ].name);
    });

    response.send(championNames);
});

module.exports = router;
