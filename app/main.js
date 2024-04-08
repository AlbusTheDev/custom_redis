const net = require("net");
const {queryMan} = require("./lib/queryMan")

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {
  // Handle connection
  connection.on('data', (data) => {
    queryMan(connection, data.toString());
  });
});

server.listen(6379, "127.0.0.1");
