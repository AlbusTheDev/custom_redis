var {cache} = require("./cache");

const get = (key) => {
    const item = cache[key];
    if (item.start == 0 || (Date.now() - item.start) < item.px)
        return item.msg;
    else 
       return []; 
}

const set = (query) => {
    cache[query[1]] = query[3];

    if (query[5] && query[5] == "px" && query.length == 8) {
        
        setTimeout(() => {
            delete cache[query[1]];
        }, Number(query[7]));

    };

    return ["+OK"];
};

module.exports = {get, set}