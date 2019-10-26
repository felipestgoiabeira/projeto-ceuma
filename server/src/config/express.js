require("dotenv").config();
var fs = require('fs')
const logger = require('morgan');
const express = require('express');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const passport = require("passport");
const cors = require('cors')

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
require("./passport/passport")(passport);

module.exports = app;