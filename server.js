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

app.use((req,res,next) => {
    res .status(404)
        .type('text/html')
        .sendFile(__basedir + "/public/404.html");
})


const PORT = config.port;
app.listen(PORT, () => console.log(`Server is live on http://localhost:${PORT} !`));
