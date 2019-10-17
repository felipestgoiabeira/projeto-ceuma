const express = require('express');
const router = express.Router();

const cursosController = require('../Controllers/CursosController');




//## ENDPOINTS PARA OS CURSOS
router.get('/cursos/:id', cursosController.index)

router.post('/cursos', cursosController.store);

router.get('/cursos', cursosController.show);

router.put('/cursos/:id', cursosController.update);

router.get('/listarAlunos/:id', cursosController.showAlunos);

router.delete('/cursos/:id', cursosController.destroy);



module.exports = router;