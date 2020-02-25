const fs = require('fs');
const express = require('express');
const cors = require('cors');

const PORT = 5000;
const contentUrl = './comments.json';

var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(cors())

io.on('connection', function(socket){

	const comments = JSON.parse(fs.readFileSync(contentUrl));
	socket.emit('connection', comments);
    console.log('Client connected');
});

server.listen(PORT);
console.log('Server started listening on PORT:' + PORT.toString());
