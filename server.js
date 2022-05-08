const express = require("express");
const app = express();
const port = 1729;
// const path = require("path");
// require('dotenv').config();

global.__basedir = __dirname;

const apiRoutes =  require("./routes/api.js");

app.use(express.static('public'));

apiRoutes(app);

app.listen(port, () => console.log(`Server is live on http://localhost:${port} !`));