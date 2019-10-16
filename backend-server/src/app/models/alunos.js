'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alunos = sequelize.define('alunos', {
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cep: DataTypes.STRING,
    telefone: DataTypes.STRING,
    curso_id: DataTypes.INTEGER
  }, {});
  Alunos.associate = function(models) {
    Alunos.belongsTo(models.cursos, {foreignKey: 'curso_id'})
  };
  return Alunos;
};