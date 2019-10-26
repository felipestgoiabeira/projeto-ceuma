const express = require('express');
const router = express.Router();
const  auth = require ('../config/passport/auth')

const cursosController = require('../Controllers/CursosController');

//## ENDPOINTS PARA OS CURSOS
router.get('/cursos/:id', auth.required,cursosController.index)

router.post('/cursos', auth.required,cursosController.store);

router.get('/cursos', auth.required,cursosController.show);

router.put('/cursos/:id', auth.required,cursosController.update);

router.get('/listarAlunos/:id', auth.required,cursosController.showAlunos);

router.delete('/cursos/:id', auth.required,cursosController.destroy);

module.exports = router;