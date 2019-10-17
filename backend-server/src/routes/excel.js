const excel = require('exceljs');
const express = require('express');
const router = express.Router();
const Aluno = require('../app/models').alunos
const Curso = require('../app/models').cursos


// -> Express RestAPIs
router.get("/download/alunos", async function (req, res) {
	try {
        // -> Create a connection to the database
	alunosResponse = await Aluno.findAll();		
    const alunos = JSON.parse(JSON.stringify(alunosResponse));
    console.log(alunos);

    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Alunos'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [

        { header: 'Id', key: 'id', width: 10 },
        { header: 'Nome', key: 'nome', width: 30 },
        { header: 'Email', key: 'email', width: 30},
        { header: 'CPF', key: 'cpf', width: 30},
        { header: 'Endereço', key: 'endereco', width: 30},
        { header: 'Cep', key: 'cep', width: 30},
        { header: 'Telefone', key: 'telefone', width: 30},
        { header: 'Curso', key: 'curso_id', width: 30},
        
    ];

    // Add Array Rows
    worksheet.addRows(alunos);
    
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'alunos.xlsx');
    
    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
    } catch (error) {
        console.log(error)
    }
	
        }
   
);

router.get("/download/cursos", async function (req, res) {
	try {
        // -> Create a connection to the database
	cursosResponse = await Curso.findAll();		
    const cursos = JSON.parse(JSON.stringify(cursosResponse));
    console.log(cursos);

    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Alunos'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [

        { header: 'Id', key: 'id', width: 10 },
        { header: 'Nome', key: 'nome', width: 30 },
        { header: 'Carga Horária', key: 'cargaHoraria', width: 30},
        
    ];

    // Add Array Rows
    worksheet.addRows(cursos);
    
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'cursos.xlsx');
    
    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
    } catch (error) {
        console.log(error)
    }
	
        }
   
);


module.exports = router;