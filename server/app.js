var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var index = require('./routes/index');

app.use(express.static(path.join(__dirname,'./public')));

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('listening on port: ', port);
});

app.use(bodyParser.json());

app.use('/', index);

module.exports = app;
