const express = require("express");
const router = express.Router();
const alunoController = require('../Controllers/AlunosController');
const cursosController = require('../Controllers/CursosController');


router.get('/alunos', alunoController.show);

router.get('/alunos/:id', alunoController.index)

router.post('/alunos', alunoController.store);

router.delete('/alunos/:id', alunoController.destroy);

router.put('/alunos/:id', alunoController.update);

router.get('/listarAlunos/:id', cursosController.showAlunos)

module.exports = router
