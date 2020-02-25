const fs = require('fs');
const express = require('express');
const cors = require('cors');

const tools = require('./tools.js');

const PORT = 5000;
const contentUrl = './comments.json';

var app = express()
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(cors())

io.on('connection', socket => {

	const comments = tools.loadJson(contentUrl).data;

	socket.emit('connection', comments);
	console.log('Client connected');

	io.on('newComment', comment => {
		console.log(comment);
	})
});

server.listen(PORT);
console.log('Server started listening on PORT:' + PORT.toString());
