const { response } = require("express");
let urlDataDB = require('../MongoUtil').getUrlDataDB;
const config = require('../config')

async function GenerateNewCodeController(req,res) {
        const {longUrl, shortCode} = req.query;
        

        if(shortCode) {
            
            let getData = await urlDataDB().findOne({
                                shortCode: shortCode   
                            });  

            // console.log({getData});

            if (!getData) {
                const newObject = {
                    longUrl: longUrl,
                    shortCode: shortCode,
                    registeredDate: new Date().toISOString,
                    userId: "public",
                    lastAccessDate: "",
                    totalAccessNumber: 0
                }

                urlDataDB().insertOne(newObject);
                res.json({
                    longUrl: longUrl,
                    chotu: `${config.domainName}${shortCode}`
                })
            } else {
                res.json({
                    error: "This Short Code already exists."
                })
            }
            console.log("End of Data work")

            // res.send("Congragulations! Your new chotu has been created. Here is the link.")
        } else {
            res.send(req);
        }
}

module.exports = GenerateNewCodeController;