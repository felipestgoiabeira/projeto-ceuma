const Users = require('../app/models').users
const bcrypt = require('bcrypt');

const BCRYPT_SALT_ROUNDS = 12;
module.exports = {
    async store(req, res) {
        try {
            //Verifica se o email e senha estão vazios
            if (req.body.email === '' && req.body.senha == '') {
                res.json('Email ou Senha Inválidos');
            }

            //Verifica se o email já está cadastrado
            const user = await Users.findOne({ where: { email: req.body.email } })

            //Se estiver retorna um json com uma mensagem
            if (user !== null) {
                //console.log(user);
                res.json({ mensagem: "Email já cadastrado" });

                // Se for um email novo cria um novo usuário   
            } else {
                //console.log(user)
                const senha = await bcrypt.hash(req.body.senha, 12)
                console.log(senha)
                await Users.create({
                    nome: req.body.nome,
                    email: req.body.email,
                    password: senha
                })
                //console.log('Usuário Criado');
                return res.json({ mensagem: "usuario criado" });
            }

        } catch (error) {
            res.send(error);
        }

    },

    async login(req, res) {
        try {
            //procura o usuário pelo email
            const user = await Users.findOne({ where: { email: req.body.email } })
            //console.log(user)
            console.log(user.dataValues.password)
            
            if (user != null) {

                // se o usuário estiver cadastrado, compara a senha do banco de dados com a senha enviada
                const senha = await bcrypt.compare(req.body.senha, user.dataValues.password, function(err,result){
                    if (result === true ){
                        res.send('Usuário permitido');

                    }else{
                        res.send('Senha Incorreta')
                        res.redirect('/');
                    }
                });
                console.log(senha)

                console.log(senha == user.dataValues.senha)

                res.json("Usuario Verificado")

            } else {
                res.json('Email inválido')
            }

            return res.send(users);

        } catch (error) {
            console.log('Verifique os dados')
            return res.sendStatus(401).json(error);
        }
    },

    async show(req, res) {
        try {

            const users = await Users.findAll();
            return res.send(users);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }

    },

    async update() {
        try {

            const users = await Users.update(req.body, { where: { id: req.params.id } });
            return res.send(users);

        } catch (error) {
            return res.sendStatus(401).json(error);
        }
    },

    async destroy(req, res) {
        try {

            const deleted = await Users.destroy({
                where: { id: req.params.id }
            });

            if (deleted) {

                return res.send(users);
            }
            throw new Error('Users não encontrado')

        } catch (error) {
            return res.sendStatus(401).send(error.message);
        }

    }
};