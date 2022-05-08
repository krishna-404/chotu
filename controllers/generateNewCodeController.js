const { response } = require("express");
let database = require("../database.js");

function GenerateNewCodeController(req,res) {
        const {longUrl, shortCode} = req.query;
        console.log(database);
        // console.log({longUrl, shortCode, req}, req.query)

        if(shortCode) {
            for (let i=0; i<database.length; i++) {
                if(database[i].shortCode === shortCode){
                    res.send("Short Code already exists, please select a new code.");
                    break;
                } 
            }
            let newObject = {
                longUrl: longUrl,
                shortCode: shortCode,
                registeredDate: new Date().toISOString,
            }
            database.push(newObject);
            res.send("Congragulations! Your new chotu has been created. Here is the link.")
        } else {
            res.send(req);
        }
}

module.exports = GenerateNewCodeController;