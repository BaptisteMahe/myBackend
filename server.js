const express = require('express');
const cors = require('cors');
const http = require('http');

const tools = require('./tools.js');
const Comment = require ('./comment').Comment;

const PORT = 5000;

var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);

app.use(cors());

io.on('connection', socket => {

	const comments = tools.readJson().data;

	socket.emit('connection', comments);
	console.log('Client connected');

	socket.on('newComment', commentProperties => {
		console.log('New comment received :');
		console.log(commentProperties);
		let comment = new Comment(commentProperties);
		const isCommentValid = comment.isValid();
		if (isCommentValid) {
			//comment.saveInJson();
			socket.emit('addComment', comment.formatForFrontend());
		}
	});
});

server.listen(PORT);
console.log('Server started listening on PORT:' + PORT.toString());
