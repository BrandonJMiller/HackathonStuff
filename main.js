const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const server = express();
var formidable = require('formidable');
var app = express();


server.get('/', (req, res) => {
	res.send('Hello World')
})
server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})

