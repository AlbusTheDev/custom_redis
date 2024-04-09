var info = (connection) => {
    connection.write("role:master\r\n");
};

module.exports = {info};