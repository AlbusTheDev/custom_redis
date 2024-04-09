const net = require("net");
const {sendMsg} = require("./utils");

const createConnection = (host, port) => {
    const socket = net.Socket();
    socket.connect(port,host);

    socket.on("connect", () => {
        sendMsg(socket, ["*", "ping"]);
    });

    socket.on("error", (error) => {
        console.log("Error occurred: ", error);
    });
};

module.exports = {createConnection}