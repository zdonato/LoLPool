var mockData = require('../mock.json');

var express         = require('express');
var router          = express.Router();
var timestamp       = require('../utilities/timestamp');

/**
 * @route("/pool/:userID")
 * @method("GET")
 *
 * Handles get requests to get the pool of a user.
 */
router.get("/:userID", function (request, response) {
   console.log(timestamp() + "user id: " + request.params.userID);

   response.send(mockData);
});

module.exports = router;