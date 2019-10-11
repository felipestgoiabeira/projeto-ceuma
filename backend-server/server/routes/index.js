const express = require('express');
const db = require('../db');
const CourseController = require('../Controllers/CourseController');
const StudentController = require('../Controllers/StudentController');
const ListarController = require('../Controllers/ListarController');
const router = express.Router();

router.get('/cursos', async (req, res) => {
    try {
        const results = await CourseController.showAll();
        //console.log(results);
        return res.json(results);

    } catch (e) {
        console.log(e);
        res.sendStatus(404).status("Dados não encontrados");

    }
});

router.get('/cursos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await CourseController.show(id);
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/cursos', async (req, res) => {
    try {
        const { nome, cargaHoraria } = req.body;
        const result = await CourseController.store(nome, cargaHoraria);
        console.log(result);
        return res.json(result);
    } catch (e) {
        console.log(e);
    }
});

router.put('/cursos', async (req, res) => {
    try {
        
        const result = await CourseController.update(req);
        return res.json(result);
    } catch (e) {

    }
});

router.delete('/cursos', async (req, res) => {
    try {
        const { idCurso } = req.query
        const result = await CourseController.delete(idCurso);
        return res.json(result);
    } catch (e) {

    }
});

router.get('/alunos', async (req, res) => {
    try {
        const results = await StudentController.showAll();
        console.log(results);
        return res.json(results);

    } catch (e) {
        theo
        res.sendStatus(500);

    }
});

router.post('/alunos', async (req, res) => {
    try {
        const { nome, cpf, endereco, cep, email, telefone, idCurso } = req.body;
        ///console.log(req.body);
        const result = await StudentController.store(nome, cpf, endereco, cep, email, telefone, idCurso);
        console.log(result);
        return res.json(result);
    } catch (e) {

    }
});

router.get('/alunos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await StudentController.show(id);
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

})

router.delete('/alunos', async (req, res) => {
    try {
        const { id } = req.query;
        const result = await StudentController.delete(id);
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
});


router.put('/alunos', async (req, res) => {
    try {
        const result = await StudentController.update(req);
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
});

router.get('/cursos-alunos', async (req, res) => {
    try {
        const result = await ListarController.show();
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
});
module.exports = router;