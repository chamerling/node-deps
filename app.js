// ...
var express = require('express');

process.on('exit', function () {
  console.log('Bye bye...');
});

var app = express.createServer();
var port = 3000;

app.get('/', function(req, res){
  res.send('Nothing to see here, check the README...');
});

app.listen(port);
console.log("Listening on port " + port)