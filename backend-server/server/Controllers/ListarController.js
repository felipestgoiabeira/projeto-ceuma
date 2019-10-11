const con = require('../db');


module.exports = {
    // mostra os alunos de um dado curso
    async findOne(id) {
        return new Promise((resolve, reject) => {
            con.query('Select Alunos.nome, Alunos.cpf, Alunos.email, Alunos.telefone, Alunos.endereco, Alunos.cep, Cursos.nome as curso from Alunos, Cursos where Alunos.idCursos = Cursos.idCurso and Cursos.idCurso =  ?', [id], (err, results) => {
                if (err) {
                    return reject(err);
                }
                console.log(results);
                return resolve(results);
            });
        });
    },
    async show(id) {
        return new Promise((resolve, reject) => {
            con.query('Select Alunos.nome, Alunos.cpf, Alunos.email, Alunos.endereco, Alunos.cep, Alunos.telefone, Cursos.nome as curso from Alunos, Cursos where Alunos.idCursos = Cursos.idCurso ', [id], (err, results) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                console.log(results);
                return resolve(results);
            });
        });
    },
}