require("babel/register")({extensions: [".es6"]});

var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
    port: 22777
});


var module = require('./routes/api.js');

// Start the server
server.start();
