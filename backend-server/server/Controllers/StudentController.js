const con = require('../db');

module.exports = {
    async show(id) {
        return new Promise((resolve, reject) => {
            con.query('SELECT * FROM Alunos WHERE idAluno = ?', [id], (err, results) => {
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
            con.query('SELECT * FROM Alunos ', (err, results) => {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
        });
    },

    async store(nome, cpf, endereco, cep, email, telefone, idCurso) {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO Alunos (nome, cpf, endereco, cep, email, telefone, idCursos) VALUES ( ?, ?, ?, ?, ?, ? ,?)',
                [nome, cpf, endereco, cep, email, telefone,idCurso], (err, result) => {
                    if (err) {
                        console.log("Algo está errado...")
                        console.log(err);
                        return reject(err);
                    }
                    //console.log(result);
                    return resolve(result);
                });
        });
    },

    async update(req) {
        const { nome, cpf, endereco, cep, email, telefone, idCurso} = req.body;
        const {idAluno} = req.query;
        console.log(req.body);
        return new Promise((resolve, reject) => {
            con.query('UPDATE Alunos SET nome = ?, cpf = ?, endereco = ?, cep =? ,email = ?, telefone = ?, idCursos =? WHERE idAluno = ?',
                [nome, cpf, endereco, cep, email, telefone, idCurso, idAluno], (err, result) => {
                    if (err) {
                        console.log(err);
                        return reject(err);
                    }
                    return resolve(result.message);
                });
        });
    },

    async delete(idAluno) {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM Alunos WHERE idAluno = ?', [idAluno],(err, result) =>{
                if(err){
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }
};