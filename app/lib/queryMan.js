const {parseData, sendMsg} = require("./utils");
const {get, set, info} = require("./commands");

const queryMan = (connection, data) => {
    const {nParams, command, query} = parseData(data);

    switch (command.toLowerCase()) {
        case "echo":
            sendMsg(connection, query);
            break;
        case "ping":
            sendMsg(connection, ["+PONG"]);
            break;
        case "get":
            sendMsg(connection, get(query[1]));
            break;
        case "set":
            sendMsg(connection, set(query));
            break;
        case "info":
            console.log(info())
            sendMsg(connection, info());
            break;
    }
};

module.exports = {queryMan};