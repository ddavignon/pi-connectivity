// Running express server

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
  console.log('received a message! - ' + req);
  res.sendFile(path.normalize(__dirname + '/config.json'));
});

server.listen(3454, '0.0.0.0', function () {
  console.log('server listening on port: 3454');
});


/* ** */
// running ssdp server

var Server = require('node-ssdp').Server,
  server = new Server();

server.addUSN('upnp:rootdevice');
// server.addUSN('urn:schemas-upnp-org:device:MediaServer:1');
// server.addUSN('urn:schemas-upnp-org:service:ContentDirectory:1');
server.addUSN('urn:schemas-upnp-org:service:ConnectionManager:1');

server.on('advertise-alive', function (headers) {
  // Expire old devices from your cache. Register advertising device somewhere (as
  // designated in http headers heads)
  //console.log('Advert-alive' + JSON.stringify(headers));
});

server.on('advertise-bye', function (headers) {
  // Remove specified device from cache.
  //console.log('Advertise-bye' + headers);
});

// start the server
server.start();

process.on('exit', function () {
  server.stop() // advertise shutting down and stop listening
})

/* ** */