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

      const aluno = await Aluno.findAll({ include: 'curso' });
      return res.send(aluno);

    } catch (error) {
      return res.sendStatus(401).json(error);
    }

  },

  async update(req, res) {
    try {
      const response = Aluno.findByPk(req.params.id);
      if (response) {
        const aluno = await Aluno.update(req.body, { where: { id: req.params.id } });
        return res.send(aluno);
      }
      return res.sendStatus(401).json({ message: "Aluno não encontrado" })

    } catch (error) {
      return res.sendStatus(401).json(error);
    }
  },

  async store(req, res) {
    //console.log(req.body);
    try {
      const aluno = await Aluno.create(req.body);
      if (aluno) {
        return res.send(aluno);
      }
      throw new Error("Aluno não adicionado")
    } catch (error) {
      console.log(error)
      return res.sendStatus(401);

    }

  },
  // usar para paginação 
  async getAlunos(req, res) {
    const PAGE = req.params.page;
    const LIMIT_ROWS = 3;

    const response = await Aluno.findAndCountAll({
      offset: (PAGE - 1)*LIMIT_ROWS,
      limit: LIMIT_ROWS,
    });
    console.log(req.params);

    return res.send(response);
  },

  async destroy(req, res) {
    try {
      const deleted = await Aluno.destroy({
        where: { id: req.params.id }
      });
      if (deleted) {
        return res.send(200);
      }
      throw new Error('Aluno não encontrado')

    } catch (error) {
      console.log(error)
      return res.sendStatus(401)
    }

  }
};