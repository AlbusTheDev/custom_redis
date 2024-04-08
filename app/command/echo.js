const echo = (connection, messages) => {
    document.write(messages.join('\r\n'));
};

module.exports = {echo};