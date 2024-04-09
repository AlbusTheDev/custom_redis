const {parseData} = require("../parser/parseData");
const {ping} = require("../command/ping");
const {echo} = require("../command/echo");
const {get} = require("../command/get");
const {set} = require("../command/set");
const {info} = require("../command/info");

const queryMan = (connection, data, obj) => {
    const {nParams, command, query} = parseData(data);

    switch (command.toLowerCase()) {
        case "echo":
            echo(connection, query);
            break;
        case "ping":
            ping(connection);
            break;
        case "get":
            get(connection, obj, query[1]);
            break;
        case "set":
            set(connection, obj, query);
            break;
        case "info":
            info(connection);
            break;
    }
};

module.exports = {queryMan};