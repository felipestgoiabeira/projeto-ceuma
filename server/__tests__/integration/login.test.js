const {users} = require("../../src/app/models/");

it("should create a user", async() => {

    const user = await users.create({
        nome: "Felipe",
        email: "felipe@email.com",
        password: "123213"

    })

    expect(user.dataValues.email).toBe("felipe@email.com");

});