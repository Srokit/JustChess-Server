var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var config = require('./config');

var expressApp = express();
var httpServer = http.Server(expressApp);
var socketIOApp = socketio(httpServer);

expressApp.get('/', function (req, res) {
  res.send("Hey");
});


httpServer.listen(config.port);

console.log("Listening on port", config.port);