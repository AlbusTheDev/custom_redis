const get = (connection, obj, item) => {
    connection.write(`+${obj[item]}\r\n`);
}

module.exports = {get};