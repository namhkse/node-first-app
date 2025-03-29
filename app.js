const {createServer} = require('http');
const { requestHandler } = require('./routes.js');

const server = createServer(requestHandler);

server.listen(3000);