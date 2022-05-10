const urlDataDB = require('../MongoUtil').getUrlDataDB;

const GenerateNewCodeController = require('./generateNewCodeController');

async function HandleRedirect(req, res) {

    //Get Short Code to redirect to from the Url
    let {shortCode} = req.params


    //Check if the Short Code exists in data
    const getData = await urlDataDB().findOne({
                        shortCode: shortCode                
                    })
    
    // console.log({getData});

    //Redirect to Long Url if the Short Code exists in the system.
    if(getData){

        await urlDataDB().updateOne(
            {_id: getData._id},
            {$set: 
                {
                    lastAccessDate: new Date().toISOString(),
                    totalAccessNumber: getData.totalAccessNumber + 1
                }
            }

        )

        res.redirect(getData.longUrl);
    }

    //Return the 404 page if it doesn't exist in the system
    else {
        res.sendFile(__basedir + "/public/404.html");
    }

}

module.exports = HandleRedirect;