const x1 = require("excel4node");
const con = require('../db');

module.exports = {
    getCursos(){
        const wb = x1.Workbook()
        con.query('SELECT * FROM Cursos ', (err, results) => {
            if (err) {
                return reject(err);
            }
            
            ws.cell(1, 1).string('Data do Registro');
            ws.cell(1, 2).string('Nome');
            ws.cell(1,3).string('Carga Horária');
            for(var i=0; i < results.length; i++){
                ws.cell(i+2,1).string(results.dataRegistro);
                ws.cell(i+2,2).string(results[i].nome);
                ws.cell(i+2,3).string(results[i].cargaHoraria);
            }
            
        });
        
    }
}
