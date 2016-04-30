module.exports = function(app) {
  var request = require('request');
  var fs = require('fs');

  app.get('/', function(req, res) {
    var path = require('path');
    res.sendFile(path.join(__dirname, 'index.html'));
  });
};
