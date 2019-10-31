const faker = require("faker");
const request = require("supertest");
const factory = require("../factory");
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

const curso = {
    nome: "Medicina",
    carga_horaria: "1400"
}

/* const aluno = {
    nome: faker.name.findName(),
    email: faker.internet.email(),
    cpf: "60518219300",
    cep: faker.address.zipCode(),
    endereco: faker.address.streetAddress(),
    telefone: faker.phone.phoneNumber(),
    curso_id: "1",
}
 */
// const aluno = factory.create("Aluno").dataValues

describe("Alunos", () => {
    
    beforeEach(async () => {
        await truncate();

    });

    it("should verify if a aluno was inserted", async () => {
        const aluno = await factory.build("Aluno");
        await request(app).post("/register").send(user);
        const { token } = (await request(app).post("/login").send(user)).body;
        const response = await request(app).post("/alunos").send(aluno.dataValues)
        .set("Authorization", token);
        const { nome, email, telefone, endereco } = response.body;

        expect(aluno.nome).toBe(nome);
        expect(aluno.email).toBe(email);
        expect(aluno.endereco).toBe(endereco);
        expect(aluno.telefone).toBe(telefone);
        expect(response.status).toBe(200);

    });

    it("should verify if return all alunos", async () =>{
        await request(app).post("/register").send(user);
        const { token } = (await request(app).post("/login").send(user)).body;
        var alunos = await factory.buildMany("Aluno", 3);
     
        alunos.forEach(async(aluno) => {
            await request(app).post("/alunos").send(aluno.dataValues)
            .set("Authorization", token);// key
        });
       const response = await request(app).get("/alunos")
        .set("Authorization", token);
        expect(response.status).toBe(200);
    });

   it("should verify if a aluno was updated", async () => {
        await request(app).post("/register").send(user);
        const { token } = (await request(app).post("/login").send(user)).body;
        const aluno = ( await factory.build("Aluno") ).dataValues;
        await request(app).post("/alunos").send(aluno)
        .set("Authorization", token);
        const alunoUpdate = {
            nome: "Felipe Goiabeira",
            email: aluno.email,
            cpf: aluno.cpf,
            cep: aluno.cep,
            endereco: aluno.endereco,
            curso: aluno.curso,
            telefone: aluno.telefone,
        }
        const alunos = await request(app).get("/alunos")
                      .set("Authorization", token);
        const id = alunos.body[0].id;

        const response = await request(app).put(`/alunos/${id}`)
        .send(alunoUpdate).set("Authorization", token);

        const alunoUpdated = await request(app).get(`/alunos/${id}`)
        .set("Authorization", token);

        //console.log(alunoUpdated.body)
        expect(response.status).toBe(200);
        expect(response.body[0]).toBe(1);
        expect(alunoUpdated.body.nome).toBe(alunoUpdate.nome);
        
    });
    it("should verify if a aluno was deleted", async () => {
        await request(app).post("/register").send(user);
        const { token } = (await request(app).post("/login").send(user)).body;
        const aluno = ( await factory.build("Aluno") ).dataValues;
        await request(app).post("/alunos").send(aluno)
        .set("Authorization", token);
        const alunoUpdate = {
            nome: "Felipe Goiabeira",
            email: aluno.email,
            cpf: aluno.cpf,
            cep: aluno.cep,
            endereco: aluno.endereco,
            curso: aluno.curso,
            telefone: aluno.telefone,
        }
        const alunos = await request(app).get("/alunos")
                      .set("Authorization", token);
        const id = alunos.body[0].id;
        const response = await request(app).delete(`/alunos/${id}`)
        .set("Authorization", token);

        expect(response.status).toBe(200);
        
    });
});