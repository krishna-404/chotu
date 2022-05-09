const express = require("express");
const app = express();
const port = 1729;
// const path = require("path");
require('dotenv').config();
const {MongoClient} = require('mongodb')

global.__basedir = __dirname;

async function main() {
    const client = new MongoClient( process.env.CUSTOMCONNSTR_DB || process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        await listDatabases(client);
    } catch(e) {
        console.error(e);
    } finally {
        client.close();
    }
}

main().catch(console.error);

async function listDatabases(client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(`- ${db.name}`));
}

const apiRoutes =  require("./routes/api.js");

app.use(express.static('public'));

apiRoutes(app);

const PORT = process.env.PORT || 1729;
app.listen(PORT, () => console.log(`Server is live on http://localhost:${PORT} !`));