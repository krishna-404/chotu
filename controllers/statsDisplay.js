const config = require('../config');
const urlDataDB = require('../MongoUtil').getUrlDataDB;

async function StatsDisplay(req,res) {
    //Get Short Code to redirect to from the Url
    let {shortCode} = req.params


    //Check if the Short Code exists in data
    const getData = await urlDataDB().findOne({
                        shortCode: shortCode                
                    })
    
    // console.log({getData});

    //Redirect to Long Url if the Short Code exists in the system.
    if(getData){
        res.json({
            longUrl: getData.longUrl,
            chotu: `${config.domainName}${shortCode}`,
            registeredDate: getData.registeredDate,
            lastAccessDate: getData.lastAccessDate,
            totalAccessNumber: getData.totalAccessNumber
        })
    }

    //Return the 404 page if it doesn't exist in the system
    else {
        res .status(404)
            .type('text/html')
            .sendFile(__basedir + "/public/404.html");
    }
}

module.exports = StatsDisplay;