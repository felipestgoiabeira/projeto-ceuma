'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      
      return queryInterface.bulkInsert('alunos', [
        {
        nome: 'Amanda Nunes',
        email: 'amanda@gmail.com',
        telefone:'9823445789',
        endereco: 'São Luís, Rua dos Patos',
        cep: '605987445',
        cpf: '605138184',
        curso_id: '1',
      },
      {
        nome: 'Alexandre Nunes',
        email: 'alexandre@gmail.com',
        telefone:'9825395789',
        endereco: 'São Luís, Rua dos Gansos',
        cep: '605985545',
        cpf: '605138183',
        curso_id: '1',
      },

      {
        nome: 'Diego',
        email: 'diego@gmail.com',
        telefone:'9823445789',
        endereco: 'São Luís, Rua dos Rãs',
        cep: '605987445',
        cpf: '604138182',
        curso_id: '1',
      },
      {
        nome: 'Reinaldo Jota',
        email: 'jota@gmail.com',
        telefone:'9853446789',
        endereco: 'São Luís, Rua dos Jacarés',
        cep: '605987446',
        cpf: '606138187',
        curso_id: '2',
      },
      {
        nome: 'Roberto Almeida',
        email: 'roberto_almeida@gmail.com',
        telefone:'9853446789',
        endereco: 'São Luís, Rua das Tartarugas',
        cep: '605987446',
        cpf: '606138187',
        curso_id: '2',
      },
      {
        nome: 'Paulo Santos',
        email: 'santo23@gmail.com',
        telefone:'9853446789',
        endereco: 'São Luís, Rua dos Peixes',
        cep: '601285446',
        cpf: '607838187',
        curso_id: '3',
      },
      {
        nome: 'Rafael Marinho',
        email: 'marinho@gmail.com',
        telefone:'9853446789',
        endereco: 'São Luís, Rua das Baleias',
        cep: '67895446',
        cpf: '607838187',
        curso_id: '3',
      },
    
    
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
