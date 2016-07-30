/* Homepage router. */
var express         = require('express');
var router          = express.Router();

/**
 * @route('/')
 * @method("GET")
 *
 * Handles the / route.
 */
router.get('/', function (request, response) {
    response.set('Set-Cookie', 'userId=1');
    response.sendFile('index.html', { root: 'public/'} );
});

module.exports = router;
