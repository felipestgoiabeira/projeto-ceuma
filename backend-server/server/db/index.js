const mysql = require("mysql");

let con = mysql.createConnection({
    database: 'desafio-ceuma',
    user: 'root',
    host: 'localhost',
    port: '3306',
    password: "password"
});

let desafiodb = {};

desafiodb.allCourses = () => {
    return new Promise((resolve, reject) => {
        con.query('SELECT * FROM Cursos ', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

desafiodb.insertCourse = (nome, cargaHoraria) => {
   
    return new Promise((resolve, reject) => {

        con.query('INSERTO INTO Cursos (nome, `data`, cargaHoraria) value ( ?, curdate(), ? )',
            [nome, cargaHoraria], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve({ query: "Succefully" });
            });

    });


}

module.exports = desafiodb;