var request = require('request');

var Client = require('node-ssdp').Client,
  client = new Client();

client.on('response', function (headers, statusCode, rinfo) {
  
  // aquire address and port to request config file
  var address = rinfo.address;
  request('http://'+ address + ':3454', function (err, res, body) {
    if (!err && res.statusCode == 200) {
      console.log(body);
    } else {
      console.log("Returned: " + err);
    }
  });

});

// search for a service type
client.search('urn:schemas-upnp-org:service:ConnectionManager:1');
//
//         // Or get a list of all services on the network
//
//client.search('ssdp:all');