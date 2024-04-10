const net = require("net");
const {sendMsg} = require("./utils");

const createConnection = (host, port) => {
    const socket = net.Socket();
    socket.connect(port,host);

    socket.on("connect", () => {
        sendMsg(socket, ["*", "ping"]);
    });

    socket.on("data", (data) => {
        if (data.toString().startsWith("+PONG")){
            //bruh
            sendMsg(socket, ["*", "REPLCONF", "listening-port", "6380"]);
            sendMsg(socket, ["*", "REPLCONF", "capa", "psync2"]);
            sendMsg(socket, ["*", "PSYNC", "?", "-1"]);
        }
    });

    socket.on("error", (error) => {
        console.log("Error occurred: ", error);
    });
};

module.exports = {createConnection}