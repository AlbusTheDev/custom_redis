const echo = (connection, messages) => {
    connection.write(messages.join('\r\n'));
};

module.exports = {echo};