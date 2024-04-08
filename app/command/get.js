const get = (connection, obj, item) => {
    connection.write(`+${obj[item]}`);
}

module.exports = {get};