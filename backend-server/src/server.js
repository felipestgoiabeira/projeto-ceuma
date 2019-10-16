require("dotenv").config();

const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

const passport = require("passport");

const cursos = require('./routes/cursos');
const users = require("./routes/users");
const alunos = require("./routes/alunos");

const cors = require('cors')
const models = require('./app/models')


const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser())

// Passport middleware
app.use(passport.initialize());


// Passport config
require("./config/passport")(passport);
// Routes

//endpoints para usuarios
app.use('/', users);

//endpoints para cursos
app.use('/', cursos);

// endpoints para alunos
app.use('/', alunos)

// PORT from .env file
const PORT = process.env.PORT ;

// sync sequelize mysql and start the server
models.sequelize.sync().then(function () {

    app.listen(PORT, function () {
        console.log("Listening on localhost:" + PORT);
    })

})