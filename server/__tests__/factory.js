const faker = require("faker");
const { factory } = require("factory-girl");
const { users } = require("../src/app/models");

factory.define("User", users, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password()
});

module.exports = factory;