var {cache} = require("./cache");
var {mainInfo} = require("./mainInfo");

const get = (key) => {
    if (key in cache) return [cache[key]];
    else return [];
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

const info = () => {
    return [`role:${mainInfo.role}\nmaster_replid:${mainInfo.master_replid}`
    + `\nmaster_repl_offset:${mainInfo.master_repl_offset}`];
}

module.exports = {get, set, info}