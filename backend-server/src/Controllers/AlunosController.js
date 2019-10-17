const Aluno = require('../app/models').alunos


module.exports = {

    async index(req, res) {
        try {

            const aluno = await Aluno.findByPk(req.params.id);
            return res.send(aluno);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }
    },

    async show(req, res) {
        try {

            const aluno = await Aluno.findAll();
            return res.send(aluno);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }

    },

    async update(req,res) {
        try {

            const aluno = await Aluno.update(req.body, { where: { id: req.params.id } });
            console.log(aluno)
            return res.send(aluno);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }
    },

    async store(req, res) {

        try {
            const aluno = await Aluno.create(req.body);
            if (aluno) {
                return res.json(aluno);
            }
            throw new Error("Aluno não adicionado")
        } catch (error) {

            return res.sendStatus(401).send(error);

        }


    },

    async destroy(req, res) {
        try {
            console.log(req)
            const deleted = await Aluno.destroy({
                where: { id: req.params.id }
            });

            if (deleted) {

                return res.send(aluno);
            }
            throw new Error('Aluno não encontrado')

        } catch (error) {
            return res.sendStatus(401).send(error.message);
        }

    }
};