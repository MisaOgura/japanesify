var gzippo = require('gzippo');
var express = require('express');
var app = express();
var path = require('path');
var routes = require("./app/routes.js")(app);
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.listen(port);

console.log('Listening on port ' + port);

exports = module.exports = app;
