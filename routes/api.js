const GenerateNewCodeController = require("../controllers/generateNewCodeController");
const HandleRedirect = require("../controllers/handleRedirect");
const StatsDisplay = require('../controllers/statsDisplay')

function router(app) {
    app
        .route("/")
        .get((req, res) => {
            res.sendFile(__basedir + "/public/homePage.html");
        })

    //If Short Code is submit follow the forward to Generate New Code Handler.
    app
        .route("/submit")
        .get(GenerateNewCodeController)

    app
        .route("/:shortCode/stats")
        .get(StatsDisplay)

    app 
        .route("/:shortCode")
        .get(HandleRedirect)
}

module.exports = router;