'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkInsert('cursos', [
        {
        nome: 'Medicina',
        carga_horaria: '140'
        },
        {
          nome: 'Direito',
          carga_horaria: '250'
        },
        {
          nome: 'Administração',
          carga_horaria: '300'
        }  
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
