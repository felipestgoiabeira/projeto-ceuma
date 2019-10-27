const faker = require("faker");
const request = require("supertest");
const { users } = require("../../src/app/models/");
const truncate = require("../utils/truncate");
const routes = require("../../src/routes");
const app = require("../../src/config/express");
app.use("/", routes);

const user = {
  nome: faker.name.findName(),
  email: faker.internet.email(),
  password: "secret",
  password2: "secret",
}

describe("Login", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should create a user", async () => {

    const response = await request(app).post("/register").send(user)
    expect(response.status).toBe(200);

  });

  it("should receive a token after login", async () => {

    await request(app).post("/register").send(user);
    const response = await request(app).post("/login").send(user);
    expect(response.body.success).toBeTruthy();
    expect(response.body).toHaveProperty("token");

  });

  it("should be able to acess private routes", async () => {

    await request(app).post("/register").send(user);
    const { token } = ( await request(app).post("/login").send(user) ).body;
    const response = await request(app).get("/alunos").set("Authorization", token);
    expect(response.status).toBe(200);
  })
}) 
