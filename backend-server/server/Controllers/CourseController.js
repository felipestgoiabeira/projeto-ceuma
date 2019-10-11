const con = require('../db');

module.exports = {
    // mostra um curso buscado pelo seu id
    async show(id) {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM Cursos WHERE idCurso = ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                console.log(results);
                return resolve(results);
            });
        });
    },


    // mostra todos os cursos na tabela cursos
    async showAll() {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM Cursos ', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    },

    async store(nome, cargaHoraria) {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO Cursos (nome, dataRegistro, cargaHoraria) VALUES ( ?, curdate(), ?)', [nome, cargaHoraria], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },

    async update(req) {
        const { nome, cargaHoraria } = req.body;
        const { idCurso } = req.query
        return new Promise((resolve, reject) => {
            con.query('UPDATE Cursos SET nome = ? , cargaHoraria = ?  WHERE idCurso = ?', [nome, cargaHoraria, idCurso], (err, result) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },

    async delete(idCurso) {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM Cursos WHERE idCurso = ?', [idCurso], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }




}