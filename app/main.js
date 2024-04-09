const net = require("net");
const {mainInfo} = require("./lib/mainInfo");
const {queryMan} = require("./lib/queryMan");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

const server = net.createServer((connection) => {
    let obj = {};
  // Handle connection
    connection.on('data', (data) => {
        queryMan(connection, data.toString());
    });
});

if (process.argv.length <= 2)
    server.listen(6379, "127.0.0.1");
else {
    server.listen(process.argv[3], "127.0.0.1");
    if (process.argv.length === 7 && process.argv[4] == "--replicaof") {
        mainInfo.isReplica = true;
    }
}
