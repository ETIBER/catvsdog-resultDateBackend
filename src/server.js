'use strict';

const Hapi = require('hapi');

var port = process.env.PORT || 8080;


// Create a server with a host and port
const server = Hapi.server({
    port: port
})

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: function (request, h) {
        return 'Hello!'
    }
})

server.route({
    method: 'GET',
    path:'/hello',
    handler: function (request, h) {

        return 'hello world'
    }
})

// Start the server

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
}

start()