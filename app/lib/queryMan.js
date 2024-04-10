const {parseData, sendMsg} = require("./utils");
const {get, set, info, psync} = require("./commands");
const {replicas} = require("./replicas");

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
            replicas.forEach(element => {
                sendMsg(element, ["*","SET", ...query]);
            });
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
            const rdbBuffer = Buffer.from(base64, "base64");
            const rdbHead = Buffer.from(`$${rdbBuffer.length}\r\n`)
            connection.write(Buffer.concat([rdbHead, rdbBuffer]));
            if(!replicas.includes(connection)) replicas.push(connection);
            break;
    }
};

module.exports = {queryMan};