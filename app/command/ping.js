const ping = (connection) => {
    connection.write("+PONG\r\n");
};

module.exports = {ping};