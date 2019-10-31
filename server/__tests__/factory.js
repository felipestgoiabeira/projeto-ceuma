const faker = require("faker");
const { factory } = require("factory-girl");
const { users, alunos } = require("../src/app/models");

factory.define("User", users, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});
factory.define("Aluno", alunos, {
  nome: faker.name.findName(),
  email: faker.internet.email(),
  cpf: "60518219300",
  cep: faker.address.zipCode(),
  endereco: faker.address.streetAddress(),
  telefone: faker.phone.phoneNumber(),
  curso_id: "1",
});
module.exports = factory;