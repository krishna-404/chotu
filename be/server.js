const express = require("express");
const app = express();
const port = 1729;
// const path = require("path");
// require('dotenv').config();

app.use(express.static('public'));

app
    .route("/")
    .get((req, res) => {
        res.send("Hello World!");
    });

app.listen(port, () => console.log("Server is running on port ${port}!"));