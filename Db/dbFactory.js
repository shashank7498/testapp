const MongoDB = require('./mongoDB/mongodb');

// we can add more DBs here but by default we will use MongoDB
function getDB(type) {
    switch (type) {
        case 'mongo':
            return MongoDB;
        default:
            console.log("No DB found");
            return MongoDB;
    }
}

module.exports = getDB;