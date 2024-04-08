const set = (connection, obj, query) => {
    connection.write("+OK\r\n");
    if (query[5] && query[5] == "px") {
        obj[query[1]] = {msg: query[3], start: Date.now(), px:Number(query[7])};
    } else obj[query[1]] = {msg: query[3], start:0, px:0};
};

module.exports = {set};