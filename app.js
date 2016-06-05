/* LoLPool server. */
var express         = require('express');
var path            = require('path');
var http            = require('http');

var app             = express();
var port            = normalizePort(process.env.PORT || '9001');
app.set('port', port);

/* Load the routes and tell express about them. */
var index           = require('./rest/routes/index');
var pool            = require('./rest/routes/pool');

app.use('/', index);
app.use('/pool', pool);

/* Serve static files. */
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/uib', express.static(path.join(__dirname, 'node_modules/angular-ui-bootstrap')));

/* Create and start the server. */
var server          = http.createServer(app);
server.listen(port);

/* Normalize port. */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port))
    {
        return val;
    }

    if (port >= 0)
    {
        return port;
    }

    return false;
}