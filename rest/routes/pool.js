var express         = require('express');
var router          = express.Router();
var timestamp       = require('timestamp-util');
var fs              = require('fs');
var emptyPools      = require('../static/json/emptyPools');

/**
 * @route("/pool")
 * @method("GET")
 *
 * Handles get requests to get the pool of a user.
 */
router.get("/", (req, res) => {
   timestamp("user id: " + req.cookies.userId);

   let userId = req.cookies.userId;
   let data = fs.readFileSync('rest/data.json');

   try {
       var poolData = JSON.parse(data);
       var pools = emptyPools;

       // Find the pool for the current user.
       poolData.forEach( (datum) => {

       });

       res.send(pools);
   } catch (e) {
       res.send({
           error: "There was an error retrieving this data."
       });
   }
});

/**
 * @route('/pool')
 * @method("POST")
 *
 * handles post request to save the pool of a user.
 */
router.post("/", (req, res) => {
    var saveData = {
        userId: req.cookies.userId,
        champion: req.body.champion,
        counters: req.body.counters,
        counteredBy: req.body.counteredBy,
        role: req.body.role
    };

    var oldData = fs.readFileSync('rest/data.json');

    try {
        var oldDataJSON = JSON.parse(oldData);
        fs.writeFile('rest/data.json', JSON.stringify(oldDataJSON), (err) => {
            if (err) {
                timestamp(err);
                res.send({
                    error: "An error has occurred while trying to save the data."
                });
                return;
            }

            res.send({
                data: oldDataJSON,
                user: oldDataJSON.userId
            });
        });
    } catch (e) {
        res.send({
            error: "There was an error saving this data."
        });
    }
});

module.exports = router;
