const express = require('express');
const db = require('../db');
const xl = require("excel4node");
const Curso = require('../../models/').cursos
const Aluno = require('../../models/').alunos

const cursosController = require('../Controllers/CursosController');
const alunoController = require('../Controllers/AlunosController');
const listarController = require('../Controllers/ListarController');
const router = express.Router();


//router.get('/cursos', CursosController.)

router.get('/cursos/:id', cursosController.index)

router.post('/cursos', cursosController.store);

router.get('/cursos', cursosController.show);

router.put('/cursos/:id', cursosController.update);

router.delete('/cursos/:id', cursosController.destroy);

router.get('/alunos', alunoController.show);

router.get('/alunos/:id', alunoController.index)


router.post('/alunos', alunoController.store);


router.delete('/alunos/:id', alunoController.destroy);


router.put('/alunos/:id', alunoController.update);

router.get('/listarAlunos/:id', cursosController.showAlunos)

/* router.get('/listar/:idCurso', async (req, res) => {
    try {
        console.log(req.params);
        const {idCurso} = req.params
        const result = await ListarController.findOne(idCurso);
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
}); */
module.exports = router;