import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { EXCEL_ALUNOS } from '../../services/constants';
import { FormField, Form, GridColumn } from 'semantic-ui-react';

//select
const Cursos = props => {

  return (
    <option value={`${props.curso.nome}`}> {props.curso.nome}</option>
  );
}

//table
const Alunos = props => (

  <>
    <tr>
      <td>{props.aluno.nome}</td>
      <td>{props.aluno.email}</td>
      <td>{props.aluno.cpf}</td>
      <td>{props.aluno.endereco}</td>
      <td>{props.aluno.cep}</td>
      <td>{props.aluno.telefone}</td>
      <td>{props.aluno.curso.nome}</td>
      <td>
        <Link to={"/editarAluno/" + props.aluno.id}>Alterar</Link>
      </td>
      <td>
        <a className="action" href={"/deletarAluno/" + props.aluno.id}>Deletar</a>
      </td>
    </tr>

  </>
);

export default function AlunosListar() {

  //store the alunos to show on table
  const [alunos, setAlunos] = useState([]);

  //list of cursos to select input
  const [cursosList, setCursosList] = useState([])

  //store the value of select
  const [curso, setCurso] = useState("");
  
  //store the value of input text
  const [nome, setNome] = useState("")


  useEffect(() => {
    
    //alunos from api
    api.get('/alunos')

      .then(response => {
        console.log(response);
        setAlunos(response.data);

      })
      .catch(function (error) {
        console.log(error);

      })

    // get cursos from api
    api.get('/cursos')

      .then(response => {
        console.log(response);
        setCursosList(response.data);

      })
      .catch(function (error) {
        console.log(error);

      })
  }

  , [])

  //make the list of select
  function cursoLista() {

    if (cursosList) {

      return cursosList.map(function (cursoAtual, i) {

        return <Cursos curso={cursoAtual} key={i} />;

      });
    }
  }

  //filter on alunos
  function alunoList() {
    const alunosCurso = [...alunos].filter(aluno => {
      
      // case where user search a name and course 
      if (curso && nome) {
        return aluno.curso.nome === curso && aluno.nome.toLowerCase() === nome.toLowerCase()
      }

      //case where use only search for name
      if (nome) {
        return aluno.nome.toLowerCase().includes(nome.toLowerCase())
      }
      //case where user search only for course 
      if (curso) {
        return aluno.curso.nome === curso
      }

      return aluno;

    })

  // make the list of alunos to table
  return alunosCurso.map(function (alunoAtual, i) {
    return <Alunos aluno={alunoAtual} key={i} />;
  });


  }

  function onChangeCurso(event) {
    setCurso(event.target.value);
  }

  function onChangeNome(event) {
    setNome(event.target.value);
  }

  return (

    <div className="tb" >
      <div className="ui three column grid">
        <GridColumn>

          <h3 style={{ marginTop: 20 }}>Tabela de Alunos</h3>

        </GridColumn>
        <Form>
          <GridColumn>

            <FormField>
              <input
                style={{ marginLeft: 50, marginTop: 20 }}
                type="text"
                placeholder="Pesquisar por nome de aluno"
                onChange={onChangeNome}
              />
            </FormField>

          </GridColumn>
        </Form>

        <Form>
          <GridColumn>

            <FormField>

              <select style={{ marginLeft: 120, marginBottom: 40, marginTop: 20 }} name="curso" onChange={onChangeCurso} id="">

                <option value="">Selecione um Curso</option>
                <option value="">Todos os Cursos</option>
                {cursoLista()}

              </select>

            </FormField>

          </GridColumn>
        </Form>

      </div>
      <table className="table table-bordered" style={{ paddingTop: 20 }}>
        <thead className="thead-light">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
            <th scope="col">Endereço</th>
            <th scope="col">CEP</th>
            <th scope="col">Telefone</th>
            <th scope="col">Curso</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>

          </tr>
        </thead>
        <tbody>
          {alunoList()}
        </tbody>
      </table>
      <form action={EXCEL_ALUNOS}>
        <button className='ui green button' type="submit"  >Download Tabela Excel</button>
      </form>
      <br />
    </div>

  )
}


