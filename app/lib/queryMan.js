const {parseData} = require("../parser/parseData");
const {ping} = require("../command/ping");
const {echo} = require("../command/echo");

const queryMan = (connection, data) => {
    const {nParams, command, query} = parseData(data);

    switch (command) {
        case "echo":
            echo(connection, query);
            break;
        case "ping":
            ping(connection);
            break;
    }
};

module.exports = {queryMan};