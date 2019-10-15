const express = require('express');
const cors = require('cors')
const models = require('../models')
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());


models.sequelize.sync().then( () =>{
    console.log("Banco de dados funcionando");
}).catch( (error) =>{
    console.log("Algo está errado com o banco de dados");
})
app.use('/', routes);

app.listen('3770', () =>{
    console.log("Server is running")
});