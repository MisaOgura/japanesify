var gzippo = require('gzippo');
var express = require('express');
var app = express();
var path = require('path');
var routes = require("/app/route.js")(app);
var port = process.env.PORT || 8080;

app.use(express.logger('dev'));

app.use(express.static(path.join(__dirname, 'app/assets')));
app.use(express.static(path.join(__dirname, 'app/js')));
app.listen(port);

console.log('Listening on port ' + port);

exports = module.exports = app;
