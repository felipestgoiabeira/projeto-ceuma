const express = require('express');
const db = require('../db');
const CourseController = require('../Controllers/CourseController');
const router = express.Router();

router.get('/cursos', async (req, res) => {
    try {
        const results = await CourseController.showAll();
        //console.log(results);
        return res.json(results);

    } catch (e) {
        console.log(e);
        res.sendStatus(500);

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
        return res.json(result);
    } catch (e) {

    }
});

module.exports = router;