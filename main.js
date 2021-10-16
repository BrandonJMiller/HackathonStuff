const express = require('express')
const path = require('path')
const PORT = process = process.env.PORT || 5000

const server = express();
server.get('/', (req, res) => {
	res.sent('Hello World')
})

server.listen(PORT, () => {
	console.log('listening on ${PORT}')
})

