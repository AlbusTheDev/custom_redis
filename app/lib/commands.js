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
    return [(mainInfo.isReplica ? "role:slave" : "role:master")];
}

module.exports = {get, set, info}