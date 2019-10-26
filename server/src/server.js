require("dotenv").config();
var fs = require('fs')
const logger = require('morgan');
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

const passport = require("passport");

const cursos = require('./routes/cursos');
const users = require("./routes/users");
const alunos = require("./routes/alunos");
const excel = require("./routes/excel");

const cors = require('cors')
const models = require('./app/models')

const app = express();

app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {flags: 'a'})
}));

app.use(logger('dev'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser())

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport/passport")(passport);

//# Routes

//endpoints para usuarios
app.use('/', users);

//endpoints para cursos
app.use('/', cursos);

// endpoints para alunos
app.use('/', alunos)

// endpoints para download tabelas excel
app.use('/', excel)

// PORT from .env file
const PORT = process.env.APP_SERVER_PORT ;

// sync sequelize mysql and start the server
models.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("Listening on localhost:" + PORT);
    })

})