import React, { Component } from 'react';
import './style.css';
import api from '../../services/api';

const Alunos = props => (
  <tr>
    <td>{props.aluno.nome}</td>
    <td>{props.aluno.email}</td>
    <td>{props.aluno.cpf}</td>
    <td>{props.aluno.endereco}</td>
    <td>{props.aluno.cep}</td>
    <td>{props.aluno.telefone}</td>
  </tr>
);

export default class AlunosListar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curso: '',
      alunos: [],
    };
  }

  componentDidMount() {
    api
      .get('/listarAlunos/' + this.props.match.params.id)
      .then(response => {
        console.log(response);

        this.setState({
          curso: response.data.nome,
          alunos: response.data.alunos,
        });
      })
      .catch(function(error) {
        throw error;
      });
  }
  alunoList() {
    return this.state.alunos.map(function(alunoAtual, i) {
      return <Alunos aluno={alunoAtual} key={i} />;
    });
  }
  render() {
    return (
      <div className="tb">
        {console.log('curso', this.curso)}
        <h3>Alunos do Curso de {this.state.curso}</h3>
        <table className="table table-bordered" style={{ paddingTop: 20 }}>
          <thead className="thead-light">
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">CPF</th>
              <th scope="col">Endereço</th>
              <th scope="col">CEP</th>
              <th scope="col">Telefone</th>
            </tr>
          </thead>
          <tbody>{this.alunoList()}</tbody>
        </table>
      </div>
    );
  }
}
