const GenerateNewCodeController = require("../controllers/generateNewCodeController");

function router(app) {
    app
        .route("/")
        .get((req, res) => {
            res.sendFile(__basedir + "/public/homePage.html");
        })

    app
        .route("/submit")
        .get(GenerateNewCodeController)
}

module.exports = router;