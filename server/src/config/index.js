const mysql = require("mysql");

module.exports = mysql.createConnection({
    database: 'desafio-ceuma',
    user: 'root',
    host: 'localhost',
    port: '3306',
    password: "root"
});




