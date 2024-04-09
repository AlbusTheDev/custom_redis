const {parseData, sendMsg} = require("./utils");
const {get, set, info, psync} = require("./commands");

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
        case "replconf":
            sendMsg(connection, ["+OK"]);
            break;
        case "psync":
            sendMsg(connection, psync());
            const base64 = "UkVESVMwMDEx+glyZWRpcy12ZXIFNy4yLjD6CnJlZGlzLWJpdHPAQPoFY3RpbWXCbQi8ZfoIdXNlZC1tZW3CsMQQAPoIYW9mLWJhc2XAAP/wbjv+wP9aog=="
            connection.write(`$${Buffer.from(base64).length}\r\n${base64}`)
            break;
    }
};

module.exports = {queryMan};