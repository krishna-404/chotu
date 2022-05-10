require('dotenv').config();

let config = {};

config.DB = process.env.CUSTOMCONNSTR_DB || process.env.DB;
config.dbName = 'chotu';
config.urlDataCollectionName = 'urlData';

config.port = process.env.PORT || 1729;

config.domainName = "https://chotu.onrender.com/"

module.exports = config;

