const set = (connection, obj, query) => {
    connection.write("+OK\r\n");
    obj[query[1]] = query[3];
};

module.exports = {set};