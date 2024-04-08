const get = (connection, obj, key) => {
    const item = obj[key];
    if (item.start == 0 || (Date.now() - item.start) < item.px)
        connection.write(`+${item.msg}\r\n`);
    else 
        connection.write("$-1\r\n");
}

module.exports = {get};