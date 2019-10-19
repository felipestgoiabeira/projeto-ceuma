'use strict';
module.exports = (sequelize, DataTypes) => {
  const cursos = sequelize.define('cursos', {
    nome: DataTypes.STRING,
    carga_horaria: DataTypes.STRING
  }, {});
  cursos.associate = function(models) {
    cursos.hasMany(models.alunos, {as: 'alunos'})
    // associations can  be defined here
  };
  return cursos;
};