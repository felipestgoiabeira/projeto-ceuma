const express = require("express");
const router = express.Router();
const  auth = require ('../config/passport/auth')
const alunoController = require('../Controllers/AlunosController');
const cursosController = require('../Controllers/CursosController');

router.get('/alunos',auth.required, alunoController.show);

router.get('/alunos/:id', auth.required, alunoController.index)

router.post('/alunos', auth.required, alunoController.store);

router.delete('/alunos/:id', auth.required, alunoController.destroy);

router.put('/alunos/:id', auth.required, alunoController.update);

//rota para paginação
router.get('/getAlunos/:page', auth.optional, alunoController.getAlunos),

router.get('/listarAlunos/:id', auth.required,cursosController.showAlunos)

module.exports = router
