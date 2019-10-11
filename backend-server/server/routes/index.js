const express = require('express');
const db = require('../db');
const xl = require("excel4node");

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

router.delete('/cursos/:idCurso', async (req, res) => {
    try {
        const { idCurso } = req.params
        const result = await CourseController.delete(idCurso);
        return res.json(result);
    } catch (e) {
        throw e;

    }
});

router.get('/alunos', async (req, res) => {
    try {
        const results = await StudentController.showAll();
        //console.log(results);
        return res.json(results);

    } catch (e) {
        
        res.sendStatus(500);

    }
});

router.post('/alunos', async (req, res) => {
    try {
        const { nome, cpf, endereco, cep, email, telefone, idCurso } = req.body;
        ///console.log(req.body);
        const result = await StudentController.store(nome, cpf, endereco, cep, email, telefone, idCurso);
        //console.log(result);
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

router.delete('/alunos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await StudentController.delete(id);
        //console.log(result)
        return res.json(result);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);

    }
});


router.put('/alunos/:idAluno', async (req, res) => {
    
        console.log(req.params);
        const { idAluno } = req.params;
        const {nome, cpf, email, endereco, telefone, cep, idCurso} = req.body
        const result = await StudentController.update(idAluno, nome, cpf, endereco ,cep, email, telefone,  idCurso);
        //console.log(result)
        return res.json({id: req.params.idAluno});

   
});

router.get('/listar/:idCurso', async (req, res) => {
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
});
router.get('/cursoExcel', async (req, res) => {
    
    
    try { 
        var wb = new xl.Workbook()
        var style = wb.createStyle({
            font: {
              color: '#FF0800',
              size: 12,
            },
            
          });
        const result = await CourseController.showAll();
        wb.cell(1, 1).string('Data do Registro').style(style);
        wb.cell(1, 2).string('Nome').style(style);
        wb.cell(1, 3).string('Carga Horária').style(style);
        for (var i = 0; i < results.length; i++) {
            wb.cell(i + 2, 1).string(result.dataRegistro).style(style);
            wb.cell(i + 2, 2).string(result[i].nome).style(style);
            wb.cell(i + 2, 3).string(result[i].cargaHoraria).style(style);
            
        }

        wb.write('excel_curso.xlsx', res)


    } catch (e) {
        throw e;
        
    }
});
router.get('/excel', function(req, res) {
    var wb = new x1.Workbook()
    wb.write('ExcelFile.xlsx', res);
  });
module.exports = router;