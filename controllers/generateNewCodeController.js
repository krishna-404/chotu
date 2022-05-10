const { response } = require("express");
let urlDataDB = require('../MongoUtil').getUrlDataDB;
const config = require('../config')

async function GenerateNewCodeController(req,res) {
        const {longUrl, shortCode} = req.query;
        // console.log({req,res});
        
        //if no Long URL exists throw an error.
        if (!longUrl) {
            res.json({
                error: "Bad request, no Long Url exists"
            })
        }

        //if a preferred Short Code has been entered by the user.
        else if(shortCode) {
            
            let getData = await urlDataDB().findOne({
                                shortCode: shortCode   
                            });  

            // console.log({getData});

            if (!getData) {
                const newObject = {
                    longUrl: longUrl,
                    shortCode: shortCode,
                    registeredDate: new Date().toISOString(),
                    userId: "public",
                    lastAccessDate: "",
                    totalAccessNumber: 0
                }

                await urlDataDB().insertOne(newObject);
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

        } 
        
        //If no preferred Short Code has been entered by the user.
        else {
            
            let newCode;

            while(!newCode) {

                //Get unique 6 digit code
                let tempCode = uid(6);

                //Check if the code already exists in database
                let getData = await urlDataDB().findOne({
                    shortCode: tempCode   
                });  

                //assign the new code if the temp-code doesnt exist in database.
                if(!getData) {
                    newCode = tempCode;
                }
            }

            const newObject = {
                longUrl: longUrl,
                shortCode: newCode,
                registeredDate: Date().toISOString,
                userId: "public",
                lastAccessDate: "",
                totalAccessNumber: 0
            }

            await urlDataDB().insertOne(newObject);
            res.json({
                longUrl: longUrl,
                chotu: `${config.domainName}${newCode}`
            })
        }
}

function uid(length) {
    return (Math.random().toString(36)).replace(/\./g,"").substr(0,length);
};

module.exports = GenerateNewCodeController;