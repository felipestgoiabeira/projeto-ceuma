import React, { Component } from 'react';
import './style.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const Alunos = props => (
  <tr>
    <td>{props.aluno.nome}</td>
    <td>{props.aluno.email}</td>
    <td>{props.aluno.cpf}</td>
    <td>{props.aluno.endereco}</td>
    <td>{props.aluno.cep}</td>
    <td>{props.aluno.telefone}</td>
    <td>
    <Link to={"/editarAluno/"+props.aluno.idAluno}>Alterar</Link>
    </td>
    <td>
      <a className="action" href={"/deletarAluno/" + props.aluno.idAluno}>Deletar</a>
    </td>
  </tr>
);

export default class AlunosListar extends Component {

  constructor(props) {
    super(props);
    this.state = { alunos: [] };
  }

  componentDidMount() {
    api.get('/alunos')
      .then(response => {
        console.log(response);
        this.setState({ alunos: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  alunoList() {
    return this.state.alunos.map(function (alunoAtual, i) {
      return <Alunos aluno={alunoAtual} key={i} />;
    });
  }
  render() {
    return (
    
    <div className="tb" >
      <h3>Tabela de Alunos</h3>
      <table className="table table-bordered" style={{ paddingTop: 20 }}>
        <thead className="thead-light">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Email</th>
            <th scope="col">CPF</th>
            <th scope="col">Endereço</th>
            <th scope="col">CEP</th>
            <th scope="col">Telefone</th>
            <th scope="col">Editar</th>
            <th scope="col">Deletar</th>

          </tr>
        </thead>
        <tbody>
          {this.alunoList()}
        </tbody>
      </table>
     
    </div>

    )
  }


} 