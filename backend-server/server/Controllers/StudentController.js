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

    async store(nome, cpf, endereço, cep, email, telefone) {
        return new Promise((resolve, reject) => {
            con.query('INSERT INTO Alunos (nome, cpf, endereço, cep, email, telefone) VALUES ( ?, curdate(), ?)',
                [nome, cpf, endereço, cep, email, telefone], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                });
        });
    },

    async update(req) {
        const { nome, cpf, endereço, cep, email, telefone } = req.body;

        return new Promise((resolve, reject) => {
            con.query('UPDATE Alunos SET nome = ?, cpf = ?, email = ?, telefone = ? WHERE idCurso = ?',
                [nome, cpf, endereço, cep, email, telefone], (err, result) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(result);
                });
        });
    },

    async delete(idCurso) {
        return new Promise((resolve, reject) => {
            con.query('DELETE FROM Cursos WHERE idAluno = ?', [idCurso], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    }
};