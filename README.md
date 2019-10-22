# Gerenciamento de Cursos e Alunos

Sistema para gerenciamento de alunos e cursos, usuários logados no sistema podem ver, adicionar, alterar e deletar Cursos e Alunos.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.



## Setup project

```sh
docker-compose -f "docker-compose.yml" up -d --build
```

### Run sequelize migrations

Explain what these tests test and why

```
docker exec -it backend-server /bin/sh -c "[ -e /bin/bash ] && /bin/bash || /bin/sh"

npx sequelize db:migrate
npx sequelize db:seed:all

```

## Built With
* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Nodejs](https://expressjs.com/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [JSON Web Tokens](https://jwt.io/) - JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
* [Passportjs](https://rometools.github.io/rome/) - Simple, unobtrusive authentication for Node.js.
* [Formik](https://jaredpalmer.com/formik/) -Build forms in React, without the tears.
* [Yup](https://github.com/jquense/yup) - Read, manipulate and write spreadsheet data and styles to XLSX and JSON.
* [Sequelize](https://sequelize.org/) - Sequelize is a promise-based Node.js ORM. It features solid transaction support, relations, eager and lazy loading, read replication and more.
* [bcrypts](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords. 
* [validator](https://www.mysql.com/) - TA library of string validators and sanitizers.
* [exceljs](https://www.npmjs.com/package/exceljs) - Read, manipulate and write spreadsheet data and styles to XLSX and JSON.


## Requesitos do Sistema
 
 O sistema tem os seguintes requisitos 
 
    [x]Inserir 3 cursos (código do curso, nome do curso, data de cadastro, carga horária) *Administração, Direito,
    Medicina;
    [x]Remover cursos;
    [x]Alterar cursos;
    [x]Inserir 7 alunos (código do aluno, nome do aluno, CPF, Endereço, CEP, E-mail, número de Telefone)  atrelando
    aos respectivos cursos na seguinte configuração: 2 aluno para Direito, 2 para Administração, 3 para Medicina;
    [x]Remover alunos;
    [x]Alterar alunos;
    [x]Listar os cursos e os alunos que fazem parte deste curso;
    [x]O sistema deve exportar a lista de cursos e alunos para planilha excel;
    [x]É desejável que o sistema também seja capaz de prevê erros de usuários no ato do cadastro das informações;
    [x]É desejável que o sistema possa imprimir os dados dos cursos;
    [x]É desejável que o sistema contenha um controle de segurança do acesso ao sistema;
    [x]É desejável que o sistema guarde log de acesso em arquivo txt;
    
## Authors

* **Felipe dos Santos Goiabeira** - *Initial work* - [Felipe Goiabeira](https://github.com/felipestgoiabeira)



