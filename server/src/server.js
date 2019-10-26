const app = require("./config/express");
const models = require('./app/models')
const routes = require("./routes")
//# Routes

app.use("/", routes)

// PORT from .env file
const PORT = process.env.APP_SERVER_PORT || 8000 ;

// sync sequelize mysql and start the server
models.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("Listening on localhost:" + PORT);
    })

})