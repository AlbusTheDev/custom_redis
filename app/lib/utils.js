const parseData = (data) => {
    const [nParams, ...params] = data.split('\r\n');
    const command = params[1];
    const query = [];

    for (let i = 2; i < params.length; i++) {
        if (params[i] == "") continue;
        if (params[i][0] === ":") {
            query.push(params[i].substring(1))
        }
        query.push(params[i]);
    }

    return {nParams, command, query};
}

const formatMsg = (args) => {
    if (args.length == 0) return "$-1\r\n";

    var formattedArgs = [];

    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        
        if (element[0] == "+") {
            formattedArgs.push(element)
        } else if (element[0] != "$") {
            formattedArgs.push("$" + element.length.toString());
            formattedArgs.push(element);
        } else {
            formattedArgs.push(element);
            formattedArgs.push(args[i+1]);
            i++;
        }
    }

    return formattedArgs.join("\r\n");
};

const sendMsg = (connection, args) => {
    var payload = formatMsg(args);
    connection.write(payload);
};

module.exports = {parseData, sendMsg}