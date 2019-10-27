const app = require("./config/express");
const routes = require("./routes")

//# Route

module.exports = app.use("/", routes);