const models = require('../app/models')
const Curso = require('../app/models').cursos
module.exports = {

    async index(req, res) {
        
        try {

            const curso = await Curso.findByPk(req.params.id);
            return res.send (curso);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }
    },

    async show(req, res) {
        try {

            const curso = await Curso.findAll();
            return res.send(curso);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }

    },

    async update(req,res) {

        try {
            const curso = await Curso.update(req.body, { where: { id: req.params.id } });
            return res.send (curso);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }
    },

    async store(req, res) {

        try {
            const curso = await Curso.create(req.body);
            if  (curso) {
                return res.json (curso);
            }
            throw new Error("Curso não adicionado")
        } catch (error) {

            return res.sendStatus(401).send(error);

        }


    },

    async destroy(req, res) {
        try {

            const deleted = await Curso.destroy({
                where: { id: req.params.id }
            });

            if (deleted) {

                return res.send(curso);
            }
            throw new Error( "Curso não encontrado");

        } catch (error) {
            return res.sendStatus(401).send(error.message);
        }

    },
    async showAlunos(req,res){
        try {

            const curso = await Curso.findByPk(req.params.id,{include:[models.alunos]});
            return res.send (curso);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }

    } 
};