const {MongoClient} = require('mongodb');
const config = require('./config');

let urlDataDB;

let mongoUtil = {

    connectToServer : function(callback) {
        const client = new MongoClient(config.DB, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            client.connect((err, client) => {
                // console.log({err, client});
                urlDataDB = client.db(config.dbName).collection(config.urlDataCollectionName);
                return callback(err);
            });
        } catch(e) {
            console.error(e);
        } finally {
            client.close();
        }
    },
    getUrlDataDB : function() {
        // console.log({urlDataDB})
        return urlDataDB;
    }
}

module.exports = mongoUtil;