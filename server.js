const express = require("express");
const app = express();
const port = 1729;
const config = require('./config');

global.__basedir = __dirname;

const mongoUtil = require('./MongoUtil');
const apiRoutes =  require("./routes/api.js");

app.use(express.static('public'));

mongoUtil.connectToServer((err, client) => {
    // console.log({err, client});

})

apiRoutes(app);


const PORT = config.port;
app.listen(PORT, () => console.log(`Server is live on http://localhost:${PORT} !`));
