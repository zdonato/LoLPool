var mockData = require('../mock.json');

var express         = require('express');
var router          = express.Router();
var timestamp       = require('timestamp-util');

/**
 * @route("/pool/:userID")
 * @method("GET")
 *
 * Handles get requests to get the pool of a user.
 */
router.get("/:userID", function (request, response) {
   timestamp("user id: " + request.params.userID);

   response.send(mockData);
});

module.exports = router;
