var mockData = require('../mock.json');

var express         = require('express');
var router          = express.Router();
var timestamp       = require('timestamp-util');

/**
 * @route("/pool")
 * @method("GET")
 *
 * Handles get requests to get the pool of a user.
 */
router.get("/", (request, response) => {
   timestamp("user id: " + request.cookies.userId);

   response.send(mockData);
});

/**
 * @route('/pool')
 * @method("POST")
 *
 * handles post request to save the pool of a user.
 */
router.post("/", (request, response) => {
    timestamp("User id: " + request.cookies.userId);

    timestamp(request.body);

    res.send(request.body);
});

module.exports = router;
